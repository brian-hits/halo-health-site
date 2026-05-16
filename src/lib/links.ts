// Central place for outbound destinations so CTAs stay consistent.
export const LINKS = {
  // Primary conversion flow — every "Get Started" / "Find your treatment" /
  // "Take the quiz" / treatment link routes here (Bask intake, GLP-1 visit).
  intake: "https://intake.tryhalohealth.com/start-online-visit/glp",
  // Existing Bask-backed patient portal.
  patientPortal: "https://patient.tryhalohealth.com",
  // Support inbox.
  contactEmail: "mailto:help@tryhalohealth.com",
  home: "/",
  // In-site legal pages (content tailored to Halo + Wasef Health, PC).
  termsOfService: "/legal/terms-of-service",
  privacyPolicy: "/legal/privacy-policy",
  hipaaPolicy: "/legal/hipaa-policy",
  returnPolicy: "/legal/return-policy",
} as const;
