// Central place for outbound destinations so CTAs stay consistent.
export const LINKS = {
  // Primary conversion flow — every "Get Started" / "Find your treatment" /
  // "Take the quiz" / treatment link routes here (Bask intake).
  intake: "https://intake.tryhalohealth.com/start-online-visit/glp",
  // Existing Bask-backed patient portal.
  patientPortal: "https://patient.tryhalohealth.com",
  // Support inbox.
  contactEmail: "mailto:help@tryhalohealth.com",
  home: "/",
} as const;
