import { z } from "zod";

import { getAuthenticatedUser } from "@/lib/auth";
import { connectDB } from "@/lib/mongodb";
import { ChatSessionModel } from "@/models/ChatSession";

export const dynamic = "force-dynamic";

const adoptSchema = z.object({
  guestToken: z.string().min(1),
});

/**
 * Claims this device's guest conversations for the signed-in account.
 *
 * Guest chats are stored with a guestToken and no userId. When someone
 * creates or signs into an account, their prior guest conversations on the
 * same device should become part of that account. Registration/login do
 * this at auth time; this endpoint lets the account page (and the chat
 * route) reconcile any guest sessions that were created before sign-in or
 * missed at auth time, so history never gets stranded.
 */
export async function POST(request: Request) {
  const authUser = getAuthenticatedUser(request);
  if (!authUser) {
    return Response.json({ error: "Sign in first." }, { status: 401 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const parsed = adoptSchema.safeParse(body);
  if (!parsed.success) {
    // No guest token to adopt is not an error - just nothing to do.
    return Response.json({ adopted: 0 });
  }

  try {
    await connectDB();
  } catch (error) {
    console.error("Adopt: database connection failed", error);
    return Response.json({ error: "Not available right now." }, { status: 503 });
  }

  // Only claim sessions that carry this guest token AND are not already
  // owned by an account - so this can never steal another user's history.
  const result = await ChatSessionModel.updateMany(
    { guestToken: parsed.data.guestToken, userId: { $exists: false } },
    { $set: { userId: authUser.userId } },
  );

  return Response.json({ adopted: result.modifiedCount ?? 0 });
}
