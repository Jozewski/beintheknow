import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/layout/PageHero";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";

export const metadata: Metadata = {
  title: "About - Be In The Know",
  description:
    "Why Be In The Know exists, how JO answers questions, and what this platform is and is not.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <PageHero
        eyebrow="Our Mission"
        title="About Be In The Know"
        description="Why this platform exists, how JO answers questions, and what we are - and are not."
      />
      <main className="mx-auto max-w-3xl px-4 py-10 text-[14px] leading-6 text-gray-700">
        <p>
          Every year, hundreds of thousands of people come home from prison and
          jail. From day one, they face rules about voting, jobs, housing,
          record clearing, and supervision. Those rules exist in writing - but
          they are scattered across fifty states, written in hard legal
          language, and they change all the time. Most people never get a fair
          chance to understand them.
        </p>
        <p className="mt-3">
          Be In The Know exists to close that gap. We turn official law into
          plain English so people navigating reentry can understand their
          rights, see the actual sources, and know what step to take next.
        </p>

        <h2 className="mt-8 text-lg font-bold text-[#085041]">Meet JO</h2>
        <p className="mt-3">
          JO is our question-answering assistant. When you ask JO something, it
          searches a reviewed library of official state and federal law and
          plain-language summaries for your state and topic. JO writes its
          answer only from what it finds there, in simple words, and shows you
          numbered citations you can click to read the official source
          yourself.
        </p>
        <p className="mt-3">
          JO is careful on purpose. If it does not have a trusted source for
          your question, it says so instead of guessing. It will not invent
          laws, deadlines, or promises. And it always points you to real legal
          help when your situation needs it.
        </p>

        <h2 className="mt-8 text-lg font-bold text-[#085041]">Where the information comes from</h2>
        <p className="mt-3">
          Our library is built from official statute text and reviewed
          plain-language summaries covering all fifty states across six topics:
          voting rights, record clearing, housing, employment, police
          interactions, and probation or parole. We also monitor state
          legislatures each week so that when a law we rely on may be changing,
          a person - not a computer - reviews and updates it.
        </p>

        <h2 className="mt-8 text-lg font-bold text-[#085041]">What we are not</h2>
        <p className="mt-3">
          Be In The Know is an educational tool. We are not a law firm, JO is
          not a lawyer, and nothing here is legal advice. Using this site does
          not create an attorney-client relationship. Laws change and every
          situation is different, so before you make a decision that matters,
          talk to a legal aid organization or a lawyer licensed in your state.
          A good place to start is{" "}
          <a
            href="https://www.lawhelp.org"
            className="font-semibold text-[#085041] underline-offset-2 hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            LawHelp.org
          </a>
          .
        </p>

        <h2 className="mt-8 text-lg font-bold text-[#085041]">Who built this</h2>
        <p className="mt-3">
          Be In The Know was created by Jozewski Enterprises, built on a
          simple principle: people should not have to read legal code alone
          to understand the rights that shape their future.
        </p>

        <p className="mt-8 text-[12px] text-gray-500">
          See also our <Link href="/terms" className="font-semibold text-[#085041] hover:underline">Terms of Use</Link>{" "}
          and <Link href="/privacy" className="font-semibold text-[#085041] hover:underline">Privacy Policy</Link>.
        </p>
      </main>
      <SiteFooter />
    </div>
  );
}
