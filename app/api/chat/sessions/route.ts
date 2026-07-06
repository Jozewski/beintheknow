import { Types } from "mongoose";

import { getAuthenticatedUser } from "@/lib/auth";
import { connectDB } from "@/lib/mongodb";
import { ChatMessageModel } from "@/models/ChatMessage";
import { ChatSessionModel } from "@/models/ChatSession";

export const dynamic = "force-dynamic";

/**
 * Lists the signed-in user's chat sessions, most recent first, with a
 * preview of the first question so past conversations are recognizable.
 */
export async function GET(request: Request) {
  const authUser = getAuthenticatedUser(request);

  if (!authUser) {
    return Response.json({ error: "Sign in to see your history." }, { status: 401 });
  }

  try {
    await connectDB();
  } catch (error) {
    console.error("Chat sessions: database connection failed", error);
    return Response.json(
      { error: "Chat history is not available right now." },
      { status: 503 },
    );
  }

  const sessions = await ChatSessionModel.find({ userId: authUser.userId })
    .sort({ updatedAt: -1 })
    .limit(20)
    .select("jurisdiction stateCode createdAt updatedAt")
    .lean<
      {
        _id: Types.ObjectId;
        jurisdiction: "federal" | "state";
        stateCode?: string;
        createdAt?: Date;
        updatedAt?: Date;
      }[]
    >();

  const previews = await Promise.all(
    sessions.map(async (session) => {
      const firstUserMessage = await ChatMessageModel.findOne({
        sessionId: session._id,
        role: "user",
      })
        .sort({ createdAt: 1 })
        .select("content")
        .lean<{ content?: string }>();

      return {
        id: String(session._id),
        jurisdiction: session.jurisdiction,
        stateCode: session.stateCode,
        preview: firstUserMessage?.content?.slice(0, 120) ?? "New conversation",
        createdAt: session.createdAt,
        updatedAt: session.updatedAt,
      };
    }),
  );

  return Response.json({ sessions: previews });
}
