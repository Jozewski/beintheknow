"use client";

import { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { clearStoredChatState } from "@/lib/chatClientStorage";

function AuthPageInner() {
  // Support deep links like /auth?mode=login (the reset-success page uses this).
  const requestedMode = useSearchParams().get("mode");
  const [mode, setMode] = useState<"login" | "register" | "forgot">(
    requestedMode === "login" || requestedMode === "forgot"
      ? requestedMode
      : "register",
  );
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string>();
  const [submitting, setSubmitting] = useState(false);
  const [forgotSent, setForgotSent] = useState(false);
  const [signedInAs, setSignedInAs] = useState<string>();
  const [showDelete, setShowDelete] = useState(false);
  const [deletePassword, setDeletePassword] = useState("");
  const [deleteError, setDeleteError] = useState<string>();
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    fetch("/api/auth/me")
      .then(async (response) => {
        if (!response.ok) return;
        const data = (await response.json()) as { user?: { email: string } | null };
        if (data.user?.email) setSignedInAs(data.user.email);
      })
      .catch(() => {});
  }, []);

  function switchMode(next: "login" | "register" | "forgot") {
    setMode(next);
    setError(undefined);
    setForgotSent(false);
    setPassword("");
  }

  async function signOut() {
    await fetch("/api/auth/logout", { method: "POST" }).catch(() => {});
    // Shared computers (halfway houses, reentry centers, libraries): signing
    // out means walking away from this device. Clear the stored chat
    // continuity keys and do a full navigation so no conversation state -
    // in memory or in localStorage - survives for the next person.
    clearStoredChatState();
    setSignedInAs(undefined);
    window.location.assign("/");
  }

  async function deleteAccount(event: React.FormEvent) {
    event.preventDefault();
    if (deleting) return;
    if (
      !window.confirm(
        "This permanently deletes your account and every conversation saved to it. This cannot be undone. Delete your account?",
      )
    ) {
      return;
    }

    setDeleteError(undefined);
    setDeleting(true);
    try {
      const response = await fetch("/api/auth/account", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: deletePassword }),
      });
      const data = await response.json();

      if (!response.ok) {
        setDeleteError(data.error ?? "Could not delete your account. Please try again.");
        return;
      }

      // Also drop this device's chat continuity keys.
      clearStoredChatState();

      setSignedInAs(undefined);
      setShowDelete(false);
      setDeletePassword("");
      window.location.assign("/");
    } catch {
      setDeleteError("Could not delete your account. Please check your connection.");
    } finally {
      setDeleting(false);
    }
  }

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    if (submitting) return;

    setError(undefined);
    setSubmitting(true);

    try {
      const response = await fetch(`/api/auth/${mode}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(mode === "forgot" ? { email } : { email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      if (mode === "forgot") {
        setForgotSent(true);
        return;
      }

      // Every sign-in and sign-up starts with a blank chat. On shared
      // computers the device's stored guest conversation may belong to the
      // previous person at the machine, so it must never carry over.
      clearStoredChatState();
      window.location.assign("/");
    } catch {
      setError("Something went wrong. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (signedInAs) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[linear-gradient(135deg,#060C18_0%,#085041_100%)] px-4 py-10">
        <div className="w-full max-w-sm rounded-2xl bg-white p-6 text-center shadow-2xl">
          <h1 className="text-xl font-bold text-[#085041]">You are signed in</h1>
          <p className="mt-2 text-[13px] leading-5 text-gray-600">
            Signed in as <span className="font-semibold">{signedInAs}</span>.
            Your conversations with JO are saved to your account.
          </p>
          <div className="mt-5 space-y-2">
            <Link
              href="/"
              className="block w-full rounded-lg bg-[#1D9E75] py-2.5 text-[13px] font-semibold text-white transition hover:bg-[#0F6E56]"
            >
              Back to Be In The Know
            </Link>
            <button
              type="button"
              onClick={signOut}
              className="block w-full rounded-lg border border-gray-300 py-2.5 text-[13px] font-semibold text-gray-600 transition hover:bg-gray-50"
            >
              Sign out
            </button>
          </div>

          <div className="mt-6 border-t border-gray-200 pt-4 text-left">
            {!showDelete ? (
              <button
                type="button"
                onClick={() => setShowDelete(true)}
                className="text-[12px] font-semibold text-red-600 underline-offset-2 hover:underline"
              >
                Delete my account and conversations
              </button>
            ) : (
              <form onSubmit={deleteAccount} className="space-y-2">
                <p className="text-[12px] leading-4 text-gray-600">
                  This permanently deletes your account and every conversation
                  saved to it. Enter your password to confirm.
                </p>
                <input
                  type="password"
                  required
                  autoComplete="current-password"
                  placeholder="Your password"
                  value={deletePassword}
                  onChange={(event) => setDeletePassword(event.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-[13px] text-gray-900 outline-none focus:border-red-400 focus:ring-2 focus:ring-red-200"
                />
                {deleteError ? (
                  <p className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-[12px] leading-4 text-red-700">
                    {deleteError}
                  </p>
                ) : null}
                <div className="flex gap-2">
                  <button
                    type="submit"
                    disabled={deleting || !deletePassword}
                    className="rounded-lg bg-red-600 px-3 py-2 text-[12px] font-semibold text-white transition hover:bg-red-700 disabled:opacity-50"
                  >
                    {deleting ? "Deleting..." : "Permanently delete"}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowDelete(false);
                      setDeletePassword("");
                      setDeleteError(undefined);
                    }}
                    className="rounded-lg border border-gray-300 px-3 py-2 text-[12px] font-semibold text-gray-600 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[linear-gradient(135deg,#060C18_0%,#085041_100%)] px-4 py-10">
      <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl">
        <div className="mb-5 text-center">
          <h1 className="text-xl font-bold text-[#085041]">
            {mode === "register"
              ? "Create your free account"
              : mode === "login"
                ? "Welcome back"
                : "Reset your password"}
          </h1>
          <p className="mt-1 text-[12px] leading-5 text-gray-600">
            {mode === "register"
              ? "Keep your conversations with JO, pick up where you left off on any device, and get a higher daily question limit."
              : mode === "login"
                ? "Sign in to see your saved conversations with JO."
                : "Enter your email and we will send you a link to pick a new password."}
          </p>
        </div>

        <div className="mb-5 grid grid-cols-2 rounded-lg bg-gray-100 p-1 text-[12px] font-semibold">
          <button
            type="button"
            onClick={() => switchMode("register")}
            className={`rounded-md py-1.5 transition ${
              mode === "register" ? "bg-white text-[#085041] shadow" : "text-gray-500"
            }`}
          >
            Sign up
          </button>
          <button
            type="button"
            onClick={() => switchMode("login")}
            className={`rounded-md py-1.5 transition ${
              mode === "login" ? "bg-white text-[#085041] shadow" : "text-gray-500"
            }`}
          >
            Sign in
          </button>
        </div>

        {mode === "forgot" && forgotSent ? (
          <div className="space-y-4">
            <p className="rounded-lg border border-[#9FE1CB] bg-[#E1F5EE] px-3 py-3 text-[12px] leading-5 text-[#085041]">
              Check your email. If <span className="font-semibold">{email}</span>{" "}
              has an account, we just sent it a link to pick a new password.
              The link works for 45 minutes. If you do not see the email,
              check your spam folder.
            </p>
            <button
              type="button"
              onClick={() => switchMode("login")}
              className="w-full rounded-lg bg-[#1D9E75] py-2.5 text-[13px] font-semibold text-white transition hover:bg-[#0F6E56]"
            >
              Back to sign in
            </button>
          </div>
        ) : (
        <form onSubmit={submit} className="space-y-3">
          <label className="block">
            <span className="mb-1 block text-[11px] font-semibold uppercase tracking-wide text-gray-500">
              Email
            </span>
            <input
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-[13px] text-gray-900 outline-none focus:border-[#1D9E75] focus:ring-2 focus:ring-[#1D9E75]/30"
            />
          </label>

          {mode !== "forgot" ? (
            <label className="block">
              <span className="mb-1 block text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                Password {mode === "register" ? "(at least 8 characters)" : ""}
              </span>
              <input
                type="password"
                required
                minLength={mode === "register" ? 8 : 1}
                autoComplete={mode === "register" ? "new-password" : "current-password"}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-[13px] text-gray-900 outline-none focus:border-[#1D9E75] focus:ring-2 focus:ring-[#1D9E75]/30"
              />
            </label>
          ) : null}

          {mode === "login" ? (
            <p className="text-right">
              <button
                type="button"
                onClick={() => switchMode("forgot")}
                className="text-[12px] font-semibold text-[#085041] underline-offset-2 hover:underline"
              >
                Forgot your password?
              </button>
            </p>
          ) : null}

          {error ? (
            <p className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-[12px] leading-4 text-red-700">
              {error}
            </p>
          ) : null}

          {mode === "register" ? (
            <p className="text-[11px] leading-4 text-gray-500">
              By creating an account, you agree to our{" "}
              <Link href="/terms" className="font-semibold text-[#085041] underline-offset-2 hover:underline">
                Terms of Use
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="font-semibold text-[#085041] underline-offset-2 hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          ) : null}

          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-lg bg-[#1D9E75] py-2.5 text-[13px] font-semibold text-white transition hover:bg-[#0F6E56] disabled:opacity-60"
          >
            {submitting
              ? "One moment..."
              : mode === "register"
                ? "Create account"
                : mode === "login"
                  ? "Sign in"
                  : "Email me a reset link"}
          </button>

          {mode === "forgot" ? (
            <p className="text-center">
              <button
                type="button"
                onClick={() => switchMode("login")}
                className="text-[12px] font-semibold text-[#085041] underline-offset-2 hover:underline"
              >
                Back to sign in
              </button>
            </p>
          ) : null}
        </form>
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

export default function AuthPage() {
  // useSearchParams requires a Suspense boundary during prerender.
  return (
    <Suspense fallback={null}>
      <AuthPageInner />
    </Suspense>
  );
}
