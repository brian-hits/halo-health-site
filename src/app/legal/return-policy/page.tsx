import type { Metadata } from "next";
import LegalLayout from "@/components/site/LegalLayout";

export const metadata: Metadata = {
  title: "Return &amp; Refund Policy — Halo Health",
  description:
    "Halo Health's return and refund policy for subscriptions, medications, and consultations.",
};

export default function Page() {
  return (
    <LegalLayout
      title="Return &amp; Refund Policy"
      effectiveDate="Last Updated: May 2026"
    >
      <p>
        Because Halo Health works with compounded, prescription-only
        medications, we cannot accept returns of shipped medications for safety
        and regulatory reasons. We can, however, address billing concerns and
        problems with your order in the ways described below. Clinical services
        are provided by <strong>Wasef Health, PC</strong>.
      </p>

      <h2>Monthly Subscriptions</h2>
      <p>
        Monthly subscriptions may be cancelled at any time before your next
        billing date. Once a monthly payment has been processed and medication
        has been shipped, that month&rsquo;s charge is non-refundable.
      </p>

      <h2>Quarterly Subscriptions</h2>
      <p>
        Quarterly plans are billed up front for three months of service. If you
        cancel within the first 14 days of enrollment and before medication has
        been shipped, you are eligible for a full refund. After medication has
        shipped or after the 14-day window, the quarterly payment is
        non-refundable.
      </p>

      <h2>Prescription Not Issued</h2>
      <p>
        If our clinical provider determines that therapy is not appropriate for
        you, you will not be charged for medication. Any consultation fees
        already paid are non-refundable, as the provider&rsquo;s time and
        clinical evaluation have already been rendered.
      </p>

      <h2>Damaged, Defective, or Incorrect Medication</h2>
      <p>
        If you receive medication that is damaged, defective, or incorrect,
        please contact us within <strong>48 hours of delivery</strong>. We will
        work with our pharmacy partner to arrange a replacement or a credit at
        no additional cost. Please do not discard the original packaging — our
        pharmacy may request photos or details to investigate.
      </p>

      <h2>How to Request a Refund or Cancel</h2>
      <p>
        To request a refund or cancel your subscription, email{" "}
        <a href="mailto:help@tryhalohealth.com">help@tryhalohealth.com</a>.
        Please include your full name and the email address associated with
        your account. Eligible refunds are typically processed within 7&ndash;10
        business days.
      </p>

      <h2>Returns of Compounded Medications</h2>
      <p>
        For patient safety and in accordance with state and federal pharmacy
        regulations, compounded medications that have been dispensed and
        shipped cannot be returned to the pharmacy for reuse or refund. If you
        no longer need a medication, please dispose of it through a community
        drug take-back program rather than returning it.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        Halo Health reserves the right to update this Return &amp; Refund
        Policy at any time. Any changes will apply to purchases made after the
        updated policy is posted on this page.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about billing or your order:{" "}
        <a href="mailto:help@tryhalohealth.com">help@tryhalohealth.com</a>.
        <br />
        Medical questions: <a href="mailto:contact@wasef-health.com">
          contact@wasef-health.com
        </a>{" "}
        (Wasef Health, PC).
      </p>
    </LegalLayout>
  );
}
