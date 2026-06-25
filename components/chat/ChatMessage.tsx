import { cn } from "@/lib/utils";

type ChatMessageProps = {
  role: "user" | "assistant";
  content: string;
};

export function ChatMessage({ role, content }: ChatMessageProps) {
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
      {content}
    </div>
  );
}
