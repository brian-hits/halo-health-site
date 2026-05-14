import type { Metadata } from "next";
import ComingSoon from "@/components/site/ComingSoon";

export const metadata: Metadata = {
  title: "Referral Program — Halo Health",
  description:
    "Refer a friend to Halo Health. Our referral program is launching soon.",
};

export default function Page() {
  return (
    <ComingSoon
      title="Referral Program"
      blurb="Love your results? Soon you'll be able to share Halo with friends and family — and both of you will get rewarded. Our referral program is launching shortly."
    />
  );
}
