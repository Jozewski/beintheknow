import { extractPendingLegiScanPdfTexts } from "@/lib/legiscanPdfTextExtract";
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
  const shouldExtract = runMode === "sample" || runMode === "batch";
  const limit = Number(
    url.searchParams.get("limit") ?? (runMode === "sample" ? "3" : "25"),
  );
  const force = url.searchParams.get("force") === "true";

  await connectDB();

  const syncRun = await LegiScanSyncRunModel.create({
    trigger: request.headers.get("x-vercel-cron-schedule") ? "cron" : "manual",
    status: shouldExtract ? "running" : "planned",
    schedule: request.headers.get("x-vercel-cron-schedule"),
    plannedSearchQueryCount: 0,
    plannedSearchQueries: [],
  });

  if (!shouldExtract) {
    return Response.json({
      status: "planned",
      syncRunId: syncRun._id.toString(),
      note: "Add ?run=sample&limit=3 or ?run=batch&limit=25 to extract pending PDF bill text.",
    });
  }

  try {
    const result = await extractPendingLegiScanPdfTexts({ limit, force });

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
            changedBills: result.extractedTexts,
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
              : "Unknown LegiScan PDF text extraction error.",
        },
      },
    );

    throw error;
  }
}
