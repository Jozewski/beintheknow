import { Search } from "lucide-react";

type TopicSearchProps = {
  value: string;
  onChange: (value: string) => void;
};

export function TopicSearch({ value, onChange }: TopicSearchProps) {
  return (
    <label className="flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-100 px-3 py-2">
      <Search className="size-3.5 shrink-0 text-gray-400" aria-hidden="true" />
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search topics — e.g. voting, housing, parole..."
        className="min-w-0 flex-1 bg-transparent text-[13px] text-gray-900 outline-none placeholder:text-gray-400"
      />
    </label>
  );
}
