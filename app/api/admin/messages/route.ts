import { Types } from "mongoose";

import { isAdminRequest } from "@/lib/adminAuth";
import { connectDB } from "@/lib/mongodb";
import { ChatMessageModel } from "@/models/ChatMessage";
import { ChatSessionModel } from "@/models/ChatSession";

export const dynamic = "force-dynamic";

const VALID_FILTERS = ["flagged", "feedback", "feedback-down"] as const;
type MessageFilter = (typeof VALID_FILTERS)[number];

/**
 * GET: admin message review queue.
 *
 * Two review streams, selected with ?filter=:
 *   flagged       - user messages the suspicious-pattern detector marked
 *                   (likely prompt-injection / rule-breaking attempts)
 *   feedback      - assistant answers users rated (up or down)
 *   feedback-down - only negative ratings (default review priority)
 *
 * This surface exists so "flagged for admin review" is actually true:
 * detection without a review path is not a control. Weekly review of both
 * streams is part of the risk-mitigation process.
 */
export async function GET(request: Request) {
  if (!isAdminRequest(request)) {
    return Response.json({ error: "unauthorized" }, { status: 401 });
  }

  const url = new URL(request.url);
  const filterParam = url.searchParams.get("filter") ?? "flagged";
  const filter: MessageFilter = (VALID_FILTERS as readonly string[]).includes(
    filterParam,
  )
    ? (filterParam as MessageFilter)
    : "flagged";
  const limit = Math.max(
    1,
    Math.min(Number(url.searchParams.get("limit") ?? "50"), 200),
  );

  try {
    await connectDB();
  } catch (error) {
    console.error("Admin messages: database connection failed", error);
    return Response.json({ error: "Database unavailable." }, { status: 503 });
  }

  // Cast follows the repo convention for dotted-path/mixed filters
  // (see lib/embeddings.ts): Mongoose's strict FilterQuery rejects the
  // union of these three shapes even though each is a valid query.
  const query: Record<string, unknown> =
    filter === "flagged"
      ? { flagged: true, role: "user" }
      : filter === "feedback-down"
        ? { "feedback.rating": "down" }
        : { feedback: { $exists: true } };

  const [messages, flaggedCount, feedbackDownCount] = await Promise.all([
    ChatMessageModel.find(query as never)
      .sort({ createdAt: -1 })
      .limit(limit)
      .select("sessionId role content flagged feedback createdAt")
      .lean<
        {
          _id: Types.ObjectId;
          sessionId: Types.ObjectId;
          role: "user" | "assistant";
          content: string;
          flagged?: boolean;
          feedback?: { rating: "up" | "down"; comment?: string; createdAt?: Date };
          createdAt?: Date;
        }[]
      >(),
    ChatMessageModel.countDocuments({ flagged: true, role: "user" }),
    ChatMessageModel.countDocuments({ "feedback.rating": "down" } as never),
  ]);

  // Jurisdiction context helps triage without exposing more than needed.
  const sessionIds = [...new Set(messages.map((m) => String(m.sessionId)))].map(
    (id) => new Types.ObjectId(id),
  );
  const sessions = await ChatSessionModel.find({ _id: { $in: sessionIds } })
    .select("jurisdiction stateCode")
    .lean<
      { _id: Types.ObjectId; jurisdiction?: string; stateCode?: string }[]
    >();
  const sessionById = new Map(sessions.map((s) => [String(s._id), s]));

  return Response.json({
    filter,
    counts: { flagged: flaggedCount, feedbackDown: feedbackDownCount },
    messages: messages.map((message) => {
      const session = sessionById.get(String(message.sessionId));
      return {
        id: String(message._id),
        role: message.role,
        content: message.content,
        flagged: Boolean(message.flagged),
        feedback: message.feedback
          ? {
              rating: message.feedback.rating,
              comment: message.feedback.comment,
              createdAt: message.feedback.createdAt,
            }
          : undefined,
        jurisdiction: session?.jurisdiction,
        stateCode: session?.stateCode,
        createdAt: message.createdAt,
      };
    }),
  });
}
