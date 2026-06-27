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
};

export function ChatMessage({ role, content, citations = [] }: ChatMessageProps) {
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
          {citations.slice(0, 4).map((citation, index) => {
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
                rel="noreferrer"
                className="block truncate text-[10px] font-semibold text-[#085041] underline-offset-2 hover:underline"
              >
                [{index + 1}] {label}
              </a>
            ) : (
              <p
                key={`${label}-${index}`}
                className="truncate text-[10px] font-semibold text-[#085041]"
              >
                [{index + 1}] {label}
              </p>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
