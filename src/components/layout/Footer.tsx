"use cache";

import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ArrowUpRight, BadgeCheck } from "lucide-react";
import {
  siteConfig,
  surroundingAreas,
  services,
  navLinks,
  mapEmbedUrl,
  googleReviewsUrl,
} from "@/data/siteData";
import Stars from "@/components/ui/Stars";

export default async function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="on-dark bg-ink-950 pb-24 pt-16 text-slate-400 md:pb-12 md:pt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Row 1 — brand, links, contact, Google Business */}
        <div className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600 text-white">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-5 w-5" aria-hidden="true">
                  <path d="M3 10.5 12 3l9 7.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M5 9.5V21h14V9.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="leading-none">
                <span className="block text-base font-bold tracking-tight text-white">APEX</span>
                <span className="mt-1 block font-mono text-[9px] font-medium uppercase tracking-[0.18em] text-brand-300">
                  Roofing &amp; Property Care
                </span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              Checked, certified local roofers covering {siteConfig.town} and Surrey for{" "}
              {siteConfig.yearsExperience}+ years. Emergency repairs, re-roofs, flat roofing and
              chimney work.
            </p>
            <div className="mt-5 flex items-center gap-2 text-sm">
              <Stars rating={siteConfig.rating} size="h-3.5 w-3.5" />
              <span className="font-mono text-slate-300">{siteConfig.rating}</span>
              <span className="text-slate-400">· {siteConfig.reviewCount} reviews</span>
            </div>
          </div>

          <nav aria-label="Footer">
            <h2 className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-brand-300">
              Explore
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {services.map((service) => (
                <li key={service.id}>
                  <Link href="#services" className="transition-colors hover:text-white">
                    {service.title}
                  </Link>
                </li>
              ))}
              {navLinks.slice(1).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-brand-300">
              Contact
            </h2>
            <ul className="mt-4 space-y-3.5 text-sm">
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-3 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4 shrink-0 text-brand-400" strokeWidth={1.75} aria-hidden="true" />
                  <span className="font-mono text-white">{siteConfig.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 break-all transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 shrink-0 text-brand-400" strokeWidth={1.75} aria-hidden="true" />
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" strokeWidth={1.75} aria-hidden="true" />
                <span>
                  {siteConfig.address.street}, {siteConfig.town}, {siteConfig.county},{" "}
                  {siteConfig.address.postcode}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" strokeWidth={1.75} aria-hidden="true" />
                <span>
                  {siteConfig.hours}
                  <br />
                  <span className="text-brand-300">{siteConfig.emergency}</span>
                </span>
              </li>
            </ul>
          </div>

          {/* Google Business Profile card */}
          <div>
            <h2 className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-brand-300">
              Google Business
            </h2>
            <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-semibold text-slate-300">Verified profile</span>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-2.5 py-1 text-[11px] font-semibold text-emerald-400">
                  <BadgeCheck className="h-3 w-3" strokeWidth={2} aria-hidden="true" />
                  Active
                </span>
              </div>
              <div className="mt-3 flex items-baseline gap-3">
                <span className="font-mono text-4xl font-medium text-white">
                  {siteConfig.rating}
                </span>
                <div className="text-xs leading-tight text-slate-400">
                  <Stars rating={siteConfig.rating} className="text-brand-400" size="h-3.5 w-3.5" />
                  <p className="mt-1">
                    {siteConfig.reviewCount} Google reviews
                  </p>
                </div>
              </div>
              <a
                href={googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-white/10"
              >
                Read reviews
                <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* Row 2 — service areas + live map */}
        <div className="grid gap-10 border-b border-white/10 py-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <h2 className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-brand-300">
              Areas we serve
            </h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3">
              <li className="flex items-baseline gap-2">
                <span className="text-sm font-semibold text-white">{siteConfig.town}</span>
                <span className="font-mono text-[11px] text-brand-300">
                  {siteConfig.address.postcode.split(" ")[0]}
                </span>
                <span className="sr-only">head office</span>
              </li>
              {surroundingAreas.map((area) => (
                <li key={area.name} className="flex items-baseline gap-2">
                  <span className="text-sm text-slate-300">{area.name}</span>
                  <span className="font-mono text-[11px] text-slate-400">{area.postcode}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 max-w-md text-sm leading-relaxed">
              Roofing services within roughly a 20-mile radius of {siteConfig.town}, including
              emergency call-outs, insurance work and planned installations.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-white/10">
            <span className="pointer-events-none absolute left-3 top-3 z-10 rounded-full bg-ink-950/85 px-3 py-1.5 text-[11px] font-semibold text-white backdrop-blur-sm">
              <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 align-middle" />
              Service area map · {siteConfig.town}
            </span>
            <iframe
              src={mapEmbedUrl}
              title={`Map of the ${siteConfig.town} service area and surrounding towns`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-64 w-full border-0 grayscale-[0.3] contrast-[1.05] lg:h-72"
            />
          </div>
        </div>

        {/* Row 3 — legal */}
        <div className="flex flex-col items-center justify-between gap-4 pt-7 text-xs text-slate-400 sm:flex-row">
          <p>
            © {year} {siteConfig.name}. All rights reserved. Registered in England &amp; Wales.
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <li>
              <Link href="/privacy" className="transition-colors hover:text-slate-300">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="transition-colors hover:text-slate-300">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/sitemap.xml" className="transition-colors hover:text-slate-300">
                Sitemap
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
