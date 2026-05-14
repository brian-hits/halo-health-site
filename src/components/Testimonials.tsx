"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const HERO_BG = "/figma/halo_background2__64d1f48f.jpg";

const REVIEWS = [
  {
    name: "Johnna, 30",
    before: "/figma/before__c043a6c4.png",
    after: "/figma/after__4573e2b1.png",
    startWeight: "357 lbs",
    endWeight: "120 lbs",
    height: "5’2”",
    startMonth: "Month 0",
    endMonth: "Month 24",
    quote:
      "“Halo changed my life. Their GLP-1 program made weight loss easier and safer, and I emerged not just lighter but more confident, energetic, and positive. The team’s consistent support made all the difference, and I’m truly grateful.”",
  },
  {
    name: "Tara, 49",
    before: "/figma/before__69285417.png",
    after: "/figma/after__d26dc62e.png",
    startWeight: "342 lbs",
    endWeight: "121 lbs",
    height: "5’4”",
    startMonth: "Month 0",
    endMonth: "Month 30",
    quote:
      "“After losing my sister to obesity, I’d nearly given up after years of failed diets. I never imagined I’d lose 221 pounds—or find peace in the process. Halo quieted the noise, gave me my health back, and showed me what freedom really feels like.”",
  },
  {
    name: "Alexis, 26",
    before: "/figma/before__4069355a.png",
    after: "/figma/after__4e779d84.png",
    startWeight: "286 lbs",
    endWeight: "158 lbs",
    height: "5’11”",
    startMonth: "Month 0",
    endMonth: "Month 11",
    quote:
      "“After dealing with obesity my entire life, I finally decided to make a change. I am down 128 pounds, and weigh less now than I did when I was 11 years old. Halo made it easy, affordable and accessible for me to get on a GLP-1. I’ve never had this much confidence before in my life!”",
  },
  {
    name: "Robert, 50",
    before: "/figma/before__e4fc1938.png",
    after: "/figma/after__b957f1b8.png",
    startWeight: "308 lbs",
    endWeight: "178 lbs",
    height: "5’10”",
    startMonth: "Month 0",
    endMonth: "Month 7",
    quote:
      "“I never thought losing weight—let alone 130 pounds in 7 months—was possible. My gut issues are gone, and my bloodwork is perfect. Halo made it happen and truly changed my life.”",
  },
  {
    name: "Kimberly, 41",
    before: "/figma/before__04692b2d.png",
    after: "/figma/after__8481380b.png",
    startWeight: "235 lbs",
    endWeight: "135 lbs",
    height: "5’7”",
    startMonth: "Month 0",
    endMonth: "Month 14",
    quote:
      "“I thought bariatric surgery would help me lose weight. It did, but then I regained 120 pounds. Enter Halo. I have achieved and am maintaining my goal weight and feel more confident than ever.”",
  },
  {
    name: "Kelly, 45",
    before: "/figma/before__6850c4d3.png",
    after: "/figma/after__540c40e7.png",
    startWeight: "272 lbs",
    endWeight: "120 lbs",
    height: "5’2”",
    startMonth: "Month 0",
    endMonth: "Month 17",
    quote:
      "“I finally know what it feels like to be ‘normal’, eat when I’m hungry & stop when I’m full. The food noise is gone. Metabolic syndrome, treated. I found hope and strength. If I can do it, so can YOU!”",
  },
];

function Stat({ label }: { label: string }) {
  return (
    <span className="rounded-md bg-black/55 px-2 py-0.5 text-[12px] leading-[18px] tracking-[-0.3px] text-halo-white backdrop-blur-sm">
      {label}
    </span>
  );
}

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(0);
  const PAGES = 4;

  const scrollByCards = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: (track.clientWidth / 3) * dir, behavior: "smooth" });
  };

  const onScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const max = track.scrollWidth - track.clientWidth;
    setPage(Math.round((max > 0 ? track.scrollLeft / max : 0) * (PAGES - 1)));
  };

  return (
    <section
      className="bg-halo-midnight bg-cover bg-center px-6 py-20 lg:px-[120px]"
      style={{ backgroundImage: `url(${HERO_BG})` }}
    >
      <div className="mx-auto max-w-[1200px]">
        {/* Trustpilot rating */}
        <div className="flex items-center justify-center gap-2.5">
          <div className="flex gap-[3px]">
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                className="flex h-5 w-5 items-center justify-center bg-[#00b67a]"
              >
                <svg width="12" height="12" viewBox="0 0 16 16" fill="#fff">
                  <path d="M8 0l2.1 4.6 5 .5-3.7 3.4 1 4.9L8 11.5 3.6 13.8l1-4.9L1 5.5l5-.5z" />
                </svg>
              </span>
            ))}
          </div>
          <span className="text-[16px] leading-6 tracking-[-0.3px] text-halo-white">
            4.5 • 2000+ reviews
          </span>
        </div>

        <h2 className="mt-6 text-center font-display text-[36px] leading-[1.05] tracking-[-1px] text-halo-white sm:text-[44px] lg:text-[52px]">
          Real people, real results
        </h2>

        <div className="relative mt-10">
          <div
            ref={trackRef}
            onScroll={onScroll}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {REVIEWS.map((r) => (
              <article
                key={r.name}
                className="flex w-[calc((100%-2rem)/3)] min-w-[300px] shrink-0 snap-start flex-col overflow-hidden rounded-2xl bg-[#f9f9f9]"
              >
                {/* Before / after */}
                <div className="grid grid-cols-2 gap-px">
                  {(
                    [
                      {
                        src: r.before,
                        month: r.startMonth,
                        stats: [r.startWeight, r.height],
                      },
                      { src: r.after, month: r.endMonth, stats: [r.endWeight] },
                    ] as const
                  ).map((p, i) => (
                    <div key={i} className="relative aspect-[316/360]">
                      <Image
                        src={p.src}
                        alt={r.name}
                        fill
                        className="object-cover"
                      />
                      <span className="absolute left-2 top-2 rounded-md bg-black/55 px-2 py-0.5 text-[12px] leading-[18px] tracking-[-0.3px] text-halo-white backdrop-blur-sm">
                        {p.month}
                      </span>
                      <div className="absolute bottom-2 left-2 flex flex-wrap gap-1">
                        {p.stats.map((s) => (
                          <Stat key={s} label={s} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quote + name */}
                <div className="flex flex-1 flex-col items-center gap-4 px-6 py-7 text-center">
                  <p className="flex-1 text-[16px] leading-6 tracking-[-0.3px] text-[#525252]">
                    {r.quote}
                  </p>
                  <p className="text-[16px] leading-6 tracking-[-0.3px] text-halo-ink">
                    {r.name}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <button
            type="button"
            aria-label="Previous"
            onClick={() => scrollByCards(-1)}
            className="absolute -left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[#dadada] bg-halo-white transition hover:bg-halo-cream lg:-left-6"
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
            className="absolute -right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[#dadada] bg-halo-white transition hover:bg-halo-cream lg:-right-6"
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

        <div className="mt-4 flex items-center justify-center gap-[5px]">
          {Array.from({ length: PAGES }).map((_, i) => (
            <span
              key={i}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${
                i === page ? "bg-halo-white" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
