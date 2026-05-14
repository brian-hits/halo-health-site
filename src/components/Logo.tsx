/* eslint-disable @next/next/no-img-element */
// Halo primary wordmark from the brand kit (SVG in /public/brand).
type Variant = "white" | "plum" | "champagne";

const SRC: Record<Variant, string> = {
  white: "/brand/halo-logo-white.svg",
  plum: "/brand/halo-logo-plum.svg",
  champagne: "/brand/halo-logo-champagne.svg",
};

export default function Logo({
  variant = "white",
  className = "",
}: {
  variant?: Variant;
  className?: string;
}) {
  return (
    <img
      src={SRC[variant]}
      alt="Halo Health"
      className={`h-[34px] w-auto ${className}`}
    />
  );
}
