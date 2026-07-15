import { z } from "zod";

import { hashPassword } from "@/lib/auth";
import { connectDB } from "@/lib/mongodb";
import { hashResetToken, isResetTokenFormat } from "@/lib/passwordReset";
import { PasswordResetTokenModel } from "@/models/PasswordResetToken";
import { UserModel } from "@/models/User";

export const dynamic = "force-dynamic";

const resetSchema = z.object({
  token: z.string().refine(isResetTokenFormat, "Invalid reset token."),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters.")
    .max(200),
});

const INVALID_LINK_ERROR =
  "That reset link is not valid anymore. Please request a new one.";

/**
 * Completes a password reset. The token is single-use, expires after
 * RESET_TOKEN_TTL_MINUTES, and is looked up by hash only. Deliberately does
 * NOT sign the user in: on shared computers (halfway houses, reentry
 * centers, libraries) the safest end state is "password changed, now sign
 * in yourself".
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

  const parsed = resetSchema.safeParse(body);
  if (!parsed.success) {
    const firstIssue = parsed.error.issues[0];
    return Response.json(
      { error: firstIssue?.message ?? INVALID_LINK_ERROR },
      { status: 400 },
    );
  }

  try {
    await connectDB();
  } catch (error) {
    console.error("Password reset: database connection failed", error);
    return Response.json(
      { error: "Password reset is not available right now. Please try again." },
      { status: 503 },
    );
  }

  const { token, password } = parsed.data;

  const resetToken = await PasswordResetTokenModel.findOne({
    tokenHash: hashResetToken(token),
    usedAt: null,
    expiresAt: { $gt: new Date() },
  });
  if (!resetToken) {
    return Response.json({ error: INVALID_LINK_ERROR }, { status: 400 });
  }

  const user = await UserModel.findById(resetToken.userId).select("_id");
  if (!user) {
    // Account was deleted after the email went out.
    return Response.json({ error: INVALID_LINK_ERROR }, { status: 400 });
  }

  await UserModel.updateOne(
    { _id: user._id },
    { passwordHash: await hashPassword(password) },
  );

  // Burn this token and every other outstanding reset link for the account.
  resetToken.usedAt = new Date();
  await resetToken.save();
  await PasswordResetTokenModel.deleteMany({
    userId: user._id,
    _id: { $ne: resetToken._id },
  });

  return Response.json({ ok: true });
}
