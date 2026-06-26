import type { TopicId } from "@/data/content-data";
import { ingestCleanSlateExpungementProfiles } from "@/lib/cleanSlateExpungementIngest";
import { connectDB } from "@/lib/mongodb";
import { ingestNicccConsequences, ingestNicccExport } from "@/lib/nicccIngest";
import { ingestRrpExpungementProfiles } from "@/lib/rrpExpungementIngest";
import { ingestRrpVotingChart } from "@/lib/rrpVotingIngest";
import {
  extractStatuteCitationCandidates,
  seedCuratedSourceTargets,
  seedManualCurationTargets,
  seedOfficialStatuteTargets,
} from "@/lib/statuteCandidateDiscovery";
import { LegiScanSyncRunModel } from "@/models/LegiScanSyncRun";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

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

function toTopicId(value: string | null): TopicId | undefined {
  if (
    value === "voting" ||
    value === "expungement" ||
    value === "housing" ||
    value === "employment" ||
    value === "police" ||
    value === "supervision"
  ) {
    return value;
  }

  return undefined;
}

async function runStatuteCandidateJob({
  runMode,
  topicId,
  stateCode,
  offset,
  limit,
  force,
  maxPagesPerState,
}: {
  runMode: string;
  topicId?: TopicId;
  stateCode?: string;
  offset: number;
  limit: number;
  force: boolean;
  maxPagesPerState: number;
}) {
  if (runMode === "seed-targets") {
    return seedOfficialStatuteTargets(topicId);
  }

  if (runMode === "seed-curated-sources") {
    return seedCuratedSourceTargets(topicId);
  }

  if (runMode === "seed-manual-targets") {
    return seedManualCurationTargets(topicId);
  }

  if (runMode === "ingest-rrp-voting") {
    return ingestRrpVotingChart();
  }

  if (runMode === "ingest-rrp-expungement") {
    return ingestRrpExpungementProfiles({ stateCode, offset, limit });
  }

  if (runMode === "ingest-clean-slate-expungement") {
    return ingestCleanSlateExpungementProfiles({ stateCode, offset, limit });
  }

  if (
    runMode === "ingest-niccc" &&
    (topicId === "housing" || topicId === "employment")
  ) {
    return ingestNicccConsequences({
      topic: topicId,
      stateCode,
      offset,
      limit,
      maxPagesPerState,
    });
  }

  if (
    runMode === "ingest-niccc-export" &&
    (topicId === "housing" || topicId === "employment")
  ) {
    return ingestNicccExport({ topic: topicId, stateCode, offset, limit });
  }

  return extractStatuteCitationCandidates({
    stateCode,
    topicId,
    offset,
    limit,
    force,
  });
}

function buildSyncCounts(result: Awaited<ReturnType<typeof runStatuteCandidateJob>>) {
  return {
    searchQueries:
      "scannedTargets" in result
        ? result.scannedTargets
        : "parsedEntries" in result
          ? result.parsedEntries
          : "scannedProfiles" in result
            ? result.scannedProfiles
            : "scannedStates" in result
              ? result.scannedStates
              : 0,
    billFetches:
      "scannedTexts" in result
        ? result.scannedTexts
        : "detailsFetched" in result
          ? result.detailsFetched
          : 0,
    billTextFetches: 0,
    newBills:
      "upsertedTargets" in result
        ? result.upsertedTargets
        : "upsertedCandidates" in result
          ? result.upsertedCandidates
          : result.candidatesUpserted,
    changedBills:
      "textsWithCitations" in result ? result.textsWithCitations : 0,
    unchangedBills:
      "skippedEntries" in result
        ? result.skippedEntries
        : "skippedProfiles" in result
          ? result.skippedProfiles
          : "skippedResults" in result
            ? result.skippedResults
            : 0,
    relevantBills:
      "citationsFound" in result
        ? result.citationsFound
        : "resultsFound" in result
          ? result.resultsFound
          : "rowsFound" in result
            ? result.rowsFound
          : 0,
    irrelevantBills:
      "failedResults" in result
        ? result.failedResults
        : "failedRows" in result
          ? result.failedRows
          : 0,
  };
}

export async function GET(request: Request) {
  if (!isAuthorizedCronRequest(request)) {
    return Response.json({ error: "unauthorized" }, { status: 401 });
  }

  const url = new URL(request.url);
  const runMode = url.searchParams.get("run");
  const topicId = toTopicId(url.searchParams.get("topic"));
  const stateCode = url.searchParams.get("state")?.toUpperCase();
  const offset = Number(url.searchParams.get("offset") ?? "0");
  const limit = Number(
    url.searchParams.get("limit") ?? (runMode === "extract-sample" ? "10" : "100"),
  );
  const force = url.searchParams.get("force") === "true";
  const maxPagesPerState = Number(url.searchParams.get("maxPages") ?? "8");

  await connectDB();

  const syncRun = await LegiScanSyncRunModel.create({
    trigger: request.headers.get("x-vercel-cron-schedule") ? "cron" : "manual",
    status: runMode ? "running" : "planned",
    schedule: request.headers.get("x-vercel-cron-schedule"),
    plannedSearchQueryCount: 0,
    plannedSearchQueries: [],
  });

  if (!runMode) {
    return Response.json({
      status: "planned",
      syncRunId: syncRun._id.toString(),
      note: "Use ?run=seed-targets, ?run=seed-curated-sources, ?run=seed-manual-targets, ?run=ingest-rrp-voting, ?run=ingest-rrp-expungement, ?run=ingest-clean-slate-expungement, ?run=ingest-niccc&topic=housing, ?run=ingest-niccc-export&topic=employment, or ?run=extract-batch&limit=100 to gather state statute candidates.",
    });
  }

  try {
    const result = await runStatuteCandidateJob({
      runMode,
      topicId,
      stateCode,
      offset,
      limit,
      force,
      maxPagesPerState,
    });

    await LegiScanSyncRunModel.updateOne(
      { _id: syncRun._id },
      {
        $set: {
          status: "succeeded",
          finishedAt: new Date(),
          counts: buildSyncCounts(result),
        },
      },
    );

    return Response.json({
      status: "succeeded",
      syncRunId: syncRun._id.toString(),
      runMode,
      stateCode,
      topicId,
      offset,
      limit,
      counts: result,
    });
  } catch (error) {
    await LegiScanSyncRunModel.updateOne(
      { _id: syncRun._id },
      {
        $set: {
          status: "failed",
          finishedAt: new Date(),
          error:
            error instanceof Error
              ? error.message
              : "Unknown statute candidate discovery error.",
        },
      },
    );

    throw error;
  }
}
