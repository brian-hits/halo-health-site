import type { Metadata } from "next";
import CalculatorLayout from "@/components/calculators/CalculatorLayout";
import TdeeCalculator from "@/components/calculators/TdeeCalculator";

export const metadata: Metadata = {
  title: "TDEE Calculator — Halo Health",
  description:
    "Estimate your Total Daily Energy Expenditure — the calories you burn each day — using the Mifflin-St Jeor formula.",
};

export default function Page() {
  return (
    <CalculatorLayout
      title="TDEE Calculator"
      intro="Your Total Daily Energy Expenditure is how many calories you burn in a day. Knowing it is the foundation for any weight-loss plan."
    >
      <TdeeCalculator />
    </CalculatorLayout>
  );
}
