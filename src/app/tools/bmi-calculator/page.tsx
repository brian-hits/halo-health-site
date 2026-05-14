import type { Metadata } from "next";
import CalculatorLayout from "@/components/calculators/CalculatorLayout";
import BmiCalculator from "@/components/calculators/BmiCalculator";

export const metadata: Metadata = {
  title: "BMI Calculator — Halo Health",
  description:
    "Calculate your Body Mass Index (BMI) and see which weight range you fall into.",
};

export default function Page() {
  return (
    <CalculatorLayout
      title="BMI Calculator"
      intro="Body Mass Index is a quick screen for whether your weight is in a healthy range for your height. It's a starting point — not the whole story."
    >
      <BmiCalculator />
    </CalculatorLayout>
  );
}
