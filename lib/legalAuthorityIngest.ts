import { createHash } from "node:crypto";

import {
  legalAuthorityRecords,
  type LegalAuthorityRecord,
} from "@/data/legal-authority-records";
import { topicOrder, type TopicId } from "@/data/content-data";
import { normalizeLegalText } from "@/lib/text";
import { LegalAuthorityCandidateModel } from "@/models/LegalAuthorityCandidate";
import { LegalAuthorityModel } from "@/models/LegalAuthority";
import { LegalTextChunkModel } from "@/models/LegalTextChunk";

export type LegalAuthorityIngestOptions = {
  limit?: number;
  offset?: number;
  stateCode?: string;
  topicId?: string;
  force?: boolean;
};

export type LegalAuthorityIngestResult = {
  scannedRecords: number;
  skippedRecords: number;
  upsertedAuthorities: number;
};

export type LegalAuthorityStatsResult = {
  authorities: {
    total: number;
    byReviewStatus: Array<{ reviewStatus: string; count: number }>;
    bySourceRole: Array<{ sourceRole: string; count: number }>;
  };
  candidates: {
    verified: number;
    needsReview: number;
    needsAdapter: number;
  };
};

export type LegalAuthorityCandidateQueueOptions = {
  limit?: number;
  offset?: number;
  stateCode?: string;
  topicId?: string;
  candidateType?: string;
  sourceName?: string;
};

export type LegalAuthorityCandidateQueueResult = {
  scannedCandidates: number;
  candidates: Array<{
    id: string;
    candidateType: string;
    jurisdiction: string;
    stateCode?: string;
    topicId: string;
    sourceName: string;
    sourceUrl: string;
    citation?: string;
    titleHint?: string;
    occurrenceCount: number;
    currentAsOfLabel?: string;
    status: string;
    notes?: string;
    snippetPreview?: string;
  }>;
};

export type StateAuthorityCoverageOptions = {
  stateCode: string;
};

export type StateAuthorityCoverageResult = {
  stateCode: string;
  topics: Array<{
    topicId: TopicId;
    authorityRecords: number;
    authorityChunks: number;
    embeddedAuthorityChunks: number;
    curatedCandidates: number;
    statuteCitationCandidates: number;
    officialTargetsNeedingAdapter: number;
    status: "missing-authority" | "needs-embedding" | "authority-started";
  }>;
};

function hashText(value: string) {
  return createHash("sha256").update(value).digest("hex");
}

function parseOptionalDate(value?: string) {
  if (!value) return undefined;

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    throw new Error(`Invalid authority date: ${value}`);
  }

  return date;
}

function validateAuthorityRecord(record: LegalAuthorityRecord) {
  const missingFields = [
    ["id", record.id],
    ["citation", record.citation],
    ["title", record.title],
    ["officialUrl", record.officialUrl],
    ["sourceName", record.sourceName],
    ["text", record.text],
    ["currentAsOf", record.currentAsOf],
  ].filter(([, value]) => !value);

  if (missingFields.length > 0) {
    throw new Error(
      `Authority record ${record.id || "(missing id)"} is missing: ${missingFields
        .map(([field]) => field)
        .join(", ")}`,
    );
  }

  if (record.jurisdiction === "state" && !record.stateCode) {
    throw new Error(`State authority record ${record.id} is missing stateCode.`);
  }

  if (record.topicIds.length === 0) {
    throw new Error(`Authority record ${record.id} must include topicIds.`);
  }
}

function filterRecords(
  records: LegalAuthorityRecord[],
  { stateCode, topicId, offset = 0, limit = 100 }: LegalAuthorityIngestOptions,
) {
  const normalizedStateCode = stateCode?.toUpperCase();

  return records
    .filter((record) =>
      normalizedStateCode ? record.stateCode === normalizedStateCode : true,
    )
    .filter((record) => (topicId ? record.topicIds.includes(topicId as never) : true))
    .slice(offset, offset + limit);
}

