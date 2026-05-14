import type { Metadata } from "next";
import CalculatorLayout from "@/components/calculators/CalculatorLayout";
import CalorieDeficitCalculator from "@/components/calculators/CalorieDeficitCalculator";

export const metadata: Metadata = {
  title: "Calorie Deficit Calculator — Halo Health",
  description:
    "Find the daily calorie target that puts you in a safe, sustainable deficit for your weight-loss goal.",
};

export default function Page() {
  return (
    <CalculatorLayout
      title="Calorie Deficit Calculator"
      intro="A calorie deficit means eating less than you burn. This finds a daily target for your goal — without dropping unsafely low."
    >
      <CalorieDeficitCalculator />
    </CalculatorLayout>
  );
}
