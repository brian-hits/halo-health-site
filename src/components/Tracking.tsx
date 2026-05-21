"use client";

import { useEffect } from "react";

/**
 * Pushes Halo-themed events to the GTM dataLayer for downstream tags
 * (Meta Pixel, TikTok Pixel, GA4) to consume.
 *
 * Why the angel/heaven theme: Halo is a regulated GLP-1 brand. Meta's
 * standard event names (Purchase, Lead, etc.) trigger heightened policy
 * review on health verticals. Custom event names with no health vocab
 * sidestep that classifier entirely. The mapping lives in GTM tags.
 *
 * Event taxonomy (site-fired events only; Cross/Anoint/Ascend/Eternal
 * happen on Bask intake side):
 *   Reach    → click on an intake CTA  (≈ Lead)
 *   Sanctum  → click on patient portal login
 *   Glimmer  → engagement (FAQ open, etc.)
 */
declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

function push(event: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(event);
}

function detectTreatment(href: string): string {
  // Supports future per-treatment intake URLs (nad, sermorelin) Mason will share.
  const m = href.match(/start-online-visit\/([a-z0-9-]+)/);
  return m ? m[1] : "glp";
}

export default function Tracking() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest("a") as HTMLAnchorElement | null;
      if (!anchor || !anchor.href) return;

      const href = anchor.href;

      if (href.startsWith("https://intake.tryhalohealth.com")) {
        push({ event: "reach", treatment: detectTreatment(href) });
      } else if (href.startsWith("https://patient.tryhalohealth.com")) {
        push({ event: "sanctum" });
      } else if (href.startsWith("mailto:help@tryhalohealth.com")) {
        push({ event: "glimmer", section: "contact" });
      }
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}

// Exposed for components that need to fire events on non-link interactions
// (e.g. FAQ accordion opens).
export function trackGlimmer(section: string) {
  push({ event: "glimmer", section });
}
