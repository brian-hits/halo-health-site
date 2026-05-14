"use client";

import { useState } from "react";
import { Card, NumberField, Result, SelectField, Toggle } from "./CalcUI";

const UNITS = [
  { value: "imperial", label: "Imperial" },
  { value: "metric", label: "Metric" },
];

// Grams of protein per kg of body weight, by goal.
const GOALS = [
  { value: "1.0", label: "General health" },
  { value: "1.4", label: "Active / staying fit" },
  { value: "1.8", label: "Weight loss — preserve muscle" },
  { value: "2.0", label: "Building muscle" },
];

export default function ProteinCalculator() {
  const [unit, setUnit] = useState("imperial");
  const [weight, setWeight] = useState("");
  const [goal, setGoal] = useState("1.8");

  const kg =
    unit === "imperial" ? (parseFloat(weight) || 0) * 0.453592 : parseFloat(weight) || 0;
  const perKg = parseFloat(goal);
  const grams = kg > 0 ? kg * perKg : null;

  return (
    <Card>
      <Toggle options={UNITS} value={unit} onChange={setUnit} />

      <NumberField
        label="Body weight"
        value={weight}
        onChange={setWeight}
        placeholder={unit === "imperial" ? "165" : "75"}
        suffix={unit === "imperial" ? "lbs" : "kg"}
      />

      <SelectField label="Your goal" value={goal} onChange={setGoal} options={GOALS} />

      {grams ? (
        <Result
          value={`${Math.round(grams - 5)}–${Math.round(grams + 5)}`}
          unit="g / day"
          caption="Protein helps protect lean muscle while you lose weight — especially important on a GLP-1 program. Spread it across your meals."
        />
      ) : (
        <p className="text-center text-[14px] text-halo-ink/45">
          Enter your weight to see your daily protein target.
        </p>
      )}
    </Card>
  );
}
