"use client";

import { useState } from "react";
import { Card, NumberField, Result, Toggle } from "./CalcUI";

const UNITS = [
  { value: "imperial", label: "Imperial" },
  { value: "metric", label: "Metric" },
];

function category(bmi: number) {
  if (bmi < 18.5) return "Underweight";
  if (bmi < 25) return "Healthy weight";
  if (bmi < 30) return "Overweight";
  return "Obesity";
}

export default function BmiCalculator() {
  const [unit, setUnit] = useState("imperial");
  const [ft, setFt] = useState("");
  const [inch, setInch] = useState("");
  const [cm, setCm] = useState("");
  const [weight, setWeight] = useState("");

  let bmi: number | null = null;
  if (unit === "imperial") {
    const totalIn = (parseFloat(ft) || 0) * 12 + (parseFloat(inch) || 0);
    const lbs = parseFloat(weight) || 0;
    if (totalIn > 0 && lbs > 0) bmi = (703 * lbs) / (totalIn * totalIn);
  } else {
    const m = (parseFloat(cm) || 0) / 100;
    const kg = parseFloat(weight) || 0;
    if (m > 0 && kg > 0) bmi = kg / (m * m);
  }

  return (
    <Card>
      <Toggle options={UNITS} value={unit} onChange={setUnit} />

      {unit === "imperial" ? (
        <div className="grid grid-cols-2 gap-4">
          <NumberField label="Height" value={ft} onChange={setFt} placeholder="5" suffix="ft" />
          <NumberField label="&nbsp;" value={inch} onChange={setInch} placeholder="9" suffix="in" />
        </div>
      ) : (
        <NumberField label="Height" value={cm} onChange={setCm} placeholder="175" suffix="cm" />
      )}

      <NumberField
        label="Weight"
        value={weight}
        onChange={setWeight}
        placeholder={unit === "imperial" ? "165" : "75"}
        suffix={unit === "imperial" ? "lbs" : "kg"}
      />

      {bmi ? (
        <Result
          value={bmi.toFixed(1)}
          unit="BMI"
          caption={
            <>
              You&apos;re in the <strong className="text-halo-white">{category(bmi)}</strong> range.
              BMI is a screening tool, not a diagnosis — a clinician can give you the full picture.
            </>
          }
        />
      ) : (
        <p className="text-center text-[14px] text-halo-ink/45">
          Enter your height and weight to see your BMI.
        </p>
      )}
    </Card>
  );
}
