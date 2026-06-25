import { MessageCircle, Send } from "lucide-react";
import type { RefObject } from "react";

type ChatInputProps = {
  value: string;
  onChange: (value: string) => void;
  inputRef: RefObject<HTMLInputElement | null>;
};

export function ChatInput({ value, onChange, inputRef }: ChatInputProps) {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 p-1.5">
      <MessageCircle className="ml-2 size-4 text-gray-400" aria-hidden="true" />
      <input
        ref={inputRef}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Ask JO anything about your rights..."
        className="min-w-0 flex-1 bg-transparent text-[13px] outline-none placeholder:text-gray-400"
      />
      <button
        type="button"
        className="inline-flex items-center gap-1.5 rounded-md bg-[#1D9E75] px-3 py-2 text-[12px] font-semibold text-white hover:bg-[#0F6E56] disabled:cursor-not-allowed disabled:opacity-60"
        disabled={!value.trim()}
      >
        Send
        <Send className="size-3.5" aria-hidden="true" />
      </button>
    </div>
  );
}
