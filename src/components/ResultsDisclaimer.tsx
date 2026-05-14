const TEXT =
  "All results refer to participation in the full Weight Loss by Halo program, a holistic program that combines personalized coaching, nutrition and lifestyle support, a reduced-calorie diet and exercise, and, when clinically appropriate, FDA-approved GLP-1 medication or compounded GLP-1 medication dispensed by licensed pharmacies pursuant to a prescription. Medication eligibility and outcomes depend on individual clinical evaluation. Compounded drugs provided through Halo have not been reviewed or approved by the U.S. Food and Drug Administration for safety or effectiveness. Before-and-after images are submitted by paid Halo affiliates. Results have not been independently verified and will vary from person to person. Available in all 50 states, restrictions apply. Discontinuing treatment may lead to weight regain.";

const HERO_BG = "/figma/halo_background2__64d1f48f.jpg";

export default function ResultsDisclaimer() {
  return (
    <section
      className="bg-halo-midnight bg-cover bg-center px-6 pb-10 lg:px-12"
      style={{ backgroundImage: `url(${HERO_BG})` }}
    >
      <div className="mx-auto flex max-w-[1344px] flex-col items-center gap-7">
        <p className="max-w-[1114px] text-center text-[14px] leading-[21px] tracking-[-0.3px] text-halo-white">
          {TEXT}
        </p>
        <a
          href="#"
          className="rounded-full bg-halo-white px-6 py-4 text-[16px] font-medium leading-4 tracking-[-0.3px] text-[#363636] transition hover:bg-white/90"
        >
          Start your journey
        </a>
      </div>
    </section>
  );
}
