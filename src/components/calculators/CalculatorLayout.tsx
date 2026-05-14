import type { ReactNode } from "react";
import SubpageHeader from "../site/SubpageHeader";
import Footer from "../Footer";
import { LINKS } from "@/lib/links";

const HERO_BG = "/figma/halo_background2__64d1f48f.jpg";

// Shared shell for the footer "Tools" calculator pages.
export default function CalculatorLayout({
  title,
  intro,
  children,
}: {
  title: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-halo-cream">
      <SubpageHeader />

      {/* Title band */}
      <section
        className="bg-halo-midnight bg-cover bg-center px-6 py-16 lg:px-12"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      >
        <div className="mx-auto max-w-[760px] text-center">
          <h1 className="font-display text-[40px] leading-[1.05] tracking-[-1px] text-halo-white sm:text-[52px]">
            {title}
          </h1>
          <p className="mx-auto mt-4 max-w-[560px] text-[16px] leading-6 tracking-[-0.3px] text-halo-white/70">
            {intro}
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="flex-1 px-6 py-14 lg:px-12">
        <div className="mx-auto max-w-[640px]">{children}</div>
      </section>

      {/* Conversion nudge */}
      <section className="bg-halo-cream px-6 pb-16 lg:px-12">
        <div className="mx-auto flex max-w-[640px] flex-col items-center gap-4 rounded-2xl bg-halo-midnight px-8 py-10 text-center">
          <h2 className="font-display text-[28px] leading-[1.1] tracking-[-0.5px] text-halo-white">
            Ready to quiet the food noise?
          </h2>
          <p className="text-[15px] leading-6 tracking-[-0.3px] text-halo-white/70">
            See if a personalized GLP-1 plan is right for you — 100% online.
          </p>
          <a
            href={LINKS.intake}
            className="mt-1 rounded-full bg-halo-white px-6 py-4 text-[16px] font-medium leading-4 tracking-[-0.3px] text-halo-ink transition hover:bg-white/90"
          >
            Find your treatment
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
