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
  const [sessionId, setSessionId] = useState<string>();
  const [guestToken, setGuestToken] = useState<string>();
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState<string>();
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    window.setTimeout(() => inputRef.current?.focus(), 80);
  }, [isOpen]);

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

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error ?? "JO could not answer right now.");
      }

      setSessionId(data.sessionId);
      setGuestToken(data.guestToken);
      setMessages((current) => [
        ...current,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: data.message.content,
          citations: data.message.citations,
        },
      ]);
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
        <p className="text-xs font-semibold text-[#085041]">Guest mode</p>
        <p className="mt-1 text-[11px] leading-4 text-gray-600">
          You have 5 educational questions available today. Create an account to keep your chat history.
        </p>
      </div>

      <div
        ref={scrollRef}
        className="flex-1 space-y-3 overflow-auto px-4 py-4"
        role="log"
        aria-live="polite"
      >
        {messages.map((message) => (
          <ChatMessage
            key={message.id}
            role={message.role}
            content={message.content}
            citations={message.citations}
          />
        ))}
        {isSending ? (
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
