import { randomUUID } from "node:crypto";

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
  message: {
    role: "assistant";
    content: string;
    citations: LegalRetrievalCitation[];
    confidence: "high" | "medium" | "low";
  };
};

function getConfidence(citationCount: number): "high" | "medium" | "low" {
  if (citationCount >= 3) return "high";
  if (citationCount >= 1) return "medium";
  return "low";
}

function ensureCompleteAnswer(value: string) {
  const trimmed = value.trim().replace(/\[(\d+(?:,\s*\d+)*)$/, "[$1]");
  if (!trimmed) return trimmed;
  if (/[.!?)]$/.test(trimmed)) return trimmed;

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

async function findOrCreateSession({
  sessionId,
  guestToken,
  jurisdiction,
  stateCode,
}: z.infer<typeof chatRequestSchema>) {
  if (sessionId && mongoose.Types.ObjectId.isValid(sessionId)) {
    const existingSession = await ChatSessionModel.findById(sessionId);
    if (existingSession) return existingSession;
  }

  return ChatSessionModel.create({
    guestToken: guestToken ?? randomUUID(),
    jurisdiction,
    stateCode: jurisdiction === "state" ? stateCode : undefined,
  });
}

export async function POST(request: Request) {
  const parsed = chatRequestSchema.safeParse(await request.json());

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

  await connectDB();

  const session = await findOrCreateSession(parsed.data);

  await ChatMessageModel.create({
    sessionId: session._id,
    role: "user",
    content: message,
    citations: [],
    confidence: "high",
    flagged: false,
  });

  const legalAuthorityResult = await retrieveLegalAuthority({
    question: message,
    jurisdiction,
    stateCode,
    limit: 6,
  });
  const retrievedContext = legalAuthorityResult.context;

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
        temperature: 0.2,
        maxOutputTokens: 700,
      });

      content = ensureCompleteAnswer(result.text);
    } catch (error) {
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
    message: {
      role: "assistant",
      content,
      citations,
      confidence,
    },
  } satisfies ChatResponseBody);
}
