import { createHash, randomUUID } from "node:crypto";

import * as Sentry from "@sentry/nextjs";
import { generateText, smoothStream, streamText } from "ai";
import mongoose from "mongoose";
import { z } from "zod";

import {
  ensureCompleteAnswer,
  isBrokenGeneratedAnswer,
} from "@/lib/answerRepair";
import { getAuthenticatedUser, type AuthenticatedUser } from "@/lib/auth";

import {
  GEMINI_CHAT_MODEL,
  getGoogleProvider,
} from "@/lib/ai/google";
import {
  buildGenerationFailureResponse,
  buildJoPrompt,
  buildNoAuthorityResponse,
  buildSourceBasedFallbackResponse,
} from "@/lib/chatPrompt";
import type { LegalRetrievalCitation } from "@/lib/legalRetrieval";
import { retrieveLegalAuthority } from "@/lib/mcp/legalAuthorityTools";
import { connectDB } from "@/lib/mongodb";
import { ChatMessageModel } from "@/models/ChatMessage";
import { ChatSessionModel } from "@/models/ChatSession";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

const chatRequestSchema = z.object({
  message: z.string().trim().min(1).max(2000),
  sessionId: z.string().optional(),
  guestToken: z.string().optional(),
  jurisdiction: z.enum(["federal", "state"]).default("federal"),
  stateCode: z.string().trim().toUpperCase().optional(),
  // stream=false forces the classic single-JSON response (used by scripts).
  stream: z.boolean().default(true),
});

type ChatResponseBody = {
  sessionId: string;
  guestToken: string;
  quota: {
    limit: number;
    remaining: number;
  };
  message: {
    role: "assistant";
    content: string;
    citations: LegalRetrievalCitation[];
    confidence: "high" | "medium" | "low";
  };
};

function getGuestDailyLimit() {
  const parsed = Number(process.env.GUEST_DAILY_LIMIT ?? "5");
  return Number.isFinite(parsed) && parsed > 0 ? Math.floor(parsed) : 5;
}

function getRegisteredDailyLimit() {
  const parsed = Number(process.env.REGISTERED_DAILY_LIMIT ?? "25");
  return Number.isFinite(parsed) && parsed > 0 ? Math.floor(parsed) : 25;
}

function getClientIpHash(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded?.split(",")[0]?.trim();
  if (!ip) return undefined;

  // Peppered hash: never store raw IPs.
  const pepper = process.env.JWT_SECRET ?? "beintheknow";
  return createHash("sha256").update(`${ip}:${pepper}`).digest("hex");
}

/**
 * Counts guest questions asked today (UTC) across every session tied to
 * this guest token OR this IP hash. Using both means clearing the token
 * does not reset the limit, and shared IPs still work via their own token.
 */
async function countQuestionsToday({
  guestToken,
  ipHash,
  userId,
}: {
  guestToken?: string;
  ipHash?: string;
  userId?: string;
}) {
  const sessionFilters: Record<string, unknown>[] = [];
  // Registered users are counted by account only - their limit follows
  // them across devices and is not shared with other people on their IP.
  if (userId) {
    sessionFilters.push({ userId });
  } else {
    if (guestToken) sessionFilters.push({ guestToken });
    if (ipHash) sessionFilters.push({ ipHash });
  }
  if (sessionFilters.length === 0) return 0;

  const sessions = await ChatSessionModel.find({ $or: sessionFilters })
    .select("_id")
    .lean();

  if (sessions.length === 0) return 0;

  const dayStart = new Date();
  dayStart.setUTCHours(0, 0, 0, 0);

  return ChatMessageModel.countDocuments({
    sessionId: { $in: sessions.map((session) => session._id) },
    role: "user",
    createdAt: { $gte: dayStart },
  });
}

function getConfidence(citationCount: number): "high" | "medium" | "low" {
  if (citationCount >= 3) return "high";
  if (citationCount >= 1) return "medium";
  return "low";
}

