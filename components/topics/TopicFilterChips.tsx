import { topicLabels, topicOrder, type TopicId } from "@/data/content-data";

type TopicFilterChipsProps = {
  activeTopicId?: TopicId;
  onSelect: (topicId: TopicId) => void;
};

export function TopicFilterChips({ activeTopicId, onSelect }: TopicFilterChipsProps) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {topicOrder.map((topicId) => (
        <button
          key={topicId}
          type="button"
          onClick={() => onSelect(topicId)}
          className="rounded-full border border-gray-200 bg-background px-3 py-1.5 text-[11px] text-gray-500 transition hover:border-[#1D9E75] hover:bg-[#E1F5EE] hover:text-[#085041] data-[active=true]:border-[#1D9E75] data-[active=true]:bg-[#E1F5EE] data-[active=true]:text-[#085041]"
          data-active={activeTopicId === topicId}
        >
          {topicLabels[topicId]}
        </button>
      ))}
    </div>
  );
}
