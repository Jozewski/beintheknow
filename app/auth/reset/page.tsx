"use client";

import { Suspense, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

/**
 * Landing page for the emailed password-reset link
 * (/auth/reset?token=...). Deliberately does NOT sign the user in after a
 * reset - on shared computers the safest end state is "password changed,
 * now sign in yourself".
 */
function ResetPasswordForm() {
  const token = useSearchParams().get("token") ?? undefined;
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string>();
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    if (submitting || !token) return;

    setError(undefined);
    setSubmitting(true);
    try {
      const response = await fetch("/api/auth/reset", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, password }),
      });
      const data = await response.json();

      if (!response.ok) {
        setError(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setDone(true);
    } catch {
      setError("Something went wrong. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[linear-gradient(135deg,#060C18_0%,#085041_100%)] px-4 py-10">
      <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl">
        {done ? (
          <div className="text-center">
            <h1 className="text-xl font-bold text-[#085041]">Password changed</h1>
            <p className="mt-2 text-[13px] leading-5 text-gray-600">
              Your new password is saved. Sign in with it to see your
              conversations with JO.
            </p>
            <Link
              href="/auth?mode=login"
              className="mt-5 block w-full rounded-lg bg-[#1D9E75] py-2.5 text-[13px] font-semibold text-white transition hover:bg-[#0F6E56]"
            >
              Sign in
            </Link>
          </div>
        ) : !token ? (
          <div className="text-center">
            <h1 className="text-xl font-bold text-[#085041]">
              This link is not complete
            </h1>
            <p className="mt-2 text-[13px] leading-5 text-gray-600">
              Use the newest reset link from your email, or ask for a new one.
            </p>
            <Link
              href="/auth?mode=forgot"
              className="mt-5 block w-full rounded-lg bg-[#1D9E75] py-2.5 text-[13px] font-semibold text-white transition hover:bg-[#0F6E56]"
            >
              Request a new link
            </Link>
          </div>
        ) : (
          <>
            <div className="mb-5 text-center">
              <h1 className="text-xl font-bold text-[#085041]">Pick a new password</h1>
              <p className="mt-1 text-[12px] leading-5 text-gray-600">
                Choose a new password for your Be In The Know account.
              </p>
            </div>

            <form onSubmit={submit} className="space-y-3">
              <label className="block">
                <span className="mb-1 block text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  New password (at least 8 characters)
                </span>
                <input
                  type="password"
                  required
                  minLength={8}
                  autoComplete="new-password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-[13px] text-gray-900 outline-none focus:border-[#1D9E75] focus:ring-2 focus:ring-[#1D9E75]/30"
                />
              </label>

              {error ? (
                <p className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-[12px] leading-4 text-red-700">
                  {error}
                </p>
              ) : null}

              <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-lg bg-[#1D9E75] py-2.5 text-[13px] font-semibold text-white transition hover:bg-[#0F6E56] disabled:opacity-60"
              >
                {submitting ? "One moment..." : "Save new password"}
              </button>
            </form>
          </>
        )}

        <p className="mt-4 text-center text-[11px] leading-4 text-gray-500">
          Educational information only. Be In The Know is not a law firm and
          does not provide legal advice.
        </p>

        <p className="mt-3 text-center">
          <Link href="/" className="text-[12px] font-semibold text-[#085041] underline-offset-2 hover:underline">
            Back to Be In The Know
          </Link>
        </p>
      </div>
    </div>
  );
}

export default function ResetPasswordPage() {
  // useSearchParams requires a Suspense boundary during prerender.
  return (
    <Suspense fallback={null}>
      <ResetPasswordForm />
    </Suspense>
  );
}
