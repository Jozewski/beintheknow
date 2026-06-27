import { embed, embedMany } from "ai";

import {
  GEMINI_EMBEDDING_MODEL,
  getGoogleProvider,
} from "@/lib/ai/google";
import { LegalTextChunkModel } from "@/models/LegalTextChunk";

type EmbeddingProvider = "gemini" | "local";
type EmbeddingIndexHint = Record<string, 1 | -1>;

export type EmbedLegalTextChunksOptions = {
  limit?: number;
  sourceType?: "legiscan-bill-text" | "legal-authority" | "legal-content";
  reviewStatus?: "draft" | "legal-review" | "approved" | "expired";
  stateCode?: string;
  topicId?: string;
  force?: boolean;
  includeOtherModels?: boolean;
};

export type EmbedLegalTextChunksResult = {
  scannedChunks: number;
  embeddedChunks: number;
  skippedChunks: number;
  embeddingModel: string;
  indexHint?: string | EmbeddingIndexHint;
};

function getEmbeddingProvider(): EmbeddingProvider {
  return process.env.EMBEDDING_PROVIDER === "local" ? "local" : "gemini";
}

function getLocalEmbeddingUrl() {
  return process.env.LOCAL_EMBEDDING_URL ?? "http://127.0.0.1:5055";
}

export function getActiveEmbeddingModel() {
  if (getEmbeddingProvider() === "local") {
    return process.env.LOCAL_EMBEDDING_MODEL ?? "BAAI/bge-small-en-v1.5";
  }

  return GEMINI_EMBEDDING_MODEL;
}

async function embedWithLocalServer(values: string[]) {
  const response = await fetch(`${getLocalEmbeddingUrl()}/embed`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ texts: values }),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(
      `Local embedding server failed with ${response.status}: ${body}`,
    );
  }

  const payload = (await response.json()) as {
    model?: string;
    dimensions?: number;
    embeddings?: number[][];
  };

  if (!Array.isArray(payload.embeddings)) {
    throw new Error("Local embedding server did not return embeddings.");
  }

  return payload.embeddings;
}

async function embedManyTexts(values: string[]) {
  if (getEmbeddingProvider() === "local") {
    return embedWithLocalServer(values);
  }

  const google = getGoogleProvider();
  const result = await embedMany({
    model: google.embedding(GEMINI_EMBEDDING_MODEL),
    values,
    maxParallelCalls: 1,
    maxRetries: 2,
  });

  return result.embeddings;
}

function getEmbeddingWorkerHint({
  sourceType,
  reviewStatus,
  stateCode,
  topicId,
  force,
  includeOtherModels,
}: Pick<
  EmbedLegalTextChunksOptions,
  | "sourceType"
  | "reviewStatus"
  | "stateCode"
  | "topicId"
  | "force"
  | "includeOtherModels"
>): EmbeddingIndexHint | undefined {
  if (force || includeOtherModels || !sourceType || !reviewStatus) {
    return undefined;
  }

  if (stateCode || topicId) {
    return {
      sourceType: 1,
      reviewStatus: 1,
      stateCode: 1,
      topicIds: 1,
      embeddingModel: 1,
      updatedAt: 1,
    } satisfies EmbeddingIndexHint;
  }

  return {
    sourceType: 1,
    reviewStatus: 1,
    embeddingModel: 1,
    updatedAt: 1,
  } satisfies EmbeddingIndexHint;
}

export async function embedText(value: string) {
  if (getEmbeddingProvider() === "local") {
    const [embedding] = await embedWithLocalServer([value]);
    return embedding ?? [];
  }

  const google = getGoogleProvider();
  const result = await embed({
    model: google.embedding(GEMINI_EMBEDDING_MODEL),
    value,
    maxRetries: 2,
  });

  return result.embedding;
}

export async function embedLegalTextChunks({
  limit = 25,
  sourceType,
  reviewStatus,
  stateCode,
  topicId,
  force = false,
  includeOtherModels = false,
}: EmbedLegalTextChunksOptions = {}): Promise<EmbedLegalTextChunksResult> {
  const query: Record<string, unknown> = {};
  const activeEmbeddingModel = getActiveEmbeddingModel();
  const indexHint = getEmbeddingWorkerHint({
    sourceType,
    reviewStatus,
    stateCode,
    topicId,
    force,
    includeOtherModels,
  });

  if (sourceType) query.sourceType = sourceType;
  if (reviewStatus) query.reviewStatus = reviewStatus;
  if (stateCode) query.stateCode = stateCode.toUpperCase();
  if (topicId) query.topicIds = topicId;

  if (!force) {
    if (includeOtherModels) {
      query.embeddingModel = { $ne: activeEmbeddingModel };
    } else {
      query.embeddingModel = null;
    }
  }

  const chunks = await LegalTextChunkModel.find(query as never)
    .sort({ updatedAt: 1 })
    .hint(indexHint)
    .limit(Math.max(1, Math.min(limit, 100)))
    .select("_id chunkText")
    .lean();

  if (chunks.length === 0) {
    return {
      scannedChunks: 0,
      embeddedChunks: 0,
      skippedChunks: 0,
      embeddingModel: activeEmbeddingModel,
      indexHint,
    };
  }

  const embeddings = await embedManyTexts(chunks.map((chunk) => chunk.chunkText));
  const embeddedAt = new Date();
  const operations = chunks.flatMap((chunk, index) => {
    const embedding = embeddings[index];
    if (!embedding?.length) return [];

    return [
      {
        updateOne: {
          filter: { _id: chunk._id },
          update: {
            $set: {
              embedding,
              embeddingModel: activeEmbeddingModel,
              embeddedAt,
            },
          },
        },
      },
    ];
  });

  if (operations.length > 0) {
    await LegalTextChunkModel.bulkWrite(operations, { ordered: false });
  }

  const embeddedChunks = operations.length;

  return {
    scannedChunks: chunks.length,
    embeddedChunks,
    skippedChunks: chunks.length - embeddedChunks,
    embeddingModel: activeEmbeddingModel,
    indexHint,
  };
}
