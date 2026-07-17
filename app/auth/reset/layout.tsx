import type { Metadata } from "next";

// Emailed reset links carry a one-time token in the URL, so this page must
// never appear in search results. The noindex lives here (a server layout)
// because the page itself is a client component and cannot export metadata.
// Deliberately NOT disallowed in robots.txt: crawlers must be able to fetch
// the page to see the noindex - blocking it would hide the signal and leave
// URLs "indexed, though blocked by robots.txt".
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function ResetLayout({ children }: { children: React.ReactNode }) {
  return children;
}
