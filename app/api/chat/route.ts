import { createHash, randomUUID } from "node:crypto";

import * as Sentry from "@sentry/nextjs";
import { generateText } from "ai";
import mongoose from "mongoose";
import { z } from "zod";

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
}: {
  guestToken?: string;
  ipHash?: string;
}) {
  const sessionFilters: Record<string, unknown>[] = [];
  if (guestToken) sessionFilters.push({ guestToken });
  if (ipHash) sessionFilters.push({ ipHash });
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

function ensureCompleteAnswer(value: string) {
  const trimmed = value.trim().replace(/\[(\d+(?:,\s*\d+)*)$/, "[$1]");
  if (!trimmed) return trimmed;
  // An answer ending in a citation bracket like "[1]" or "[1, 2]" is
  // complete - do not bolt a canned closing sentence onto it.
  if (/[.!?)\]"']$/.test(trimmed)) return trimmed;

  const lastCompleteSentenceEnd = Math.max(
    trimmed.lastIndexOf("."),
    trimmed.lastIndexOf("!"),
    trimmed.lastIndexOf("?"),
  );
  const trailingFragment =
    lastCompleteSentenceEnd >= 0
      ? trimmed.slice(lastCompleteSentenceEnd + 1).trim()
      : "";

  if (
    lastCompleteSentenceEnd >= 0 &&
    trailingFragment.split(/\s+/).filter(Boolean).length <= 8
  ) {
    return `${trimmed.slice(0, lastCompleteSentenceEnd + 1)} Check the cited source or ask legal aid before you rely on this.`;
  }

  return `${trimmed}. Check the cited source or ask legal aid before you rely on this.`;
}

function isBrokenGeneratedAnswer(value: string) {
  const normalized = value.trim().replace(/\s+/g, " ");

  return (
    /\b(if|when|because|unless|that|and|or|but|to)\.\s*$/i.test(normalized) ||
    /\b(if|when|because|unless|that|and|or|but|to)\.\s*Check the cited source/i.test(
      normalized,
    )
  );
}

async function findOrCreateSession({
  sessionId,
  guestToken,
  jurisdiction,
  stateCode,
  ipHash,
}: z.infer<typeof chatRequestSchema> & { ipHash?: string }) {
  if (sessionId && mongoose.Types.ObjectId.isValid(sessionId)) {
    const existingSession = await ChatSessionModel.findById(sessionId);

    // Only reuse a session when the caller proves ownership with the same
    // guest token. Otherwise a guessed/leaked sessionId would let a caller
    // append to (and read back into) someone else's conversation.
    if (
      existingSession &&
      existingSession.guestToken &&
      existingSession.guestToken === guestToken
    ) {
      return existingSession;
    }
  }

  return ChatSessionModel.create({
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
  const { message, jurisdiction, stateCode } = parsed.data;

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

  // Guest daily quota - enforced BEFORE any storage or model spend.
  // Internal test traffic (e.g., the chat smoke test) can bypass the quota
  // by presenting the CRON_SECRET - never possible for outside callers.
  const cronSecret = process.env.CRON_SECRET;
  const isInternalTest = Boolean(
    cronSecret &&
      request.headers.get("authorization") === `Bearer ${cronSecret}`,
  );
  const limit = getGuestDailyLimit();
  const ipHash = getClientIpHash(request);
  const questionsToday = isInternalTest
    ? 0
    : await countQuestionsToday({
        guestToken: parsed.data.guestToken,
        ipHash,
      });

  if (questionsToday >= limit) {
    return Response.json(
      {
        error: `You have used all ${limit} free questions for today. Please come back tomorrow, or contact legal aid if your question is urgent.`,
        quota: { limit, remaining: 0 },
      },
      { status: 429 },
    );
  }

  const session = await findOrCreateSession({ ...parsed.data, ipHash });

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

  let content: string;

  if (retrievedContext.length === 0) {
    content = buildNoAuthorityResponse();
  } else {
    const googleProvider = getGoogleProvider();
    const { instructions, prompt } = buildJoPrompt({
      question: message,
      jurisdiction,
      stateCode,
      retrievedContext,
    });

    try {
      const result = await generateText({
        model: googleProvider(GEMINI_CHAT_MODEL),
        instructions,
        prompt,
        temperature: 0.4,
        maxOutputTokens: 1500,
      });

      content = ensureCompleteAnswer(result.text);

      if (isBrokenGeneratedAnswer(content)) {
        content = buildSourceBasedFallbackResponse({
          question: message,
          jurisdiction,
          stateCode,
          retrievedContext,
        });
      }
    } catch (error) {
      Sentry.captureException(error, { tags: { component: "chat", stage: "generation" } });
      console.error("JO chat generation failed", error);
      if (retrievedContext.length > 0) {
        confidence = getConfidence(citations.length);
        content = buildSourceBasedFallbackResponse({
          question: message,
          jurisdiction,
          stateCode,
          retrievedContext,
        });
      } else {
        confidence = "low";
        content = buildGenerationFailureResponse();
      }
    }
  }

  await ChatMessageModel.create({
    sessionId: session._id,
    role: "assistant",
    content,
    citations,
    confidence,
    flagged: false,
    responseTimeMs: Date.now() - startedAt,
  });

  return Response.json({
    sessionId: session._id.toString(),
    guestToken: session.guestToken ?? parsed.data.guestToken ?? "",
    quota: { limit, remaining },
    message: {
      role: "assistant",
      content,
      citations,
      confidence,
    },
  } satisfies ChatResponseBody);
}