export async function ingestLegalAuthorityRecords(
  options: LegalAuthorityIngestOptions = {},
): Promise<LegalAuthorityIngestResult> {
  const records = filterRecords(legalAuthorityRecords, options);
  let skippedRecords = 0;
  let upsertedAuthorities = 0;

  for (const record of records) {
    validateAuthorityRecord(record);

    const normalizedText = normalizeLegalText(record.text);
    if (!normalizedText) {
      skippedRecords += 1;
      continue;
    }

    const sourceHash = hashText(normalizedText);
    const existingAuthority = await LegalAuthorityModel.findOne({
      sourceId: record.id,
      sourceHash,
    })
      .select({ _id: 1 })
      .lean()
      .exec();

    if (existingAuthority && !options.force) {
      skippedRecords += 1;
      continue;
    }

    await LegalAuthorityModel.updateOne(
      { sourceId: record.id },
      {
        $set: {
          sourceId: record.id,
          authorityType: record.authorityType,
          jurisdiction: record.jurisdiction,
          stateCode: record.stateCode,
          topicIds: record.topicIds,
          citation: record.citation,
          title: record.title,
          officialUrl: record.officialUrl,
          sourceName: record.sourceName,
          sourceRole: "primary-official-law",
          text: record.text,
          normalizedText,
          effectiveDate: parseOptionalDate(record.effectiveDate),
          sourceBillIds: record.sourceBillIds ?? [],
          reviewStatus: record.reviewStatus,
          sourceFetchedAt: new Date(),
          currentAsOf: parseOptionalDate(record.currentAsOf),
          currentAsOfLabel:
            record.currentAsOfLabel ?? `Current as of ${record.currentAsOf}`,
          sourceHash,
        },
      },
      { upsert: true },
    );

    upsertedAuthorities += 1;
  }

  return {
    scannedRecords: records.length,
    skippedRecords,
    upsertedAuthorities,
  };
}

export async function getLegalAuthorityStats(): Promise<LegalAuthorityStatsResult> {
  const [
    total,
    byReviewStatus,
    bySourceRole,
    verified,
    needsReview,
    needsAdapter,
  ] = await Promise.all([
    LegalAuthorityModel.countDocuments(),
    LegalAuthorityModel.aggregate<{ _id: string; count: number }>([
      { $group: { _id: "$reviewStatus", count: { $sum: 1 } } },
      { $sort: { _id: 1 } },
    ]),
    LegalAuthorityModel.aggregate<{ _id: string; count: number }>([
      { $group: { _id: "$sourceRole", count: { $sum: 1 } } },
      { $sort: { _id: 1 } },
    ]),
    LegalAuthorityCandidateModel.countDocuments({ status: "verified" }),
    LegalAuthorityCandidateModel.countDocuments({ status: "needs-review" }),
    LegalAuthorityCandidateModel.countDocuments({ status: "needs-adapter" }),
  ]);

  return {
    authorities: {
      total,
      byReviewStatus: byReviewStatus.map((entry) => ({
        reviewStatus: entry._id,
        count: entry.count,
      })),
      bySourceRole: bySourceRole.map((entry) => ({
        sourceRole: entry._id,
        count: entry.count,
      })),
    },
    candidates: {
      verified,
      needsReview,
      needsAdapter,
    },
  };
}

export async function getLegalAuthorityCandidateQueue({
  limit = 25,
  offset = 0,
  stateCode,
  topicId,
  candidateType,
  sourceName,
}: LegalAuthorityCandidateQueueOptions = {}): Promise<LegalAuthorityCandidateQueueResult> {
  const query: {
    status: "needs-review";
    stateCode?: string;
    topicId?: string;
    candidateType?: string;
    sourceName?: RegExp;
    citation?: { $exists: true; $ne: string };
  } = {
    status: "needs-review",
    citation: { $exists: true, $ne: "" },
  };

  if (stateCode) query.stateCode = stateCode.toUpperCase();
  if (topicId) query.topicId = topicId;
  if (candidateType) query.candidateType = candidateType;
  if (sourceName) query.sourceName = new RegExp(sourceName, "i");

  const candidates = await LegalAuthorityCandidateModel.find(query as never)
    .sort({ occurrenceCount: -1, updatedAt: -1 })
    .skip(offset)
    .limit(limit)
    .select(
      "candidateType jurisdiction stateCode topicId sourceName sourceUrl citation titleHint occurrenceCount currentAsOfLabel status notes snippets",
    )
    .lean<
      Array<{
        _id: unknown;
        candidateType: string;
        jurisdiction: string;
        stateCode?: string;
        topicId: string;
        sourceName: string;
        sourceUrl: string;
        citation?: string;
        titleHint?: string;
        occurrenceCount?: number;
        currentAsOfLabel?: string;
        status: string;
        notes?: string;
        snippets?: Array<{ text?: string }>;
      }>
    >()
    .exec();

  return {
    scannedCandidates: candidates.length,
    candidates: candidates.map((candidate) => ({
      id: String(candidate._id),
      candidateType: candidate.candidateType,
      jurisdiction: candidate.jurisdiction,
      stateCode: candidate.stateCode,
      topicId: candidate.topicId,
      sourceName: candidate.sourceName,
      sourceUrl: candidate.sourceUrl,
      citation: candidate.citation,
      titleHint: candidate.titleHint,
      occurrenceCount: candidate.occurrenceCount ?? 0,
      currentAsOfLabel: candidate.currentAsOfLabel,
      status: candidate.status,
      notes: candidate.notes,
      snippetPreview: candidate.snippets?.[0]?.text?.slice(0, 360),
    })),
  };
}

