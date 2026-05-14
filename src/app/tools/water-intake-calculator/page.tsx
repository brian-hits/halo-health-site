import type { Metadata } from "next";
import CalculatorLayout from "@/components/calculators/CalculatorLayout";
import WaterIntakeCalculator from "@/components/calculators/WaterIntakeCalculator";

export const metadata: Metadata = {
  title: "Water Intake Calculator — Halo Health",
  description:
    "Estimate how much water you should drink each day based on your weight and activity level.",
};

export default function Page() {
  return (
    <CalculatorLayout
      title="Water Intake Calculator"
      intro="Hydration supports appetite control, energy, and digestion — and can ease common GLP-1 side effects. Here's a daily target."
    >
      <WaterIntakeCalculator />
    </CalculatorLayout>
  );
}
