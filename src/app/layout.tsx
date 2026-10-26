import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { siteConfig, surroundingAreas } from "@/data/siteData";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MobileCTABar from "@/components/layout/MobileCTABar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = siteConfig.url;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteConfig.name} | Roofers in ${siteConfig.town}, ${siteConfig.county}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: `Trusted ${siteConfig.town} roofers for emergency leak repairs, re-roofs, flat roofing and chimney work. ${siteConfig.yearsExperience}+ years' experience, ${siteConfig.rating}/5 from ${siteConfig.reviewCount} reviews. Free written quotes.`,
  keywords: [
    "roofing company Guildford",
    "roof repairs Guildford",
    "emergency roofer Surrey",
    "flat roofing Guildford",
    "re-roofing Surrey",
    "local roofers near me",
    "roof leak repair GU1",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Roofers in ${siteConfig.town}`,
    description: `Emergency roof repairs, re-roofs and flat roofing across ${siteConfig.town} and Surrey. Rated ${siteConfig.rating}/5 from ${siteConfig.reviewCount} reviews. Call ${siteConfig.phoneDisplay}.`,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `Apex roofers working on a slate roof in ${siteConfig.town}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Roofers in ${siteConfig.town}`,
    description: `Emergency roof repairs, re-roofs and flat roofing across ${siteConfig.town} and Surrey. Free written quotes.`,
    images: ["/images/og-image.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b0f14",
};

/** LocalBusiness / RoofingContractor structured data for local SEO. */
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  "@id": `${siteUrl}/#business`,
  name: siteConfig.name,
  url: siteUrl,
  telephone: `+44${siteConfig.phone.replace(/^0/, "")}`,
  email: siteConfig.email,
  image: `${siteUrl}/images/og-image.jpg`,
  priceRange: "££",
  description: `Local roofing contractors in ${siteConfig.town} covering emergency repairs, pitched and flat roofing, and chimney work.`,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.locality,
    addressRegion: siteConfig.address.region,
    postalCode: siteConfig.address.postcode,
    addressCountry: siteConfig.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: siteConfig.geo.latitude,
    longitude: siteConfig.geo.longitude,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  areaServed: [
    { "@type": "City", name: siteConfig.town },
    ...surroundingAreas.map((area) => ({
      "@type": "City",
      name: area.name,
      containedInPlace: { "@type": "AdministrativeArea", name: siteConfig.county },
    })),
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: siteConfig.rating,
    reviewCount: siteConfig.reviewCount,
    bestRating: 5,
  },
  sameAs: [
    "https://www.checkatrade.com/",
    "https://www.google.com/search?q=Apex+Roofing+Property+Care+Guildford",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-GB"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <MobileCTABar />
      </body>
    </html>
  );
}
