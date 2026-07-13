import { Types } from "mongoose";

import {
  getRetentionCutoff,
  parseRetentionDays,
} from "@/lib/chatRetention";
import { isAuthorizedCronRequest } from "@/lib/cronAuth";
import { connectDB } from "@/lib/mongodb";
import { ChatMessageModel } from "@/models/ChatMessage";
import { ChatSessionModel } from "@/models/ChatSession";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

/**
 * Guest chat retention purge (see lib/chatRetention.ts for the policy).
 *
 * Deletes guest sessions - sessions never claimed by an account - whose
 * conversation has been inactive longer than GUEST_RETENTION_DAYS, along
 * with their messages. Account-owned sessions are never touched.
 *
 * Dry-run by default; the daily pipeline calls it with ?apply=true. A
 * session only counts as inactive when BOTH the session is older than the
 * cutoff AND none of its messages are newer than the cutoff, so an old
 * session that is still in active use survives.
 */
export async function GET(request: Request) {
  if (!isAuthorizedCronRequest(request)) {
    return Response.json({ error: "unauthorized" }, { status: 401 });
  }

  const retentionDays = parseRetentionDays(process.env.GUEST_RETENTION_DAYS);
  if (retentionDays === 0) {
    return Response.json({
      status: "skipped",
      detail: "GUEST_RETENTION_DAYS=0 disables the retention purge.",
    });
  }

  await connectDB();

  const url = new URL(request.url);
  const apply = url.searchParams.get("apply") === "true";
  const limit = Math.min(
    Number(url.searchParams.get("limit") ?? "500") || 500,
    2000,
  );
  const cutoff = getRetentionCutoff(retentionDays);

  // Candidate sessions: guest-only (no userId ever attached) and created
  // before the cutoff.
  const candidates = await ChatSessionModel.find({
    userId: { $exists: false },
    createdAt: { $lt: cutoff },
  })
    .select("_id")
    .limit(limit)
    .lean<{ _id: Types.ObjectId }[]>();

  const candidateIds = candidates.map((session) => session._id);

  if (candidateIds.length === 0) {
    return Response.json({
      status: apply ? "succeeded" : "dry-run",
      retentionDays,
      cutoff: cutoff.toISOString(),
      purgeableSessions: 0,
      note: "No inactive guest sessions past the retention window.",
    });
  }

  // Keep any candidate with recent activity: a message newer than the cutoff.
  const recentlyActiveIds = await ChatMessageModel.distinct("sessionId", {
    sessionId: { $in: candidateIds },
    createdAt: { $gte: cutoff },
  });
  const recentlyActive = new Set(recentlyActiveIds.map(String));
  const purgeableIds = candidateIds.filter(
    (id) => !recentlyActive.has(String(id)),
  );

  if (!apply) {
    return Response.json({
      status: "dry-run",
      retentionDays,
      cutoff: cutoff.toISOString(),
      purgeableSessions: purgeableIds.length,
      applyUrl: "/api/cron/chat-retention?apply=true",
    });
  }

  const deletedMessages = await ChatMessageModel.deleteMany({
    sessionId: { $in: purgeableIds },
  });
  const deletedSessions = await ChatSessionModel.deleteMany({
    _id: { $in: purgeableIds },
  });

  return Response.json({
    status: "succeeded",
    retentionDays,
    cutoff: cutoff.toISOString(),
    deletedSessions: deletedSessions.deletedCount,
    deletedMessages: deletedMessages.deletedCount,
  });
}
