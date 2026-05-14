import Logo from "../Logo";
import { LINKS } from "@/lib/links";

// Solid header for interior pages (no hero behind it, unlike the homepage nav).
export default function SubpageHeader() {
  return (
    <header className="bg-halo-midnight">
      <div className="mx-auto flex h-[88px] max-w-[1344px] items-center justify-between px-6 lg:px-12">
        <a href={LINKS.home} aria-label="Halo Health home" className="flex items-center">
          <Logo variant="white" />
        </a>
        <a
          href={LINKS.intake}
          className="rounded-full bg-halo-white px-6 py-3 text-[15px] font-medium leading-4 tracking-[-0.3px] text-halo-ink transition hover:bg-white/90"
        >
          Get Started
        </a>
      </div>
    </header>
  );
}
