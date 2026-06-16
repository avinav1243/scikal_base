/**
 * Central site configuration. Edit values here to rebrand the entire site.
 * `url` is read from NEXT_PUBLIC_SITE_URL in production (used for SEO,
 * sitemap, canonical URLs, and Open Graph), falling back to the prod domain.
 */
export const siteConfig = {
  name: "SciKal Research",
  shortName: "SciKal",
  tagline: "Accelerating Science",
  // Used by metadata, sitemap, robots, JSON-LD and OG image.
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "https://scikal.com",

  // Hero copy (from the live site)
  heroTitle: "Accelerating Science for a Healthier Tomorrow",
  heroSubtitle: "We help your science fly.",

  description:
    "SciKal Research is a team of scientists, engineers and data experts driving innovation in behavioral neuroscience — designing tailored research solutions that bridge biology and technology. A spin-off from NCBS-TIFR with a global presence in Chicago and Bengaluru.",
  // Short, reusable one-liner.
  mission: "We understand biology, and we build the technology.",
  founder: "Dr. Aman Aggarwal",
  origin: "NCBS-TIFR, Bengaluru, India",
  email: "info@scikal.com",
  locale: "en_US",
  locations: [
    { city: "Chicago", country: "USA" },
    { city: "Bengaluru", country: "India" },
  ],
  keywords: [
    "behavioral neuroscience",
    "Drosophila behavior assay",
    "behavioral phenotyping",
    "random positioning machine",
    "microgravity simulation",
    "locomotor assay",
    "courtship assay",
    "feeding assay",
    "learning and memory assay",
    "computational biology",
    "machine learning behavioral scoring",
    "neuroscience research instruments",
    "lab automation",
    "NCBS-TIFR spin-off",
  ],
  social: {
    linkedin: "https://www.linkedin.com/company/scikal-research",
  },
} as const;

export type NavItem = { label: string; href: string; children?: NavItem[] };

// Single-page site: all navigation targets are in-page section anchors.
export const productCategoriesNav: NavItem[] = [
  { label: "Instrumentation, Design & Fabrication", href: "#instrumentation" },
  {
    label: "Computational Biology",
    href: "#design-computational-biology",
  },
  { label: "Services", href: "#services" },
];

export const mainNav: NavItem[] = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Solutions", href: "#products", children: productCategoriesNav },
  { label: "Clients", href: "#clients" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export const footerNav: { title: string; links: NavItem[] }[] = [
  {
    title: "Solutions",
    links: productCategoriesNav,
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Our story", href: "#story" },
      { label: "Mission", href: "#mission" },
      { label: "Team", href: "#team" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Clients & Collaborations", href: "#clients" },
      { label: "Contact", href: "#contact" },
      { label: "Let's collaborate", href: "#contact" },
    ],
  },
];
