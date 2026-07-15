import * as Sentry from "@sentry/nextjs";
import { after } from "next/server";
import { z } from "zod";

import { sendEmail } from "@/lib/email";
import { getClientIpHash } from "@/lib/ipHash";
import { connectDB } from "@/lib/mongodb";
import {
  RESET_TOKEN_TTL_MINUTES,
  generateResetToken,
} from "@/lib/passwordReset";
import { PasswordResetTokenModel } from "@/models/PasswordResetToken";
import { UserModel } from "@/models/User";

export const dynamic = "force-dynamic";

const forgotSchema = z.object({
  email: z.string().trim().toLowerCase().email().max(320),
});

// Per rolling hour. Email cap stops one account being flooded with resets;
// the IP cap is generous because reentry centers and libraries share IPs.
const MAX_REQUESTS_PER_EMAIL = 3;
const MAX_REQUESTS_PER_IP = 10;

function buildResetEmail(resetUrl: string) {
  const text = [
    "Hi,",
    "",
    "Someone asked to reset the password for your Be In The Know account. If that was you, use this link to pick a new password:",
    "",
    resetUrl,
    "",
    `The link works for ${RESET_TOKEN_TTL_MINUTES} minutes and can be used one time.`,
    "",
    "If you did not ask for this, you can ignore this email. Your password will not change.",
    "",
    "- Be In The Know",
  ].join("\n");

  const html = `
  <div style="font-family:Arial,Helvetica,sans-serif;max-width:480px;margin:0 auto;padding:24px;color:#1f2937;">
    <h1 style="color:#085041;font-size:20px;margin:0 0 16px;">Reset your password</h1>
    <p style="font-size:14px;line-height:22px;margin:0 0 16px;">
      Someone asked to reset the password for your Be In The Know account.
      If that was you, use the button below to pick a new password.
    </p>
    <p style="margin:0 0 16px;">
      <a href="${resetUrl}"
         style="display:inline-block;background:#1D9E75;color:#ffffff;text-decoration:none;font-weight:bold;font-size:14px;padding:12px 24px;border-radius:8px;">
        Pick a new password
      </a>
    </p>
    <p style="font-size:12px;line-height:18px;color:#6b7280;margin:0 0 8px;">
      The link works for ${RESET_TOKEN_TTL_MINUTES} minutes and can be used one time.
      If the button does not work, copy this link into your browser:
    </p>
    <p style="font-size:12px;line-height:18px;color:#6b7280;word-break:break-all;margin:0 0 16px;">${resetUrl}</p>
    <p style="font-size:12px;line-height:18px;color:#6b7280;margin:0;">
      If you did not ask for this, you can ignore this email. Your password will not change.
    </p>
  </div>`;

  return { text, html };
}

/**
 * Starts a password reset. The response is identical whether or not the
 * email has an account (no enumeration), and the lookup + send run after
 * the response so timing cannot reveal it either. Over-limit requests are
 * silently dropped for the same reason.
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

  const parsed = forgotSchema.safeParse(body);
  if (!parsed.success) {
    return Response.json(
      { error: "Please enter your email address." },
      { status: 400 },
    );
  }

  try {
    await connectDB();
  } catch (error) {
    console.error("Forgot password: database connection failed", error);
    return Response.json(
      { error: "Password reset is not available right now. Please try again." },
      { status: 503 },
    );
  }

  const { email } = parsed.data;
  const requestIpHash = getClientIpHash(request);
  // Trailing slashes in NEXT_PUBLIC_APP_URL would produce a broken
  // "https://site//auth/reset" link, so strip them.
  const baseUrl = (
    process.env.NEXT_PUBLIC_APP_URL ?? new URL(request.url).origin
  ).replace(/\/+$/, "");

  after(async () => {
    try {
      const user = await UserModel.findOne({ email }).select("_id email");
      if (!user) return;

      const hourAgo = new Date(Date.now() - 60 * 60 * 1000);
      const [emailCount, ipCount] = await Promise.all([
        PasswordResetTokenModel.countDocuments({
          userId: user._id,
          createdAt: { $gte: hourAgo },
        }),
        requestIpHash
          ? PasswordResetTokenModel.countDocuments({
              requestIpHash,
              createdAt: { $gte: hourAgo },
            })
          : Promise.resolve(0),
      ]);
      if (emailCount >= MAX_REQUESTS_PER_EMAIL || ipCount >= MAX_REQUESTS_PER_IP) {
        return;
      }

      const { token, tokenHash, expiresAt } = generateResetToken();
      await PasswordResetTokenModel.create({
        tokenHash,
        userId: user._id,
        requestIpHash,
        expiresAt,
      });

      const resetUrl = `${baseUrl}/auth/reset?token=${token}`;
      const { text, html } = buildResetEmail(resetUrl);
      await sendEmail({
        to: user.email,
        subject: "Reset your Be In The Know password",
        text,
        html,
      });
    } catch (error) {
      Sentry.captureException(error, {
        tags: { component: "auth", stage: "reset-email" },
      });
      console.error("Forgot password: reset email failed", error);
    }
  });

  // Same message whether or not the account exists.
  return Response.json({ ok: true });
}
