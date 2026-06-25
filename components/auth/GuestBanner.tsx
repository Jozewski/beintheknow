import { User } from "lucide-react";
import Link from "next/link";

type GuestBannerProps = {
  remaining?: number;
};

export function GuestBanner({ remaining = 5 }: GuestBannerProps) {
  return (
    <div className="flex flex-col gap-3 rounded-lg border border-[#9FE1CB] bg-[#E1F5EE] px-4 py-3 text-[12px] text-[#085041] sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-start gap-2.5">
        <User className="mt-0.5 size-4 shrink-0 text-[#1D9E75]" aria-hidden="true" />
        <p className="leading-5">
          You are in <span className="font-semibold">guest mode</span> -{" "}
          <span className="font-semibold">{remaining}</span> JO questions remaining today.
        </p>
      </div>
      <Link
        href="/auth"
        className="inline-flex w-fit items-center justify-center rounded-md bg-[#1D9E75] px-3 py-1.5 text-[11px] font-semibold text-white hover:bg-[#0F6E56]"
      >
        Sign up free
      </Link>
    </div>
  );
}
