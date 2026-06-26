import { GuestBanner } from "@/components/auth/GuestBanner";
import { TopicCard } from "@/components/topics/TopicCard";
import { TopicFilterChips } from "@/components/topics/TopicFilterChips";
import { TopicSearch } from "@/components/topics/TopicSearch";
import type { Jurisdiction, TopicEntry, TopicId } from "@/data/content-data";

type TopicsSectionProps = {
  jurisdiction: Jurisdiction;
  selectedStateName: string;
  stateCode: string;
  searchQuery: string;
  onSearchChange: (value: string) => void;
  activeTopicId?: TopicId;
  onTopicChipSelect: (topicId: TopicId) => void;
  highlightedTopicId?: TopicId;
  entries: TopicEntry[];
  loading: boolean;
  error?: string;
  usingFallbackContent: boolean;
  onAskJo: (question?: string) => void;
};

export function TopicsSection({
  jurisdiction,
  selectedStateName,
  stateCode,
  searchQuery,
  onSearchChange,
  activeTopicId,
  onTopicChipSelect,
  highlightedTopicId,
  entries,
  loading,
  error,
  usingFallbackContent,
  onAskJo,
}: TopicsSectionProps) {
  const emptyMessage = usingFallbackContent
    ? "No topics match that search yet."
    : "No approved topics are available for this selection yet.";

  return (
    <section id="topics" className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          {jurisdiction === "state" && stateCode ? (
            <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#1D9E75]">
              Showing {selectedStateName}
            </p>
          ) : null}
          <h2 className="text-xl font-semibold text-gray-900">
            {jurisdiction === "state" ? "State Rights Topics" : "Federal Rights Topics"}
          </h2>
          <p className="mt-1 text-[11px] text-gray-500">
            Search common reentry and rights questions, then ask JO for plain-English educational guidance.
          </p>
        </div>
        <button
          type="button"
          onClick={() => onAskJo()}
          className="w-fit rounded-full border border-gray-200 px-3 py-1.5 text-[11px] font-semibold text-gray-600 hover:bg-gray-100"
        >
          Ask JO
        </button>
      </div>

      <div className="mb-4 space-y-3">
        <TopicSearch value={searchQuery} onChange={onSearchChange} />
        <TopicFilterChips activeTopicId={activeTopicId} onSelect={onTopicChipSelect} />
      </div>

      <GuestBanner remaining={5} />

      {error ? (
        <div className="mt-5 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
          {error}
        </div>
      ) : null}

      {loading ? (
        <div className="mt-5 rounded-lg border border-gray-200 bg-white p-6 text-center text-sm text-gray-500">
          Loading approved topics...
        </div>
      ) : null}

      <div className="mt-5 grid grid-cols-1 gap-3.5 md:grid-cols-2 xl:grid-cols-3">
        {!loading && entries.map((topic, index) => (
          <TopicCard
            key={`${topic.jurisdiction}-${topic.stateCode ?? "all"}-${topic.id}`}
            topic={topic}
            index={index}
            highlighted={highlightedTopicId === topic.id}
            onAskJo={onAskJo}
          />
        ))}
      </div>

      {!loading && entries.length === 0 ? (
        <div className="mt-6 rounded-lg border border-gray-200 bg-white p-6 text-center text-sm text-gray-500">
          {emptyMessage}
        </div>
      ) : null}
    </section>
  );
}
