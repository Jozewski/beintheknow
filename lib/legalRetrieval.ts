import type { TopicId } from "@/data/content-data";
import { getActiveEmbeddingModel } from "@/lib/embeddings";
import { LegalTextChunkModel } from "@/models/LegalTextChunk";

export type LegalRetrievalCitation = {
  chunkId: string;
  sourceType: string;
  sourceId: string;
  title?: string;
  citation?: string;
  sourceName?: string;
  sourceUrl?: string;
  currentAsOfLabel?: string;
  score?: number;
};

export type RetrievedLegalContext = LegalRetrievalCitation & {
  text: string;
};

type RetrieveLegalContextOptions = {
  embedding: number[];
  query: string;
  jurisdiction: "federal" | "state";
  stateCode?: string;
  limit?: number;
  includeDraft?: boolean;
};

type LegalChunkForRetrieval = {
  _id: unknown;
  sourceType: string;
  sourceId: string;
  jurisdiction: "federal" | "state";
  stateCode?: string;
  topicIds?: string[];
  citation?: string;
  title?: string;
  sourceUrl?: string;
  sourceName?: string;
  currentAsOfLabel?: string;
  chunkText: string;
  embedding?: number[];
  score?: number;
};

const topicKeywords: Record<TopicId, string[]> = {
  voting: ["vote", "voting", "ballot", "election", "felony conviction"],
  expungement: [
    "expunge",
    "expungement",
    "seal",
    "record clearance",
    "clean slate",
  ],
  housing: ["housing", "landlord", "tenant", "rent", "public housing"],
  employment: [
    "employment",
    "job",
    "hiring",
    "license",
    "occupational",
    "ban the box",
  ],
  police: [
    "police",
    "stop",
    "search",
    "arrest",
    "identify",
    "recording",
  ],
  supervision: [
    "probation",
    "parole",
    "supervision",
    "revocation",
    "conditions",
  ],
};

function getVectorSearchIndexName() {
  return process.env.VECTOR_SEARCH_INDEX ?? "legal_text_chunk_embedding";
}

function detectTopicIds(query: string): TopicId[] {
  const normalized = query.toLowerCase();

  return Object.entries(topicKeywords)
    .filter(([, keywords]) =>
      keywords.some((keyword) => normalized.includes(keyword)),
    )
    .map(([topicId]) => topicId as TopicId);
}

function cosineSimilarity(left: number[], right: number[]) {
  let dot = 0;
  let leftMagnitude = 0;
  let rightMagnitude = 0;

  const length = Math.min(left.length, right.length);
  for (let index = 0; index < length; index += 1) {
    const leftValue = left[index] ?? 0;
    const rightValue = right[index] ?? 0;
    dot += leftValue * rightValue;
    leftMagnitude += leftValue * leftValue;
    rightMagnitude += rightValue * rightValue;
  }

  if (leftMagnitude === 0 || rightMagnitude === 0) return 0;
  return dot / (Math.sqrt(leftMagnitude) * Math.sqrt(rightMagnitude));
}

function buildFilter({
  jurisdiction,
  stateCode,
  includeDraft,
  query,
}: Pick<
  RetrieveLegalContextOptions,
  "jurisdiction" | "stateCode" | "includeDraft" | "query"
>) {
  const topicIds = detectTopicIds(query);
  const filter: Record<string, unknown> = {
    jurisdiction,
    embedding: { $exists: true, $ne: [] },
    embeddingModel: getActiveEmbeddingModel(),
  };

  if (jurisdiction === "state" && stateCode) {
    filter.stateCode = stateCode;
  }

  if (topicIds.length > 0) {
    filter.topicIds = { $in: topicIds };
  }

  if (!includeDraft) {
    filter.reviewStatus = "approved";
  }

  return filter;
}

function toRetrievedContext(chunk: LegalChunkForRetrieval): RetrievedLegalContext {
  return {
    chunkId: String(chunk._id),
    sourceType: chunk.sourceType,
    sourceId: chunk.sourceId,
    title: chunk.title,
    citation: chunk.citation,
    sourceName: chunk.sourceName,
    sourceUrl: chunk.sourceUrl,
    currentAsOfLabel: chunk.currentAsOfLabel,
    score: chunk.score,
    text: chunk.chunkText,
  };
}

async function retrieveWithAtlasVectorSearch({
  embedding,
  query,
  jurisdiction,
  stateCode,
  limit,
  includeDraft,
}: Required<
  Pick<RetrieveLegalContextOptions, "embedding" | "query" | "jurisdiction" | "limit">
> &
  Pick<RetrieveLegalContextOptions, "stateCode" | "includeDraft">) {
  const filter = buildFilter({ jurisdiction, stateCode, includeDraft, query });
  delete filter.embedding;

  const rows = await LegalTextChunkModel.aggregate<LegalChunkForRetrieval>([
    {
      $vectorSearch: {
        index: getVectorSearchIndexName(),
        path: "embedding",
        queryVector: embedding,
        numCandidates: Math.max(limit * 20, 100),
        limit,
        filter,
      },
    },
    {
      $project: {
        sourceType: 1,
        sourceId: 1,
        jurisdiction: 1,
        stateCode: 1,
        topicIds: 1,
        citation: 1,
        title: 1,
        sourceUrl: 1,
        sourceName: 1,
        currentAsOfLabel: 1,
        chunkText: 1,
        score: { $meta: "vectorSearchScore" },
      },
    },
  ]);

  return rows.map(toRetrievedContext);
}

async function retrieveWithCosineFallback({
  embedding,
  query,
  jurisdiction,
  stateCode,
  limit,
  includeDraft,
}: Required<
  Pick<RetrieveLegalContextOptions, "embedding" | "query" | "jurisdiction" | "limit">
> &
  Pick<RetrieveLegalContextOptions, "stateCode" | "includeDraft">) {
  const filter = buildFilter({ jurisdiction, stateCode, includeDraft, query });
  const rows = await LegalTextChunkModel.find(filter)
    .sort({ embeddedAt: -1 })
    .limit(500)
    .select(
      "sourceType sourceId jurisdiction stateCode topicIds citation title sourceUrl sourceName currentAsOfLabel chunkText embedding",
    )
    .lean<LegalChunkForRetrieval[]>();

  return rows
    .map((row) => ({
      ...row,
      score: row.embedding
        ? cosineSimilarity(embedding, row.embedding)
        : 0,
    }))
    .sort((left, right) => (right.score ?? 0) - (left.score ?? 0))
    .slice(0, limit)
    .map(toRetrievedContext);
}

export async function retrieveLegalContext({
  embedding,
  query,
  jurisdiction,
  stateCode,
  limit = 6,
  includeDraft = process.env.NODE_ENV !== "production",
}: RetrieveLegalContextOptions) {
  if (embedding.length === 0) return [];

  try {
    const vectorResults = await retrieveWithAtlasVectorSearch({
      embedding,
      query,
      jurisdiction,
      stateCode,
      limit,
      includeDraft,
    });

    if (vectorResults.length > 0) {
      return vectorResults;
    }
  } catch {
    // Fall back below when the Atlas index is missing, still building, or
    // unavailable in local development.
  }

  return retrieveWithCosineFallback({
    embedding,
    query,
    jurisdiction,
    stateCode,
    limit,
    includeDraft,
  });
}
