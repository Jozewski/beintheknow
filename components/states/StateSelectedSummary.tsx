import type { StateEntry } from "@/data/content-data";

type StateSelectedSummaryProps = {
  state?: StateEntry;
  onBack: () => void;
};

export function StateSelectedSummary({ state, onBack }: StateSelectedSummaryProps) {
  if (!state) return null;

  return (
    <div className="mx-auto flex max-w-md items-center justify-between gap-3 rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-left">
      <div className="flex min-w-0 items-center gap-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://flagcdn.com/w40/us-${state.code.toLowerCase()}.png`}
          alt=""
          width={24}
          height={16}
          className="rounded-[2px]"
          style={{ width: 24, height: "auto" }}
        />
        <span className="truncate text-xs font-semibold text-white">
          Showing {state.name} rights
        </span>
      </div>
      <button
        type="button"
        onClick={onBack}
        className="shrink-0 rounded-full border border-white/15 px-3 py-1 text-[11px] font-semibold text-white/75 hover:bg-white/10 hover:text-white"
      >
        Back to selection grid
      </button>
    </div>
  );
}
