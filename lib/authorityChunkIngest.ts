import { createHash } from "node:crypto";

import { chunkText } from "@/lib/chunkText";
import { normalizeLegalText } from "@/lib/text";
import { LegalAuthorityCandidateModel } from "@/models/LegalAuthorityCandidate";
import { LegalAuthorityModel } from "@/models/LegalAuthority";
import { LegalTextChunkModel } from "@/models/LegalTextChunk";

type ChunkAuthorityOptions = {
  offset?: number;
  limit?: number;
  force?: boolean;
  reviewStatus?: "draft" | "legal-review" | "approved" | "expired";
  stateCode?: string;
  topicId?: string;
};

type ChunkCuratedSummaryOptions = {
  offset?: number;
  limit?: number;
  force?: boolean;
  sourceName?: string;
};

export type AuthorityChunkIngestResult = {
  scannedSources: number;
  skippedSources: number;
  chunkedSources: number;
  chunksWritten: number;
};

type LegalAuthorityLean = {
  _id: unknown;
  sourceId: string;
  jurisdiction: "federal" | "state";
  stateCode?: string;
  topicIds?: string[];
  citation?: string;
  title: string;
  officialUrl: string;
  sourceName?: string;
  sourceRole?: string;
  normalizedText: string;
  reviewStatus: "draft" | "legal-review" | "approved" | "expired";
  currentAsOf?: Date;
  currentAsOfLabel?: string;
  sourceHash?: string;
};

type CandidateSnippetLean = {
  text?: string;
};

type LegalAuthorityCandidateLean = {
  _id: unknown;
  jurisdiction: "federal" | "state";
  stateCode?: string;
  topicId: string;
  sourceId: string;
  sourceName: string;
  sourceUrl: string;
  citation?: string;
  titleHint?: string;
  snippets?: CandidateSnippetLean[];
  notes?: string;
  currentAsOf?: Date;
  currentAsOfLabel?: string;
  sourceFetchedAt?: Date;
};

function hashText(value: string) {
  return createHash("sha256").update(value).digest("hex");
}

function getCuratedSourceRole(sourceName: string) {
  const normalized = sourceName.toLowerCase();
  if (
    normalized.includes("restoration of rights") ||
    normalized.includes("clean slate") ||
    normalized.includes("niccc")
  ) {
    return "primary-curated-index" as const;
  }

  return "cross-check" as const;
}

function buildCandidateText(candidate: LegalAuthorityCandidateLean) {
  return normalizeLegalText(
    [
      candidate.titleHint,
      candidate.citation ? `Citation: ${candidate.citation}` : undefined,
      candidate.currentAsOfLabel
        ? `Current as of: ${candidate.currentAsOfLabel}`
        : undefined,
      candidate.notes,
      ...(candidate.snippets?.map((snippet) => snippet.text) ?? []),
    ]
      .filter(Boolean)
      .join("\n\n"),
  );
}

