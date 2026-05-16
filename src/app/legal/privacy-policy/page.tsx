import type { Metadata } from "next";
import LegalLayout from "@/components/site/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy — Halo Health",
  description:
    "How Halo Health collects, uses, and protects your personal information.",
};

export default function Page() {
  return (
    <LegalLayout title="Privacy Policy" effectiveDate="Last Updated: May 2026">
      <p>
        Halo Health (&ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our&rdquo;) is
        committed to protecting the privacy of our website visitors and
        patients. This Privacy Policy explains how we collect, use, and protect
        your personal information when you visit our website or use our
        services. Clinical services are provided by{" "}
        <strong>Wasef Health, PC</strong>, c/o Michael Wasef, MD — see our
        HIPAA Privacy Policy for how protected health information is handled.
      </p>

      <h2>1. Information We Collect</h2>
      <p>
        <strong>Information you provide:</strong> name, email address, phone
        number, mailing address, date of birth, and payment information when
        you create an account or complete an intake form.
      </p>
      <p>
        <strong>Automatically collected information:</strong> IP address,
        browser type, device information, operating system, referring URLs,
        pages viewed, and cookies or similar tracking technologies used to
        operate and improve our website.
      </p>

      <h2>2. How We Use Your Information</h2>
      <ul>
        <li>To provide, operate, and improve our website and services</li>
        <li>
          To process transactions and send related information (confirmations,
          receipts, shipping updates)
        </li>
        <li>
          To communicate with you about your account, services, and promotional
          offers (you may opt out at any time)
        </li>
        <li>To personalize your experience and deliver relevant content</li>
        <li>To comply with legal obligations and enforce our terms</li>
      </ul>

      <h2>3. How We Share Your Information</h2>
      <p>We do not sell your personal information. We may share your information with:</p>
      <ul>
        <li>
          <strong>Service providers:</strong> third-party companies that help us
          operate our business (payment processors, email providers, analytics
          tools, hosting services)
        </li>
        <li>
          <strong>Clinical &amp; pharmacy partners:</strong> for the purpose of
          providing healthcare services — see our HIPAA Privacy Policy for
          details on health information
        </li>
        <li>
          <strong>Legal requirements:</strong> when required by law, subpoena,
          or court order
        </li>
      </ul>

      <h2>4. Cookies &amp; Tracking</h2>
      <p>
        We use cookies and similar technologies to analyze website traffic,
        remember preferences, and improve user experience. These tools do not
        collect protected health information. You may adjust cookie settings in
        your browser at any time.
      </p>

      <h2>5. Data Security</h2>
      <p>
        We implement reasonable administrative, technical, and physical
        security measures to protect your personal information. However, no
        method of transmission over the internet is 100% secure.
      </p>

      <h2>6. Data Retention</h2>
      <p>
        We retain your personal information for as long as your account is
        active or as needed to provide services, comply with legal obligations,
        resolve disputes, and enforce our agreements.
      </p>

      <h2>7. Your Rights</h2>
      <p>Depending on your jurisdiction, you may have the right to:</p>
      <ul>
        <li>Access, correct, or delete your personal information</li>
        <li>Opt out of marketing communications</li>
        <li>Request a copy of your data</li>
        <li>Withdraw consent where applicable</li>
      </ul>
      <p>
        For rights related to your protected health information, please refer
        to our HIPAA Privacy Policy.
      </p>

      <h2>8. Children&rsquo;s Privacy</h2>
      <p>
        Our services are not directed to individuals under 18 years of age. We
        do not knowingly collect personal information from minors.
      </p>

      <h2>9. Third-Party Links</h2>
      <p>
        Our website may contain links to third-party websites. We are not
        responsible for the privacy practices of those sites and encourage you
        to review their privacy policies.
      </p>

      <h2>10. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Changes will be
        posted on this page with an updated effective date. Continued use of our
        website after changes constitutes your acceptance of the revised
        policy.
      </p>

      <h2>11. Contact Us</h2>
      <p>If you have questions about this Privacy Policy, contact us at:</p>
      <p>
        <strong>Halo Health</strong>
        <br />
        Email: <a href="mailto:help@tryhalohealth.com">help@tryhalohealth.com</a>
      </p>
      <p>
        <strong>Wasef Health, PC</strong> — for medical privacy matters
        <br />
        5260 78th Ave N, PO Box 1697, Pinellas Park, FL 33780
        <br />
        Email: <a href="mailto:contact@wasef-health.com">contact@wasef-health.com</a>
      </p>
    </LegalLayout>
  );
}
