import { MessageCircle, Send } from "lucide-react";
import type { RefObject } from "react";

type ChatInputProps = {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  inputRef: RefObject<HTMLInputElement | null>;
  disabled?: boolean;
};

export function ChatInput({
  value,
  onChange,
  onSubmit,
  inputRef,
  disabled = false,
}: ChatInputProps) {
  return (
    <form
      className="flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 p-1.5 transition focus-within:border-[#1D9E75] focus-within:ring-2 focus-within:ring-[#9FE1CB]"
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit();
      }}
    >
      <MessageCircle className="ml-2 size-4 text-gray-400" aria-hidden="true" />
      <input
        ref={inputRef}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Ask JO anything about your rights..."
        aria-label="Ask JO a question about your rights"
        disabled={disabled}
        className="min-w-0 flex-1 bg-transparent text-[16px] outline-none placeholder:text-gray-500 lg:text-[13px]"
      />
      <button
        type="submit"
        className="inline-flex items-center gap-1.5 rounded-md bg-[#1D9E75] px-3 py-2 text-[12px] font-semibold text-white hover:bg-[#0F6E56] disabled:cursor-not-allowed disabled:opacity-60"
        disabled={disabled || !value.trim()}
      >
        {disabled ? "Sending" : "Send"}
        <Send className="size-3.5" aria-hidden="true" />
      </button>
    </form>
  );
}
