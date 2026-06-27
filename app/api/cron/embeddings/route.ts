import { connectDB } from "@/lib/mongodb";
import { getActiveEmbeddingModel } from "@/lib/embeddings";
import { embedLegalTextChunks } from "@/lib/embeddings";
import { LegalTextChunkModel } from "@/models/LegalTextChunk";
import { LegalAuthorityCandidateModel } from "@/models/LegalAuthorityCandidate";
import { LegiScanBillTextModel } from "@/models/LegiScanBillText";
import { LegiScanSyncRunModel } from "@/models/LegiScanSyncRun";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

function getApiErrorStatus(error: unknown) {
  if (
    error &&
    typeof error === "object" &&
    "statusCode" in error &&
    typeof error.statusCode === "number"
  ) {
    return error.statusCode;
  }

  return undefined;
}

function getApiErrorRetryDelay(error: unknown) {
  if (!error || typeof error !== "object" || !("responseBody" in error)) {
    return undefined;
  }

  if (typeof error.responseBody !== "string") return undefined;

  try {
    const body = JSON.parse(error.responseBody) as {
      error?: {
        details?: Array<{
          "@type"?: string;
          retryDelay?: string;
        }>;
      };
    };

    return body.error?.details?.find((detail) => detail.retryDelay)?.retryDelay;
  } catch {
    return undefined;
  }
}

function isAuthorizedCronRequest(request: Request) {
  const userAgent = request.headers.get("user-agent") ?? "";
  const schedule = request.headers.get("x-vercel-cron-schedule");
  const cronSecret = process.env.CRON_SECRET;
  const authorization = request.headers.get("authorization");

  if (cronSecret && authorization === `Bearer ${cronSecret}`) {
    return true;
  }

  if (userAgent.includes("vercel-cron/1.0") && schedule) {
    return true;
  }

  return process.env.NODE_ENV !== "production";
}

function toReviewStatus(value: string | null) {
  if (
    value === "draft" ||
    value === "legal-review" ||
    value === "approved" ||
    value === "expired"
  ) {
    return value;
  }

  return undefined;
}

function toSourceType(value: string | null) {
  if (
    value === "legiscan-bill-text" ||
    value === "legal-authority" ||
    value === "legal-content"
  ) {
    return value;
  }

  return undefined;
}

async function getCollectionIndexes(
  collection: typeof LegalTextChunkModel.collection,
) {
  try {
    return await collection.indexes();
  } catch {
    return [];
  }
}

