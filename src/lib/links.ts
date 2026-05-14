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
  // Halo's legal pages, served via Bask (account id 8576).
  privacyPolicy:
    "https://intake.tryhalohealth.com/policy/privacy-policy?id=8576",
  termsOfService:
    "https://intake.tryhalohealth.com/policy/terms-of-service?id=8576",
} as const;