export async function getStateAuthorityCoverage({
  stateCode,
}: StateAuthorityCoverageOptions): Promise<StateAuthorityCoverageResult> {
  const normalizedStateCode = stateCode.toUpperCase();

  const [
    authorityRows,
    authorityChunkRows,
    embeddedAuthorityChunkRows,
    curatedCandidateRows,
    statuteCitationRows,
    officialTargetRows,
  ] = await Promise.all([
    LegalAuthorityModel.aggregate<{ _id: TopicId; count: number }>([
      { $match: { stateCode: normalizedStateCode } },
      { $unwind: "$topicIds" },
      { $group: { _id: "$topicIds", count: { $sum: 1 } } },
    ]),
    LegalTextChunkModel.aggregate<{ _id: TopicId; count: number }>([
      {
        $match: {
          sourceType: "legal-authority",
          stateCode: normalizedStateCode,
        },
      },
      { $unwind: "$topicIds" },
      { $group: { _id: "$topicIds", count: { $sum: 1 } } },
    ]),
    LegalTextChunkModel.aggregate<{ _id: TopicId; count: number }>([
      {
        $match: {
          sourceType: "legal-authority",
          stateCode: normalizedStateCode,
          embedding: { $exists: true, $ne: [] },
        },
      },
      { $unwind: "$topicIds" },
      { $group: { _id: "$topicIds", count: { $sum: 1 } } },
    ]),
    LegalAuthorityCandidateModel.aggregate<{ _id: TopicId; count: number }>([
      {
        $match: {
          stateCode: normalizedStateCode,
          candidateType: "curated-summary",
          status: { $ne: "rejected" },
        },
      },
      { $group: { _id: "$topicId", count: { $sum: 1 } } },
    ]),
    LegalAuthorityCandidateModel.aggregate<{ _id: TopicId; count: number }>([
      {
        $match: {
          stateCode: normalizedStateCode,
          candidateType: "statute-citation",
          status: { $ne: "rejected" },
        },
      },
      { $group: { _id: "$topicId", count: { $sum: 1 } } },
    ]),
    LegalAuthorityCandidateModel.aggregate<{ _id: TopicId; count: number }>([
      {
        $match: {
          stateCode: normalizedStateCode,
          candidateType: {
            $in: ["official-search-target", "manual-curation-target"],
          },
          status: "needs-adapter",
        },
      },
      { $group: { _id: "$topicId", count: { $sum: 1 } } },
    ]),
  ]);

  const authorityByTopic = new Map(
    authorityRows.map((row) => [row._id, row.count]),
  );
  const chunksByTopic = new Map(
    authorityChunkRows.map((row) => [row._id, row.count]),
  );
  const embeddedChunksByTopic = new Map(
    embeddedAuthorityChunkRows.map((row) => [row._id, row.count]),
  );
  const curatedByTopic = new Map(
    curatedCandidateRows.map((row) => [row._id, row.count]),
  );
  const statuteCitationByTopic = new Map(
    statuteCitationRows.map((row) => [row._id, row.count]),
  );
  const officialTargetsByTopic = new Map(
    officialTargetRows.map((row) => [row._id, row.count]),
  );

  return {
    stateCode: normalizedStateCode,
    topics: topicOrder.map((topicId) => {
      const authorityRecords = authorityByTopic.get(topicId) ?? 0;
      const authorityChunks = chunksByTopic.get(topicId) ?? 0;
      const embeddedAuthorityChunks = embeddedChunksByTopic.get(topicId) ?? 0;

      return {
        topicId,
        authorityRecords,
        authorityChunks,
        embeddedAuthorityChunks,
        curatedCandidates: curatedByTopic.get(topicId) ?? 0,
        statuteCitationCandidates: statuteCitationByTopic.get(topicId) ?? 0,
        officialTargetsNeedingAdapter: officialTargetsByTopic.get(topicId) ?? 0,
        status:
          authorityRecords === 0
            ? "missing-authority"
            : embeddedAuthorityChunks < authorityChunks
              ? "needs-embedding"
              : "authority-started",
      };
    }),
  };
}
