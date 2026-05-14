"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { LINKS } from "@/lib/links";

const HERO_BG = "/figma/halo_background2__64d1f48f.jpg";

const TREATMENTS = [
  { name: "GLP-1 injections", img: "/figma/glp_1__8aa5a403.png" },
  { name: "NAD+ injections", img: "/figma/nad-1__ef3e272e.png" },
  { name: "Sermorelin injections", img: "/figma/sermorelin__1592e1f0.png" },
  { name: "Glutathione injections", img: "/figma/glutathione-img__374eb337.png" },
  { name: "Lipo-C injections", img: "/figma/lipo-c-img__36cb0821.png" },
  { name: "Lipo-B injections", img: "/figma/lipo-b-img__0f1333f6.png" },
];

function ArrowIcon({ stroke }: { stroke: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M3.5 12.5L12.5 3.5M12.5 3.5H5M12.5 3.5V11"
        stroke={stroke}
        strokeWidth="1.14"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Treatments() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(0);
  const PAGES = 4;

  const scrollByCards = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const amount = (track.clientWidth / 3) * dir;
    track.scrollBy({ left: amount, behavior: "smooth" });
  };

  const onScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const max = track.scrollWidth - track.clientWidth;
    const ratio = max > 0 ? track.scrollLeft / max : 0;
    setPage(Math.round(ratio * (PAGES - 1)));
  };

  return (
    <section
      id="treatments-list"
      className="bg-halo-midnight bg-cover bg-center px-6 py-20 lg:px-[120px]"
      style={{ backgroundImage: `url(${HERO_BG})` }}
    >
      <div className="mx-auto max-w-[1200px]">
        <h2 className="text-center font-display text-[34px] leading-[1.05] tracking-[-1px] text-halo-white sm:text-[44px] lg:text-[52px]">
          Doctor-trusted treatments, priced for you
        </h2>

        <div className="relative mt-10">
          {/* Track */}
          <div
            ref={trackRef}
            onScroll={onScroll}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {TREATMENTS.map((t) => (
              <div
                key={t.name}
                className="flex w-[calc((100%-2rem)/3)] min-w-[300px] shrink-0 snap-start flex-col gap-4"
              >
                <div className="flex flex-col rounded-2xl bg-white/[0.06] p-6">
                  <h3 className="font-display-tall text-[32px] leading-[26px] tracking-[-1px] text-halo-white">
                    {t.name}
                  </h3>
                  <div className="my-6 flex h-[220px] items-center justify-center">
                    <Image
                      src={t.img}
                      alt={t.name}
                      width={331}
                      height={220}
                      className="h-full w-auto object-contain"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href={LINKS.intake}
                      className="flex flex-1 items-center justify-center gap-3 rounded-full border border-white px-6 py-4 text-[16px] font-medium leading-4 tracking-[-0.3px] text-halo-white transition hover:bg-white/10"
                    >
                      Get started
                      <ArrowIcon stroke="#939393" />
                    </a>
                    <a
                      href={LINKS.intake}
                      className="flex flex-1 items-center justify-center rounded-full border border-[#dedede] bg-halo-white px-6 py-4 text-[16px] font-medium leading-4 tracking-[-0.3px] text-halo-ink shadow-[0_4px_15px_rgba(0,0,0,0.05)] transition hover:bg-white/90"
                    >
                      Learn more
                    </a>
                  </div>
                </div>
                <p className="text-center text-[14px] leading-[21px] tracking-[-0.3px] text-halo-gray-faint">
                  Important safety information
                </p>
              </div>
            ))}
          </div>

          {/* Prev / Next */}
          <button
            type="button"
            aria-label="Previous"
            onClick={() => scrollByCards(-1)}
            className="absolute -left-4 top-[250px] flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[#dadada] bg-halo-white transition hover:bg-halo-cream lg:-left-6"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M8 1L3 6l5 5"
                stroke="rgba(40,40,40,0.7)"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={() => scrollByCards(1)}
            className="absolute -right-4 top-[250px] flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[#dadada] bg-halo-white transition hover:bg-halo-cream lg:-right-6"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M4 1l5 5-5 5"
                stroke="rgba(40,40,40,0.7)"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Dots */}
        <div className="mt-4 flex items-center justify-center gap-[5px]">
          {Array.from({ length: PAGES }).map((_, i) => (
            <span
              key={i}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${
                i === page ? "bg-halo-white" : "bg-[#c9c9c9]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
