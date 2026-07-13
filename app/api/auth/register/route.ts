import { z } from "zod";

import {
  buildAuthCookie,
  hashPassword,
  signAuthToken,
} from "@/lib/auth";
import { connectDB } from "@/lib/mongodb";
import { UserModel } from "@/models/User";

export const dynamic = "force-dynamic";

const registerSchema = z.object({
  email: z.string().trim().toLowerCase().email().max(320),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters.")
    .max(200),
});

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

  const parsed = registerSchema.safeParse(body);
  if (!parsed.success) {
    const firstIssue = parsed.error.issues[0];
    return Response.json(
      { error: firstIssue?.message ?? "Invalid email or password." },
      { status: 400 },
    );
  }

  const { email, password } = parsed.data;

  try {
    await connectDB();
  } catch (error) {
    console.error("Register: database connection failed", error);
    return Response.json(
      { error: "Accounts are not available right now. Please try again." },
      { status: 503 },
    );
  }

  const existing = await UserModel.findOne({ email }).select("_id").lean();
  if (existing) {
    return Response.json(
      { error: "An account with this email already exists. Try signing in." },
      { status: 409 },
    );
  }

  const user = await UserModel.create({
    email,
    passwordHash: await hashPassword(password),
    plan: "registered",
  });

  // Deliberately NO guest-conversation adoption: on shared computers
  // (halfway houses, reentry centers, libraries) the device's guest chat
  // may belong to the previous person at the machine. Every sign-up starts
  // with a clean slate.

  const token = signAuthToken({
    userId: user._id.toString(),
    email: user.email,
  });

  return Response.json(
    { user: { email: user.email } },
    { status: 201, headers: { "Set-Cookie": buildAuthCookie(token) } },
  );
}
