import type { ReactNode } from "react";
import SubpageHeader from "./SubpageHeader";
import Footer from "../Footer";

const HERO_BG = "/figma/halo_background2__64d1f48f.jpg";

// Shared layout for the legal pages (Privacy, Terms, HIPAA, Return).
export default function LegalLayout({
  title,
  effectiveDate,
  children,
}: {
  title: string;
  effectiveDate: string;
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-halo-cream">
      <SubpageHeader />

      <section
        className="bg-halo-midnight bg-cover bg-center px-6 py-16 lg:px-12"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      >
        <div className="mx-auto max-w-[820px] text-center">
          <h1 className="font-display text-[40px] leading-[1.05] tracking-[-1px] text-halo-white sm:text-[52px]">
            {title}
          </h1>
          <p className="mt-3 text-[14px] uppercase tracking-[0.12em] text-halo-white/60">
            {effectiveDate}
          </p>
        </div>
      </section>

      <section className="flex-1 px-6 py-14 lg:px-12">
        <article
          className="mx-auto max-w-[760px] rounded-2xl bg-halo-white p-8 text-halo-ink shadow-[0_8px_30px_rgba(16,0,33,0.06)] sm:p-12
            [&_h2]:font-display [&_h2]:text-[24px] [&_h2]:leading-[1.2] [&_h2]:tracking-[-0.5px] [&_h2]:text-halo-ink [&_h2]:mt-10 [&_h2:first-child]:mt-0 [&_h2]:mb-3
            [&_p]:text-[15px] [&_p]:leading-[1.7] [&_p]:text-halo-ink/85 [&_p+p]:mt-3
            [&_ul]:my-3 [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-2
            [&_li]:list-disc [&_li]:ml-5 [&_li]:text-[15px] [&_li]:leading-[1.65] [&_li]:text-halo-ink/85 [&_li]:pl-1
            [&_strong]:text-halo-ink
            [&_a]:text-halo-midnight [&_a]:underline [&_a:hover]:opacity-80"
        >
          {children}
        </article>
      </section>

      <Footer />
    </div>
  );
}
