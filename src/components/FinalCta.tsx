import Button from "./ui/Button";

const CTA_BG = "/figma/proven-treatmen-visual__b015e68c.png";

export default function FinalCta() {
  return (
    <section className="bg-halo-cream px-6 py-14 lg:px-12">
      <div
        className="relative mx-auto flex min-h-[538px] max-w-[1344px] items-center overflow-hidden rounded-2xl bg-halo-gold-light bg-cover bg-center"
        style={{ backgroundImage: `url(${CTA_BG})` }}
      >
        <div className="flex w-full flex-col items-start justify-between gap-10 px-6 py-12 sm:px-12 sm:py-14 lg:flex-row lg:items-end">
          {/* Copy */}
          <div className="max-w-[420px]">
            <span
              className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-white/40"
              style={{
                background:
                  "linear-gradient(135deg, #a28d4e 0%, #d3be92 91%)",
              }}
            >
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
                <path d="M12 3l2.5 5.5L20 9l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-.5z" />
              </svg>
            </span>
            <h2 className="font-display text-[40px] leading-[0.95] tracking-[-1px] text-halo-gold sm:text-[52px]">
              Your health,
              <br />
              <span className="font-display-xtall opacity-75">your way</span>
            </h2>
            <p className="mt-3 text-[16px] leading-6 tracking-[-0.3px] text-halo-gold/90">
              Licensed clinicians. Proven treatments. 100% online.
            </p>
          </div>

          {/* CTA */}
          <Button href="#" variant="light" icon>
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
}
