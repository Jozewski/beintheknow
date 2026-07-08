"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { PageHero } from "@/components/layout/PageHero";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";

type SessionPreview = {
  id: string;
  jurisdiction: "federal" | "state";
  stateCode?: string;
  preview: string;
  updatedAt?: string;
};

type Citation = {
  citation?: string;
  title?: string;
  sourceName?: string;
  sourceUrl?: string;
};

type HistoryMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
  citations?: Citation[];
};

function formatDate(value?: string) {
  if (!value) return "";
  try {
    return new Date(value).toLocaleDateString(undefined, {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return "";
  }
}

export default function AccountPage() {
  const router = useRouter();
  const [authState, setAuthState] = useState<"checking" | "signed-out" | "ok">("checking");
  const [email, setEmail] = useState<string>();
  const [sessions, setSessions] = useState<SessionPreview[]>();
  const [openId, setOpenId] = useState<string>();
  const [transcript, setTranscript] = useState<HistoryMessage[]>();
  const [transcriptLoading, setTranscriptLoading] = useState(false);

  // Delete-account state
  const [showDelete, setShowDelete] = useState(false);
  const [deletePassword, setDeletePassword] = useState("");
  const [deleteError, setDeleteError] = useState<string>();
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const meResponse = await fetch("/api/auth/me");
        const me = (await meResponse.json()) as { user?: { email: string } | null };
        if (!me.user?.email) {
          setAuthState("signed-out");
          return;
        }
        setEmail(me.user.email);
        setAuthState("ok");

        // Claim any guest conversations saved on this device before listing,
        // so history created before sign-in shows up under the account.
        try {
          const guestToken = window.localStorage.getItem("jo:guestToken");
          if (guestToken) {
            await fetch("/api/chat/adopt", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ guestToken }),
            });
          }
        } catch {
          // Adoption is best-effort; listing still proceeds.
        }

        const sessionsResponse = await fetch("/api/chat/sessions");
        if (sessionsResponse.ok) {
          const data = (await sessionsResponse.json()) as { sessions: SessionPreview[] };
          setSessions(data.sessions);
        } else {
          setSessions([]);
        }
      } catch {
        setAuthState("signed-out");
      }
    })();
  }, []);

  const openConversation = useCallback(
    async (id: string) => {
      if (openId === id) {
        setOpenId(undefined);
        setTranscript(undefined);
        return;
      }
      setOpenId(id);
      setTranscript(undefined);
      setTranscriptLoading(true);
      try {
        const response = await fetch(`/api/chat/history?sessionId=${id}`);
        if (response.ok) {
          const data = (await response.json()) as { messages: HistoryMessage[] };
          setTranscript(data.messages);
        } else {
          setTranscript([]);
        }
      } catch {
        setTranscript([]);
      } finally {
        setTranscriptLoading(false);
      }
    },
    [openId],
  );

  async function signOut() {
    await fetch("/api/auth/logout", { method: "POST" }).catch(() => {});
    router.push("/");
    router.refresh();
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
      try {
        window.localStorage.removeItem("jo:guestToken");
        window.localStorage.removeItem("jo:sessionId");
      } catch {}
      router.push("/");
      router.refresh();
    } catch {
      setDeleteError("Could not delete your account. Please check your connection.");
    } finally {
      setDeleting(false);
    }
  }

  if (authState === "checking") {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[linear-gradient(135deg,#060C18_0%,#085041_100%)] text-sm text-white/70">
        Loading your account...
      </div>
    );
  }

  if (authState === "signed-out") {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[linear-gradient(135deg,#060C18_0%,#085041_100%)] px-4">
        <div className="w-full max-w-sm rounded-2xl bg-white p-6 text-center shadow-2xl">
          <h1 className="text-lg font-bold text-[#085041]">Sign in to see your account</h1>
          <p className="mt-2 text-sm leading-5 text-gray-600">
            Create a free account or sign in to save your conversations with JO
            and pick up where you left off on any device.
          </p>
          <Link
            href="/auth"
            className="mt-4 inline-block w-full rounded-lg bg-[#1D9E75] py-2.5 text-sm font-semibold text-white transition hover:bg-[#0F6E56]"
          >
            Sign in or sign up
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <PageHero
        eyebrow="My Account"
        title="Your conversations with JO"
        description="Everything you have asked, saved to your account and private to you."
      />
      <main className="mx-auto max-w-3xl px-4 py-8">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-lg border border-[#9FE1CB] bg-[#E1F5EE]/50 px-4 py-3">
          <p className="text-[13px] text-[#085041]">
            Signed in as <span className="font-semibold">{email}</span>
          </p>
          <div className="flex gap-2">
            <Link
              href="/"
              className="rounded-md bg-[#1D9E75] px-3 py-1.5 text-[12px] font-semibold text-white hover:bg-[#0F6E56]"
            >
              Ask JO a question
            </Link>
            <button
              type="button"
              onClick={signOut}
              className="rounded-md border border-gray-300 px-3 py-1.5 text-[12px] font-semibold text-gray-600 hover:bg-gray-50"
            >
              Sign out
            </button>
          </div>
        </div>

        <h2 className="mb-3 text-base font-bold text-[#085041]">Past conversations</h2>

        {sessions === undefined ? (
          <p className="text-sm text-gray-500">Loading conversations...</p>
        ) : sessions.length === 0 ? (
          <div className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-8 text-center">
            <p className="text-sm text-gray-600">You have not asked JO anything yet.</p>
            <Link
              href="/"
              className="mt-3 inline-block rounded-md bg-[#1D9E75] px-4 py-2 text-[13px] font-semibold text-white hover:bg-[#0F6E56]"
            >
              Start a conversation
            </Link>
          </div>
        ) : (
          <ul className="space-y-2">
            {sessions.map((session) => (
              <li key={session.id} className="rounded-lg border border-gray-200">
                <button
                  type="button"
                  onClick={() => openConversation(session.id)}
                  className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left hover:bg-gray-50"
                >
                  <span className="min-w-0">
                    <span className="block truncate text-[13px] font-medium text-gray-900">
                      {session.preview}
                    </span>
                    <span className="text-[11px] text-gray-500">
                      {session.jurisdiction === "state" && session.stateCode
                        ? `${session.stateCode} rights`
                        : "Federal rights"}
                      {session.updatedAt ? ` · ${formatDate(session.updatedAt)}` : ""}
                    </span>
                  </span>
                  <span className="shrink-0 text-[11px] font-semibold text-[#085041]">
                    {openId === session.id ? "Hide" : "View"}
                  </span>
                </button>

                {openId === session.id ? (
                  <div className="space-y-3 border-t border-gray-100 px-4 py-3">
                    {transcriptLoading ? (
                      <p className="text-[12px] text-gray-500">Loading...</p>
                    ) : transcript && transcript.length > 0 ? (
                      transcript.map((message) => (
                        <div
                          key={message.id}
                          className={
                            message.role === "user"
                              ? "ml-auto max-w-[85%] rounded-lg bg-[#1D9E75] px-3 py-2 text-[12px] leading-5 text-white"
                              : "max-w-[85%] rounded-lg bg-gray-100 px-3 py-2 text-[12px] leading-5 text-gray-700"
                          }
                        >
                          <p className="whitespace-pre-wrap">{message.content}</p>
                          {message.role === "assistant" &&
                          message.citations &&
                          message.citations.length > 0 ? (
                            <div className="mt-2 space-y-1 border-t border-gray-200 pt-2">
                              {message.citations.slice(0, 4).map((citation, index) => {
                                const label =
                                  citation.citation ??
                                  citation.title ??
                                  citation.sourceName ??
                                  `Source ${index + 1}`;
                                return citation.sourceUrl ? (
                                  <a
                                    key={`${label}-${index}`}
                                    href={citation.sourceUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block truncate text-[10px] font-semibold text-[#085041] underline-offset-2 hover:underline"
                                  >
                                    {label}
                                  </a>
                                ) : (
                                  <p
                                    key={`${label}-${index}`}
                                    className="truncate text-[10px] font-semibold text-[#085041]"
                                  >
                                    {label}
                                  </p>
                                );
                              })}
                            </div>
                          ) : null}
                        </div>
                      ))
                    ) : (
                      <p className="text-[12px] text-gray-500">
                        This conversation could not be loaded.
                      </p>
                    )}
                  </div>
                ) : null}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-10 border-t border-gray-200 pt-5">
          {!showDelete ? (
            <button
              type="button"
              onClick={() => setShowDelete(true)}
              className="text-[12px] font-semibold text-red-600 underline-offset-2 hover:underline"
            >
              Delete my account and conversations
            </button>
          ) : (
            <form onSubmit={deleteAccount} className="max-w-sm space-y-2">
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
      </main>
      <SiteFooter />
    </div>
  );
}
