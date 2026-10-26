"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X, Phone, House, ArrowRight } from "lucide-react";
import { navLinks, siteConfig } from "@/data/siteData";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  // Shadow/blur once the page leaves the very top (IntersectionObserver, not a scroll listener)
  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;
    const io = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0 }
    );
    io.observe(sentinel);
    return () => io.disconnect();
  }, []);

  // Mobile menu: escape to close, lock background scroll while open
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div
        ref={sentinelRef}
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 h-px w-px"
      />
      <header
        className={`on-dark sticky top-0 z-50 bg-ink-950 transition-shadow duration-300 ${
          scrolled ? "shadow-lg shadow-black/25" : ""
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-[4.5rem] lg:px-8">
          {/* Brand */}
          <Link href="/" className="group flex items-center gap-2.5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-600 text-white shadow-md shadow-brand-900/40 transition-transform duration-300 group-hover:scale-105">
              <House className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
            </span>
            <span className="leading-none">
              <span className="block text-base font-bold tracking-tight text-white">APEX</span>
              <span className="mt-1 block font-mono text-[9px] font-medium uppercase tracking-[0.18em] text-brand-300">
                Roofing &amp; Property Care
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-6 xl:gap-7">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="relative text-sm font-medium text-slate-300 transition-colors duration-200 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-brand-400 after:transition-all after:duration-300 hover:text-white hover:after:w-full"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={`tel:${siteConfig.phone}`}
              className="group hidden items-center gap-2.5 rounded-full py-1 pl-1 pr-3 text-sm font-semibold text-white transition-colors hover:text-brand-300 sm:flex"
              aria-label={`Call ${siteConfig.phoneDisplay}`}
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-brand-300 transition-colors group-hover:bg-white/20">
                <Phone className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
              </span>
              <span className="font-mono tracking-tight">{siteConfig.phoneDisplay}</span>
            </a>

            <Link
              href="#quote"
              className="hidden rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-900/40 transition-all duration-200 hover:bg-brand-500 hover:shadow-brand-700/40 active:scale-[0.98] sm:inline-flex"
            >
              Free Quote
            </Link>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 lg:hidden"
            >
              {open ? (
                <X className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              id="mobile-menu"
              key="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden border-t border-white/10 bg-ink-900 lg:hidden"
            >
              <nav aria-label="Mobile" className="px-4 pb-6 pt-3 sm:px-6">
                <ul className="divide-y divide-white/5">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="flex items-center justify-between py-3.5 text-base font-medium text-slate-200 transition-colors hover:text-brand-300"
                      >
                        {link.label}
                        <ArrowRight
                          className="h-4 w-4 text-slate-500"
                          strokeWidth={1.75}
                          aria-hidden="true"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="rounded-full border border-white/20 px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    Call now
                  </a>
                  <Link
                    href="#quote"
                    onClick={() => setOpen(false)}
                    className="rounded-full bg-brand-600 px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-brand-500"
                  >
                    Free Quote
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
