import Image from "next/image";
import Navbar from "./Navbar";
import { LINKS } from "@/lib/links";

const HERO_BG = "/figma/halo_background2__64d1f48f.jpg";
const VIAL = "/figma/bg_removal_background_removed__32c56812.png";

const CARDS = [
  {
    title: "Weight loss",
    font: "font-manrope",
    href: "https://intake.tryhalohealth.com/start-online-visit/glp",
  },
  {
    title: "Anti aging",
    font: "font-manrope",
    href: "https://intake.tryhalohealth.com/start-online-visit/nad",
  },
];

function ArrowCircle() {
  return (
    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-halo-white">
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
        <path
          d="M1.5 8.5L8.5 1.5M8.5 1.5H2.5M8.5 1.5V7.5"
          stroke="#000"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export default function Hero() {
  return (
    <section
      className="relative bg-halo-midnight bg-cover bg-center"
      style={{ backgroundImage: `url(${HERO_BG})` }}
    >
      <Navbar />

      <div className="mx-auto max-w-[1344px] px-6 pb-20 pt-[110px] md:pt-[150px] md:pb-24 lg:px-12">
        {/* Top band: left copy + right badges/CTA */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          {/* Left */}
          <div className="max-w-[440px]">
            {/* Rating row */}
            <div className="flex items-center gap-4">
              <span className="rounded-full bg-[#0b0b0b0d] px-4 py-1.5 text-[14px] font-medium leading-[21px] tracking-[-0.3px] text-halo-white">
                Trusted by patients nationwide
              </span>
              <span className="flex items-center gap-1.5 rounded-full bg-white/[0.05] px-4 py-1.5">
                <span className="text-[14px] font-bold leading-[21px] tracking-[-0.3px] text-halo-white">
                  4.5
                </span>
                <svg width="16" height="15" viewBox="0 0 16 15" fill="#00b67a">
                  <path d="M8 0l2.1 4.6 5 .5-3.7 3.4 1 4.9L8 11.5 3.6 13.8l1-4.9L1 5.5l5-.5z" />
                </svg>
              </span>
            </div>

            {/* Headline */}
            <h1 className="mt-8 font-display text-[44px] leading-[1.02] tracking-[-1px] text-halo-white sm:text-[56px] md:mt-10 lg:text-[72px] lg:leading-[68px]">
              Quiet food noise,
              <br />
              for good.
            </h1>

            {/* Subtext */}
            <p className="mt-8 max-w-[340px] text-[16px] leading-6 tracking-[-0.3px] text-halo-white">
              Medical treatment delivered to your door, 100% online
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-col items-start gap-6 lg:items-end">
            <div className="flex items-center gap-3">
              <span className="flex h-[29px] w-[72px] items-center justify-center rounded-md bg-white px-2 text-[13px] font-bold text-halo-ink">
                affirm
              </span>
              <Image
                src="/figma/klarna__72ecc92d.png"
                alt="Klarna"
                width={72}
                height={29}
                className="h-[29px] w-auto rounded-md"
              />
              <Image
                src="/figma/b__25342cc3.png"
                alt="Afterpay"
                width={100}
                height={35}
                className="h-[35px] w-auto"
              />
            </div>

            <a
              href={LINKS.intake}
              className="flex items-center gap-3 rounded-full bg-halo-white px-6 py-4 text-[16px] font-medium leading-4 tracking-[-0.3px] text-[#1a041b] transition hover:bg-white/90"
            >
              Find your treatment
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 13L13 3M13 3H5M13 3V11"
                  stroke="#939393"
                  strokeWidth="1.14"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Treatment cards */}
        <div
          id="treatments"
          className="mt-[72px] grid grid-cols-1 gap-4 sm:grid-cols-2"
        >
          {CARDS.map((card) => (
            <a
              key={card.title}
              href={card.href}
              className="group flex h-[311px] flex-col justify-between rounded-2xl bg-white/[0.06] p-8 transition hover:bg-white/[0.1]"
            >
              <div className="flex flex-1 items-center justify-center">
                <Image
                  src={VIAL}
                  alt={card.title}
                  width={260}
                  height={180}
                  className="h-[180px] w-auto object-contain"
                />
              </div>
              <div className="flex items-center justify-between">
                <h3
                  className={`${card.font} text-[42px] font-medium leading-none tracking-[-1px] text-halo-white`}
                >
                  {card.title}
                </h3>
                <ArrowCircle />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
