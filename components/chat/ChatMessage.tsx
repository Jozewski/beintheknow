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
          {(() => {
            // Group duplicate sources so "RRP profile" cited by chunks 2, 3,
            // and 4 renders once as "[2, 3, 4] RRP profile" while keeping
            // the bracket numbers aligned with JO's inline citations.
            const groups = new Map<
              string,
              { label: string; url?: string; indices: number[] }
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
                indices: [],
              };
              group.indices.push(index + 1);
              groups.set(key, group);
            });

            return [...groups.values()].slice(0, 4).map((group) => {
              const prefix = `[${group.indices.join(", ")}]`;

              return group.url ? (
                <a
                  key={`${group.label}-${prefix}`}
                  href={group.url}
                  target="_blank"
                  rel="noreferrer"
                  className="block truncate text-[10px] font-semibold text-[#085041] underline-offset-2 hover:underline"
                >
                  {prefix} {group.label}
                </a>
              ) : (
                <p
                  key={`${group.label}-${prefix}`}
                  className="truncate text-[10px] font-semibold text-[#085041]"
                >
                  {prefix} {group.label}
                </p>
              );
            });
          })()}
        </div>
      ) : null}
    </div>
  );
}
