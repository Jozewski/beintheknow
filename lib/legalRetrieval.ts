import { Types } from "mongoose";

import type { TopicId } from "@/data/content-data";
import { getActiveEmbeddingModel } from "@/lib/embeddings";
import { LegalContentModel } from "@/models/LegalContent";
import { LegalTextChunkModel } from "@/models/LegalTextChunk";

export type ResourceLink = {
  label: string;
  url: string;
};

export type LegalRetrievalCitation = {
  chunkId: string;
  sourceType: string;
  sourceId: string;
  reviewStatus?: string;
  title?: string;
  citation?: string;
  sourceName?: string;
  sourceUrl?: string;
  currentAsOfLabel?: string;
  score?: number;
  resources?: ResourceLink[];
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
  sourceType?: string;
  reviewStatuses?: string[];
};

type LegalChunkForRetrieval = {
  _id: unknown;
  sourceType: string;
  sourceId: string;
  reviewStatus?: string;
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
  voting: [
    "vote",
    "voter",
    "voting",
    "ballot",
    "election",
    "polls",
    "registration",
    "felon",
    "felony conviction",
    "rights restored",
    "civil rights",
  ],
  expungement: [
    "expunge",
    "expungement",
    "seal",
    "sealed",
    "sealing",
    "criminal record",
    "my record",
    "a record",
    "record clearance",
    "clean slate",
    "background check",
    "dismissed charge",
    "nondisclosure",
  ],
  housing: [
    "housing",
    "landlord",
    "tenant",
    "rent",
    "rental",
    "lease",
    "eviction",
    "apartment",
    "public housing",
    "section 8",
    "voucher",
  ],
  employment: [
    "employment",
    "work",
    "job",
    "jobs",
    "hiring",
    "license",
    "licensing",
    "professional license",
    "occupational",
    "ban the box",
    "employer",
    "career",
  ],
  police: [
    "police",
    "cop",
    "officer",
    "stop",
    "traffic stop",
    "pulled over",
    "search",
    "arrest",
    "identify",
    "id",
    "recording",
    "record police",
    "film police",
    "questioning",
  ],
  supervision: [
    "probation",
    "probation officer",
    "parole",
    "parole officer",
    "supervision",
    "supervised release",
    "revocation",
    "revoke",
    "revoked",
    "violate",
    "violation",
    "conditions",
    "travel permit",
  ],
};

function getVectorSearchIndexName() {
  return process.env.VECTOR_SEARCH_INDEX ?? "legal_text_chunk_embedding";
}

