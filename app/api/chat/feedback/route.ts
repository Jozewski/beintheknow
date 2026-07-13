import mongoose from "mongoose";
import { z } from "zod";

import { getAuthenticatedUser } from "@/lib/auth";
import { connectDB } from "@/lib/mongodb";
import { ChatMessageModel } from "@/models/ChatMessage";
import { ChatSessionModel } from "@/models/ChatSession";

export const dynamic = "force-dynamic";

const feedbackSchema = z.object({
  sessionId: z.string(),
  guestToken: z.string().optional(),
  messageId: z.string(),
  rating: z.enum(["up", "down"]),
  comment: z.string().trim().max(500).optional(),
});

/**
 * Records user feedback on an assistant answer.
 *
 * Ownership is proven the same way as chat history: the signed-in account
 * or the session's guestToken. Otherwise 404 - we do not reveal whether the
 * session or message exists. Minimal data by design: the rating and an
 * optional short comment are stored on the message itself; nothing else.
 */
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json(
      { error: "Request body must be valid JSON." },
      { status: 400 },
    );
  }

  const parsed = feedbackSchema.safeParse(body);
  if (!parsed.success) {
    return Response.json(
      { error: "invalid_request", issues: parsed.error.issues },
      { status: 400 },
    );
  }

  const { sessionId, guestToken, messageId, rating, comment } = parsed.data;
  const authUser = getAuthenticatedUser(request);

  if (
    !mongoose.Types.ObjectId.isValid(sessionId) ||
    !mongoose.Types.ObjectId.isValid(messageId) ||
    (!guestToken && !authUser)
  ) {
    return Response.json(
      { error: "sessionId, messageId, plus guestToken or a signed-in account are required." },
      { status: 400 },
    );
  }

  try {
    await connectDB();
  } catch (error) {
    console.error("Chat feedback: database connection failed", error);
    return Response.json(
      { error: "Feedback is not available right now." },
      { status: 503 },
    );
  }

  const session = await ChatSessionModel.findById(sessionId)
    .select("guestToken userId")
    .lean();

  const ownsByAccount =
    authUser && session?.userId && String(session.userId) === authUser.userId;
  const ownsByGuestToken =
    guestToken && session?.guestToken && session.guestToken === guestToken;

  if (!session || (!ownsByAccount && !ownsByGuestToken)) {
    return Response.json({ error: "Session not found." }, { status: 404 });
  }

  const updated = await ChatMessageModel.findOneAndUpdate(
    { _id: messageId, sessionId, role: "assistant" },
    {
      $set: {
        feedback: {
          rating,
          comment: comment || undefined,
          createdAt: new Date(),
        },
      },
    },
    { new: true },
  )
    .select("_id")
    .lean();

  if (!updated) {
    return Response.json({ error: "Message not found." }, { status: 404 });
  }

  return Response.json({ ok: true, messageId, rating });
}
