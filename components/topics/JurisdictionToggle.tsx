import type { Jurisdiction } from "@/data/content-data";

type JurisdictionToggleProps = {
  value: Jurisdiction;
  onChange: (value: Jurisdiction) => void;
};

export function JurisdictionToggle({ value, onChange }: JurisdictionToggleProps) {
  return (
    <div
      className="mx-auto inline-flex rounded-full border border-white/15 bg-white/10 p-1"
      role="group"
      aria-label="Select rights jurisdiction"
    >
      {(["federal", "state"] as const).map((option) => (
        <button
          key={option}
          type="button"
          aria-pressed={value === option}
          onClick={() => onChange(option)}
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold capitalize text-white/70 transition hover:text-white aria-pressed:bg-white aria-pressed:text-[#085041]"
        >
          {option === "federal" ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src="https://flagcdn.com/w40/us.png"
              alt=""
              width={20}
              height={14}
              className="rounded-[2px]"
              style={{ width: 20, height: "auto" }}
            />
          ) : null}
          <span>{option}</span>
        </button>
      ))}
    </div>
  );
}
