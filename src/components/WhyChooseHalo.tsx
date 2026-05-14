import Button from "./ui/Button";
import { LINKS } from "@/lib/links";

const HERO_BG = "/figma/halo_background2__64d1f48f.jpg";
const WHY_BG = "/figma/why-choose-visual-p-1600__f1f3f37a.png";

type Feature = { text: string; icon: React.ReactNode };

const icon = (paths: React.ReactNode) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#fff"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {paths}
  </svg>
);

const LEFT: Feature[] = [
  {
    text: "Plans starting at\n$99 per month",
    icon: icon(
      <>
        <rect x="3" y="6" width="18" height="12" rx="2" />
        <path d="M3 10h18M7 14h3" />
      </>,
    ),
  },
  {
    text: "No membership\nfees or hidden costs",
    icon: icon(
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M8 12h8M9 9l6 6" />
      </>,
    ),
  },
  {
    text: "No insurance\nrequired",
    icon: icon(
      <>
        <path d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6z" />
        <path d="M9 12l2 2 4-4" />
      </>,
    ),
  },
];

const RIGHT: Feature[] = [
  {
    text: "100,000+ members\ntreated",
    icon: icon(
      <>
        <circle cx="9" cy="8" r="3.2" />
        <path d="M3.5 19a5.5 5.5 0 0111 0M15 6a3 3 0 010 6M16 19a5.5 5.5 0 00-2-4.3" />
      </>,
    ),
  },
  {
    text: "100% online",
    icon: icon(
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 3 2.5 15 0 18M12 3c-2.5 3-2.5 15 0 18" />
      </>,
    ),
  },
  {
    text: "Unlimited 24/7 support\nincluded",
    icon: icon(
      <>
        <path d="M5 18a7 7 0 1114 0v1a2 2 0 01-2 2h-1v-6" />
        <path d="M5 13v6M19 13v5" />
      </>,
    ),
  },
];

function IconBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10">
      {children}
    </span>
  );
}

function CardStack({
  items,
  align,
}: {
  items: Feature[];
  align: "left" | "right";
}) {
  return (
    <div className="flex w-full max-w-[304px] flex-col gap-0.5 overflow-hidden rounded-[32px]">
      {items.map((f) => (
        <div
          key={f.text}
          className={`flex items-center gap-4 bg-black/10 px-6 py-6 backdrop-blur-2xl ${
            align === "right" ? "flex-row-reverse text-right" : ""
          }`}
        >
          <IconBadge>{f.icon}</IconBadge>
          <p className="flex-1 whitespace-pre-line text-[16px] leading-6 tracking-[-0.3px] text-halo-white">
            {f.text}
          </p>
        </div>
      ))}
    </div>
  );
}

export default function WhyChooseHalo() {
  return (
    <section
      className="bg-halo-midnight bg-cover bg-center px-6 pb-28 pt-12 lg:px-12"
      style={{ backgroundImage: `url(${HERO_BG})` }}
    >
      <div
        className="relative mx-auto max-w-[1344px] overflow-hidden rounded-[32px] bg-halo-midnight bg-cover bg-center"
        style={{ backgroundImage: `url(${WHY_BG})` }}
      >
        <div className="absolute inset-0 bg-black/25" />

        <div className="relative flex min-h-[745px] flex-col justify-between gap-12 p-6 sm:p-8 lg:p-10">
          <h2 className="text-center font-display text-[36px] leading-[1.05] tracking-[-1px] text-halo-white sm:text-[44px] lg:text-[52px]">
            Why Choose Halo
          </h2>

          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row lg:items-center">
            <CardStack items={LEFT} align="left" />
            <CardStack items={RIGHT} align="right" />
          </div>

          <div className="flex justify-center">
            <Button href={LINKS.intake} variant="light" icon>
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
