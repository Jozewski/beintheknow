import { User } from "lucide-react";

type GuestBannerProps = {
  /**
   * Daily question quota. Rendered only when provided AND enforcement is
   * live server-side (Phase 2). Until then the banner stays generic so the
   * UI never promises limits or accounts that do not exist yet.
   */
  remaining?: number;
};

export function GuestBanner({ remaining }: GuestBannerProps) {
  return (
    <div className="flex flex-col gap-3 rounded-lg border border-[#9FE1CB] bg-[#E1F5EE] px-4 py-3 text-[12px] text-[#085041] sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-start gap-2.5">
        <User className="mt-0.5 size-4 shrink-0 text-[#1D9E75]" aria-hidden="true" />
        <p className="leading-5">
          You are in <span className="font-semibold">guest mode</span>
          {typeof remaining === "number" ? (
            <>
              {" "}
              - <span className="font-semibold">{remaining}</span> JO questions
              remaining today.
            </>
          ) : (
            <> - ask JO free educational questions about your rights.</>
          )}
        </p>
      </div>
    </div>
  );
}
