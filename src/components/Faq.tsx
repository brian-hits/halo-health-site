"use client";

import { useState } from "react";
import { LINKS } from "@/lib/links";
import { trackGlimmer } from "./Tracking";

const HERO_BG = "/figma/halo_background2__64d1f48f.jpg";

// Answers are concise placeholders grounded in Halo's model — edit as needed.
const FAQS = [
  {
    q: "What is Halo?",
    a: "Halo is a telehealth platform for personalized GLP-1 weight management. Licensed providers review your health history online and, when appropriate, prescribe treatment delivered straight to your door.",
  },
  {
    q: "How does Halo work?",
    a: "Take a free online quiz, get reviewed by a licensed medical provider, and — if prescribed — receive your medication shipped to you for free, with unlimited 24/7 support along the way.",
  },
  {
    q: "Do I need insurance?",
    a: "No. Halo is a cash-pay program with plans starting at $99 per month — no insurance, membership fees, or hidden costs required.",
  },
  {
    q: "Are Halo pharmacies FDA regulated?",
    a: "Yes. Medications are dispensed by state-licensed pharmacies. Compounded medications are prepared by a state-licensed 503A pharmacy in line with applicable regulations.",
  },
  {
    q: "Who are the providers at Halo?",
    a: "Treatment is overseen by licensed clinicians who specialize in weight management and review every patient individually before prescribing.",
  },
  {
    q: "What states is Halo available in?",
    a: "Halo is available in all 50 states, though some restrictions may apply depending on local regulations.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="scroll-mt-24 bg-halo-midnight bg-cover bg-center px-6 py-28 lg:px-12"
      style={{ backgroundImage: `url(${HERO_BG})` }}
    >
      <div className="mx-auto flex max-w-[960px] flex-col items-center gap-10">
        <h2 className="text-center font-display text-[36px] leading-[1.05] tracking-[-1px] text-halo-white sm:text-[44px] lg:text-[52px]">
          Your questions, answered.
        </h2>

        <div className="flex w-full flex-col gap-4">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className="overflow-hidden rounded-2xl bg-white/[0.1]"
              >
                <button
                  type="button"
                  onClick={() => {
                    if (!isOpen) trackGlimmer(`faq:${item.q}`);
                    setOpen(isOpen ? null : i);
                  }}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 px-6 py-2 text-left"
                >
                  <span className="font-manrope py-3 text-[20px] font-medium leading-[22px] tracking-[-0.8px] text-halo-white">
                    {item.q}
                  </span>
                  <span className="flex h-12 w-[72px] shrink-0 items-center justify-center rounded-full bg-white/[0.08]">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className={`transition-transform ${isOpen ? "rotate-45" : ""}`}
                    >
                      <path
                        d="M8 2v12M2 8h12"
                        stroke="#fff"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-[16px] leading-6 tracking-[-0.3px] text-halo-white/70">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col items-center gap-4">
          <p className="text-[16px] leading-6 tracking-[-0.3px] text-halo-white">
            Still have questions?
          </p>
          <a
            href={LINKS.contactEmail}
            className="rounded-full bg-halo-white px-6 py-4 text-[16px] font-medium leading-4 tracking-[-0.3px] text-halo-ink transition hover:bg-white/90"
          >
            Send us a message
          </a>
        </div>
      </div>
    </section>
  );
}
