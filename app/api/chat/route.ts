import { randomUUID } from "node:crypto";

import { generateText } from "ai";
import mongoose from "mongoose";
import { z } from "zod";

import {
  GEMINI_CHAT_MODEL,
  getGoogleProvider,
} from "@/lib/ai/google";
import { embedText } from "@/lib/embeddings";
import { retrieveLegalContext } from "@/lib/legalRetrieval";
import type { LegalRetrievalCitation } from "@/lib/legalRetrieval";
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

function buildContextBlock(
  retrievedContext: Awaited<ReturnType<typeof retrieveLegalContext>>,
) {
  if (retrievedContext.length === 0) return "";

  return retrievedContext
    .map((item, index) => {
      const sourceLabel =
        item.citation ?? item.title ?? item.sourceName ?? item.sourceId;

      return [
        `[${index + 1}] ${sourceLabel}`,
        item.sourceUrl ? `URL: ${item.sourceUrl}` : undefined,
        item.currentAsOfLabel
          ? `Current as of: ${item.currentAsOfLabel}`
          : undefined,
        item.text,
      ]
        .filter(Boolean)
        .join("\n");
    })
    .join("\n\n");
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

  const queryEmbedding = await embedText(message);
  const retrievedContext = await retrieveLegalContext({
    embedding: queryEmbedding,
    query: message,
    jurisdiction,
    stateCode,
    limit: 6,
  });

  const citations = retrievedContext.map(
    (contextItem) => {
      const { text, ...citation } = contextItem;
      void text;
      return citation;
    },
  );
  const confidence = getConfidence(citations.length);

  let content: string;

  if (retrievedContext.length === 0) {
    content =
      "I do not have enough reviewed source text in the database to answer that accurately yet. JO should only answer from verified, cited legal sources. Try again after we embed and review the relevant state or federal source material.";
  } else {
    const googleProvider = getGoogleProvider();
    const contextBlock = buildContextBlock(retrievedContext);
    const draftNotice =
      process.env.NODE_ENV === "production"
        ? ""
        : "The retrieved source chunks may include internal draft corpus data. Say when source material still needs legal review.";

    const result = await generateText({
      model: googleProvider(GEMINI_CHAT_MODEL),
      instructions: [
        "You are JO, a plain-English legal rights education assistant.",
        "You provide educational information only, not legal advice.",
        "Answer only from the provided source context. Do not invent statutes, citations, deadlines, agencies, or eligibility rules.",
        "If the source context is incomplete, say what is missing and suggest verifying with legal aid or the cited official source.",
        "Keep answers concise, practical, and calm. Use plain English.",
        "Cite sources inline using bracket numbers like [1] and [2].",
        draftNotice,
      ]
        .filter(Boolean)
        .join("\n"),
      prompt: [
        `Jurisdiction: ${jurisdiction}`,
        stateCode ? `State: ${stateCode}` : undefined,
        `Question: ${message}`,
        "Source context:",
        contextBlock,
      ]
        .filter(Boolean)
        .join("\n\n"),
      temperature: 0.2,
      maxOutputTokens: 700,
    });

    content = result.text.trim();
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
