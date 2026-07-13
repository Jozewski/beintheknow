import { embed, embedMany } from "ai";

import {
  GEMINI_EMBEDDING_MODEL,
  getGoogleProvider,
} from "@/lib/ai/google";
import { LegalTextChunkModel } from "@/models/LegalTextChunk";

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

/**
 * Output dimensionality for Gemini embeddings. 768 balances quality, Atlas
 * index size, and cost. Must match the Atlas Vector Search index dimensions.
 */
export function getGeminiEmbeddingDimensions() {
  const parsed = Number(process.env.GEMINI_EMBEDDING_DIMENSIONS ?? "768");
  return Number.isFinite(parsed) && parsed > 0 ? parsed : 768;
}

export function getActiveEmbeddingModel() {
  // Include dimensions in the stored model label so chunks embedded at
  // different dimensionalities are never mixed in the same search path.
  return `${GEMINI_EMBEDDING_MODEL}@${getGeminiEmbeddingDimensions()}`;
}

function getGeminiProviderOptions(taskType: "RETRIEVAL_DOCUMENT" | "RETRIEVAL_QUERY") {
  return {
    google: {
      outputDimensionality: getGeminiEmbeddingDimensions(),
      taskType,
    },
  };
}

async function embedManyTexts(values: string[]) {
  const google = getGoogleProvider();
  const result = await embedMany({
    model: google.embedding(GEMINI_EMBEDDING_MODEL),
    values,
    maxParallelCalls: 1,
    maxRetries: 2,
    providerOptions: getGeminiProviderOptions("RETRIEVAL_DOCUMENT"),
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
  const google = getGoogleProvider();
  const result = await embed({
    model: google.embedding(GEMINI_EMBEDDING_MODEL),
    value,
    maxRetries: 2,
    providerOptions: getGeminiProviderOptions("RETRIEVAL_QUERY"),
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

  const chunksQuery = LegalTextChunkModel.find(query as never)
    .sort({ updatedAt: 1 })
    .limit(Math.max(1, Math.min(limit, 100)))
    .select("_id chunkText");

  // Only apply a hint when we have one. Passing undefined to .hint() can
  // make the driver send an invalid hint option and fail the query. The
  // includeOtherModels path (used by the Gemini re-embed migration) has no
  // matching index, so it runs unhinted.
  if (indexHint) {
    chunksQuery.hint(indexHint);
  }

  const chunks = await chunksQuery.lean();

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
