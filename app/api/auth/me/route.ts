import { getAuthenticatedUser } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const user = getAuthenticatedUser(request);

  if (!user) {
    return Response.json({ user: null });
  }

  return Response.json({ user: { email: user.email } });
}
