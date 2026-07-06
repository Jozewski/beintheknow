import mongoose from "mongoose";

import { connectDB } from "@/lib/mongodb";
import { ChatMessageModel } from "@/models/ChatMessage";
import { ChatSessionModel } from "@/models/ChatSession";

export const dynamic = "force-dynamic";

/**
 * Returns the message history for a chat session.
 *
 * Ownership is proven by the guest token: the caller must present the same
 * guestToken stored on the session. Without it (or with a wrong one) the
 * response is 404 - we do not reveal whether the session exists.
 */
export async function GET(request: Request) {
  const url = new URL(request.url);
  const sessionId = url.searchParams.get("sessionId");
  const guestToken = url.searchParams.get("guestToken");

  if (
    !sessionId ||
    !guestToken ||
    !mongoose.Types.ObjectId.isValid(sessionId)
  ) {
    return Response.json(
      { error: "sessionId and guestToken are required." },
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
    .select("guestToken jurisdiction stateCode")
    .lean();

  if (!session || !session.guestToken || session.guestToken !== guestToken) {
    return Response.json({ error: "Session not found." }, { status: 404 });
  }

  const messages = await ChatMessageModel.find({ sessionId })
    .sort({ createdAt: 1 })
    .limit(200)
    .select("role content citations createdAt")
    .lean<
      {
        _id: unknown;
        role: "user" | "assistant";
        content: string;
        citations?: unknown[];
        createdAt?: Date;
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
    })),
  });
}
