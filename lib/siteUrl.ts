/**
 * Per-environment site base URL, shared by sitemap.ts and robots.ts so the
 * two can never disagree. Falls back to localhost outside production so a
 * local build without NEXT_PUBLIC_APP_URL never emits production URLs.
 * Trailing slashes are stripped so joined paths never produce "//about".
 */
export function getSiteBaseUrl() {
  const fallback =
    process.env.NODE_ENV === "production"
      ? "https://beintheknow.vercel.app"
      : "http://localhost:3000";
  return (process.env.NEXT_PUBLIC_APP_URL ?? fallback).replace(/\/+$/, "");
}
