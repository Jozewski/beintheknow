import mongoose from "mongoose";
import { z } from "zod";

import { isAdminRequest } from "@/lib/adminAuth";
import { connectDB } from "@/lib/mongodb";
import { LegalAuthorityCandidateModel } from "@/models/LegalAuthorityCandidate";

export const dynamic = "force-dynamic";

const VALID_STATUSES = [
  "needs-adapter",
  "needs-review",
  "verified",
  "rejected",
  "superseded",
] as const;

/**
 * GET: the review queue - candidate updates to our laws that the weekly
 * monitoring pipeline flagged. Filter with ?status=, ?state=, ?limit=.
 */
export async function GET(request: Request) {
  if (!isAdminRequest(request)) {
    return Response.json({ error: "unauthorized" }, { status: 401 });
  }

  const url = new URL(request.url);
  const statusParam = url.searchParams.get("status") ?? "needs-review";
  const status = (VALID_STATUSES as readonly string[]).includes(statusParam)
    ? statusParam
    : "needs-review";
  const stateCode = url.searchParams.get("state")?.toUpperCase();
  const limit = Math.max(1, Math.min(Number(url.searchParams.get("limit") ?? "50"), 200));

  try {
    await connectDB();
  } catch (error) {
    console.error("Candidates: database connection failed", error);
    return Response.json({ error: "Database unavailable." }, { status: 503 });
  }

  const filter: Record<string, unknown> = { status };
  if (stateCode) filter.stateCode = stateCode;

  const [candidates, statusCounts] = await Promise.all([
    LegalAuthorityCandidateModel.find(filter)
      .sort({ occurrenceCount: -1, updatedAt: -1 })
      .limit(limit)
      .select(
        "candidateType jurisdiction stateCode topicId citation titleHint sourceName sourceUrl occurrenceCount snippets status notes updatedAt",
      )
      .lean(),
    LegalAuthorityCandidateModel.aggregate<{ _id: string; count: number }>([
      { $group: { _id: "$status", count: { $sum: 1 } } },
    ]),
  ]);

  return Response.json({
    status,
    counts: Object.fromEntries(statusCounts.map((row) => [row._id, row.count])),
    candidates: candidates.map((candidate) => ({
      id: String(candidate._id),
      candidateType: candidate.candidateType,
      jurisdiction: candidate.jurisdiction,
      stateCode: candidate.stateCode,
      topicId: candidate.topicId,
      citation: candidate.citation,
      titleHint: candidate.titleHint,
      sourceName: candidate.sourceName,
      sourceUrl: candidate.sourceUrl,
      occurrenceCount: candidate.occurrenceCount,
      snippet: candidate.snippets?.[0]?.text?.slice(0, 280),
      status: candidate.status,
      notes: candidate.notes,
      updatedAt: candidate.updatedAt,
    })),
  });
}

const actionSchema = z.object({
  id: z.string(),
  action: z.enum(["verify", "reject", "reopen"]),
  notes: z.string().trim().max(2000).optional(),
});

const ACTION_TO_STATUS = {
  verify: "verified",
  reject: "rejected",
  reopen: "needs-review",
} as const;

/**
 * POST: act on a candidate. "verify" = a human confirmed and handled the
 * law change (updated the LegalAuthority record); "reject" = not relevant;
 * "reopen" = send back to the queue.
 */
export async function POST(request: Request) {
  if (!isAdminRequest(request)) {
    return Response.json({ error: "unauthorized" }, { status: 401 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const parsed = actionSchema.safeParse(body);
  if (!parsed.success || !mongoose.Types.ObjectId.isValid(parsed.data.id)) {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  try {
    await connectDB();
  } catch (error) {
    console.error("Candidates: database connection failed", error);
    return Response.json({ error: "Database unavailable." }, { status: 503 });
  }

  const update: Record<string, unknown> = {
    status: ACTION_TO_STATUS[parsed.data.action],
  };
  if (parsed.data.notes !== undefined) update.notes = parsed.data.notes;

  const result = await LegalAuthorityCandidateModel.findByIdAndUpdate(
    parsed.data.id,
    { $set: update },
    { new: true },
  )
    .select("status notes")
    .lean();

  if (!result) {
    return Response.json({ error: "Candidate not found." }, { status: 404 });
  }

  return Response.json({ id: parsed.data.id, status: result.status, notes: result.notes });
}