export function detectLegalTopicIds(query: string): TopicId[] {
  const normalized = query.toLowerCase();
  const normalizedWords = normalized
    .replace(/[^a-z0-9\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  return Object.entries(topicKeywords)
    .filter(([, keywords]) =>
      keywords.some((keyword) => {
        if (keyword.includes(" ")) return normalized.includes(keyword);

        return new RegExp(`\\b${keyword}\\b`).test(normalizedWords);
      }),
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
  sourceType,
  reviewStatuses,
}: Pick<
  RetrieveLegalContextOptions,
  | "jurisdiction"
  | "stateCode"
  | "includeDraft"
  | "query"
  | "sourceType"
  | "reviewStatuses"
>) {
  const topicIds = detectLegalTopicIds(query);
  const filter: Record<string, unknown> = {
    jurisdiction,
    embedding: { $exists: true, $ne: [] },
    embeddingModel: getActiveEmbeddingModel(),
  };

  if (jurisdiction === "state" && stateCode) {
    filter.stateCode = stateCode;
  }

  if (sourceType) {
    filter.sourceType = sourceType;
  }

  if (topicIds.length > 0) {
    filter.topicIds = { $in: topicIds };
  }

  if (reviewStatuses && reviewStatuses.length > 0) {
    filter.reviewStatus = { $in: reviewStatuses };
  } else if (!includeDraft) {
    filter.reviewStatus = "approved";
  }

  return filter;
}

function toRetrievedContext(chunk: LegalChunkForRetrieval): RetrievedLegalContext {
  return {
    chunkId: String(chunk._id),
    sourceType: chunk.sourceType,
    sourceId: chunk.sourceId,
    reviewStatus: chunk.reviewStatus,
    title: chunk.title,
    citation: chunk.citation,
    sourceName: chunk.sourceName,
    sourceUrl: chunk.sourceUrl,
    currentAsOfLabel: chunk.currentAsOfLabel,
    score: chunk.score,
    text: chunk.chunkText,
  };
}

/**
 * Enriches legal-content chunks with their resources from the source LegalContent records.
 * This allows the chat to surface helpful resource links alongside curated summaries.
 */
async function enrichWithResources(
  contexts: RetrievedLegalContext[]
): Promise<RetrievedLegalContext[]> {
  // Identify legal-content chunks that need resource enrichment.
  // Only chunks whose sourceId is a real LegalContent ObjectId qualify -
  // curated-summary chunks use "candidate:<id>" sourceIds that reference
  // LegalAuthorityCandidate records instead, and passing those to an _id
  // query throws a CastError that would fail the whole retrieval.
  const legalContentSourceIds = contexts
    .filter(ctx => ctx.sourceType === "legal-content")
    .map(ctx => ctx.sourceId)
    .filter(sourceId => Types.ObjectId.isValid(sourceId));

  if (legalContentSourceIds.length === 0) {
    return contexts;
  }

  // Fetch resources from LegalContent records in bulk
  const legalContents = await LegalContentModel.find(
    { _id: { $in: legalContentSourceIds } },
    { _id: 1, resources: 1 }
  ).lean();

  // Create a map of sourceId -> resources
  const resourcesMap = new Map<string, ResourceLink[]>(
    legalContents.map(content => [
      String(content._id),
      content.resources ?? [],
    ])
  );

  // Enrich contexts with resources
  return contexts.map(ctx => {
    if (ctx.sourceType === "legal-content") {
      const resources = resourcesMap.get(ctx.sourceId);
      return { ...ctx, resources };
    }
    return ctx;
  });
}

async function retrieveWithAtlasVectorSearch({
  embedding,
  query,
  jurisdiction,
  stateCode,
  limit,
  includeDraft,
  sourceType,
  reviewStatuses,
}: Required<
  Pick<RetrieveLegalContextOptions, "embedding" | "query" | "jurisdiction" | "limit">
> &
  Pick<
    RetrieveLegalContextOptions,
    "stateCode" | "includeDraft" | "sourceType" | "reviewStatuses"
  >) {
  const filter = buildFilter({
    jurisdiction,
    stateCode,
    includeDraft,
    query,
    sourceType,
    reviewStatuses,
  });
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
        reviewStatus: 1,
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

  const contexts = rows.map(toRetrievedContext);
  return enrichWithResources(contexts);
}

async function retrieveWithCosineFallback({
  embedding,
  query,
  jurisdiction,
  stateCode,
  limit,
  includeDraft,
  sourceType,
  reviewStatuses,
}: Required<
  Pick<RetrieveLegalContextOptions, "embedding" | "query" | "jurisdiction" | "limit">
> &
  Pick<
    RetrieveLegalContextOptions,
    "stateCode" | "includeDraft" | "sourceType" | "reviewStatuses"
  >) {
  const filter = buildFilter({
    jurisdiction,
    stateCode,
    includeDraft,
    query,
    sourceType,
    reviewStatuses,
  });
  const rows = await LegalTextChunkModel.find(filter)
    .sort({ embeddedAt: -1 })
    .limit(500)
    .select(
      "sourceType sourceId reviewStatus jurisdiction stateCode topicIds citation title sourceUrl sourceName currentAsOfLabel chunkText embedding",
    )
    .lean<LegalChunkForRetrieval[]>();

  const contexts = rows
    .map((row) => ({
      ...row,
      // Normalize raw cosine (-1..1) to the Atlas $vectorSearch scale
      // (0..1) so score thresholds behave identically on both paths.
      score: row.embedding
        ? (1 + cosineSimilarity(embedding, row.embedding)) / 2
        : 0,
    }))
    .sort((left, right) => (right.score ?? 0) - (left.score ?? 0))
    .slice(0, limit)
    .map(toRetrievedContext);

  return enrichWithResources(contexts);
}

export async function retrieveLegalContext({
  embedding,
  query,
  jurisdiction,
  stateCode,
  limit = 6,
  includeDraft = process.env.NODE_ENV !== "production",
  sourceType,
  reviewStatuses,
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
      sourceType,
      reviewStatuses,
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
    sourceType,
    reviewStatuses,
  });
}
