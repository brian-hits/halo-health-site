import Logo from "./Logo";
import { LINKS } from "@/lib/links";

const COLUMNS = [
  {
    title: "Treatment",
    links: [
      { label: "Weight loss", href: LINKS.intake },
      { label: "Anti-aging", href: LINKS.intake },
    ],
  },
  {
    title: "Tools",
    links: [
      { label: "BMI calculator", href: "/tools/bmi-calculator" },
      { label: "TDEE calculator", href: "/tools/tdee-calculator" },
      {
        label: "Calorie deficit calculator",
        href: "/tools/calorie-deficit-calculator",
      },
      { label: "Protein calculator", href: "/tools/protein-calculator" },
      {
        label: "Water intake calculator",
        href: "/tools/water-intake-calculator",
      },
    ],
  },
  {
    title: "Halo",
    links: [
      { label: "Contact", href: LINKS.contactEmail },
      { label: "FAQ", href: "/#faq" },
      { label: "How it works", href: "/#how-it-works" },
      { label: "Halo Cares Program", href: "/halo-cares" },
      { label: "Referral program", href: "/referral" },
    ],
  },
];

const LEGAL = [
  { label: "Privacy Policy", href: LINKS.privacyPolicy },
  { label: "HIPAA Privacy Policy", href: LINKS.hipaaPolicy },
  { label: "Terms of Service", href: LINKS.termsOfService },
  { label: "Return Policy", href: LINKS.returnPolicy },
];

export default function Footer() {
  return (
    <footer className="bg-halo-midnight px-6 py-8 lg:px-12">
      <div className="mx-auto max-w-[1344px]">
        <div className="rounded-[18px] border border-[#2b2b2b] bg-white/[0.03] p-8 backdrop-blur-2xl lg:p-10">
          <div className="flex flex-col justify-between gap-12 lg:flex-row">
            {/* Brand side */}
            <div className="flex flex-col gap-8">
              <a href={LINKS.home} aria-label="Halo Health home" className="w-fit">
                <Logo variant="white" />
              </a>
              {/* Official LegitScript Certified seal — served from LegitScript's
                  CDN so it always reflects current certification status. */}
              <a
                href="https://www.legitscript.com/websites/?checker_keywords=tryhalohealth.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Verify LegitScript Approval for www.tryhalohealth.com"
                className="w-fit"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://static.legitscript.com/seals/50006816.png"
                  alt="Verify Approval for www.tryhalohealth.com"
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
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="text-[16px] leading-6 tracking-[-0.3px] text-[#ababab] transition-colors hover:text-halo-white"
                        >
                          {link.label}
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
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="transition-colors hover:text-halo-white/70"
                  >
                    {item.label}
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
