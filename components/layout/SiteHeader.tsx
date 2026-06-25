import Link from "next/link";

import { JoLogo } from "@/components/layout/JoLogo";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 h-[52px] border-b border-gray-200/80 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between gap-3 px-4 sm:px-6">
        <Link href="/" className="flex min-w-0 items-center gap-2.5">
          <JoLogo />
          <span className="min-w-0">
            <span className="block truncate text-[12px] font-semibold text-gray-900 sm:text-[14px]">
              Be In The Know - Just Ask JO
            </span>
            <span className="block truncate text-[10px] text-gray-500">
              Know Your Rights. Protect Your Future.
            </span>
          </span>
        </Link>

        <nav className="flex items-center gap-1.5 text-[11px] sm:gap-3 sm:text-[12px]">
          <Link href="#topics" className="hidden text-gray-500 hover:text-gray-900 sm:inline">
            Topics
          </Link>
          <Link href="#disclaimer" className="hidden text-gray-500 hover:text-gray-900 sm:inline">
            Disclaimer
          </Link>
          <a
            href="https://www.lawhelp.org"
            className="rounded-full bg-[#1D9E75] px-3 py-1.5 font-semibold text-white hover:bg-[#0F6E56] sm:px-3.5"
          >
            Find Legal Aid
          </a>
          <Link
            href="/auth"
            className="hidden rounded-full border border-[#1D9E75] bg-transparent px-3.5 py-1.5 font-semibold text-[#1D9E75] transition hover:bg-[#E1F5EE] sm:inline"
          >
            Log in
          </Link>
          <Link
            href="/auth"
            className="hidden rounded-full bg-[#1D9E75] px-4 py-1.5 font-semibold text-white transition duration-150 hover:scale-[1.02] hover:bg-[#0F6E56] sm:inline"
          >
            Sign up
          </Link>
        </nav>
      </div>
    </header>
  );
}
