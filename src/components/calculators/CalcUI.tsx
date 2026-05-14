"use client";

import type { ReactNode } from "react";

// Shared input primitives for the calculator tools.

export function Card({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col gap-6 rounded-2xl border border-black/[0.06] bg-white p-6 shadow-[0_8px_30px_rgba(16,0,33,0.06)] sm:p-8">
      {children}
    </div>
  );
}

export function Label({ children }: { children: ReactNode }) {
  return (
    <span className="text-[14px] font-medium leading-5 tracking-[-0.2px] text-halo-ink">
      {children}
    </span>
  );
}

export function NumberField({
  label,
  value,
  onChange,
  placeholder,
  suffix,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  suffix?: string;
}) {
  return (
    <label className="flex flex-col gap-2">
      <Label>{label}</Label>
      <div className="flex items-center rounded-xl border border-black/10 bg-halo-cream/60 px-4 focus-within:border-halo-midnight/40">
        <input
          type="number"
          inputMode="decimal"
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-transparent py-3 text-[16px] text-halo-ink outline-none placeholder:text-halo-ink/35"
        />
        {suffix && (
          <span className="pl-2 text-[14px] text-halo-ink/50">{suffix}</span>
        )}
      </div>
    </label>
  );
}

export function SelectField({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <label className="flex flex-col gap-2">
      <Label>{label}</Label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-xl border border-black/10 bg-halo-cream/60 px-4 py-3 text-[16px] text-halo-ink outline-none focus:border-halo-midnight/40"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
  );
}

export function Toggle({
  options,
  value,
  onChange,
}: {
  options: { value: string; label: string }[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="inline-flex rounded-full border border-black/10 bg-halo-cream/60 p-1">
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          onClick={() => onChange(o.value)}
          className={`rounded-full px-4 py-1.5 text-[14px] font-medium transition ${
            value === o.value
              ? "bg-halo-midnight text-halo-white"
              : "text-halo-ink/60 hover:text-halo-ink"
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

export function Result({
  value,
  unit,
  caption,
}: {
  value: string;
  unit?: string;
  caption?: ReactNode;
}) {
  return (
    <div className="flex flex-col items-center gap-2 rounded-2xl bg-halo-midnight px-6 py-8 text-center">
      <div className="flex items-baseline gap-2">
        <span className="font-display text-[56px] leading-none text-halo-white">
          {value}
        </span>
        {unit && (
          <span className="text-[18px] text-halo-white/60">{unit}</span>
        )}
      </div>
      {caption && (
        <p className="max-w-[420px] text-[14px] leading-5 tracking-[-0.2px] text-halo-white/70">
          {caption}
        </p>
      )}
    </div>
  );
}
