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

  return (
    <div
      className={cn(
        "max-w-[85%] rounded-lg px-3 py-2 text-[12px] leading-5",
        isUser
          ? "ml-auto bg-[#1D9E75] text-white"
          : "bg-gray-100 text-gray-700",
      )}
    >
      <p className="whitespace-pre-wrap">{content}</p>
      {!isUser && citations.length > 0 ? (
        <div className="mt-2 space-y-1 border-t border-gray-200 pt-2">
          {(() => {
            // Group duplicate sources so "RRP profile" cited by chunks 2, 3,
            // and 4 renders once as "[2, 3, 4] RRP profile" while keeping
            // the bracket numbers aligned with JO's inline citations.
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

              return group.url ? (
                <a
                  key={`${group.label}-${prefix}`}
                  href={group.url}
                  target="_blank"
                  rel="noreferrer"
                  className="block truncate text-[10px] font-semibold text-[#085041] underline-offset-2 hover:underline"
                >
                  {prefix} {group.label}
                  {suffix}
                </a>
              ) : (
                <p
                  key={`${group.label}-${prefix}`}
                  className="truncate text-[10px] font-semibold text-[#085041]"
                >
                  {prefix} {group.label}
                  {suffix}
                </p>
              );
            });
          })()}
        </div>
      ) : null}
      {!isUser && messageId && onFeedback ? (
        <div className="mt-2 flex items-center gap-1.5 border-t border-gray-200 pt-2">
          <span className="text-[10px] text-gray-400">
            {feedbackRating ? "Thanks for the feedback." : "Was this helpful?"}
          </span>
          <button
            type="button"
            aria-label="This answer was helpful"
            onClick={() => onFeedback(messageId, "up")}
            className={cn(
              "rounded p-1 hover:bg-gray-200",
              feedbackRating === "up" ? "text-[#1D9E75]" : "text-gray-400",
            )}
          >
            <ThumbsUp className="size-3" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="This answer was not helpful"
            onClick={() => onFeedback(messageId, "down")}
            className={cn(
              "rounded p-1 hover:bg-gray-200",
              feedbackRating === "down" ? "text-red-500" : "text-gray-400",
            )}
          >
            <ThumbsDown className="size-3" aria-hidden="true" />
          </button>
        </div>
      ) : null}
    </div>
  );
}
