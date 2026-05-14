import type { Metadata } from "next";
import ComingSoon from "@/components/site/ComingSoon";

export const metadata: Metadata = {
  title: "Halo Cares Program — Halo Health",
  description:
    "The Halo Cares Program — making personalized weight care more accessible. Coming soon.",
};

export default function Page() {
  return (
    <ComingSoon
      title="Halo Cares Program"
      blurb="We're building a program to make personalized weight care more accessible for those who need it most. Details are coming soon — in the meantime, your treatment journey can start today."
    />
  );
}
