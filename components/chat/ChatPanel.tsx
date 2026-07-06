"use client";

import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

import { ChatInput } from "@/components/chat/ChatInput";
import { ChatMessage } from "@/components/chat/ChatMessage";
import { ChatSuggestions } from "@/components/chat/ChatSuggestions";
import { JoLogo } from "@/components/layout/JoLogo";
import type { Jurisdiction } from "@/data/content-data";

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
};

type ChatPanelProps = {
  isOpen: boolean;
  onClose: () => void;
  jurisdiction: Jurisdiction;
  stateCode: string;
  initialTopic?: string;
};

const GUEST_TOKEN_KEY = "jo:guestToken";
const SESSION_ID_KEY = "jo:sessionId";

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
          }>;
        };

        if (data.messages.length > 0) {
          setMessages((current) => [
            ...current.filter((message) => message.id === "welcome"),
            ...data.messages.map((message) => ({
              id: message.id,
              role: message.role,
              content: message.content,
              citations: message.citations,
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
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
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

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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
      setError(
        sendError instanceof Error
          ? sendError.message
          : "JO could not answer right now.",
      );
    } finally {
      setIsSending(false);
    }
  }

  if (!isOpen) return null;

  return (
    <aside className="fixed inset-x-0 bottom-0 z-40 flex h-[calc(100vh-52px)] flex-col border-l border-gray-200 bg-white shadow-2xl shadow-gray-900/10 lg:sticky lg:top-[52px] lg:h-[calc(100vh-52px)] lg:w-[320px] lg:shrink-0 lg:shadow-none xl:w-[360px]">
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
        className="flex-1 space-y-3 overflow-auto px-4 py-4"
        role="log"
        aria-live="polite"
      >
        {messages
          // Hide the assistant bubble until its first words arrive so the
          // citations block never renders ahead of the answer text.
          .filter((message) => message.role === "user" || message.content)
          .map((message) => (
            <ChatMessage
              key={message.id}
              role={message.role}
              content={message.content}
              citations={message.citations}
            />
          ))}
        {isSending &&
        (messages[messages.length - 1]?.role === "user" ||
          !messages[messages.length - 1]?.content) ? (
          <ChatMessage role="assistant" content="JO is checking the source database..." />
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
