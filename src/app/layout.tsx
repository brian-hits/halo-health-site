import type { Metadata } from "next";
import { Geist, Manrope, Fraunces } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Tracking from "@/components/Tracking";

// Google Tag Manager container — handles GA4, Meta Pixel, TikTok Pixel,
// and conversion event tags from the GTM dashboard.
const GTM_ID = "GTM-5H2CVBFQ";

// Body / UI font — used across the design (Geist Regular/Medium)
const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

// Used for a few headings/labels in the design (Manrope Medium)
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

// Fallback for the premium "Awesome Serif" display face until the licensed
// files are dropped into /public/fonts (see globals.css @font-face).
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tryhalohealth.com"),
  title: "Halo Health — Quiet food noise, for good.",
  description:
    "Personalized GLP-1 weight management through licensed telehealth providers and compounded medications from a state-licensed 503A pharmacy. 100% online.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geist.variable} ${manrope.variable} ${fraunces.variable}`}
    >
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Tracking />
        {children}
      </body>
    </html>
  );
}
