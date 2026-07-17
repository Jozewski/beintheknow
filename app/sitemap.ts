import type { MetadataRoute } from "next";

import { getSiteBaseUrl } from "@/lib/siteUrl";

/**
 * Served at /sitemap.xml. Public, indexable pages only - /account, /admin,
 * and /auth/reset (emailed token links) are deliberately absent.
 * No lastModified: we have no real per-page timestamps, and stamping every
 * entry "changed now" on each deploy would mislead crawlers into recrawls.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteBaseUrl();

  return [
    {
      url: baseUrl,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/auth`,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
