"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { JoLogo } from "@/components/layout/JoLogo";

export function SiteHeader() {
  const [accountEmail, setAccountEmail] = useState<string>();
  const [checked, setChecked] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
        // Treat as signed out.
      })
      .finally(() => setChecked(true));
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 h-[52px] border-b border-gray-200/80 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between gap-3 px-4 sm:px-6">
        <Link href="/" className="flex min-w-0 items-center gap-2.5" onClick={closeMenu}>
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
          <Link href="/#topics" className="hidden text-gray-500 hover:text-gray-900 sm:inline">
            Topics
          </Link>
          <Link href="/about" className="hidden text-gray-500 hover:text-gray-900 sm:inline">
            About
          </Link>
          <Link href="/#disclaimer" className="hidden text-gray-500 hover:text-gray-900 sm:inline">
            Disclaimer
          </Link>
          <a
            href="https://www.lawhelp.org"
            className="hidden text-gray-500 hover:text-gray-900 sm:inline"
          >
            Find Legal Aid
          </a>
          {!checked ? null : accountEmail ? (
            <Link
              href="/account"
              title={`Signed in as ${accountEmail}`}
              className="hidden rounded-full border border-[#1D9E75] bg-transparent px-3.5 py-1.5 font-semibold text-[#1D9E75] transition hover:bg-[#E1F5EE] sm:inline"
            >
              My account
            </Link>
          ) : (
            <>
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
            </>
          )}

          {/* Mobile: everything above is hidden below the sm breakpoint, so
              phones get a hamburger menu instead - without it, mobile users
              would have no way to reach sign-in, About, or legal aid. */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex size-10 items-center justify-center rounded-full text-[#085041] transition hover:bg-[#E1F5EE] sm:hidden"
          >
            {menuOpen ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </button>
        </nav>
      </div>

      {menuOpen ? (
        <nav
          id="mobile-nav"
          aria-label="Site menu"
          className="absolute inset-x-0 top-[52px] border-b border-gray-200 bg-white shadow-lg sm:hidden"
        >
          <div className="mx-auto max-w-7xl px-4 py-2">
            <Link
              href="/#topics"
              onClick={closeMenu}
              className="block rounded-lg px-3 py-3 text-[14px] font-medium text-gray-700 hover:bg-[#E1F5EE] hover:text-[#085041]"
            >
              Topics
            </Link>
            <Link
              href="/about"
              onClick={closeMenu}
              className="block rounded-lg px-3 py-3 text-[14px] font-medium text-gray-700 hover:bg-[#E1F5EE] hover:text-[#085041]"
            >
              About
            </Link>
            <Link
              href="/#disclaimer"
              onClick={closeMenu}
              className="block rounded-lg px-3 py-3 text-[14px] font-medium text-gray-700 hover:bg-[#E1F5EE] hover:text-[#085041]"
            >
              Disclaimer
            </Link>
            <a
              href="https://www.lawhelp.org"
              onClick={closeMenu}
              className="block rounded-lg px-3 py-3 text-[14px] font-medium text-gray-700 hover:bg-[#E1F5EE] hover:text-[#085041]"
            >
              Find Legal Aid
            </a>
            <div className="mt-1 border-t border-gray-100 pt-2 pb-2">
              {!checked ? null : accountEmail ? (
                <Link
                  href="/account"
                  onClick={closeMenu}
                  className="block rounded-full bg-[#1D9E75] px-4 py-3 text-center text-[14px] font-semibold text-white transition hover:bg-[#0F6E56]"
                >
                  My account
                </Link>
              ) : (
                <div className="flex gap-2">
                  <Link
                    href="/auth"
                    onClick={closeMenu}
                    className="flex-1 rounded-full border border-[#1D9E75] px-4 py-3 text-center text-[14px] font-semibold text-[#1D9E75] transition hover:bg-[#E1F5EE]"
                  >
                    Log in
                  </Link>
                  <Link
                    href="/auth"
                    onClick={closeMenu}
                    className="flex-1 rounded-full bg-[#1D9E75] px-4 py-3 text-center text-[14px] font-semibold text-white transition hover:bg-[#0F6E56]"
                  >
                    Sign up
                  </Link>
                </div>
              )}
            </div>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
