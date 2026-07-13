const suggestions = [
  "Can I vote after a felony conviction?",
  "What is expungement?",
  "Rights during a police stop",
];

type ChatSuggestionsProps = {
  onSelect: (question: string) => void;
};

export function ChatSuggestions({ onSelect }: ChatSuggestionsProps) {
  return (
    <div className="space-y-2">
      <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-gray-500">
        Try asking
      </p>
      <div className="flex flex-wrap gap-1.5">
        {suggestions.map((suggestion) => (
          <button
            key={suggestion}
            type="button"
            onClick={() => onSelect(suggestion)}
            className="rounded-full border border-gray-200 px-3 py-1.5 text-[11px] text-gray-600 transition hover:border-[#1D9E75] hover:bg-[#E1F5EE] hover:text-[#085041]"
          >
            {suggestion}
          </button>
        ))}
      </div>
    </div>
  );
}
