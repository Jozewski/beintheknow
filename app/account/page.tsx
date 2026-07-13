"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDown, MessageCircle, ShieldAlert } from "lucide-react";

import { PageHero } from "@/components/layout/PageHero";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { clearStoredChatState } from "@/lib/chatClientStorage";
import { cn } from "@/lib/utils";

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

        // Deliberately NO guest-conversation adoption here: on shared
        // computers (halfway houses, reentry centers, libraries) the
        // device's guest chat may belong to the previous person at the
        // machine. Accounts only ever list conversations they created
        // while signed in.

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
    // Shared computers: signing out means walking away from this device.
    // Clear stored chat continuity keys and do a full navigation so no
    // conversation state survives for the next person at the machine.
    clearStoredChatState();
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
      clearStoredChatState();
      window.location.assign("/");
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
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-[#9FE1CB] bg-gradient-to-r from-[#E1F5EE] to-white px-5 py-4 shadow-sm">
          <div className="flex min-w-0 items-center gap-3">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#085041,#1D9E75)] text-sm font-bold text-white shadow-sm">
              {(email ?? "?").charAt(0).toUpperCase()}
            </span>
            <span className="min-w-0">
              <span className="block truncate text-[13px] font-semibold text-[#085041]">{email}</span>
              <span className="text-[11px] text-[#0F6E56]">Signed in</span>
            </span>
          </div>
          <div className="flex gap-2">
            <Link
              href="/"
              className="rounded-full bg-[#1D9E75] px-4 py-2 text-[12px] font-semibold text-white shadow-sm transition hover:bg-[#0F6E56]"
            >
              Ask JO a question
            </Link>
            <button
              type="button"
              onClick={signOut}
              className="rounded-full border border-gray-300 bg-white px-4 py-2 text-[12px] font-semibold text-gray-600 transition hover:border-gray-400 hover:bg-gray-50"
            >
              Sign out
            </button>
          </div>
        </div>

        <div className="mb-4 flex items-center gap-2">
          <h2 className="text-base font-bold text-[#085041]">Past conversations</h2>
          {sessions && sessions.length > 0 ? (
            <span className="rounded-full bg-[#E1F5EE] px-2 py-0.5 text-[11px] font-semibold text-[#085041]">
              {sessions.length}
            </span>
          ) : null}
        </div>

        {sessions === undefined ? (
          <p className="text-sm text-gray-500">Loading conversations...</p>
        ) : sessions.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-[#9FE1CB] bg-[#E1F5EE]/30 px-4 py-10 text-center">
            <span className="mx-auto mb-3 flex size-12 items-center justify-center rounded-full bg-white shadow-sm">
              <MessageCircle className="size-5 text-[#1D9E75]" aria-hidden="true" />
            </span>
            <p className="text-sm text-gray-600">You have not asked JO anything yet.</p>
            <Link
              href="/"
              className="mt-4 inline-block rounded-full bg-[#1D9E75] px-5 py-2 text-[13px] font-semibold text-white shadow-sm transition hover:bg-[#0F6E56]"
            >
              Start a conversation
            </Link>
          </div>
        ) : (
          <ul className="space-y-3">
            {sessions.map((session) => (
              <li
                key={session.id}
                className={cn(
                  "overflow-hidden rounded-2xl border bg-white shadow-sm transition",
                  openId === session.id
                    ? "border-[#9FE1CB] shadow-md"
                    : "border-gray-200 hover:border-[#9FE1CB]",
                )}
              >
                <button
                  type="button"
                  onClick={() => openConversation(session.id)}
                  className="flex w-full items-center gap-3 px-4 py-3.5 text-left transition hover:bg-[#E1F5EE]/30"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#E1F5EE]">
                    <MessageCircle className="size-4 text-[#085041]" aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-[13px] font-medium text-gray-900">
                      {session.preview}
                    </span>
                    <span className="mt-0.5 flex items-center gap-2 text-[11px] text-gray-500">
                      <span className="rounded-full bg-[#E1F5EE] px-2 py-px font-semibold text-[#085041]">
                        {session.jurisdiction === "state" && session.stateCode
                          ? `${session.stateCode} rights`
                          : "Federal rights"}
                      </span>
                      {session.updatedAt ? <span>{formatDate(session.updatedAt)}</span> : null}
                    </span>
                  </span>
                  <ChevronDown
                    className={cn(
                      "size-4 shrink-0 text-[#085041] transition-transform",
                      openId === session.id && "rotate-180",
                    )}
                    aria-hidden="true"
                  />
                </button>

                {openId === session.id ? (
                  <div className="space-y-3 border-t border-[#E1F5EE] bg-[#FAFCFB] px-4 py-4">
                    {transcriptLoading ? (
                      <p className="text-[12px] text-gray-500">Loading...</p>
                    ) : transcript && transcript.length > 0 ? (
                      transcript.map((message) => (
                        <div
                          key={message.id}
                          className={
                            message.role === "user"
                              ? "ml-auto max-w-[85%] rounded-2xl rounded-br-md bg-[linear-gradient(135deg,#13835F,#0F6E56)] px-3.5 py-2.5 text-[12px] leading-5 text-white shadow-sm"
                              : "max-w-[85%] rounded-2xl rounded-bl-md border border-gray-200 bg-white px-3.5 py-2.5 text-[12px] leading-5 text-gray-700 shadow-sm"
                          }
                        >
                          <p className="whitespace-pre-wrap">{message.content}</p>
                          {message.role === "assistant" &&
                          message.citations &&
                          message.citations.length > 0 ? (
                            <div className="mt-2.5 border-t border-gray-100 pt-2">
                              <p className="mb-1.5 text-[9px] font-semibold uppercase tracking-wider text-gray-500">
                                Sources
                              </p>
                              <div className="flex flex-wrap gap-1.5">
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
                                      className="max-w-full truncate rounded-full border border-[#9FE1CB] bg-[#E1F5EE]/60 px-2.5 py-1 text-[10px] font-semibold text-[#085041] transition hover:bg-[#E1F5EE]"
                                    >
                                      {label}
                                    </a>
                                  ) : (
                                    <span
                                      key={`${label}-${index}`}
                                      className="max-w-full truncate rounded-full border border-[#9FE1CB] bg-[#E1F5EE]/60 px-2.5 py-1 text-[10px] font-semibold text-[#085041]"
                                    >
                                      {label}
                                    </span>
                                  );
                                })}
                              </div>
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

        <div className="mt-12 rounded-2xl border border-red-100 bg-red-50/40 p-5">
          <div className="mb-2 flex items-center gap-2">
            <ShieldAlert className="size-4 text-red-500" aria-hidden="true" />
            <h3 className="text-[13px] font-bold text-red-700">Danger zone</h3>
          </div>
          {!showDelete ? (
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-[12px] leading-4 text-gray-600">
                Permanently delete your account and every conversation saved to it.
              </p>
              <button
                type="button"
                onClick={() => setShowDelete(true)}
                className="rounded-full border border-red-200 bg-white px-4 py-1.5 text-[12px] font-semibold text-red-600 transition hover:bg-red-50"
              >
                Delete my account
              </button>
            </div>
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
                className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-[13px] text-gray-900 outline-none focus:border-red-400 focus:ring-2 focus:ring-red-200"
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
                  className="rounded-full bg-red-600 px-4 py-2 text-[12px] font-semibold text-white transition hover:bg-red-700 disabled:opacity-50"
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
                  className="rounded-full border border-gray-300 bg-white px-4 py-2 text-[12px] font-semibold text-gray-600 transition hover:bg-gray-50"
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
