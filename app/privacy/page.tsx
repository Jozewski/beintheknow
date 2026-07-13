import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/layout/PageHero";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";

export const metadata: Metadata = {
  title: "Privacy Policy - Be In The Know",
  description: "What Be In The Know collects, how it is used, and your choices.",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-7">
      <h2 className="text-base font-bold text-[#085041]">{title}</h2>
      <div className="mt-2 space-y-3">{children}</div>
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="Effective date: July 2026 - what we collect, how it is used, and your choices."
      />
      <main className="mx-auto max-w-3xl px-4 py-10 text-[14px] leading-6 text-gray-700">
        <p>
          We built Be In The Know for people in a vulnerable moment, so we
          collect as little as we can and we say plainly what happens with it.
        </p>

        <Section title="1. What we collect">
          <p>
            <strong>Questions and conversations.</strong> The questions you ask
            JO and the answers you receive are stored so your conversation can
            continue and, if you have an account, follow you across devices.
            Before a question is stored, we automatically remove things that
            look like Social Security numbers, phone numbers, email addresses,
            and street addresses.
          </p>
          <p>
            <strong>Account information.</strong> If you create an account, we
            store your email address and a securely hashed version of your
            password. We never store your password itself.
          </p>
          <p>
            <strong>Usage safeguards.</strong> To enforce fair daily question
            limits, we store a random guest token on your device and a one-way
            hashed fingerprint of your IP address. We do not store your raw IP
            address with your conversations.
          </p>
          <p>
            <strong>Errors.</strong> If something breaks, technical error
            details are sent to our error-monitoring service so we can fix it.
          </p>
        </Section>

        <Section title="2. How your questions are processed">
          <p>
            JO&apos;s answers are generated with Google&apos;s Gemini AI
            service. When you ask a question, the text of your question and
            the legal source passages we retrieve are sent to Google for
            processing, subject to Google&apos;s API terms. We do not send
            your email address or account details with your questions.
          </p>
        </Section>

        <Section title="3. What we do NOT do">
          <p>
            We do not sell your data. We do not show ads. We do not share your
            conversations with employers, landlords, courts, or government
            agencies. We do not ask for your name, criminal record, case
            numbers, or other identifying details - and we encourage you not to
            include them in your questions.
          </p>
        </Section>

        <Section title="4. Service providers">
          <p>
            We rely on a small set of providers to run the Service: MongoDB
            Atlas (database hosting), Vercel (application hosting), Google
            (AI processing, as described above), and Sentry (error
            monitoring). Each receives only what it needs to do its job.
          </p>
        </Section>

        <Section title="5. Cookies and device storage">
          <p>
            If you sign in, we set one cookie that keeps you signed in. It is
            httpOnly (not readable by scripts) and expires after 30 days. For
            guests, we store a random token and your conversation reference in
            your browser&apos;s local storage so your chat survives a page refresh.
            We use no advertising or tracking cookies.
          </p>
        </Section>

        <Section title="6. Retention and deletion">
          <p>
            Conversations and account data are kept while your account is
            active. Guest conversations are automatically and permanently
            deleted after about 90 days of inactivity. You can
            permanently delete your account and every conversation saved to it
            yourself at any time from your{" "}
            <Link href="/auth" className="font-semibold text-[#085041] underline-offset-2 hover:underline">
              account page
            </Link>
            . You can also email beintheknowjustaskjo@gmail.com from the address on
            the account and we will remove it for you.
          </p>
        </Section>

        <Section title="7. Children">
          <p>
            The Service is not directed to children under 13, and we do not
            knowingly collect information from them.
          </p>
        </Section>

        <Section title="8. Changes">
          <p>
            If this policy changes, we will update the effective date above.
            Meaningful changes will be noted on the site.
          </p>
        </Section>

        <Section title="9. Contact">
          <p>Privacy questions: beintheknowjustaskjo@gmail.com</p>
        </Section>

        <p className="mt-8 text-[12px] text-gray-500">
          See also our <Link href="/terms" className="font-semibold text-[#085041] hover:underline">Terms of Use</Link>{" "}
          and <Link href="/about" className="font-semibold text-[#085041] hover:underline">About page</Link>.
        </p>
      </main>
      <SiteFooter />
    </div>
  );
}
