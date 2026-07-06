"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const GUEST_TOKEN_KEY = "jo:guestToken";

function readGuestToken() {
  if (typeof window === "undefined") return undefined;
  try {
    return window.localStorage.getItem(GUEST_TOKEN_KEY) ?? undefined;
  } catch {
    return undefined;
  }
}

export default function AuthPage() {
  const router = useRouter();
  const [mode, setMode] = useState<"login" | "register">("register");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string>();
  const [submitting, setSubmitting] = useState(false);
  const [signedInAs, setSignedInAs] = useState<string>();

  useEffect(() => {
    fetch("/api/auth/me")
      .then(async (response) => {
        if (!response.ok) return;
        const data = (await response.json()) as { user?: { email: string } | null };
        if (data.user?.email) setSignedInAs(data.user.email);
      })
      .catch(() => {});
  }, []);

  async function signOut() {
    await fetch("/api/auth/logout", { method: "POST" }).catch(() => {});
    setSignedInAs(undefined);
    router.refresh();
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
        body: JSON.stringify({
          email,
          password,
          // Adopt this device's guest conversations into the account.
          guestToken: readGuestToken(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      router.push("/");
      router.refresh();
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
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[linear-gradient(135deg,#060C18_0%,#085041_100%)] px-4 py-10">
      <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl">
        <div className="mb-5 text-center">
          <h1 className="text-xl font-bold text-[#085041]">
            {mode === "register" ? "Create your free account" : "Welcome back"}
          </h1>
          <p className="mt-1 text-[12px] leading-5 text-gray-600">
            {mode === "register"
              ? "Keep your conversations with JO, pick up where you left off on any device, and get a higher daily question limit."
              : "Sign in to see your saved conversations with JO."}
          </p>
        </div>

        <div className="mb-5 grid grid-cols-2 rounded-lg bg-gray-100 p-1 text-[12px] font-semibold">
          <button
            type="button"
            onClick={() => setMode("register")}
            className={`rounded-md py-1.5 transition ${
              mode === "register" ? "bg-white text-[#085041] shadow" : "text-gray-500"
            }`}
          >
            Sign up
          </button>
          <button
            type="button"
            onClick={() => setMode("login")}
            className={`rounded-md py-1.5 transition ${
              mode === "login" ? "bg-white text-[#085041] shadow" : "text-gray-500"
            }`}
          >
            Sign in
          </button>
        </div>

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
            {submitting
              ? "One moment..."
              : mode === "register"
                ? "Create account"
                : "Sign in"}
          </button>
        </form>

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
