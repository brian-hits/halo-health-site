import Image from "next/image";
import Button from "./ui/Button";

const WEIGHT_BG = "/figma/weight_loss_bg-p-1600__cf097844.png";

const STATS = [
  {
    img: "/figma/card-1-visual__dc9ddd4f.png",
    from: "L",
    to: "M",
    title: "Drop a clothing size",
    body: "88% of members dropped a clothing size or more.",
  },
  {
    img: "/figma/card-2-visual__1602f161.png",
    from: "222 lbs",
    to: "189 lbs",
    title: "33 lbs lost on average",
    body: "Members lost an average of 33 lbs (≈ 14.4% of weight).",
  },
  {
    img: "/figma/card-3-bg__88cb036c.png",
    from: "Hungry",
    to: "Satisfied",
    title: "Reduce your cravings",
    body: "95% say their appetite is lower since starting Halo.",
  },
  {
    img: "/figma/card-4-bg__fb732549.png",
    from: "34”",
    to: "31.5”",
    title: "Shrink your waist",
    body: "9 out of 10 saw their waist shrink by at least an inch.",
  },
];

const DISCLAIMER =
  "Individual results vary. Statistics shown reflect anonymized self-reported outcomes from 16,000+ U.S. Halo program members surveyed in May 2025; weight-loss numbers come from members’ own scale readings, waist-change figures are based on members’ tape-measure readings, and clothing-size changes reflect members’ stated apparel sizes. All results refer to participation in the full Halo weight loss program—which combines physician oversight, nutrition support, and, when clinically appropriate, FDA-approved GLP-1 medication or compounded GLP-1 medication dispensed by licensed pharmacies; no efficacy claims are made for any compounded drugs. Medication eligibility and outcomes depend on individual clinical evaluation. Common GLP-1 side effects include nausea and constipation; 0.3% of respondents described side effects as “unmanageable.” Consult a licensed medical professional to determine whether GLP-1 therapy within the Halo program is appropriate for you. The individual pictured is not a Halo member. Customers’ results have not been independently verified. Participants received compensation for participating in the survey.";

export default function BackedByData() {
  return (
    <section className="bg-halo-cream px-6 py-16 lg:px-12">
      <div className="mx-auto max-w-[1344px]">
        {/* Photo panel */}
        <div
          className="overflow-hidden rounded-2xl bg-cover bg-center p-6 sm:p-8"
          style={{ backgroundImage: `url(${WEIGHT_BG})` }}
        >
          {/* Header */}
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <h2 className="font-display text-[36px] leading-[1.05] tracking-[-1px] text-halo-ink sm:text-[44px] lg:text-[52px]">
              Weight loss,
              <br />
              <span className="font-display-xtall opacity-75">
                backed by data
              </span>
            </h2>
            <Button href="#" variant="light" icon>
              Get Started
            </Button>
          </div>

          {/* Stat cards */}
          <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-[32px] sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((s) => (
              <div
                key={s.title}
                className="flex flex-col bg-black/10 backdrop-blur-md"
              >
                <div className="relative h-[210px] w-full">
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col items-center gap-3 px-6 pb-7 pt-6 text-center">
                  <span className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/20 px-4 py-0.5 text-[14px] leading-[21px] tracking-[-0.3px] text-halo-white backdrop-blur-md">
                    {s.from}
                    <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                      <path
                        d="M1 5h9M7 1.5L10.5 5 7 8.5"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {s.to}
                  </span>
                  <h3 className="font-display-tall text-[28px] leading-[26px] text-halo-white">
                    {s.title}
                  </h3>
                  <p className="text-[16px] leading-6 tracking-[-0.3px] text-halo-white">
                    {s.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <p className="mx-auto mt-10 max-w-[1341px] text-center text-[14px] leading-[21px] tracking-[-0.3px] text-halo-ink/50">
          {DISCLAIMER}
        </p>
      </div>
    </section>
  );
}
