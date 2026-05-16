const ITEMS = [
  { label: "FDA regulated pharmacies", icon: "cross" },
  { label: "Free expedited delivery", icon: "truck" },
  { label: "No hidden fees", icon: "price" },
  { label: "Unlimited 24/7 support", icon: "chat" },
  { label: "Available in all 50 states", icon: "bag" },
  { label: "100% online", icon: "bag" },
] as const;

function Icon({ name }: { name: string }) {
  const common = {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "none",
    stroke: "#282828",
    strokeWidth: 1.33,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "cross":
      return (
        <svg {...common}>
          <path d="M6.5 1.5h3v3.5H13v3H9.5v3.5h-3V8H3V5h3.5z" />
        </svg>
      );
    case "truck":
      return (
        <svg {...common}>
          <path d="M1 4.5h8.5v6.5H1zM9.5 6.5H13l2 2.5v2h-5.5" />
          <circle cx="4" cy="12.5" r="1.5" />
          <circle cx="11.5" cy="12.5" r="1.5" />
        </svg>
      );
    case "price":
      return (
        <svg {...common}>
          <path d="M8 1v14M11 3.5H6.5a2 2 0 000 4h3a2 2 0 010 4H4.5" />
        </svg>
      );
    case "chat":
      return (
        <svg {...common}>
          <path d="M14 8A6 6 0 102.6 10.7L2 14l3.3-.6A6 6 0 0014 8z" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <path d="M3 5h10l-.8 8.5H3.8zM5.5 5V3.5a2.5 2.5 0 015 0V5" />
        </svg>
      );
  }
}

export default function TrustBar() {
  // Duplicate the list so the marquee can loop seamlessly.
  const loop = [...ITEMS, ...ITEMS];
  return (
    <div className="w-full overflow-hidden bg-[#f9f9f9] py-2">
      <div className="flex w-max animate-trust-marquee">
        {loop.map((item, i) => (
          <div key={i} className="flex items-center gap-16 pr-16">
            <div className="flex items-center gap-3">
              <span className="opacity-60">
                <Icon name={item.icon} />
              </span>
              <span className="text-[14px] leading-[21px] tracking-[-0.3px] text-halo-ink whitespace-nowrap">
                {item.label}
              </span>
            </div>
            <span className="h-4 w-px bg-halo-gray" />
          </div>
        ))}
      </div>
    </div>
  );
}