export async function GET(request: Request) {
  if (!isAuthorizedCronRequest(request)) {
    return Response.json({ error: "unauthorized" }, { status: 401 });
  }

  const url = new URL(request.url);
  const runMode = url.searchParams.get("run");
  const limit = Number(url.searchParams.get("limit") ?? "25");
  const sourceType = toSourceType(url.searchParams.get("sourceType"));
  const reviewStatus = toReviewStatus(url.searchParams.get("reviewStatus"));
  const stateCode = url.searchParams.get("state")?.toUpperCase();
  const topicId = url.searchParams.get("topic") ?? undefined;
  const force = url.searchParams.get("force") === "true";
  const includeOtherModels =
    url.searchParams.get("includeOtherModels") === "true";
  const audit =
    url.searchParams.get("audit") === "true" ||
    Boolean(request.headers.get("x-vercel-cron-schedule"));

  await connectDB();

  if (runMode === "indexes") {
    const [legalTextChunks, legiScanBillTexts, legalAuthorityCandidates] =
      await Promise.all([
        getCollectionIndexes(LegalTextChunkModel.collection),
        getCollectionIndexes(LegiScanBillTextModel.collection),
        getCollectionIndexes(LegalAuthorityCandidateModel.collection),
      ]);

    return Response.json({
      status: "succeeded",
      indexes: {
        legaltextchunks: legalTextChunks.map((index) => ({
          name: index.name,
          key: index.key,
        })),
        legiscanbilltexts: legiScanBillTexts.map((index) => ({
          name: index.name,
          key: index.key,
        })),
        legalauthoritycandidates: legalAuthorityCandidates.map((index) => ({
          name: index.name,
          key: index.key,
        })),
      },
    });
  }

  if (runMode === "ensure-indexes") {
    const results = await Promise.all([
      LegalTextChunkModel.collection.createIndex(
        {
          reviewStatus: 1,
          sourceType: 1,
          updatedAt: 1,
          embeddingModel: 1,
        },
        {
          name: "pa_legaltextchunks_review_source_updated_embedding",
          background: true,
        },
      ),
      LegalTextChunkModel.collection.createIndex(
        {
          reviewStatus: 1,
          sourceType: 1,
          stateCode: 1,
          topicIds: 1,
          updatedAt: 1,
          embeddingModel: 1,
        },
        {
          name: "pa_legaltextchunks_review_source_state_topic_updated_embedding",
          background: true,
        },
      ),
      LegalTextChunkModel.collection.createIndex(
        {
          sourceType: 1,
          reviewStatus: 1,
          embeddingModel: 1,
          updatedAt: 1,
        },
        {
          name: "embedding_worker_global",
          background: true,
        },
      ),
      LegalTextChunkModel.collection.createIndex(
        {
          sourceType: 1,
          reviewStatus: 1,
          stateCode: 1,
          topicIds: 1,
          embeddingModel: 1,
          updatedAt: 1,
        },
        {
          name: "embedding_worker_state_topic",
          background: true,
        },
      ),
      LegiScanBillTextModel.collection.createIndex(
        {
          textExtractionStatus: 1,
          docId: 1,
          normalizedText: 1,
          statuteCitationExtractionVersion: 1,
        },
        {
          name: "pa_billtexts_status_doc_normalized_citation_version",
          background: true,
        },
      ),
      LegiScanBillTextModel.collection.createIndex(
        {
          mime: 1,
          textExtractionStatus: 1,
          docId: 1,
        },
        {
          name: "pa_billtexts_mime_status_doc",
          background: true,
        },
      ),
      LegalAuthorityCandidateModel.collection.createIndex(
        {
          candidateType: 1,
          occurrenceCount: -1,
        },
        {
          name: "pa_candidates_type_occurrence",
          background: true,
        },
      ),
    ]);

    return Response.json({
      status: "succeeded",
      indexes: results,
    });
  }

  if (runMode === "stats") {
    const activeEmbeddingModel = getActiveEmbeddingModel();
    const baseFilter: Record<string, unknown> = {};
    const activeFilter: Record<string, unknown> = {
      embeddingModel: activeEmbeddingModel,
    };

    if (sourceType) {
      baseFilter.sourceType = sourceType;
      activeFilter.sourceType = sourceType;
    }

    if (reviewStatus) {
      baseFilter.reviewStatus = reviewStatus;
      activeFilter.reviewStatus = reviewStatus;
    }

    if (stateCode) {
      baseFilter.stateCode = stateCode;
      activeFilter.stateCode = stateCode;
    }

    if (topicId) {
      baseFilter.topicIds = topicId;
      activeFilter.topicIds = topicId;
    }

    const [totalMatching, activeEmbedded, sample] = await Promise.all([
      LegalTextChunkModel.countDocuments(baseFilter),
      LegalTextChunkModel.countDocuments(activeFilter),
      LegalTextChunkModel.findOne(activeFilter)
        .select("stateCode topicIds reviewStatus embeddingModel embedding chunkText")
        .lean(),
    ]);

    return Response.json({
      status: "succeeded",
      activeEmbeddingModel,
      filters: { sourceType, reviewStatus, stateCode, topicId },
      counts: {
        totalMatching,
        activeEmbedded,
      },
      sample: sample
        ? {
            stateCode: sample.stateCode,
            topicIds: sample.topicIds,
            reviewStatus: sample.reviewStatus,
            embeddingModel: sample.embeddingModel,
            embeddingDimensions: sample.embedding?.length ?? 0,
            textPreview: sample.chunkText?.slice(0, 240),
          }
        : null,
    });
  }

  const syncRun = audit
    ? await LegiScanSyncRunModel.create({
        trigger: request.headers.get("x-vercel-cron-schedule")
          ? "cron"
          : "manual",
        status: "running",
        schedule: request.headers.get("x-vercel-cron-schedule"),
        plannedSearchQueryCount: 0,
        plannedSearchQueries: [],
      })
    : undefined;

  try {
    const result = await embedLegalTextChunks({
      limit,
      sourceType,
      reviewStatus,
      stateCode,
      topicId,
      force,
      includeOtherModels,
    });

    if (syncRun) {
      await LegiScanSyncRunModel.updateOne(
        { _id: syncRun._id },
        {
          $set: {
            status: "succeeded",
            finishedAt: new Date(),
            counts: {
              searchQueries: 0,
              billFetches: result.scannedChunks,
              billTextFetches: 0,
              newBills: result.embeddedChunks,
              changedBills: 0,
              unchangedBills: result.skippedChunks,
              relevantBills: 0,
              irrelevantBills: 0,
            },
          },
        },
      );
    }

    return Response.json({
      status: "succeeded",
      syncRunId: syncRun?._id.toString(),
      counts: result,
    });
  } catch (error) {
    const statusCode = getApiErrorStatus(error);
    const retryDelay = getApiErrorRetryDelay(error);
    const message =
      error instanceof Error ? error.message : "Unknown embedding job error.";

    if (syncRun) {
      await LegiScanSyncRunModel.updateOne(
        { _id: syncRun._id },
        {
          $set: {
            status: "failed",
            finishedAt: new Date(),
            error: message,
          },
        },
      );
    }

    if (statusCode === 429) {
      return Response.json(
        {
          status: "rate_limited",
          syncRunId: syncRun?._id.toString(),
          error: message,
          retryDelay,
          suggestion:
            "Gemini embedding quota was hit. Wait for the retry delay, then use a smaller limit such as 1 or 5.",
        },
        { status: 429 },
      );
    }

    throw error;
  }
}
