/**
 * Halo treatment catalog — single source of truth.
 *
 * Goodlifemeds-style multi-category IA: 4 top-level lanes, each with
 * its own product roster. Homepage shows the 4-card grid; each category
 * gets its own deep-dive page at /treatments/[slug] with product cards
 * and per-product detail at /treatments/[slug]/[product].
 *
 * Categories with `comingSoon: true` render with a placeholder CTA
 * (waitlist signup) instead of routing into a product roster.
 */

import { LINKS } from "./links";

export type Product = {
  slug: string;
  name: string;
  /** Short subtitle shown under the product name on cards. */
  blurb: string;
  /** Public-asset path. */
  image: string;
  /** Optional badge text — e.g. "New", "Most popular". */
  badge?: string;
  /** Where the primary CTA points. Defaults to the intake URL. */
  intakeHref?: string;
  /** Prescription required — shows an "Rx" badge in the mega-menu. */
  rx?: boolean;
  /**
   * Sub-grouping label used in the mega-menu, e.g. "Injectables",
   * "For Men", "Longevity". Products without a group land in an
   * "All" bucket.
   */
  group?: string;
};

export type Category = {
  slug: "weight-loss" | "sexual-health" | "daily-wellness" | "hair";
  name: string;
  /** One-line value prop shown under the category name on the grid. */
  tagline: string;
  /** Longer editorial line for the category landing page hero. */
  description: string;
  /** Hero/cover image for the category card. */
  coverImage: string;
  /** Accent color used for category-page hero gradients. */
  accent: "plum" | "champagne" | "lavender" | "burgundy";
  comingSoon?: boolean;
  products: Product[];
};

export const CATEGORIES: Category[] = [
  {
    slug: "weight-loss",
    name: "Weight Loss",
    tagline: "Quiet food noise. Lose the weight.",
    description:
      "Personalized GLP-1 and fat-metabolism support, prescribed by licensed clinicians and shipped to your door.",
    coverImage: "/figma/glp_1__8aa5a403.png",
    accent: "plum",
    products: [
      {
        slug: "glp-1",
        name: "GLP-1 injections",
        blurb: "Compounded semaglutide & tirzepatide, dose-personalized.",
        image: "/figma/glp_1__8aa5a403.png",
        badge: "Most popular",
        rx: true,
        group: "Injectables",
        intakeHref: "https://intake.tryhalohealth.com/start-online-visit/glp",
      },
      {
        slug: "lipo-c",
        name: "Lipo-C injections",
        blurb: "Methionine, inositol, choline — supports fat metabolism.",
        image: "/figma/lipo-c-img__36cb0821.png",
        rx: true,
        group: "Add-ons",
        intakeHref: "https://intake.tryhalohealth.com/start-online-visit/lipo-c",
      },
      {
        slug: "lipo-b",
        name: "Lipo-B injections",
        blurb: "Lipo-C with B12 added for energy and mood support.",
        image: "/figma/lipo-b-img__0f1333f6.png",
        rx: true,
        group: "Add-ons",
        intakeHref: "https://intake.tryhalohealth.com/start-online-visit/lipo-b",
      },
    ],
  },
  {
    slug: "daily-wellness",
    name: "Daily Wellness",
    tagline: "Energy, recovery, longevity.",
    description:
      "Performance and longevity protocols for the days between — clinical-grade ingredients, telehealth simple.",
    coverImage: "/figma/nad-1__ef3e272e.png",
    accent: "champagne",
    products: [
      {
        slug: "nad-plus",
        name: "NAD+ injections",
        blurb: "Cellular energy and cognitive support, weekly protocol.",
        image: "/figma/nad-1__ef3e272e.png",
        rx: true,
        group: "Longevity",
        intakeHref: "https://intake.tryhalohealth.com/start-online-visit/nad",
      },
      {
        slug: "sermorelin",
        name: "Sermorelin injections",
        blurb: "Growth-hormone releasing peptide for sleep and recovery.",
        image: "/figma/sermorelin__1592e1f0.png",
        rx: true,
        group: "Longevity",
        intakeHref: "https://intake.tryhalohealth.com/start-online-visit/sermorelin",
      },
      {
        slug: "glutathione",
        name: "Glutathione injections",
        blurb: "Master antioxidant for detox, skin, and immune support.",
        image: "/figma/glutathione-img__374eb337.png",
        rx: true,
        group: "Recovery",
        intakeHref: "https://intake.tryhalohealth.com/start-online-visit/glutathione",
      },
    ],
  },
  {
    slug: "sexual-health",
    name: "Sexual Health",
    tagline: "Confidence, on demand.",
    description:
      "Discreet, doctor-reviewed treatments for performance and intimacy — for men and women.",
    coverImage: "/brand/portrait-burgundy.png",
    accent: "burgundy",
    comingSoon: true,
    products: [],
  },
  {
    slug: "hair",
    name: "Hair",
    tagline: "Keep what you have. Grow what you've lost.",
    description:
      "Clinically-backed hair restoration for men and women — topicals, oral, and combo protocols.",
    coverImage: "/brand/portrait-lavender.png",
    accent: "lavender",
    comingSoon: true,
    products: [],
  },
];

export function getCategory(slug: string): Category | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}

export function getProduct(
  categorySlug: string,
  productSlug: string,
): { category: Category; product: Product } | undefined {
  const category = getCategory(categorySlug);
  if (!category) return undefined;
  const product = category.products.find((p) => p.slug === productSlug);
  if (!product) return undefined;
  return { category, product };
}

/** Default intake URL — referenced everywhere a CTA fires. */
export const INTAKE_URL = LINKS.intake;