export async function chunkLegalAuthorities({
  offset = 0,
  limit = 100,
  force = false,
  reviewStatus,
  stateCode,
  topicId,
}: ChunkAuthorityOptions = {}): Promise<AuthorityChunkIngestResult> {
  const query: {
    normalizedText: { $ne: string };
    reviewStatus?: string;
    stateCode?: string;
    topicIds?: string;
  } = {
    normalizedText: { $ne: "" },
  };

  if (reviewStatus) query.reviewStatus = reviewStatus;
  if (stateCode) query.stateCode = stateCode.toUpperCase();
  if (topicId) query.topicIds = topicId;

  const authorities = await LegalAuthorityModel.find(query as never)
    .sort({ updatedAt: 1 })
    .skip(offset)
    .limit(limit)
    .select(
      "sourceId jurisdiction stateCode topicIds citation title officialUrl sourceName sourceRole normalizedText reviewStatus currentAsOf currentAsOfLabel sourceHash",
    )
    .lean<LegalAuthorityLean[]>()
    .exec();

  let skippedSources = 0;
  let chunkedSources = 0;
  let chunksWritten = 0;

  for (const authority of authorities) {
    const sourceId = `authority:${String(authority._id)}`;
    const sourceHash = authority.sourceHash ?? hashText(authority.normalizedText);
    const existingChunk = await LegalTextChunkModel.findOne({
      sourceType: "legal-authority",
      sourceId,
      sourceHash,
    })
      .select({ _id: 1 })
      .lean()
      .exec();

    if (existingChunk && !force) {
      skippedSources += 1;
      continue;
    }

    const chunks = chunkText(authority.normalizedText);

    await LegalTextChunkModel.deleteMany({
      sourceType: "legal-authority",
      sourceId,
    });

    if (chunks.length > 0) {
      await LegalTextChunkModel.insertMany(
        chunks.map((chunk) => ({
          sourceType: "legal-authority",
          sourceId,
          sourceHash,
          chunkIndex: chunk.chunkIndex,
          jurisdiction: authority.jurisdiction,
          stateCode: authority.stateCode,
          topicIds: authority.topicIds ?? [],
          citation: authority.citation,
          title: authority.title,
          sourceUrl: authority.officialUrl,
          sourceName: authority.sourceName,
          sourceRole: authority.sourceRole,
          currentAsOf: authority.currentAsOf,
          currentAsOfLabel: authority.currentAsOfLabel,
          chunkText: chunk.chunkText,
          tokenEstimate: chunk.tokenEstimate,
          reviewStatus: authority.reviewStatus,
        })),
      );
    }

    chunkedSources += 1;
    chunksWritten += chunks.length;
  }

  return {
    scannedSources: authorities.length,
    skippedSources,
    chunkedSources,
    chunksWritten,
  };
}

export async function chunkCuratedSummaryCandidates({
  offset = 0,
  limit = 100,
  force = false,
  sourceName,
}: ChunkCuratedSummaryOptions = {}): Promise<AuthorityChunkIngestResult> {
  const query: {
    candidateType: "curated-summary";
    status: { $ne: "rejected" };
    sourceName?: RegExp;
  } = {
    candidateType: "curated-summary",
    status: { $ne: "rejected" },
  };

  if (sourceName) {
    query.sourceName = new RegExp(sourceName, "i");
  }

  const candidates = await LegalAuthorityCandidateModel.find(query)
    .sort({ updatedAt: 1 })
    .skip(offset)
    .limit(limit)
    .select(
      "jurisdiction stateCode topicId sourceId sourceName sourceUrl citation titleHint snippets notes currentAsOf currentAsOfLabel sourceFetchedAt",
    )
    .lean<LegalAuthorityCandidateLean[]>()
    .exec();

  let skippedSources = 0;
  let chunkedSources = 0;
  let chunksWritten = 0;

  for (const candidate of candidates) {
    const text = buildCandidateText(candidate);
    if (!text) {
      skippedSources += 1;
      continue;
    }

    const sourceId = `candidate:${String(candidate._id)}`;
    const sourceHash = hashText(text);
    const existingChunk = await LegalTextChunkModel.findOne({
      sourceType: "legal-content",
      sourceId,
      sourceHash,
    })
      .select({ _id: 1 })
      .lean()
      .exec();

    if (existingChunk && !force) {
      skippedSources += 1;
      continue;
    }

    const chunks = chunkText(text);

    await LegalTextChunkModel.deleteMany({
      sourceType: "legal-content",
      sourceId,
    });

    if (chunks.length > 0) {
      await LegalTextChunkModel.insertMany(
        chunks.map((chunk) => ({
          sourceType: "legal-content",
          sourceId,
          sourceHash,
          chunkIndex: chunk.chunkIndex,
          jurisdiction: candidate.jurisdiction,
          stateCode: candidate.stateCode,
          topicIds: [candidate.topicId],
          citation: candidate.citation,
          title: candidate.titleHint,
          sourceUrl: candidate.sourceUrl,
          sourceName: candidate.sourceName,
          sourceRole: getCuratedSourceRole(candidate.sourceName),
          currentAsOf: candidate.currentAsOf ?? candidate.sourceFetchedAt,
          currentAsOfLabel: candidate.currentAsOfLabel,
          chunkText: chunk.chunkText,
          tokenEstimate: chunk.tokenEstimate,
          reviewStatus: "legal-review",
        })),
      );
    }

    chunkedSources += 1;
    chunksWritten += chunks.length;
  }

  return {
    scannedSources: candidates.length,
    skippedSources,
    chunkedSources,
    chunksWritten,
  };
}
