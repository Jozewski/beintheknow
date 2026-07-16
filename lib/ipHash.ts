import { createHash } from "node:crypto";

/**
 * Peppered SHA-256 of the caller's IP - we never store or log raw IPs.
 * Shared by chat quota counting and auth rate limiting so every feature
 * hashes IPs exactly the same way.
 */
export function getClientIpHash(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded?.split(",")[0]?.trim();
  if (!ip) return undefined;

  const pepper = process.env.JWT_SECRET;
  if (!pepper && process.env.NODE_ENV === "production") {
    // A public constant pepper would make IP hashes brute-forceable,
    // breaking the "no raw IPs" privacy promise - fail loudly instead.
    throw new Error("Missing JWT_SECRET; it is required to pepper IP hashes.");
  }
  return createHash("sha256")
    .update(`${ip}:${pepper ?? "beintheknow"}`)
    .digest("hex");
}
