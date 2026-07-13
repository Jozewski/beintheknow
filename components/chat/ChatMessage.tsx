import { ThumbsDown, ThumbsUp } from "lucide-react";

import { cn } from "@/lib/utils";

type ChatMessageProps = {
  role: "user" | "assistant";
  content: string;
  citations?: Array<{
    sourceName?: string;
    sourceUrl?: string;
    citation?: string;
    title?: string;
    currentAsOfLabel?: string;
  }>;
  /** Stored message id - present once the answer is persisted. */
  messageId?: string;
  /** The user's existing rating for this answer, if any. */
  feedbackRating?: "up" | "down";
  /** When provided (with messageId), renders the feedback buttons. */
  onFeedback?: (messageId: string, rating: "up" | "down") => void;
};

export function ChatMessage({
  role,
  content,
  citations = [],
  messageId,
  feedbackRating,
  onFeedback,
}: ChatMessageProps) {
  const isUser = role === "user";

  if (isUser) {
    return (
      <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-md bg-[linear-gradient(135deg,#13835F,#0F6E56)] px-3.5 py-2.5 text-[12px] leading-5 text-white shadow-sm">
        <p className="whitespace-pre-wrap">{content}</p>
      </div>
    );
  }

  return (
    <div className="flex max-w-[92%] items-end gap-2">
      <span
        className="mb-0.5 flex size-7 shrink-0 select-none items-center justify-center rounded-full bg-[linear-gradient(135deg,#085041,#1D9E75)] text-[9px] font-bold text-white shadow-sm"
        aria-hidden="true"
      >
        JO
      </span>
      <div className="min-w-0 rounded-2xl rounded-bl-md border border-gray-200 bg-white px-3.5 py-2.5 text-[12px] leading-5 text-gray-700 shadow-sm">
        <p className="whitespace-pre-wrap">{content}</p>
        {citations.length > 0 ? (
          <div className="mt-2.5 border-t border-gray-100 pt-2">
            <p className="mb-1.5 text-[9px] font-semibold uppercase tracking-wider text-gray-500">
              Sources
            </p>
            <div className="flex flex-wrap gap-1.5">
              {(() => {
                // Group duplicate sources so "RRP profile" cited by chunks 2,
                // 3, and 4 renders once as "[2, 3, 4] RRP profile" while
                // keeping the bracket numbers aligned with JO's inline
                // citations.
                const groups = new Map<
                  string,
                  {
                    label: string;
                    url?: string;
                    currentAsOfLabel?: string;
                    indices: number[];
                  }
                >();

                citations.forEach((citation, index) => {
                  const label =
                    citation.citation ??
                    citation.title ??
                    citation.sourceName ??
                    `Source ${index + 1}`;
                  const key = `${label}|${citation.sourceUrl ?? ""}`;
                  const group = groups.get(key) ?? {
                    label,
                    url: citation.sourceUrl,
                    currentAsOfLabel: citation.currentAsOfLabel,
                    indices: [],
                  };
                  group.indices.push(index + 1);
                  groups.set(key, group);
                });

                return [...groups.values()].slice(0, 4).map((group) => {
                  const prefix = `[${group.indices.join(", ")}]`;
                  // Freshness transparency: users should see how current the
                  // law text behind each citation is.
                  const suffix = group.currentAsOfLabel
                    ? ` - current as of ${group.currentAsOfLabel}`
                    : "";
                  const pillClasses =
                    "max-w-full truncate rounded-full border border-[#9FE1CB] bg-[#E1F5EE]/60 px-2.5 py-1 text-[10px] font-semibold text-[#085041]";

                  return group.url ? (
                    <a
                      key={`${group.label}-${prefix}`}
                      href={group.url}
                      target="_blank"
                      rel="noreferrer"
                      className={cn(pillClasses, "transition hover:bg-[#E1F5EE]")}
                    >
                      {prefix} {group.label}
                      {suffix}
                    </a>
                  ) : (
                    <span key={`${group.label}-${prefix}`} className={pillClasses}>
                      {prefix} {group.label}
                      {suffix}
                    </span>
                  );
                });
              })()}
            </div>
          </div>
        ) : null}
        {messageId && onFeedback ? (
          <div className="mt-2 flex items-center gap-1 border-t border-gray-100 pt-2">
            <span className="mr-1 text-[10px] text-gray-500">
              {feedbackRating ? "Thanks for the feedback." : "Was this helpful?"}
            </span>
            <button
              type="button"
              aria-label="This answer was helpful"
              onClick={() => onFeedback(messageId, "up")}
              className={cn(
                "rounded-full p-2 transition hover:bg-[#E1F5EE]",
                feedbackRating === "up" ? "bg-[#E1F5EE] text-[#0F6E56]" : "text-gray-500",
              )}
            >
              <ThumbsUp className="size-3.5" aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="This answer was not helpful"
              onClick={() => onFeedback(messageId, "down")}
              className={cn(
                "rounded-full p-2 transition hover:bg-red-50",
                feedbackRating === "down" ? "bg-red-50 text-red-600" : "text-gray-500",
              )}
            >
              <ThumbsDown className="size-3.5" aria-hidden="true" />
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
