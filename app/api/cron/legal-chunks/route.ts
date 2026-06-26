import { ingestLegalTextChunks } from "@/lib/legalTextChunkIngest";
import { connectDB } from "@/lib/mongodb";
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

export async function GET(request: Request) {
  if (!isAuthorizedCronRequest(request)) {
    return Response.json({ error: "unauthorized" }, { status: 401 });
  }

  const url = new URL(request.url);
  const runMode = url.searchParams.get("run");
  const shouldIngest = runMode === "sample" || runMode === "batch";
  const offset = Number(url.searchParams.get("offset") ?? "0");
  const limit = Number(
    url.searchParams.get("limit") ?? (runMode === "sample" ? "10" : "100"),
  );
  const force = url.searchParams.get("force") === "true";
  const missingOnly = url.searchParams.get("missingOnly") === "true";

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
      note: "Add ?run=sample&limit=10 or ?run=batch&offset=0&limit=100 to chunk extracted legal text.",
    });
  }

  try {
    const result = await ingestLegalTextChunks({
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
