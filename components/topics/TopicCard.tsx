import { ExternalLink } from "lucide-react";
import { motion } from "motion/react";

import type { TopicEntry } from "@/data/content-data";
import { cn } from "@/lib/utils";

type TopicCardProps = {
  topic: TopicEntry;
  index: number;
  highlighted: boolean;
  onAskJo: (question: string) => void;
};

export function TopicCard({ topic, index, highlighted, onAskJo }: TopicCardProps) {
  const Icon = topic.icon;

  return (
    <motion.article
      id={`topic-${topic.id}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.28, delay: index * 0.05 }}
      className={cn(
        "rounded-lg border bg-white p-4 shadow-xs transition",
        highlighted ? "border-[#1D9E75] ring-2 ring-[#1D9E75]/20" : "border-gray-200",
      )}
    >
      <div className="mb-3 flex items-start justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="flex size-9 items-center justify-center rounded-lg bg-[#1D9E75] text-white">
            <Icon className="size-4" aria-hidden="true" />
          </span>
          <div>
            <p className="mb-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#085041]">
              {topic.badge}
            </p>
            <h3 className="text-[15px] font-semibold text-gray-900">{topic.title}</h3>
          </div>
        </div>
      </div>

      <p className="min-h-16 text-[12px] leading-5 text-gray-600">{topic.summary}</p>

      <div className="mt-4">
        <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.1em] text-gray-500">
          State Resources
        </p>
        <div className="space-y-1.5">
          {topic.resources.map((resource) => (
            <a
              key={resource.url}
              href={resource.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-[12px] font-medium text-[#0F6E56] hover:text-[#085041]"
            >
              {resource.label}
              <ExternalLink className="size-3" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
        {topic.learnMoreUrl ? (
          <a
            href={topic.learnMoreUrl}
            target="_blank"
            rel="noreferrer"
            className="text-[12px] font-semibold text-gray-600 hover:text-gray-900"
          >
            Learn More →
          </a>
        ) : (
          <span />
        )}
        <button
          type="button"
          onClick={() => onAskJo(`Ask JO about ${topic.title}`)}
          className="rounded-full bg-[#1D9E75] px-3 py-1.5 text-[11px] font-semibold text-white hover:bg-[#0F6E56]"
        >
          Ask JO about this topic
        </button>
      </div>
    </motion.article>
  );
}
