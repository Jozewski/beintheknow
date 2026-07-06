import { isAuthorizedCronRequest } from "@/lib/cronAuth";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

/**
 * Content pipeline orchestrator.
 *
 * Philosophy: LegiScan is a MONITORING layer, never an answer source. The
 * only reason to ingest from it is to detect changes to the laws we already
 * treat as source of truth (LegalAuthority records), so those specific laws
 * can be reviewed and updated. JO answers exclusively from approved
 * authority/content chunks.
 *
 * WEEKLY (Mondays, or ?weekly=true) - change detection:
 *   1. legiscan-sync            - pull the week's legislative activity
 *   2. legiscan-text            - fetch text for new/changed bills
 *   3. legiscan-pdf-text        - extract text from PDF bill documents
 *   4. statute-candidates       - extract statute citations from bill texts
 *                                 and queue candidate updates to our laws
 *   5. candidate-report         - read-only: how many of our laws may be
 *                                 affected and need human review
 *
 * DAILY - keep the approved corpus flowing:
 *   6. legal-chunks?run=authorities - re-chunk any authority records that
 *                                 were edited after review (hash-skips
 *                                 unchanged records, so this is a no-op
 *                                 most days)
 *   7. embeddings               - embed anything newly chunked + approved
 *
 * NOT automated on purpose:
 *   - Updating a law's text: a human reviews the candidate queue, edits the
 *     LegalAuthority record, and approves. Automation never rewrites the
 *     source of truth.
 *   - Review approval (`npm run chunks:approve`) and legiscan-cleanup.
 */

type StageResult = {
  stage: string;
  status: "succeeded" | "failed" | "skipped";
  httpStatus?: number;
  detail?: unknown;
};

const STAGE_TIMEOUT_MS = 25_000;
const LAUNCH_BUDGET_MS = 40_000;

export async function GET(request: Request) {
  if (!isAuthorizedCronRequest(request)) {
    return Response.json({ error: "unauthorized" }, { status: 401 });
  }

  const startedAt = Date.now();
  const origin = new URL(request.url).origin;
  const cronSecret = process.env.CRON_SECRET;
  const forceWeekly = new URL(request.url).searchParams.get("weekly") === "true";
  const runWeeklyStages = new Date().getUTCDay() === 1 || forceWeekly;

  const stages: Array<{ name: string; path: string; weekly?: boolean }> = [
    // --- Weekly change detection (LegiScan monitoring) ---
    {
      name: "legiscan-sync",
      path: "/api/cron/legiscan-sync?run=full&maxSearchQueries=15&maxPagesPerSearch=2&maxBillFetches=25",
      weekly: true,
    },
    {
      name: "legiscan-text",
      path: "/api/cron/legiscan-text?run=batch&limit=15",
      weekly: true,
    },
    {
      name: "legiscan-pdf-text",
      path: "/api/cron/legiscan-pdf-text?run=batch&limit=8",
      weekly: true,
    },
    {
      name: "statute-candidates",
      path: "/api/cron/statute-candidates?run=extract-batch&limit=100",
      weekly: true,
    },
    {
      name: "candidate-report",
      path: "/api/cron/legal-authorities?run=candidate-queue&limit=10",
      weekly: true,
    },
    // --- Daily corpus maintenance ---
    {
      name: "legal-chunks-authorities",
      path: "/api/cron/legal-chunks?run=authorities&limit=100",
    },
    { name: "embeddings", path: "/api/cron/embeddings?limit=50" },
  ];

  const results: StageResult[] = [];

  for (const stage of stages) {
    if (stage.weekly && !runWeeklyStages) {
      results.push({
        stage: stage.name,
        status: "skipped",
        detail: "weekly change-detection stage; runs Mondays",
      });
      continue;
    }

    if (Date.now() - startedAt > LAUNCH_BUDGET_MS) {
      results.push({
        stage: stage.name,
        status: "skipped",
        detail: "time budget reached; will catch up next run",
      });
      continue;
    }

    try {
      const response = await fetch(`${origin}${stage.path}`, {
        headers: cronSecret ? { authorization: `Bearer ${cronSecret}` } : undefined,
        signal: AbortSignal.timeout(STAGE_TIMEOUT_MS),
        cache: "no-store",
      });

      const detail = await response.json().catch(() => undefined);
      results.push({
        stage: stage.name,
        status: response.ok ? "succeeded" : "failed",
        httpStatus: response.status,
        detail,
      });
    } catch (error) {
      console.error(`Pipeline stage ${stage.name} failed`, error);
      results.push({
        stage: stage.name,
        status: "failed",
        detail: error instanceof Error ? error.message : "Unknown error",
      });
    }
  }

  const failed = results.filter((result) => result.status === "failed").length;

  return Response.json({
    status: failed === 0 ? "succeeded" : "completed_with_failures",
    ranWeeklyStages: runWeeklyStages,
    elapsedMs: Date.now() - startedAt,
    results,
    note: "Candidate updates to our laws require human review. Check the candidate-report stage output; after editing and approving authority records, the daily stages re-chunk and re-embed them automatically.",
  });
}
