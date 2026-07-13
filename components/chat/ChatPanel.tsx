"use client";

import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

import { ChatInput } from "@/components/chat/ChatInput";
import { ChatMessage } from "@/components/chat/ChatMessage";
import { ChatSuggestions } from "@/components/chat/ChatSuggestions";
import { JoLogo } from "@/components/layout/JoLogo";
import type { Jurisdiction } from "@/data/content-data";
import {
  CHAT_GUEST_TOKEN_KEY,
  CHAT_SESSION_ID_KEY,
} from "@/lib/chatClientStorage";

type ChatCitation = {
  sourceName?: string;
  sourceUrl?: string;
  citation?: string;
  title?: string;
  currentAsOfLabel?: string;
};

type PanelMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
  citations?: ChatCitation[];
  /** Stored (database) message id - required to attach feedback. */
  dbId?: string;
  feedbackRating?: "up" | "down";
};

type ChatPanelProps = {
  isOpen: boolean;
  onClose: () => void;
  jurisdiction: Jurisdiction;
  stateCode: string;
  initialTopic?: string;
};

const GUEST_TOKEN_KEY = CHAT_GUEST_TOKEN_KEY;
const SESSION_ID_KEY = CHAT_SESSION_ID_KEY;

function readStoredValue(key: string) {
  if (typeof window === "undefined") return undefined;
  try {
    return window.localStorage.getItem(key) ?? undefined;
  } catch {
    return undefined;
  }
}

function writeStoredValue(key: string, value: string) {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // Private browsing or storage disabled - session continuity degrades
    // gracefully to in-memory only.
  }
}

