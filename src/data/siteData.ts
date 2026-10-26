/**
 * Single source of truth for all page content.
 * Swap copy, prices, areas and image URLs here — every component reads from this file.
 */

export const siteConfig = {
  name: "Apex Roofing & Property Care",
  shortName: "Apex Roofing",
  tagline: "Roofers in Guildford",
  phone: "08001234567",
  phoneDisplay: "0800 123 4567",
  email: "info@apexroofingcare.co.uk",
  town: "Guildford",
  county: "Surrey",
  rating: 4.9,
  reviewCount: 184,
  yearsExperience: 25,
  publicLiability: "£5m",
  url: "https://apexroofingcare.co.uk",
  address: {
    street: "124 High Street",
    locality: "Guildford",
    region: "Surrey",
    postcode: "GU1 3HJ",
    country: "GB",
  },
  geo: { latitude: 51.2362, longitude: -0.5704 },
  hours: "Monday to Saturday, 8:00 to 18:00",
  emergency: "24/7 emergency call-outs",
} as const;

/**
 * Hero background photography.
 * `priority` should stay true — this is the LCP element.
 */
export const heroMedia = {
  image: "/images/hero-roofers.jpg",
  alt: "Two Apex roofers inspecting a newly laid slate roof in Guildford",
} as const;

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Areas", href: "#areas" },
  { label: "Our work", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
] as const;

/** Hero value bullets — shown under the hero CTAs. */
export const heroBullets = [
  "Free written quote, no obligation",
  `Insured to ${siteConfig.publicLiability} public liability`,
  "Zero deposit on repairs",
  "10 to 25-year guarantees",
] as const;

/** Service cards — icon names are mapped to Lucide components in Services.tsx. */
export const services = [
  {
    id: "repairs",
    title: "Emergency Roof Repairs",
    description:
      "Rapid response for leaks, storm damage, slipped tiles and failed flashing. Day or night, seven days a week.",
    icon: "Wrench",
    badge: "24/7 response",
    featured: true,
  },
  {
    id: "pitched",
    title: "Pitched Roof Installations",
    description:
      "New roofs and re-roofs in slate, clay and concrete tile, built to stand up to UK weather for decades.",
    icon: "Home",
    badge: "20-year guarantee",
    featured: false,
  },
  {
    id: "flat",
    title: "Flat Roofing Systems",
    description:
      "Long-life EPDM rubber and fibreglass GRP flat roofs, fully waterproofed and maintenance free.",
    icon: "Layers",
    badge: "Maintenance free",
    featured: false,
  },
  {
    id: "chimney",
    title: "Chimney & Leadwork",
    description:
      "Chimney repointing, lead flashing replacement, structural stabilisation and storm cap fitting.",
    icon: "ShieldAlert",
    badge: "Skilled craftsmen",
    featured: false,
  },
] as const;

/** Guarantees shown in the "why us" section. */
export const guarantees = [
  {
    title: "Free, written quotes",
    description: "An itemised price before any work starts, with no obligation to go ahead.",
    icon: "FileText",
  },
  {
    title: `Insured to ${siteConfig.publicLiability}`,
    description: "Full public liability cover and risk assessments on every job.",
    icon: "ShieldCheck",
  },
  {
    title: "Zero deposit",
    description: "You pay once the work is finished and you are happy with it.",
    icon: "Wallet",
  },
  {
    title: "Up to 25-year guarantees",
    description: "Manufacturer and workmanship guarantees issued in writing.",
    icon: "BadgeCheck",
  },
  {
    title: "Our own roofers",
    description: "Employed, trained and DBS-checked. No subcontractors on your property.",
    icon: "Users",
  },
  {
    title: "24/7 emergency response",
    description: "A real roofer on the phone in minutes, on site the same day.",
    icon: "Clock",
  },
] as const;

/** HQ town plus five surrounding areas — used for local SEO copy. */
export const surroundingAreas = [
  { name: "Godalming", postcode: "GU7" },
  { name: "Woking", postcode: "GU21" },
  { name: "Farnham", postcode: "GU9" },
  { name: "Cranleigh", postcode: "GU6" },
  { name: "Haslemere", postcode: "GU27" },
] as const;

/** Featured before/after project. Drop image URLs into beforeSrc/afterSrc to replace the slots. */
export const featuredProject = {
  title: "Storm-damaged ridge, re-bedded and pointed",
  location: "Guildford, GU1",
  category: "Emergency repair",
  beforeSrc: "",
  afterSrc: "",
} as const;

