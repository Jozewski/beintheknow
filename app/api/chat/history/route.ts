import mongoose from "mongoose";

import { getAuthenticatedUser } from "@/lib/auth";
import { connectDB } from "@/lib/mongodb";
import { ChatMessageModel } from "@/models/ChatMessage";
import { ChatSessionModel } from "@/models/ChatSession";

export const dynamic = "force-dynamic";

/**
 * Returns the message history for a chat session.
 *
 * Ownership is proven either by the signed-in account (auth cookie) or by
 * presenting the same guestToken stored on the session. Otherwise the
 * response is 404 - we do not reveal whether the session exists.
 */
export async function GET(request: Request) {
  const url = new URL(request.url);
  const sessionId = url.searchParams.get("sessionId");
  const guestToken = url.searchParams.get("guestToken");
  const authUser = getAuthenticatedUser(request);

  if (
    !sessionId ||
    !mongoose.Types.ObjectId.isValid(sessionId) ||
    (!guestToken && !authUser)
  ) {
    return Response.json(
      { error: "sessionId plus guestToken or a signed-in account are required." },
      { status: 400 },
    );
  }

  try {
    await connectDB();
  } catch (error) {
    console.error("Chat history: database connection failed", error);
    return Response.json(
      { error: "Chat history is not available right now." },
      { status: 503 },
    );
  }

  const session = await ChatSessionModel.findById(sessionId)
    .select("guestToken userId jurisdiction stateCode")
    .lean();

  const ownsByAccount =
    authUser && session?.userId && String(session.userId) === authUser.userId;
  // A session claimed by an account may NEVER be read back with just the
  // guest token. Shared computers (halfway houses, reentry centers,
  // libraries) keep the same localStorage guest token across people; without
  // this guard, the next person at the machine could reload the previous
  // person's account conversation after they signed out.
  const ownedByOtherAccount =
    session?.userId && (!authUser || String(session.userId) !== authUser.userId);
  const ownsByGuestToken =
    !ownedByOtherAccount &&
    guestToken &&
    session?.guestToken &&
    session.guestToken === guestToken;

  if (!session || (!ownsByAccount && !ownsByGuestToken)) {
    return Response.json({ error: "Session not found." }, { status: 404 });
  }

  const messages = await ChatMessageModel.find({ sessionId })
    .sort({ createdAt: 1 })
    .limit(200)
    .select("role content citations createdAt feedback")
    .lean<
      {
        _id: unknown;
        role: "user" | "assistant";
        content: string;
        citations?: unknown[];
        createdAt?: Date;
        feedback?: { rating: "up" | "down" };
      }[]
    >();

  return Response.json({
    sessionId,
    jurisdiction: session.jurisdiction,
    stateCode: session.stateCode,
    messages: messages.map((message) => ({
      id: String(message._id),
      role: message.role,
      content: message.content,
      citations: message.citations ?? [],
      createdAt: message.createdAt,
      feedbackRating: message.feedback?.rating,
    })),
  });
}
