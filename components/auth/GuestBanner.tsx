"use client";

import { useEffect, useState } from "react";
import { User } from "lucide-react";
import Link from "next/link";

type GuestBannerProps = {
  /** Daily question quota remaining, when known. */
  remaining?: number;
};

export function GuestBanner({ remaining }: GuestBannerProps) {
  const [accountEmail, setAccountEmail] = useState<string>();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    fetch("/api/auth/me")
      .then(async (response) => {
        if (response.ok) {
          const data = (await response.json()) as {
            user?: { email: string } | null;
          };
          if (data.user?.email) setAccountEmail(data.user.email);
        }
      })
      .catch(() => {
        // Fall back to the guest banner.
      })
      .finally(() => setChecked(true));
  }, []);

  // Avoid flashing the signup pitch before we know the auth state.
  if (!checked) return null;

  if (accountEmail) {
    return (
      <div className="flex items-start gap-2.5 rounded-lg border border-[#9FE1CB] bg-[#E1F5EE] px-4 py-3 text-[12px] text-[#085041]">
        <User className="mt-0.5 size-4 shrink-0 text-[#1D9E75]" aria-hidden="true" />
        <p className="leading-5">
          Signed in as <span className="font-semibold">{accountEmail}</span>.
          Your conversations with JO are saved to your account.
        </p>
      </div>
    );
  }

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
              remaining today. Create a free account to save your chat history
              and get a higher daily limit.
            </>
          ) : (
            <>
              {" "}
              - ask JO free educational questions. Create a free account to
              save your chat history and get a higher daily limit.
            </>
          )}
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
