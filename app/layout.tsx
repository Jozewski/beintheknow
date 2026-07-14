import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  // Absolute base for social share images (og:image must be a full URL).
  metadataBase: new URL("https://beintheknow.vercel.app"),
  title: "Be In The Know: Just Ask JO",
  description: "Plain-language legal rights information, state by state.",
  openGraph: {
    title: "Be In The Know: Just Ask JO",
    description:
      "Free plain-English rights education for voting, expungement, housing, employment, police interactions, and supervision - state by state.",
    url: "/",
    siteName: "Be In The Know",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Be In The Know: Just Ask JO",
    description:
      "Free plain-English rights education, state by state. Just Ask JO.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${dmSerif.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}