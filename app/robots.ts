import type { MetadataRoute } from "next";

import { getSiteBaseUrl } from "@/lib/siteUrl";

/**
 * Served at /robots.txt. Keeps private surfaces out of search results:
 * accounts, the admin dashboard, and API routes.
 *
 * /auth/reset is intentionally NOT listed: it carries a noindex (see
 * app/auth/reset/layout.tsx), and crawlers can only see a noindex on pages
 * they are allowed to fetch. Disallowing it here would hide that signal
 * and leave reset URLs "indexed, though blocked by robots.txt".
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/account", "/admin", "/api/"],
    },
    sitemap: `${getSiteBaseUrl()}/sitemap.xml`,
  };
}
