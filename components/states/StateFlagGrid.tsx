import Image from "next/image";
import { motion } from "motion/react";

import type { StateEntry } from "@/data/content-data";

type StateFlagGridProps = {
  states: StateEntry[];
  selectedStateCode: string;
  onSelect: (stateCode: string) => void;
};

export function StateFlagGrid({ states, selectedStateCode, onSelect }: StateFlagGridProps) {
  const visibleStates = states.filter(
    (state) => state.enabled && state.reviewStatus === "reviewed",
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.22 }}
      className="mx-auto grid max-h-56 max-w-4xl grid-cols-2 gap-2 overflow-auto rounded-xl border border-white/15 bg-white/10 p-3 text-left sm:grid-cols-3 md:grid-cols-5"
    >
      {visibleStates.map((state) => (
        <button
          key={state.code}
          type="button"
          aria-pressed={selectedStateCode === state.code}
          onClick={() => onSelect(state.code)}
          className="flex h-9 items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 text-[11px] font-semibold text-white/85 transition hover:bg-white/20 aria-pressed:border-[#5DCAA5] aria-pressed:bg-[#E1F5EE] aria-pressed:text-[#085041]"
        >
          <Image
            src={`https://flagcdn.com/w40/us-${state.code.toLowerCase()}.png`}
            alt=""
            width={20}
            height={14}
            className="rounded-[2px]"
          />
          <span className="truncate">{state.name}</span>
        </button>
      ))}
    </motion.div>
  );
}
