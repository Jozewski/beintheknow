import { isAuthorizedCronRequest } from "@/lib/cronAuth";
import { chunkLegalAuthorities } from "@/lib/authorityChunkIngest";
import {
  getLegalAuthorityCandidateQueue,
  getLegalAuthorityStats,
  getStateAuthorityCoverage,
  ingestLegalAuthorityRecords,
} from "@/lib/legalAuthorityIngest";
import { connectDB } from "@/lib/mongodb";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

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

export async function GET(request: Request) {
  if (!isAuthorizedCronRequest(request)) {
    return Response.json({ error: "unauthorized" }, { status: 401 });
  }

  const url = new URL(request.url);
  const runMode = url.searchParams.get("run") ?? "stats";
  const limit = Number(url.searchParams.get("limit") ?? "100");
  const offset = Number(url.searchParams.get("offset") ?? "0");
  const force = url.searchParams.get("force") === "true";
  const stateCode = url.searchParams.get("state")?.toUpperCase();
  const topicId = url.searchParams.get("topic") ?? undefined;
  const reviewStatus = toReviewStatus(url.searchParams.get("reviewStatus"));

  await connectDB();

  if (runMode === "stats") {
    return Response.json({
      status: "succeeded",
      counts: await getLegalAuthorityStats(),
    });
  }

  if (runMode === "candidate-queue") {
    return Response.json({
      status: "succeeded",
      runMode,
      counts: await getLegalAuthorityCandidateQueue({
        limit,
        offset,
        stateCode,
        topicId,
        candidateType: url.searchParams.get("candidateType") ?? undefined,
        sourceName: url.searchParams.get("sourceName") ?? undefined,
      }),
    });
  }

  if (runMode === "state-coverage") {
    if (!stateCode) {
      return Response.json(
        { error: "state is required for run=state-coverage." },
        { status: 400 },
      );
    }

    return Response.json({
      status: "succeeded",
      runMode,
      counts: await getStateAuthorityCoverage({ stateCode }),
    });
  }

  if (runMode === "ingest-records") {
    return Response.json({
      status: "succeeded",
      runMode,
      counts: await ingestLegalAuthorityRecords({
        limit,
        offset,
        force,
        stateCode,
        topicId,
      }),
    });
  }

  if (runMode === "chunk") {
    return Response.json({
      status: "succeeded",
      runMode,
      counts: await chunkLegalAuthorities({
        limit,
        offset,
        force,
        reviewStatus,
        stateCode,
        topicId,
      }),
    });
  }

  return Response.json(
    {
      error:
        "Unsupported run mode. Use run=stats, run=state-coverage, run=candidate-queue, run=ingest-records, or run=chunk.",
    },
    { status: 400 },
  );
}
