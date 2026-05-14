import type { ReactNode } from "react";

type Variant = "light" | "glass" | "dark";

const VARIANTS: Record<Variant, string> = {
  // White pill, dark text — primary CTA on dark/photo backgrounds
  light: "bg-halo-white text-halo-ink hover:bg-white/90",
  // Frosted pill, white text — secondary CTA on dark/photo backgrounds
  glass: "bg-white/[0.1] text-halo-white border border-white/[0.1] hover:bg-white/[0.18]",
  // Dark pill, white text — CTA on light backgrounds
  dark: "bg-halo-ink text-halo-white hover:bg-halo-ink/90",
};

function ArrowUpRight({ className = "" }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        d="M3.5 12.5L12.5 3.5M12.5 3.5H5M12.5 3.5V11"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Button({
  children,
  href = "#",
  variant = "light",
  icon = false,
  className = "",
}: {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  icon?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 text-[16px] font-medium leading-4 tracking-[-0.3px] transition ${VARIANTS[variant]} ${className}`}
    >
      {children}
      {icon && <ArrowUpRight className="opacity-70" />}
    </a>
  );
}
