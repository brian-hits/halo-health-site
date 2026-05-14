import type { Metadata } from "next";
import CalculatorLayout from "@/components/calculators/CalculatorLayout";
import ProteinCalculator from "@/components/calculators/ProteinCalculator";

export const metadata: Metadata = {
  title: "Protein Calculator — Halo Health",
  description:
    "Find your daily protein target to protect lean muscle while losing weight.",
};

export default function Page() {
  return (
    <CalculatorLayout
      title="Protein Calculator"
      intro="Protein protects lean muscle while you lose fat — and it keeps you full. This estimates how much you need each day."
    >
      <ProteinCalculator />
    </CalculatorLayout>
  );
}
