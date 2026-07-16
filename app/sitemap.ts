import type { MetadataRoute } from "next";

// Same per-environment base URL as layout.tsx metadataBase; trailing
// slashes stripped so joined paths never produce "//about".
const baseUrl = (
  process.env.NEXT_PUBLIC_APP_URL ?? "https://beintheknow.vercel.app"
).replace(/\/+$/, "");

/**
 * Served at /sitemap.xml. Public, indexable pages only - /account, /admin,
 * and /auth/reset (emailed token links) are deliberately absent and are
 * disallowed in robots.ts.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/auth`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
