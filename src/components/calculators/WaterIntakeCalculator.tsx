"use client";

import { useState } from "react";
import { Card, NumberField, Result, SelectField, Toggle } from "./CalcUI";

const UNITS = [
  { value: "imperial", label: "Imperial" },
  { value: "metric", label: "Metric" },
];

// Extra fluid ounces per day based on daily exercise.
const ACTIVITY = [
  { value: "0", label: "Little to no exercise" },
  { value: "16", label: "~30 min of exercise / day" },
  { value: "32", label: "~60 min of exercise / day" },
  { value: "48", label: "90+ min of exercise / day" },
];

export default function WaterIntakeCalculator() {
  const [unit, setUnit] = useState("imperial");
  const [weight, setWeight] = useState("");
  const [activity, setActivity] = useState("16");

  const lbs =
    unit === "imperial" ? parseFloat(weight) || 0 : (parseFloat(weight) || 0) / 0.453592;
  // Baseline ≈ 0.6 fl oz per lb of body weight, plus an activity bonus.
  const oz = lbs > 0 ? lbs * 0.6 + parseFloat(activity) : null;
  const liters = oz ? oz * 0.0295735 : null;

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

      <SelectField
        label="Daily activity"
        value={activity}
        onChange={setActivity}
        options={ACTIVITY}
      />

      {oz && liters ? (
        <Result
          value={Math.round(oz).toString()}
          unit="fl oz / day"
          caption={
            <>
              That&apos;s about{" "}
              <strong className="text-halo-white">{liters.toFixed(1)} liters</strong> a
              day. Staying hydrated helps with appetite, energy, and digestion —
              and can ease common GLP-1 side effects.
            </>
          }
        />
      ) : (
        <p className="text-center text-[14px] text-halo-ink/45">
          Enter your weight to see your daily water target.
        </p>
      )}
    </Card>
  );
}
