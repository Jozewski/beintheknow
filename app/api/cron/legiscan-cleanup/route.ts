import {
  cleanupLegiScanBulkData,
  getLegiScanCleanupStats,
} from "@/lib/legiscanCleanup";
import { connectDB } from "@/lib/mongodb";

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

  await connectDB();

  const url = new URL(request.url);
  const apply = url.searchParams.get("apply") === "true";
  const confirm = url.searchParams.get("confirm");
  const includeSyncRuns = url.searchParams.get("includeSyncRuns") === "true";
  const rebuildChunkIndexes =
    url.searchParams.get("rebuildChunkIndexes") === "true";
  const before = await getLegiScanCleanupStats();

  if (!apply) {
    return Response.json({
      status: "dry-run",
      before,
      applyUrl:
        "/api/cron/legiscan-cleanup?apply=true&confirm=delete-legiscan-bulk",
      note: "Dry run only. This cleanup removes LegiScan bill text, LegiScan-derived chunks, and LegiScan-mined citation candidates while retaining legal authorities, curated content, and bill metadata for change monitoring.",
    });
  }

  if (confirm !== "delete-legiscan-bulk") {
    return Response.json(
      {
        status: "blocked",
        before,
        error:
          "Add confirm=delete-legiscan-bulk to apply this destructive cleanup.",
      },
      { status: 400 },
    );
  }

  const result = await cleanupLegiScanBulkData({
    includeSyncRuns,
    rebuildChunkIndexes,
  });
  const after = await getLegiScanCleanupStats();

  return Response.json({
    status: "succeeded",
    before,
    result,
    after,
    note: "Atlas disk usage can lag after deletes. MongoDB may also reuse freed storage before Atlas reports lower disk allocation.",
  });
}
