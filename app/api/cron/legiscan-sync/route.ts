import { buildWeeklyLegiScanSyncPlan, ingestLegiScanBills } from "@/lib/legiscanSync";
import { connectDB } from "@/lib/mongodb";
import { LegiScanSyncRunModel } from "@/models/LegiScanSyncRun";
import type { TopicId } from "@/data/content-data";

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
    return Response.json(
      {
        error: "unauthorized",
      },
      { status: 401 },
    );
  }

  const plan = buildWeeklyLegiScanSyncPlan();
  let syncRunId: string | null = null;
  const url = new URL(request.url);
  const runMode = url.searchParams.get("run");
  const shouldIngest = runMode === "sample" || runMode === "full";
  const stateCodes = url.searchParams
    .get("states")
    ?.split(",")
    .map((stateCode) => stateCode.trim().toUpperCase())
    .filter(Boolean);
  const searchOffset = Number(url.searchParams.get("searchOffset") ?? "0");
  const maxSearchQueries = Number(
    url.searchParams.get("maxSearchQueries") ?? (runMode === "full" ? "25" : "10"),
  );
  const maxPagesPerSearch = Number(url.searchParams.get("maxPagesPerSearch") ?? "3");
  const maxBillFetches = Number(
    url.searchParams.get("maxBillFetches") ?? (runMode === "full" ? "0" : "25"),
  );
  const storeRawPayloads = url.searchParams.get("storeRawPayloads") === "true";
  const topicIds = url.searchParams
    .get("topics")
    ?.split(",")
    .map((topicId) => topicId.trim())
    .filter(Boolean) as TopicId[] | undefined;

  if (process.env.MONGODB_URI) {
    await connectDB();

    const syncRun = await LegiScanSyncRunModel.create({
      trigger: request.headers.get("x-vercel-cron-schedule") ? "cron" : "manual",
      status: shouldIngest ? "running" : "planned",
      schedule: request.headers.get("x-vercel-cron-schedule"),
      plannedSearchQueryCount: plan.plannedSearchQueryCount,
      plannedSearchQueries: plan.plannedSearchQueries,
    });

    syncRunId = syncRun._id.toString();

    if (shouldIngest) {
      try {
        const result = await ingestLegiScanBills({
          stateCodes: runMode === "sample" ? stateCodes ?? ["AZ"] : stateCodes,
          topicIds,
          searchOffset,
          maxSearchQueries,
          maxPagesPerSearch,
          maxBillFetches,
          storeRawPayloads,
        });

        await LegiScanSyncRunModel.updateOne(
          { _id: syncRun._id },
          {
            $set: {
              status: "succeeded",
              finishedAt: new Date(),
              counts: {
                searchQueries: result.searchQueries,
                billFetches: result.billFetches,
                newBills: result.newBills,
                changedBills: result.changedBills,
                unchangedBills: result.unchangedBills,
                relevantBills: 0,
                irrelevantBills: 0,
              },
            },
          },
        );

        return Response.json({
          status: "succeeded",
          syncRunId,
          schedule: request.headers.get("x-vercel-cron-schedule") ?? null,
          plannedSearchQueryCount: result.plannedSearchQueryCount,
          searchOffset,
          counts: result,
          updatePolicy: plan.updatePolicy,
          storagePolicy: storeRawPayloads
            ? "raw_payloads_enabled"
            : "metadata_only",
        });
      } catch (error) {
        await LegiScanSyncRunModel.updateOne(
          { _id: syncRun._id },
          {
            $set: {
              status: "failed",
              finishedAt: new Date(),
              error: error instanceof Error ? error.message : "Unknown LegiScan sync error.",
            },
          },
        );

        throw error;
      }
    }
  }

  return Response.json({
    status: "planned",
    syncRunId,
    schedule: request.headers.get("x-vercel-cron-schedule") ?? null,
    plannedSearchQueryCount: plan.plannedSearchQueryCount,
    updatePolicy: plan.updatePolicy,
    storagePolicy: "metadata_only",
    note: "Add ?run=sample&states=AZ&maxSearchQueries=2&maxBillFetches=5 for a limited metadata-only live run. Add storeRawPayloads=true only for a one-off diagnostic pull.",
  });
}
