import { z } from "zod";

import {
  buildAuthCookie,
  signAuthToken,
  verifyPassword,
} from "@/lib/auth";
import { connectDB } from "@/lib/mongodb";
import { UserModel } from "@/models/User";

export const dynamic = "force-dynamic";

const loginSchema = z.object({
  email: z.string().trim().toLowerCase().email().max(320),
  password: z.string().min(1).max(200),
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

  const parsed = loginSchema.safeParse(body);
  if (!parsed.success) {
    return Response.json(
      { error: "Please enter your email and password." },
      { status: 400 },
    );
  }

  const { email, password } = parsed.data;

  try {
    await connectDB();
  } catch (error) {
    console.error("Login: database connection failed", error);
    return Response.json(
      { error: "Sign-in is not available right now. Please try again." },
      { status: 503 },
    );
  }

  const user = await UserModel.findOne({ email }).select("email passwordHash");

  // Same error for wrong email and wrong password - no account enumeration.
  if (!user || !(await verifyPassword(password, user.passwordHash))) {
    return Response.json(
      { error: "Email or password is incorrect." },
      { status: 401 },
    );
  }

  // Deliberately NO guest-conversation adoption: on shared computers the
  // device's guest chat may belong to the previous person at the machine.
  // Every sign-in starts with a clean slate.

  const token = signAuthToken({
    userId: user._id.toString(),
    email: user.email,
  });

  return Response.json(
    { user: { email: user.email } },
    { headers: { "Set-Cookie": buildAuthCookie(token) } },
  );
}
