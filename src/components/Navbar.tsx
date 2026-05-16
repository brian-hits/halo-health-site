"use client";

import { useState } from "react";
import Logo from "./Logo";
import { LINKS } from "@/lib/links";

const NAV_LINKS = [
  { label: "Weight loss", href: LINKS.intake },
  { label: "Anti aging", href: LINKS.intake },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-[88px] max-w-[1344px] items-center justify-between px-6 md:h-[113px] lg:px-12">
        {/* Logo */}
        <a
          href={LINKS.home}
          aria-label="Halo Health home"
          className="flex items-center"
        >
          <Logo variant="white" />
        </a>

        {/* Centered menu (desktop) */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-2 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-xl px-4 py-3 text-[16px] leading-6 tracking-[-0.3px] text-halo-white transition-colors hover:bg-white/10"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <a
            href={LINKS.patientPortal}
            className="rounded-full border border-[#28282814] px-6 py-[10px] text-[16px] leading-4 tracking-[-0.3px] text-halo-white transition-colors hover:bg-white/10"
          >
            Login
          </a>
          {/* Hamburger (mobile) */}
          <button
            type="button"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-halo-white md:hidden"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              {open ? (
                <path
                  d="M4 4l10 10M14 4L4 14"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M2 5h14M2 9h14M2 13h14"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="mx-6 rounded-2xl border border-white/10 bg-halo-midnight/95 p-3 backdrop-blur-xl md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 text-[16px] leading-6 tracking-[-0.3px] text-halo-white transition-colors hover:bg-white/10"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
