import type { Metadata } from "next";
import LegalLayout from "@/components/site/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Service — Halo Health",
  description: "The terms governing your use of Halo Health.",
};

export default function Page() {
  return (
    <LegalLayout title="Terms of Service" effectiveDate="Last Updated: May 2026">
      <h2>1. Acceptance of Terms</h2>
      <p>
        By accessing or using the Halo Health website and services (the
        &ldquo;Services&rdquo;), you agree to be bound by these Terms of
        Service. If you do not agree, do not use the Services. &ldquo;Halo
        Health,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;
        refers to the operator of this website and its affiliated clinical and
        pharmacy partners.
      </p>

      <h2>2. Medical Services Provided By</h2>
      <p>
        Clinical services on Halo Health are provided by{" "}
        <strong>Wasef Health, PC</strong>, c/o Michael Wasef, MD, located at
        5260 78th Ave N, PO Box 1697, Pinellas Park, FL 33780. You can reach the
        practice at{" "}
        <a href="mailto:contact@wasef-health.com">contact@wasef-health.com</a>{" "}
        or learn more at{" "}
        <a href="https://wasef-health.com" target="_blank" rel="noopener noreferrer">
          wasef-health.com
        </a>
        .
      </p>

      <h2>3. Eligibility</h2>
      <p>
        You must be at least 18 years of age and reside in a U.S. state where
        our pharmacy partner is licensed to dispense medications. Our Services
        are not available in every state — eligibility depends on your location
        at the time of treatment.
      </p>

      <h2>4. Nature of Services</h2>
      <p>
        Halo Health is a telehealth platform that connects patients with
        licensed healthcare providers for evaluation and, when clinically
        appropriate, prescription of GLP-1 and related medications. The
        Services do not replace your primary care physician. All medical
        decisions are made by licensed providers based on their independent
        clinical judgment.
      </p>

      <h2>5. No Guarantee of Prescription</h2>
      <p>
        Completing an assessment does not guarantee you will receive a
        prescription. Providers may determine that a particular therapy is not
        clinically appropriate for you. In such cases, you will not be charged
        for medication.
      </p>

      <h2>6. Compounded Medications</h2>
      <p>
        Medications prescribed through Halo Health may be compounded by a
        licensed 503A pharmacy. Compounded medications are not commercially
        manufactured products and are prepared to meet individual patient
        prescriptions. They have not been reviewed or approved by the FDA for
        safety, efficacy, or manufacturing quality.
      </p>

      <h2>7. Telehealth Consent</h2>
      <p>
        By using the Services, you consent to receiving healthcare services via
        telehealth, including asynchronous provider consultations. You
        understand the limitations of telehealth, including the inability to
        perform physical examinations, and agree that telehealth is appropriate
        for the services offered.
      </p>

      <h2>8. Accurate Information</h2>
      <p>
        You agree to provide truthful, accurate, and complete information in
        your assessment and throughout your treatment. Providing false or
        misleading health information may result in termination of services and
        could pose serious health risks.
      </p>

      <h2>9. Payment &amp; Billing</h2>
      <p>
        Fees are charged as outlined at checkout. Subscription plans auto-renew
        unless cancelled before the next billing cycle. You authorize us to
        charge the payment method on file for all applicable fees.
      </p>

      <h2>10. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, Halo Health and its affiliates
        shall not be liable for any indirect, incidental, special,
        consequential, or punitive damages arising from your use of the
        Services. Our total liability shall not exceed the amount paid by you in
        the 12 months preceding the claim.
      </p>

      <h2>11. Intellectual Property</h2>
      <p>
        All content, trademarks, logos, and materials on this website are the
        property of Halo Health or its licensors and may not be reproduced
        without prior written consent.
      </p>

      <h2>12. Modifications</h2>
      <p>
        We reserve the right to modify these Terms at any time. Continued use of
        the Services after changes are posted constitutes acceptance of the
        updated Terms.
      </p>

      <h2>13. Governing Law</h2>
      <p>
        These Terms are governed by the laws of the State of Florida, without
        regard to conflict of law principles.
      </p>

      <h2>14. Contact</h2>
      <p>
        For questions about these Terms, email{" "}
        <a href="mailto:help@tryhalohealth.com">help@tryhalohealth.com</a>. For
        questions about your medical care, contact Wasef Health, PC at{" "}
        <a href="mailto:contact@wasef-health.com">contact@wasef-health.com</a>.
      </p>
    </LegalLayout>
  );
}
