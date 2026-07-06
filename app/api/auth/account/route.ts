import { z } from "zod";

import {
  buildLogoutCookie,
  getAuthenticatedUser,
  verifyPassword,
} from "@/lib/auth";
import { connectDB } from "@/lib/mongodb";
import { ChatMessageModel } from "@/models/ChatMessage";
import { ChatSessionModel } from "@/models/ChatSession";
import { UserModel } from "@/models/User";

export const dynamic = "force-dynamic";

const deleteSchema = z.object({
  // Re-confirming the password means a stolen or left-open session cannot
  // be used to destroy the account and its history.
  password: z.string().min(1).max(200),
});

/**
 * Permanently deletes the signed-in user's account, every chat session it
 * owns, and all messages in those sessions. This backs the Privacy Policy's
 * deletion commitment with a self-service action.
 */
export async function DELETE(request: Request) {
  const authUser = getAuthenticatedUser(request);
  if (!authUser) {
    return Response.json({ error: "Sign in to delete your account." }, { status: 401 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Please confirm your password." }, { status: 400 });
  }

  const parsed = deleteSchema.safeParse(body);
  if (!parsed.success) {
    return Response.json({ error: "Please confirm your password." }, { status: 400 });
  }

  try {
    await connectDB();
  } catch (error) {
    console.error("Account deletion: database connection failed", error);
    return Response.json(
      { error: "Account deletion is not available right now. Please try again." },
      { status: 503 },
    );
  }

  const user = await UserModel.findById(authUser.userId).select("passwordHash");
  if (!user) {
    // Account already gone - clear the cookie and treat as success.
    return Response.json(
      { deleted: true },
      { headers: { "Set-Cookie": buildLogoutCookie() } },
    );
  }

  if (!(await verifyPassword(parsed.data.password, user.passwordHash))) {
    return Response.json({ error: "Password is incorrect." }, { status: 403 });
  }

  // Delete deepest data first so a failure part-way never orphans
  // messages that reference a deleted session or user.
  const sessions = await ChatSessionModel.find({ userId: authUser.userId })
    .select("_id")
    .lean();
  const sessionIds = sessions.map((session) => session._id);

  const [messagesResult] = await Promise.all([
    sessionIds.length > 0
      ? ChatMessageModel.deleteMany({ sessionId: { $in: sessionIds } })
      : Promise.resolve({ deletedCount: 0 }),
  ]);
  await ChatSessionModel.deleteMany({ userId: authUser.userId });
  await UserModel.deleteOne({ _id: authUser.userId });

  return Response.json(
    {
      deleted: true,
      sessionsDeleted: sessionIds.length,
      messagesDeleted: messagesResult.deletedCount ?? 0,
    },
    { headers: { "Set-Cookie": buildLogoutCookie() } },
  );
}