async function findOrCreateSession({
  sessionId,
  guestToken,
  jurisdiction,
  stateCode,
  ipHash,
  authUser,
}: z.infer<typeof chatRequestSchema> & {
  ipHash?: string;
  authUser?: AuthenticatedUser | null;
}) {
  if (sessionId && mongoose.Types.ObjectId.isValid(sessionId)) {
    const existingSession = await ChatSessionModel.findById(sessionId);

    // Only reuse a session when the caller proves ownership: either the
    // signed-in account owns it, or the caller presents the same guest
    // token. Otherwise a guessed/leaked sessionId would let a caller
    // append to (and read back into) someone else's conversation.
    const ownsByAccount =
      authUser &&
      existingSession?.userId &&
      String(existingSession.userId) === authUser.userId;
    const ownsByGuestToken =
      existingSession?.guestToken &&
      existingSession.guestToken === guestToken;

    if (existingSession && (ownsByAccount || ownsByGuestToken)) {
      // Attach a signed-in user to their previously-guest session.
      if (authUser && !existingSession.userId) {
        existingSession.userId = new mongoose.Types.ObjectId(authUser.userId);
        await existingSession.save();
      }
      return existingSession;
    }
  }

  return ChatSessionModel.create({
    userId: authUser ? new mongoose.Types.ObjectId(authUser.userId) : undefined,
    guestToken: guestToken ?? randomUUID(),
    ipHash,
    jurisdiction,
    stateCode: jurisdiction === "state" ? stateCode : undefined,
  });
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json(
      { error: "invalid_request", message: "Request body must be valid JSON." },
      { status: 400 },
    );
  }

  const parsed = chatRequestSchema.safeParse(body);

  if (!parsed.success) {
    return Response.json(
      { error: "invalid_request", issues: parsed.error.issues },
      { status: 400 },
    );
  }

  const startedAt = Date.now();
  const { message, jurisdiction, stateCode, guestToken: requestGuestToken } =
    parsed.data;

  if (jurisdiction === "state" && !stateCode) {
    return Response.json(
      { error: "stateCode is required for state questions." },
      { status: 400 },
    );
  }

  try {
    await connectDB();
  } catch (error) {
    Sentry.captureException(error, { tags: { component: "chat", stage: "db-connect" } });
    console.error("JO chat: database connection failed", error);
    return Response.json(
      { error: "JO cannot reach the source database right now. Please try again in a moment." },
      { status: 503 },
    );
  }

  // Daily quota - enforced BEFORE any storage or model spend. Signed-in
  // users get a higher per-account limit; guests are limited per token/IP.
  // Internal test traffic (e.g., the chat smoke test) can bypass the quota
  // by presenting the CRON_SECRET - never possible for outside callers.
  const cronSecret = process.env.CRON_SECRET;
  const isInternalTest = Boolean(
    cronSecret &&
      request.headers.get("authorization") === `Bearer ${cronSecret}`,
  );
  const authUser = getAuthenticatedUser(request);
  const limit = authUser ? getRegisteredDailyLimit() : getGuestDailyLimit();
  const ipHash = getClientIpHash(request);
  const questionsToday = isInternalTest
    ? 0
    : await countQuestionsToday({
        guestToken: parsed.data.guestToken,
        ipHash,
        userId: authUser?.userId,
      });

  if (questionsToday >= limit) {
    return Response.json(
      {
        error: authUser
          ? `You have used all ${limit} questions for today. Please come back tomorrow, or contact legal aid if your question is urgent.`
          : `You have used all ${limit} free questions for today. Please come back tomorrow, create a free account for a higher daily limit, or contact legal aid if your question is urgent.`,
        quota: { limit, remaining: 0 },
      },
      { status: 429 },
    );
  }

  const session = await findOrCreateSession({ ...parsed.data, ipHash, authUser });

  await ChatMessageModel.create({
    sessionId: session._id,
    role: "user",
    content: message,
    citations: [],
    confidence: "high",
    flagged: false,
  });

  const remaining = Math.max(0, limit - questionsToday - 1);

  let retrievedContext: Awaited<
    ReturnType<typeof retrieveLegalAuthority>
  >["context"];
  try {
    const legalAuthorityResult = await retrieveLegalAuthority({
      question: message,
      jurisdiction,
      stateCode,
      limit: 6,
    });
    retrievedContext = legalAuthorityResult.context;
  } catch (error) {
    // Embedding provider or vector search failure. Do not pretend the corpus
    // is empty (buildNoAuthorityResponse) - tell the user retrieval is down.
    Sentry.captureException(error, { tags: { component: "chat", stage: "retrieval" } });
    console.error("JO chat: legal source retrieval failed", error);
    return Response.json(
      { error: "JO could not search the legal source database right now. Please try again in a moment." },
      { status: 503 },
    );
  }

  const citations = retrievedContext.map(
    (contextItem) => {
      const { text, ...citation } = contextItem;
      void text;
      return citation;
    },
  );
  let confidence = getConfidence(citations.length);

  async function persistAssistantMessage(content: string) {
    await ChatMessageModel.create({
      sessionId: session._id,
      role: "assistant",
      content,
      citations,
      confidence,
      flagged: false,
      responseTimeMs: Date.now() - startedAt,
    });
  }

  function buildJsonResponse(content: string) {
    return Response.json({
      sessionId: session._id.toString(),
      guestToken: session.guestToken ?? requestGuestToken ?? "",
      quota: { limit, remaining },
      message: {
        role: "assistant",
        content,
        citations,
        confidence,
      },
    } satisfies ChatResponseBody);
  }

  // Repairs and guardrails applied to the fully generated text.
  function finalizeGeneratedContent(rawText: string) {
    const repaired = ensureCompleteAnswer(rawText);
    if (isBrokenGeneratedAnswer(repaired)) {
      return buildSourceBasedFallbackResponse({
        question: message,
        jurisdiction,
        stateCode,
        retrievedContext,
      });
    }
    return repaired;
  }

  function buildErrorFallbackContent() {
    if (retrievedContext.length > 0) {
      return buildSourceBasedFallbackResponse({
        question: message,
        jurisdiction,
        stateCode,
        retrievedContext,
      });
    }
    confidence = "low";
    return buildGenerationFailureResponse();
  }

  // No approved sources: fixed response, no model call, no streaming needed.
  if (retrievedContext.length === 0) {
    const content = buildNoAuthorityResponse();
    await persistAssistantMessage(content);
    return buildJsonResponse(content);
  }

  const googleProvider = getGoogleProvider();
  const model = googleProvider(GEMINI_CHAT_MODEL);
  const { instructions, prompt } = buildJoPrompt({
    question: message,
    jurisdiction,
    stateCode,
    retrievedContext,
  });

  // Classic single-JSON path (scripts, tests, clients that opt out).
  if (!parsed.data.stream) {
    let content: string;
    try {
      const result = await generateText({
        model,
        instructions,
        prompt,
        temperature: 0.4,
        maxOutputTokens: 1500,
        // Skip Gemini's internal "thinking" phase: the legal context is
        // already retrieved, and thinking adds seconds of dead air.
        providerOptions: {
          google: { thinkingConfig: { thinkingBudget: 0 } },
        },
      });
      content = finalizeGeneratedContent(result.text);
    } catch (error) {
      Sentry.captureException(error, { tags: { component: "chat", stage: "generation" } });
      console.error("JO chat generation failed", error);
      content = buildErrorFallbackContent();
    }

    await persistAssistantMessage(content);
    return buildJsonResponse(content);
  }

  // Streaming path: newline-delimited JSON events.
  //   {type:"meta", ...}   -> session/quota/citations, sent first
  //   {type:"text", value} -> incremental answer text
  //   {type:"final", content} -> full replacement text if repairs changed it
  //   {type:"done"}        -> stream complete
  const encoder = new TextEncoder();
  const responseMeta = {
    type: "meta" as const,
    sessionId: session._id.toString(),
    guestToken: session.guestToken ?? requestGuestToken ?? "",
    quota: { limit, remaining },
    citations,
    confidence,
  };

  const stream = new ReadableStream({
    async start(controller) {
      const send = (event: Record<string, unknown>) =>
        controller.enqueue(encoder.encode(`${JSON.stringify(event)}\n`));

      send(responseMeta);

      let rawText = "";
      try {
        const result = streamText({
          model,
          instructions,
          prompt,
          temperature: 0.4,
          maxOutputTokens: 1500,
          // Skip Gemini's internal "thinking" phase so the first words
          // arrive quickly instead of after seconds of silence.
          providerOptions: {
            google: { thinkingConfig: { thinkingBudget: 0 } },
          },
          // Deliver the stream in small word-level chunks so the answer
          // types out naturally instead of arriving in large blocks.
          experimental_transform: smoothStream({ delayInMs: 15 }),
        });

        for await (const chunk of result.textStream) {
          rawText += chunk;
          send({ type: "text", value: chunk });
        }

        const content = finalizeGeneratedContent(rawText);
        if (content !== rawText) {
          send({ type: "final", content });
        }
        await persistAssistantMessage(content);
      } catch (error) {
        Sentry.captureException(error, { tags: { component: "chat", stage: "generation" } });
        console.error("JO chat generation failed", error);
        const content = buildErrorFallbackContent();
        send({ type: "final", content });
        try {
          await persistAssistantMessage(content);
        } catch (persistError) {
          console.error("JO chat: failed to persist fallback message", persistError);
        }
      }

      send({ type: "done" });
      controller.close();
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "application/x-ndjson; charset=utf-8",
      "Cache-Control": "no-cache, no-transform",
    },
  });
}
