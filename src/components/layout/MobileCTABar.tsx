"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { siteConfig } from "@/data/siteData";

/** Persistent conversion bar for small screens: one tap to call, one tap to quote. */
export default function MobileCTABar() {
  return (
    <div
      className="on-dark fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-ink-950/95 backdrop-blur-md md:hidden"
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <div className="grid grid-cols-2 gap-3 px-4 pt-3">
        <a
          href={`tel:${siteConfig.phone}`}
          className="flex items-center justify-center gap-2 rounded-full border border-white/20 px-4 py-3 text-sm font-semibold text-white transition-colors active:bg-white/10"
        >
          <Phone className="h-4 w-4 text-brand-300" strokeWidth={1.75} aria-hidden="true" />
          <span className="font-mono tracking-tight">{siteConfig.phoneDisplay}</span>
        </a>
        <Link
          href="#quote"
          className="flex items-center justify-center rounded-full bg-brand-600 px-4 py-3 text-sm font-semibold text-white transition-colors active:bg-brand-700"
        >
          Free Quote
        </Link>
      </div>
    </div>
  );
}
