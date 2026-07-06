import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

/**
 * Authentication helpers: bcrypt password hashing plus a JWT carried in an
 * httpOnly cookie. Cookie parsing/serialization is done manually against the
 * standard Request/Response APIs so it stays independent of Next.js API
 * changes between versions.
 */

export const AUTH_COOKIE_NAME = "jo_auth";
const TOKEN_TTL_SECONDS = 60 * 60 * 24 * 30; // 30 days

export type AuthenticatedUser = {
  userId: string;
  email: string;
};

function getJwtSecret() {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error("Missing JWT_SECRET. Add it to .env.local to use accounts.");
  }
  return secret;
}

export async function hashPassword(password: string) {
  return bcrypt.hash(password, 10);
}

export async function verifyPassword(password: string, passwordHash: string) {
  return bcrypt.compare(password, passwordHash);
}

export function signAuthToken(user: AuthenticatedUser) {
  return jwt.sign({ email: user.email }, getJwtSecret(), {
    subject: user.userId,
    expiresIn: TOKEN_TTL_SECONDS,
  });
}

export function buildAuthCookie(token: string) {
  const parts = [
    `${AUTH_COOKIE_NAME}=${token}`,
    "Path=/",
    "HttpOnly",
    "SameSite=Lax",
    `Max-Age=${TOKEN_TTL_SECONDS}`,
  ];

  if (process.env.NODE_ENV === "production") {
    parts.push("Secure");
  }

  return parts.join("; ");
}

export function buildLogoutCookie() {
  return `${AUTH_COOKIE_NAME}=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0`;
}

function readCookie(request: Request, name: string) {
  const cookieHeader = request.headers.get("cookie");
  if (!cookieHeader) return undefined;

  for (const pair of cookieHeader.split(";")) {
    const separatorIndex = pair.indexOf("=");
    if (separatorIndex === -1) continue;

    const key = pair.slice(0, separatorIndex).trim();
    if (key === name) {
      return pair.slice(separatorIndex + 1).trim();
    }
  }

  return undefined;
}

/**
 * Returns the authenticated user from the request's auth cookie, or null.
 * Trusts the signed JWT - no database lookup needed on hot paths.
 */
export function getAuthenticatedUser(request: Request): AuthenticatedUser | null {
  const token = readCookie(request, AUTH_COOKIE_NAME);
  if (!token) return null;

  try {
    const payload = jwt.verify(token, getJwtSecret());
    if (typeof payload === "string" || !payload.sub) return null;

    return {
      userId: payload.sub,
      email: typeof payload.email === "string" ? payload.email : "",
    };
  } catch {
    return null;
  }
}