export function ChatPanel({
  isOpen,
  onClose,
  jurisdiction,
  stateCode,
  initialTopic,
}: ChatPanelProps) {
  const [draft, setDraft] = useState(initialTopic ?? "");
  const [messages, setMessages] = useState<PanelMessage[]>([
    {
      id: "welcome",
      role: "assistant",
      content:
        "Hi, I'm JO. Ask me a rights question and I'll keep it plain English, educational, and source-aware.",
    },
  ]);
  const [sessionId, setSessionId] = useState<string | undefined>(() =>
    readStoredValue(SESSION_ID_KEY),
  );
  const [guestToken, setGuestToken] = useState<string | undefined>(() =>
    readStoredValue(GUEST_TOKEN_KEY),
  );
  const [remaining, setRemaining] = useState<number>();
  const [quotaLimit, setQuotaLimit] = useState<number>();
  const [accountEmail, setAccountEmail] = useState<string>();
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState<string>();
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const lastSeededTopic = useRef<string | undefined>(initialTopic);
  const historyLoaded = useRef(false);
  // Scroll intent for the next render: "bottom" after the user sends (show
  // their message and the typing dots), or an anchor id when the answer
  // starts streaming (pin the question to the top so the reply is read from
  // its first line - never auto-scroll DURING streaming, which would pull
  // the text away faster than anyone can read it).
  const scrollToBottomNext = useRef(false);
  const anchorMessageId = useRef<string | undefined>(undefined);

  // Check for a signed-in account once per page load.
  useEffect(() => {
    fetch("/api/auth/me")
      .then(async (response) => {
        if (!response.ok) return;
        const data = (await response.json()) as { user?: { email: string } | null };
        if (data.user?.email) setAccountEmail(data.user.email);
      })
      .catch(() => {
        // Account state is a nicety; chat works without it.
      });
  }, []);

  // Restore the previous conversation once per page load.
  useEffect(() => {
    if (historyLoaded.current || !sessionId || !guestToken) return;
    historyLoaded.current = true;

    const params = new URLSearchParams({ sessionId, guestToken });
    fetch(`/api/chat/history?${params.toString()}`)
      .then(async (response) => {
        if (!response.ok) {
          // Stale or invalid session - start fresh next send.
          if (response.status === 404) {
            setSessionId(undefined);
          }
          return;
        }

        const data = (await response.json()) as {
          messages: Array<{
            id: string;
            role: "user" | "assistant";
            content: string;
            citations?: ChatCitation[];
            feedbackRating?: "up" | "down";
          }>;
        };

        if (data.messages.length > 0) {
          scrollToBottomNext.current = true;
          setMessages((current) => [
            ...current.filter((message) => message.id === "welcome"),
            ...data.messages.map((message) => ({
              id: message.id,
              role: message.role,
              content: message.content,
              citations: message.citations,
              dbId: message.id,
              feedbackRating: message.feedbackRating,
            })),
          ]);
        }
      })
      .catch(() => {
        // History is a convenience; chat still works without it.
      });
  }, [sessionId, guestToken]);

  useEffect(() => {
    if (!isOpen) return;

    window.setTimeout(() => inputRef.current?.focus(), 80);
  }, [isOpen]);

  // Seed the draft when a new suggested question arrives, without remounting
  // the panel (a remount would wipe the conversation and session).
  useEffect(() => {
    if (initialTopic && initialTopic !== lastSeededTopic.current) {
      setDraft(initialTopic);
    }
    lastSeededTopic.current = initialTopic;
  }, [initialTopic]);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    if (scrollToBottomNext.current) {
      scrollToBottomNext.current = false;
      container.scrollTo({ top: container.scrollHeight, behavior: "smooth" });
      return;
    }

    // The moment the answer starts arriving, pin the user's question to the
    // top of the viewport once, then hands off scrolling to the reader while
    // the rest of the answer streams in below.
    const lastMessage = messages[messages.length - 1];
    if (
      anchorMessageId.current &&
      lastMessage?.role === "assistant" &&
      lastMessage.content
    ) {
      const anchorEl = container.querySelector<HTMLElement>(
        `[data-message-id="${anchorMessageId.current}"]`,
      );
      anchorMessageId.current = undefined;
      if (anchorEl) {
        container.scrollTo({ top: anchorEl.offsetTop - 12, behavior: "smooth" });
      }
    }
  }, [messages, isSending]);

  async function sendMessage() {
    const message = draft.trim();
    if (!message || isSending) return;

    const userMessage: PanelMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: message,
    };

    setMessages((current) => [...current, userMessage]);
    setDraft("");
    setError(undefined);
    setIsSending(true);
    scrollToBottomNext.current = true;
    anchorMessageId.current = userMessage.id;

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // Ensure the auth cookie is sent so a signed-in user's chats are
        // saved to their account, not stored as guest conversations.
        credentials: "same-origin",
        body: JSON.stringify({
          message,
          sessionId,
          guestToken,
          jurisdiction,
          stateCode: jurisdiction === "state" ? stateCode : undefined,
        }),
      });

      const contentType = response.headers.get("content-type") ?? "";

      // Error and non-stream responses arrive as a single JSON body.
      if (!response.ok || !contentType.includes("application/x-ndjson")) {
        const data = await response.json();

        if (!response.ok) {
          if (data.quota) {
            setQuotaLimit(data.quota.limit);
            setRemaining(data.quota.remaining);
          }
          throw new Error(data.error ?? "JO could not answer right now.");
        }

        setSessionId(data.sessionId);
        setGuestToken(data.guestToken);
        if (data.sessionId) writeStoredValue(SESSION_ID_KEY, data.sessionId);
        if (data.guestToken) writeStoredValue(GUEST_TOKEN_KEY, data.guestToken);
        if (data.quota) {
          setQuotaLimit(data.quota.limit);
          setRemaining(data.quota.remaining);
        }
        setMessages((current) => [
          ...current,
          {
            id: crypto.randomUUID(),
            role: "assistant",
            content: data.message.content,
            citations: data.message.citations,
            dbId: data.message.id,
          },
        ]);
        return;
      }

      // Streaming response: newline-delimited JSON events.
      const assistantId = crypto.randomUUID();
      let assistantCreated = false;

      const applyAssistantUpdate = (
        updater: (message: PanelMessage) => PanelMessage,
      ) => {
        setMessages((current) => {
          if (!assistantCreated) return current;
          return current.map((item) =>
            item.id === assistantId ? updater(item) : item,
          );
        });
      };

      const handleEvent = (event: {
        type: string;
        value?: string;
        content?: string;
        sessionId?: string;
        guestToken?: string;
        quota?: { limit: number; remaining: number };
        citations?: ChatCitation[];
        messageId?: string;
      }) => {
        if (event.type === "meta") {
          if (event.sessionId) {
            setSessionId(event.sessionId);
            writeStoredValue(SESSION_ID_KEY, event.sessionId);
          }
          if (event.guestToken) {
            setGuestToken(event.guestToken);
            writeStoredValue(GUEST_TOKEN_KEY, event.guestToken);
          }
          if (event.quota) {
            setQuotaLimit(event.quota.limit);
            setRemaining(event.quota.remaining);
          }
          setMessages((current) => [
            ...current,
            {
              id: assistantId,
              role: "assistant",
              content: "",
              citations: event.citations,
            },
          ]);
          assistantCreated = true;
          return;
        }

        if (event.type === "text" && typeof event.value === "string") {
          applyAssistantUpdate((item) => ({
            ...item,
            content: item.content + event.value,
          }));
          return;
        }

        if (event.type === "final" && typeof event.content === "string") {
          const content = event.content;
          applyAssistantUpdate((item) => ({ ...item, content }));
          return;
        }

        // The stored message id arrives with "done" so feedback buttons can
        // attach a rating to the persisted answer.
        if (event.type === "done" && typeof event.messageId === "string") {
          const dbId = event.messageId;
          applyAssistantUpdate((item) => ({ ...item, dbId }));
        }
      };

      const reader = response.body?.getReader();
      if (!reader) throw new Error("JO could not answer right now.");

      const decoder = new TextDecoder();
      let buffered = "";

      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;

        buffered += decoder.decode(value, { stream: true });

        let newlineIndex = buffered.indexOf("\n");
        while (newlineIndex !== -1) {
          const line = buffered.slice(0, newlineIndex).trim();
          buffered = buffered.slice(newlineIndex + 1);
          if (line) {
            try {
              handleEvent(JSON.parse(line));
            } catch {
              // Skip malformed event lines.
            }
          }
          newlineIndex = buffered.indexOf("\n");
        }
      }
    } catch (sendError) {
      // Show the error where the user is looking.
      anchorMessageId.current = undefined;
      scrollToBottomNext.current = true;
      setError(
        sendError instanceof Error
          ? sendError.message
          : "JO could not answer right now.",
      );
    } finally {
      setIsSending(false);
    }
  }

  async function sendFeedback(messageId: string, rating: "up" | "down") {
    if (!sessionId) return;

    // Optimistic update; feedback is best-effort and silently reverts on
    // failure rather than interrupting the conversation with an error.
    setMessages((current) =>
      current.map((item) =>
        item.dbId === messageId ? { ...item, feedbackRating: rating } : item,
      ),
    );

    try {
      const response = await fetch("/api/chat/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "same-origin",
        body: JSON.stringify({ sessionId, guestToken, messageId, rating }),
      });
      if (!response.ok) throw new Error("feedback failed");
    } catch {
      setMessages((current) =>
        current.map((item) =>
          item.dbId === messageId
            ? { ...item, feedbackRating: undefined }
            : item,
        ),
      );
    }
  }

  if (!isOpen) return null;

  return (
    <aside
      aria-label="Just Ask JO chat"
      className="fixed inset-x-0 bottom-0 z-40 flex h-[calc(100dvh-52px)] flex-col border-l border-gray-200 bg-white shadow-2xl shadow-gray-900/10 lg:sticky lg:top-[52px] lg:h-[calc(100dvh-52px)] lg:w-1/3 lg:min-w-[320px] lg:shrink-0 lg:shadow-none"
    >
      <div className="flex items-center justify-between bg-gray-900 px-4 py-3 text-white">
        <div className="flex items-center gap-2.5">
          <JoLogo />
          <div>
            <h2 className="text-sm font-semibold">Just Ask JO</h2>
            <p className="text-[11px] text-white/55">
              {jurisdiction === "state" && stateCode
                ? `${stateCode} rights education`
                : "Federal rights education"}
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="rounded-full p-1.5 text-white/70 hover:bg-white/10 hover:text-white"
          aria-label="Close JO"
        >
          <X className="size-4" aria-hidden="true" />
        </button>
      </div>

      <div className="border-b border-gray-200 bg-[#E1F5EE] px-4 py-3">
        <p className="text-xs font-semibold text-[#085041]">
          {accountEmail ? `Signed in as ${accountEmail}` : "Guest mode"}
        </p>
        <p className="mt-1 text-[11px] leading-4 text-gray-600">
          {typeof remaining === "number" && typeof quotaLimit === "number" ? (
            remaining > 0 ? (
              `${remaining} of ${quotaLimit} questions left today. ${accountEmail ? "Your conversations are saved to your account." : "Your conversation is saved on this device."}`
            ) : (
              `You have used all ${quotaLimit} questions for today. Come back tomorrow to ask more.`
            )
          ) : accountEmail ? (
            "Ask JO free educational questions. Your conversations are saved to your account."
          ) : (
            <>
              Ask JO free educational questions.{" "}
              <a
                href="/auth"
                className="font-semibold text-[#085041] underline-offset-2 hover:underline"
              >
                Create a free account
              </a>{" "}
              to save your history and get a higher daily limit.
            </>
          )}
        </p>
      </div>

      <div
        ref={scrollRef}
        className="relative flex-1 space-y-3 overflow-auto bg-[#FAFCFB] px-4 py-4"
        role="log"
        aria-live="polite"
      >
        {messages
          // Hide the assistant bubble until its first words arrive so the
          // citations block never renders ahead of the answer text.
          .filter((message) => message.role === "user" || message.content)
          .map((message) => (
            <div key={message.id} data-message-id={message.id}>
              <ChatMessage
                role={message.role}
                content={message.content}
                citations={message.citations}
                messageId={message.dbId}
                feedbackRating={message.feedbackRating}
                onFeedback={sendFeedback}
              />
            </div>
          ))}
        {isSending &&
        (messages[messages.length - 1]?.role === "user" ||
          !messages[messages.length - 1]?.content) ? (
          <div className="flex items-end gap-2">
            <span
              className="mb-0.5 flex size-7 shrink-0 select-none items-center justify-center rounded-full bg-[linear-gradient(135deg,#085041,#1D9E75)] text-[9px] font-bold text-white shadow-sm"
              aria-hidden="true"
            >
              JO
            </span>
            <div
              className="flex items-center gap-1.5 rounded-2xl rounded-bl-md border border-gray-200 bg-white px-4 py-3 shadow-sm"
              aria-label="JO is checking the source database"
            >
              <span className="size-1.5 animate-bounce rounded-full bg-[#1D9E75] motion-reduce:animate-pulse" />
              <span className="size-1.5 animate-bounce rounded-full bg-[#1D9E75] [animation-delay:150ms] motion-reduce:animate-pulse" />
              <span className="size-1.5 animate-bounce rounded-full bg-[#1D9E75] [animation-delay:300ms] motion-reduce:animate-pulse" />
            </div>
          </div>
        ) : null}
        {error ? (
          <p className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-[11px] leading-4 text-red-700">
            {error}
          </p>
        ) : null}
        {messages.length === 1 && !draft ? (
          <ChatSuggestions onSelect={setDraft} />
        ) : null}
      </div>

      <div className="border-t border-gray-200 p-3">
        <p className="mb-2 text-[10px] leading-4 text-gray-500">
          Educational information only. JO is not a lawyer and does not provide legal advice.
          To protect your privacy, please do not share personal details like your full name,
          case number, address, or Social Security number.
        </p>
        <ChatInput
          value={draft}
          onChange={setDraft}
          onSubmit={sendMessage}
          inputRef={inputRef}
          disabled={isSending}
        />
        <button
          type="button"
          onClick={onClose}
          className="mt-3 w-full rounded-full border border-gray-200 py-2 text-[12px] font-semibold text-gray-600 hover:bg-gray-50"
        >
          Close JO down
        </button>
      </div>
    </aside>
  );
}
