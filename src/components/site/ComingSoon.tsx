import SubpageHeader from "./SubpageHeader";
import Footer from "../Footer";
import { LINKS } from "@/lib/links";

const HERO_BG = "/figma/halo_background2__64d1f48f.jpg";

export default function ComingSoon({
  title,
  blurb,
}: {
  title: string;
  blurb: string;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-halo-cream">
      <SubpageHeader />

      <section
        className="flex flex-1 items-center bg-halo-midnight bg-cover bg-center px-6 py-28 lg:px-12"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      >
        <div className="mx-auto flex max-w-[620px] flex-col items-center gap-6 text-center">
          <span className="rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-[13px] font-medium uppercase tracking-[0.12em] text-halo-white/70">
            Coming soon
          </span>
          <h1 className="font-display text-[44px] leading-[1.05] tracking-[-1px] text-halo-white sm:text-[56px]">
            {title}
          </h1>
          <p className="max-w-[480px] text-[16px] leading-6 tracking-[-0.3px] text-halo-white/70">
            {blurb}
          </p>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href={LINKS.intake}
              className="rounded-full bg-halo-white px-6 py-4 text-[16px] font-medium leading-4 tracking-[-0.3px] text-halo-ink transition hover:bg-white/90"
            >
              Find your treatment
            </a>
            <a
              href={LINKS.contactEmail}
              className="rounded-full border border-white/15 px-6 py-4 text-[16px] font-medium leading-4 tracking-[-0.3px] text-halo-white transition hover:bg-white/10"
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
