import Link from "next/link";
import { ArrowRight, Phone, CheckCircle2 } from "lucide-react";
import { siteConfig, heroBullets } from "@/data/siteData";
import Reveal from "@/components/ui/Reveal";

/** Final conversion push before the footer. */
export default function CTASection() {
  return (
    <section className="on-dark relative overflow-hidden bg-ink-950 py-20 text-white md:py-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-32 top-1/2 h-80 w-80 -translate-y-1/2 animate-drift rounded-full bg-brand-600/20 blur-3xl" />
        <div className="absolute -left-40 bottom-[-12rem] h-72 w-72 animate-drift-slow rounded-full bg-brand-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-[2.6rem] lg:leading-[1.12]">
                Get your free quote today
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
                Free written quote, no obligation, and usually back to you within 30 minutes.
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {heroBullets.map((bullet) => (
                  <li key={bullet} className="flex items-center gap-2.5 text-sm text-slate-300">
                    <CheckCircle2
                      className="h-4 w-4 shrink-0 text-brand-400"
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                    {bullet}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <Link
                  href="#quote"
                  className="group inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-brand-600 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-brand-900/40 transition-all duration-200 hover:bg-brand-500 active:scale-[0.98]"
                >
                  Free Quote
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="inline-flex flex-1 items-center justify-center gap-3 rounded-full border border-white/20 bg-white/5 px-6 py-4 text-base font-semibold text-white transition-colors duration-200 hover:bg-white/10"
                >
                  <Phone className="h-4 w-4 text-brand-300" strokeWidth={1.75} aria-hidden="true" />
                  <span className="font-mono tracking-tight">{siteConfig.phoneDisplay}</span>
                </a>
              </div>
              <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.16em] text-slate-400">
                Mon–Sat 8am–6pm · 24/7 emergency line
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
