"use client";

import { useState } from "react";
import { Card, NumberField, Result, SelectField } from "./CalcUI";

// 1 lb of body fat ≈ 3,500 kcal.
const RATES = [
  { value: "0.5", label: "0.5 lb / week — gradual" },
  { value: "1", label: "1 lb / week — steady" },
  { value: "1.5", label: "1.5 lb / week — faster" },
  { value: "2", label: "2 lb / week — aggressive" },
];

export default function CalorieDeficitCalculator() {
  const [maintenance, setMaintenance] = useState("");
  const [rate, setRate] = useState("1");

  const tdee = parseFloat(maintenance) || 0;
  const dailyDeficit = (parseFloat(rate) * 3500) / 7;
  const target = tdee > 0 ? Math.max(tdee - dailyDeficit, 1200) : null;

  return (
    <Card>
      <NumberField
        label="Maintenance calories (TDEE)"
        value={maintenance}
        onChange={setMaintenance}
        placeholder="2200"
        suffix="cal"
      />
      <p className="-mt-3 text-[13px] leading-5 text-halo-ink/45">
        Not sure? Use the{" "}
        <a href="/tools/tdee-calculator" className="text-halo-midnight underline">
          TDEE calculator
        </a>{" "}
        to find your maintenance number first.
      </p>

      <SelectField
        label="Goal weight-loss rate"
        value={rate}
        onChange={setRate}
        options={RATES}
      />

      {target ? (
        <Result
          value={Math.round(target).toLocaleString()}
          unit="cal / day"
          caption={
            <>
              Eating about this much puts you in a{" "}
              <strong className="text-halo-white">
                {Math.round(dailyDeficit).toLocaleString()} cal/day
              </strong>{" "}
              deficit. We floor the target at 1,200 cal — go lower only under
              clinical supervision.
            </>
          }
        />
      ) : (
        <p className="text-center text-[14px] text-halo-ink/45">
          Enter your maintenance calories to see your target.
        </p>
      )}
    </Card>
  );
}
