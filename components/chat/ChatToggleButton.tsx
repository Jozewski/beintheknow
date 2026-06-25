import { MessageCircle } from "lucide-react";

type ChatToggleButtonProps = {
  onClick: () => void;
};

export function ChatToggleButton({ onClick }: ChatToggleButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-[#1D9E75] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-900/20 hover:bg-[#0F6E56]"
    >
      <MessageCircle className="size-4" aria-hidden="true" />
      Ask JO
    </button>
  );
}
