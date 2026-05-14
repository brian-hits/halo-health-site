"use client";

import { useState } from "react";
import { Card, NumberField, Result, SelectField, Toggle } from "./CalcUI";

const UNITS = [
  { value: "imperial", label: "Imperial" },
  { value: "metric", label: "Metric" },
];

const SEX = [
  { value: "female", label: "Female" },
  { value: "male", label: "Male" },
];

const ACTIVITY = [
  { value: "1.2", label: "Sedentary — little or no exercise" },
  { value: "1.375", label: "Light — exercise 1–3 days/week" },
  { value: "1.55", label: "Moderate — exercise 3–5 days/week" },
  { value: "1.725", label: "Active — exercise 6–7 days/week" },
  { value: "1.9", label: "Very active — hard exercise, physical job" },
];

export function tdeeFrom(
  unit: string,
  sex: string,
  age: string,
  ft: string,
  inch: string,
  cm: string,
  weight: string,
  activity: string,
): number | null {
  const kg =
    unit === "imperial" ? (parseFloat(weight) || 0) * 0.453592 : parseFloat(weight) || 0;
  const heightCm =
    unit === "imperial"
      ? ((parseFloat(ft) || 0) * 12 + (parseFloat(inch) || 0)) * 2.54
      : parseFloat(cm) || 0;
  const a = parseFloat(age) || 0;
  if (kg <= 0 || heightCm <= 0 || a <= 0) return null;
  const bmr =
    10 * kg + 6.25 * heightCm - 5 * a + (sex === "male" ? 5 : -161);
  return bmr * parseFloat(activity);
}

export default function TdeeCalculator() {
  const [unit, setUnit] = useState("imperial");
  const [sex, setSex] = useState("female");
  const [age, setAge] = useState("");
  const [ft, setFt] = useState("");
  const [inch, setInch] = useState("");
  const [cm, setCm] = useState("");
  const [weight, setWeight] = useState("");
  const [activity, setActivity] = useState("1.375");

  const tdee = tdeeFrom(unit, sex, age, ft, inch, cm, weight, activity);

  return (
    <Card>
      <Toggle options={UNITS} value={unit} onChange={setUnit} />

      <div className="grid grid-cols-2 gap-4">
        <SelectField label="Sex" value={sex} onChange={setSex} options={SEX} />
        <NumberField label="Age" value={age} onChange={setAge} placeholder="35" suffix="yrs" />
      </div>

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

      <SelectField
        label="Activity level"
        value={activity}
        onChange={setActivity}
        options={ACTIVITY}
      />

      {tdee ? (
        <Result
          value={Math.round(tdee).toLocaleString()}
          unit="cal / day"
          caption="This is roughly the energy you burn each day at your current activity level — your maintenance calories."
        />
      ) : (
        <p className="text-center text-[14px] text-halo-ink/45">
          Fill in your details to estimate your daily calorie burn.
        </p>
      )}
    </Card>
  );
}