/** Recent project cards. Drop image URLs into `image` to replace the slots. */
export const projects = [
  {
    title: "Full slate re-roof",
    location: "Guildford",
    category: "Pitched roofing",
    image: "/images/project-slate-roof.jpg",
  },
  {
    title: "EPDM flat roof replacement",
    location: "Woking",
    category: "Flat roofing",
    image: "/images/project-flat-roof.jpg",
  },
  {
    title: "Chimney repointing & lead flashing",
    location: "Farnham",
    category: "Chimney repair",
    image: "/images/project-chimney.jpg",
  },
] as const;

export const testimonials = [
  {
    quote:
      "Water came through the ceiling at 11pm. Apex had a roofer with us within the hour.",
    name: "Sarah Whitfield",
    role: "Homeowner, Godalming",
    service: "Emergency leak repair",
    rating: 5,
  },
  {
    quote:
      "The quote was detailed and exactly what we paid. Our new roof looks better than the show home next door.",
    name: "Mark Hughes",
    role: "Homeowner, Woking",
    service: "Full re-roof",
    rating: 5,
  },
  {
    quote:
      "They repointed our chimney for a fixed price. No upsell, no mess, and the rain never came back in.",
    name: "Priya Nandra",
    role: "Homeowner, Farnham",
    service: "Chimney & leadwork",
    rating: 5,
  },
] as const;

/** Indicative guide prices — every job is quoted free and fixed before work starts. */
export const pricingPlans = [
  {
    id: "inspection",
    name: "Roof Inspection",
    price: "£0",
    priceNote: "free, no obligation",
    description: "A full survey of your roof with a written report you can keep.",
    features: [
      "Full inside and out inspection",
      "Photo report within 24 hours",
      "Fixed price before any work",
      "No obligation to book",
    ],
    cta: "Free Quote",
    highlighted: false,
  },
  {
    id: "re-roof",
    name: "Full Re-Roof",
    price: "£5,500",
    priceNote: "guide price, from",
    description: "Strip out, new battens, underlay and tiles with a 10 to 25-year guarantee.",
    features: [
      "Strip out and full disposal",
      "New battens, underlay and tiles",
      "New ridges, flashings and fascias",
      "10 to 25-year written guarantee",
      "Fixed price agreed up front",
    ],
    cta: "Free Quote",
    highlighted: true,
  },
  {
    id: "repair",
    name: "Emergency Leak Repair",
    price: "£250",
    priceNote: "guide price, from",
    description: "Same-day make-safe for leaks, storm damage and slipped tiles.",
    features: [
      "Same-day response where possible",
      "Make-safe, then permanent fix",
      "Tiles, leadwork and flashing replaced",
      "12-month workmanship guarantee",
    ],
    cta: "Free Quote",
    highlighted: false,
  },
] as const;

/** Google Maps embed (no API key required) for the service-area map. */
export const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
  `${siteConfig.town}, ${siteConfig.county}, UK`
)}&z=11&output=embed`;

/** Outbound link to the Google reviews for this business. */
export const googleReviewsUrl =
  "https://www.google.com/search?q=Apex+Roofing+Property+Care+Guildford+reviews";

export const faqs = [
  {
    question: "How quickly can you reach an emergency leak?",
    answer:
      "Across Guildford we aim to be on site within 60 minutes, 24 hours a day. For the surrounding towns we will give you a firm arrival time when you call.",
  },
  {
    question: "Do you charge for a quote?",
    answer:
      "No. Every quote is free, written and itemised, with no obligation to go ahead. We confirm the fixed price before any work starts.",
  },
  {
    question: "Do you take a deposit?",
    answer:
      "No deposit on repairs or replacements. You pay once the work is complete and you are happy with it, by card, bank transfer or on invoice.",
  },
  {
    question: "Which areas do you cover?",
    answer:
      `We cover ${siteConfig.town} and the surrounding towns within about 20 miles, including ${surroundingAreas
        .map((a) => a.name)
        .join(", ")}. Call with your postcode and we will confirm in seconds.`,
  },
  {
    question: "What guarantee do I get?",
    answer:
      "Every job carries a workmanship guarantee, and new roofs and flat roofs are covered by manufacturer guarantees of 10 to 25 years. Certificates are issued in writing.",
  },
  {
    question: "Are you insured and certified?",
    answer:
      `Yes. We carry ${siteConfig.publicLiability} public liability insurance, are Checkatrade verified and every roofer is employed, trained and DBS-checked by us.`,
  },
] as const;
