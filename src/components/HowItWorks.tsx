import Button from "./ui/Button";

const HOW_BG = "/figma/how-it-works-bg-p-1600__efee76a0.png";

const STEPS = [
  {
    step: "Step 1",
    title: "Free quiz, 100% online",
    body: "Answer some questions about your health history, lifestyle, and goals.",
    cta: "Take the quiz",
    icon: (
      <>
        <path d="M9 6h7M9 11h7M9 16h4" />
        <path d="M4.5 6l1 1 1.5-1.8M4.5 11l1 1 1.5-1.8" />
      </>
    ),
  },
  {
    step: "Step 2",
    title: "Prescription",
    body: "A licensed medical provider will review your medical history and determine if the medication is right for you and your specific needs.",
    cta: "Find out if I am eligible",
    icon: (
      <>
        <path d="M8 4h6a2 2 0 012 2v12a2 2 0 01-2 2H8a2 2 0 01-2-2V6a2 2 0 012-2z" />
        <path d="M9.5 9.5h5M9.5 13h5M9.5 16.5h3" />
      </>
    ),
  },
  {
    step: "Step 3",
    title: "Delivery",
    body: "If prescribed, the medication is shipped directly to your door, for free.",
    cta: "Get started",
    icon: (
      <>
        <path d="M3 8h9v9H3zM12 11h4l3 3v3h-7" />
        <circle cx="6.5" cy="18.5" r="1.6" />
        <circle cx="15.5" cy="18.5" r="1.6" />
      </>
    ),
  },
  {
    step: "Step 4",
    title: "On-going support",
    body: "Our team of experts is available to answer your questions and provide support every step of the way.",
    cta: "Get started",
    icon: (
      <>
        <path d="M5 18a7 7 0 1112 0" />
        <circle cx="11" cy="7" r="3.2" />
      </>
    ),
  },
];

function StepIcon({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/25"
      style={{
        background:
          "linear-gradient(135deg, rgba(117,101,219,0.75) 0%, rgba(255,255,255,0.5) 100%)",
      }}
    >
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        stroke="#fff"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {children}
      </svg>
    </span>
  );
}

export default function HowItWorks() {
  return (
    <section className="bg-halo-cream px-6 py-14 lg:px-12">
      <div
        className="relative mx-auto max-w-[1344px] overflow-hidden rounded-[32px] bg-halo-midnight bg-cover bg-center"
        style={{ backgroundImage: `url(${HOW_BG})` }}
      >
        {/* readability gradient over the photo */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/55" />

        <div className="relative flex min-h-[820px] flex-col p-6 sm:p-8 lg:p-12">
          {/* Header row */}
          <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-start sm:justify-between">
            <h2 className="font-display text-[40px] leading-[0.95] tracking-[-1px] text-halo-white sm:text-[52px] lg:text-[62px]">
              How it <span className="font-display-xtall">works</span>
            </h2>
            <Button href="#treatments" variant="light" icon>
              Get Started
            </Button>
          </div>

          {/* Step cards */}
          <div className="mt-auto grid grid-cols-1 gap-5 pt-16 sm:grid-cols-2 xl:grid-cols-4">
            {STEPS.map((s) => (
              <div
                key={s.step}
                className="flex flex-col gap-9 rounded-[20px] border border-white/10 bg-black/15 p-5 backdrop-blur-2xl"
              >
                <div className="flex flex-col gap-[18px]">
                  <div className="flex items-start justify-between">
                    <StepIcon>{s.icon}</StepIcon>
                    <span className="rounded-full border border-white/10 bg-black/5 px-3 py-0.5 text-[14px] font-medium leading-[21px] tracking-[-0.3px] text-halo-white backdrop-blur-md">
                      {s.step}
                    </span>
                  </div>
                  <div className="flex flex-col gap-[13px]">
                    <h3 className="font-display-tall text-[28px] leading-[26px] text-halo-white">
                      {s.title}
                    </h3>
                    <p className="text-[16px] leading-6 tracking-[-0.3px] text-halo-white/70">
                      {s.body}
                    </p>
                  </div>
                </div>
                <a
                  href="#"
                  className="flex items-center justify-center gap-4 rounded-full border border-white/10 bg-white/10 px-5 py-4 text-[16px] font-medium leading-4 tracking-[-0.3px] text-halo-white transition hover:bg-white/[0.18]"
                >
                  {s.cta}
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M3.5 12.5L12.5 3.5M12.5 3.5H5M12.5 3.5V11"
                      stroke="rgba(255,255,255,0.7)"
                      strokeWidth="1.14"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
