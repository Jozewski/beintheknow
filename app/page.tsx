"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { MessageCircle, Send } from "lucide-react";

import { ChatPanel } from "@/components/chat/ChatPanel";
import { ChatToggleButton } from "@/components/chat/ChatToggleButton";
import { DisclaimerSection } from "@/components/layout/DisclaimerSection";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { StateFlagGrid } from "@/components/states/StateFlagGrid";
import { StateSelectedSummary } from "@/components/states/StateSelectedSummary";
import { JurisdictionToggle } from "@/components/topics/JurisdictionToggle";
import { TopicsSection } from "@/components/topics/TopicsSection";
import { states, topics, type Jurisdiction, type TopicId } from "@/data/content-data";

const suggestions = [
  "Can I vote after a felony conviction?",
  "What is expungement?",
  "Can a landlord reject my application?",
  "Rights during a police stop",
];

export default function Home() {
  const [jurisdiction, setJurisdiction] = useState<Jurisdiction>("federal");
  const [stateCode, setStateCode] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [chatOpen, setChatOpen] = useState(false);
  const [initialTopic, setInitialTopic] = useState<string | undefined>();
  const [heroQuestion, setHeroQuestion] = useState("");
  const [isSelectingState, setIsSelectingState] = useState(true);
  const [activeTopicId, setActiveTopicId] = useState<TopicId | undefined>();
  const [highlightedTopicId, setHighlightedTopicId] = useState<TopicId | undefined>();

  const selectedState = states.find((state) => state.code === stateCode);
  const selectedStateName = selectedState?.name ?? "State";

  const filteredEntries = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    return topics.filter((topic) => {
      if (topic.jurisdiction !== jurisdiction) return false;
      if (jurisdiction === "state" && topic.stateCode && stateCode && topic.stateCode !== stateCode) {
        return false;
      }
      if (activeTopicId && topic.id !== activeTopicId) return false;
      if (!normalizedQuery) return true;

      const searchable = [
        topic.title,
        topic.summary,
        topic.badge,
        ...topic.resources.map((resource) => resource.label),
      ]
        .join(" ")
        .toLowerCase();

      return searchable.includes(normalizedQuery);
    });
  }, [activeTopicId, jurisdiction, searchQuery, stateCode]);

  function openJo(question?: string) {
    setInitialTopic(question);
    setChatOpen(true);
  }

  function askHeroQuestion() {
    openJo(heroQuestion.trim() || "Ask JO anything about your rights...");
  }

  function selectTopicChip(topicId: TopicId) {
    setActiveTopicId((current) => (current === topicId ? undefined : topicId));
    setHighlightedTopicId(topicId);

    window.setTimeout(() => {
      document.getElementById(`topic-${topicId}`)?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 80);

    window.setTimeout(() => setHighlightedTopicId(undefined), 1400);
  }

  function selectJurisdiction(nextJurisdiction: Jurisdiction) {
    setJurisdiction(nextJurisdiction);
    if (nextJurisdiction === "state") {
      setIsSelectingState(!stateCode);
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <div className="lg:flex lg:items-start">
        <main className="min-w-0 flex-1">
          <section className="relative overflow-hidden bg-[linear-gradient(135deg,#060C18_0%,#085041_100%)] px-4 py-10 text-center sm:px-6 sm:py-12">
            <motion.div
              aria-hidden="true"
              className="absolute inset-0 opacity-[0.06]"
              animate={{ x: [0, 10], y: [0, 8] }}
              transition={{ repeat: Infinity, duration: 25, repeatType: "mirror" }}
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                backgroundSize: "22px 22px",
              }}
            />

            <div className="relative mx-auto flex max-w-5xl flex-col gap-5">
              <div>
                <span className="rounded-full bg-[#1D9E75]/25 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#5DCAA5]">
                  {jurisdiction === "state" ? "State Rights Education" : "Federal Rights Education"}
                </span>
                <h1 className="mt-4 text-[clamp(24px,5vw,38px)] font-bold leading-tight text-white">
                  {jurisdiction === "state" ? "Know Your State Rights" : "Know Your Federal Rights"}
                </h1>
                <p className="mx-auto mt-3 max-w-md text-[13px] leading-5 text-white/60">
                  Plain-language rights education grounded in curated resources, built to help you understand your options before taking the next step.
                </p>
              </div>

              <JurisdictionToggle value={jurisdiction} onChange={selectJurisdiction} />

              <AnimatePresence mode="wait">
                {jurisdiction === "state" && isSelectingState ? (
                  <StateFlagGrid
                    key="state-grid"
                    states={states}
                    selectedStateCode={stateCode}
                    onSelect={(code) => {
                      setStateCode(code);
                      setIsSelectingState(false);
                    }}
                  />
                ) : null}
                {jurisdiction === "state" && !isSelectingState && stateCode ? (
                  <motion.div
                    key="state-summary"
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                  >
                    <StateSelectedSummary
                      state={selectedState}
                      onBack={() => setIsSelectingState(true)}
                    />
                  </motion.div>
                ) : null}
              </AnimatePresence>

              <div className="mx-auto flex w-full max-w-xl items-center gap-2 rounded-xl bg-white p-1 pl-4">
                <MessageCircle className="size-4 shrink-0 text-gray-400" aria-hidden="true" />
                <input
                  value={heroQuestion}
                  onChange={(event) => setHeroQuestion(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") askHeroQuestion();
                  }}
                  placeholder="Ask JO anything about your rights..."
                  className="min-w-0 flex-1 bg-transparent text-[13px] text-gray-900 outline-none placeholder:text-gray-400"
                />
                <button
                  type="button"
                  onClick={askHeroQuestion}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-[#1D9E75] px-4 py-2.5 text-[13px] font-semibold text-white hover:bg-[#0F6E56]"
                >
                  Ask JO
                  <Send className="size-3.5" aria-hidden="true" />
                </button>
              </div>

              <div className="mx-auto flex max-w-xl flex-wrap justify-center gap-2">
                {suggestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    type="button"
                    onClick={() => openJo(suggestion)}
                    className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[11px] text-white/90 transition hover:bg-white/15"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          </section>

          <TopicsSection
            jurisdiction={jurisdiction}
            selectedStateName={selectedStateName}
            stateCode={stateCode}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            activeTopicId={activeTopicId}
            onTopicChipSelect={selectTopicChip}
            highlightedTopicId={highlightedTopicId}
            entries={filteredEntries}
            onAskJo={openJo}
          />

          <DisclaimerSection />
          <SiteFooter />
        </main>

        <ChatPanel
          key={initialTopic ?? "empty-chat"}
          isOpen={chatOpen}
          onClose={() => setChatOpen(false)}
          jurisdiction={jurisdiction}
          stateCode={stateCode}
          initialTopic={initialTopic}
        />
      </div>

      {!chatOpen ? <ChatToggleButton onClick={() => openJo()} /> : null}
    </div>
  );
}
