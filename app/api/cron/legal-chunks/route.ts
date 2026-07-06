import { isAuthorizedCronRequest } from "@/lib/cronAuth";
import {
  chunkCuratedSummaryCandidates,
  chunkLegalAuthorities,
} from "@/lib/authorityChunkIngest";
import { ingestLegalTextChunks } from "@/lib/legalTextChunkIngest";
import { connectDB } from "@/lib/mongodb";
import { LegiScanSyncRunModel } from "@/models/LegiScanSyncRun";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

export async function GET(request: Request) {
  if (!isAuthorizedCronRequest(request)) {
    return Response.json({ error: "unauthorized" }, { status: 401 });
  }

  const url = new URL(request.url);
  const runMode = url.searchParams.get("run");
  const shouldIngest =
    runMode === "sample" ||
    runMode === "batch" ||
    runMode === "authorities" ||
    runMode === "curated-summaries";
  const offset = Number(url.searchParams.get("offset") ?? "0");
  const limit = Number(
    url.searchParams.get("limit") ?? (runMode === "sample" ? "10" : "100"),
  );
  const force = url.searchParams.get("force") === "true";
  const missingOnly = url.searchParams.get("missingOnly") === "true";
  const reviewStatus = url.searchParams.get("reviewStatus");
  const sourceName = url.searchParams.get("sourceName") ?? undefined;

  await connectDB();

  const syncRun = await LegiScanSyncRunModel.create({
    trigger: request.headers.get("x-vercel-cron-schedule") ? "cron" : "manual",
    status: shouldIngest ? "running" : "planned",
    schedule: request.headers.get("x-vercel-cron-schedule"),
    plannedSearchQueryCount: 0,
    plannedSearchQueries: [],
  });

  if (!shouldIngest) {
    return Response.json({
      status: "planned",
      syncRunId: syncRun._id.toString(),
      note: "Add ?run=sample, ?run=batch, ?run=authorities, or ?run=curated-summaries to chunk legal text.",
    });
  }

  try {
    const result =
      runMode === "authorities"
        ? await chunkLegalAuthorities({
            offset,
            limit,
            force,
            reviewStatus:
              reviewStatus === "draft" ||
              reviewStatus === "legal-review" ||
              reviewStatus === "approved" ||
              reviewStatus === "expired"
                ? reviewStatus
                : undefined,
          })
        : runMode === "curated-summaries"
          ? await chunkCuratedSummaryCandidates({
              offset,
              limit,
              force,
              sourceName,
            })
          : await ingestLegalTextChunks({
              offset,
              limit,
              force,
              missingOnly,
            });

    await LegiScanSyncRunModel.updateOne(
      { _id: syncRun._id },
      {
        $set: {
          status: "succeeded",
          finishedAt: new Date(),
          counts: {
            searchQueries: 0,
            billFetches: 0,
            billTextFetches: 0,
            newBills: result.chunksWritten,
            changedBills: result.chunkedSources,
            unchangedBills: result.skippedSources,
            relevantBills: 0,
            irrelevantBills: 0,
          },
        },
      },
    );

    return Response.json({
      status: "succeeded",
      syncRunId: syncRun._id.toString(),
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
              : "Unknown legal text chunk ingestion error.",
        },
      },
    );

    throw error;
  }
}
