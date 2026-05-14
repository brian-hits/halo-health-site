import Logo from "./Logo";

const COLUMNS = [
  {
    title: "Treatment",
    links: ["Weight loss", "Anti-aging"],
  },
  {
    title: "Tools",
    links: [
      "BMI calculator",
      "TDEE calculator",
      "Calorie deficit calculator",
      "Protein calculator",
      "Water intake calculator",
    ],
  },
  {
    title: "Halo",
    links: [
      "Contact",
      "FAQ",
      "How it works",
      "Halo Cares Program",
      "Referral program",
    ],
  },
];

const LEGAL = [
  "Important safety information",
  "Privacy Policy",
  "Terms of Service",
  "Your privacy choices",
];

// Generic payment-method chips (swap for brand SVGs when available).
function PaymentChip() {
  return (
    <span className="flex h-6 w-9 items-center justify-center rounded-[4px] bg-white/10">
      <span className="h-1.5 w-5 rounded-full bg-white/30" />
    </span>
  );
}

export default function Footer() {
  return (
    <footer className="bg-halo-midnight px-6 py-8 lg:px-12">
      <div className="mx-auto max-w-[1344px]">
        <div className="rounded-[18px] border border-[#2b2b2b] bg-white/[0.03] p-8 backdrop-blur-2xl lg:p-10">
          <div className="flex flex-col justify-between gap-12 lg:flex-row">
            {/* Brand side */}
            <div className="flex flex-col gap-8">
              <Logo variant="white" />
              <div className="flex flex-wrap gap-[5px]">
                {Array.from({ length: 7 }).map((_, i) => (
                  <PaymentChip key={i} />
                ))}
              </div>
              {/* Official LegitScript Certified seal — served from LegitScript's
                  CDN so it always reflects current certification status. */}
              <a
                href="https://www.legitscript.com/websites/?checker_keywords=tryhalohealth.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Verify LegitScript Approval for tryhalohealth.com"
                className="w-fit"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://static.legitscript.com/seals/50006816.png"
                  alt="LegitScript Certified — verify approval for tryhalohealth.com"
                  width={73}
                  height={79}
                />
              </a>
            </div>

            {/* Link columns */}
            <div className="flex flex-wrap gap-12 lg:gap-[44px]">
              {COLUMNS.map((col) => (
                <div key={col.title} className="flex flex-col gap-8">
                  <h3 className="text-[16px] font-medium leading-6 tracking-[-0.3px] text-halo-white">
                    {col.title}
                  </h3>
                  <ul className="flex flex-col gap-4">
                    {col.links.map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className="text-[16px] leading-6 tracking-[-0.3px] text-[#ababab] transition-colors hover:text-halo-white"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-10 flex flex-col gap-4 border-t border-white/[0.06] pt-6 text-[14px] leading-[21px] tracking-[-0.3px] text-halo-white md:flex-row md:items-center md:justify-between">
            <p>© 2026 Halo — All rights reserved.</p>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {LEGAL.map((item) => (
                <li key={item}>
                  <a href="#" className="transition-colors hover:text-halo-white/70">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
