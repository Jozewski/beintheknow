import { ingestLegiScanBillTexts } from "@/lib/legiscanTextIngest";
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
  const stateCodes = url.searchParams
    .get("states")
    ?.split(",")
    .map((stateCode) => stateCode.trim().toUpperCase())
    .filter(Boolean);
  const billOffset = Number(url.searchParams.get("billOffset") ?? "0");
  const limit = Number(
    url.searchParams.get("limit") ?? (runMode === "sample" ? "5" : "100"),
  );
  const force = url.searchParams.get("force") === "true";

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
      note: "Add ?run=sample&limit=5 or ?run=batch&billOffset=0&limit=100 to ingest LegiScan bill text.",
    });
  }

  try {
    const result = await ingestLegiScanBillTexts({
      stateCodes: runMode === "sample" ? stateCodes : stateCodes,
      billOffset,
      limit,
      force,
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
            billTextFetches: result.fetchedTexts,
            newBills: 0,
            changedBills: 0,
            unchangedBills: result.skippedTexts,
            relevantBills: 0,
            irrelevantBills: result.failedTexts,
          },
        },
      },
    );

    return Response.json({
      status: "succeeded",
      syncRunId: syncRun._id.toString(),
      billOffset,
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
              : "Unknown LegiScan bill text ingestion error.",
        },
      },
    );

    throw error;
  }
}
