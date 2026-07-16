import type { MetadataRoute } from "next";

// Same per-environment base URL as layout.tsx metadataBase.
const baseUrl = (
  process.env.NEXT_PUBLIC_APP_URL ?? "https://beintheknow.vercel.app"
).replace(/\/+$/, "");

/**
 * Served at /robots.txt. Keeps private surfaces out of search results:
 * accounts, the admin dashboard, API routes, and emailed password-reset
 * links (which carry a token in the URL).
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/account", "/admin", "/api/", "/auth/reset"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
