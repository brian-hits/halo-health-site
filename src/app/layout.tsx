import type { Metadata } from "next";
import { Geist, Manrope, Fraunces } from "next/font/google";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
