import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import { heroMedia, siteConfig } from "@/data/siteData";
import QuoteForm from "./QuoteForm";

export default function Hero() {
  return (
    <section className="on-dark relative overflow-hidden bg-ink-950 text-white">
      {/* Photography: full-bleed roofers, scrimmed so the copy stays readable */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 animate-hero-zoom">
          <Image
            src={heroMedia.image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[60%_35%]"
          />
        </div>
        {/* Scrims: keep ≥7:1 behind the headline on every breakpoint */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(11,15,20,0.96) 0%, rgba(11,15,20,0.93) 34%, rgba(11,15,20,0.78) 58%, rgba(11,15,20,0.58) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(11,15,20,0.55) 0%, rgba(11,15,20,0.25) 45%, rgba(11,15,20,0.92) 100%)",
          }}
        />
        {/* Ambient brand glows retained for warmth */}
        <div className="absolute -right-40 -top-48 h-[34rem] w-[34rem] animate-drift rounded-full bg-brand-600/25 blur-3xl" />
        <div className="absolute -left-48 bottom-[-18rem] h-[30rem] w-[30rem] animate-drift-slow rounded-full bg-brand-400/10 blur-3xl" />
        {/* Fine blueprint grid, held very low so it reads over the photo */}
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse 90% 80% at 50% 30%, black 40%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 90% 80% at 50% 30%, black 40%, transparent 100%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 md:pb-24 md:pt-14 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Value proposition */}
          <div className="lg:col-span-6">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-brand-300">
              {siteConfig.name}
              <span className="hidden text-slate-400 sm:inline">·</span>
              <span className="hidden sm:inline">{siteConfig.town}</span>
            </p>

            <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Emergency roof repairs &amp; full re-roofs in{" "}
              <span className="text-brand-400">{siteConfig.town}</span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Rapid response across {siteConfig.town} and surrounding towns. Free written quotes,
              zero deposit and guarantees up to 25 years.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="#quote"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 text-base font-semibold text-white shadow-xl shadow-brand-900/40 transition-all duration-200 hover:bg-brand-500 hover:shadow-brand-700/40 active:scale-[0.98]"
              >
                Free Quote
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-base font-semibold text-white transition-colors duration-200 hover:bg-white/10"
              >
                <Phone className="h-4 w-4 text-brand-300" strokeWidth={1.75} aria-hidden="true" />
                <span className="font-mono tracking-tight">{siteConfig.phoneDisplay}</span>
              </a>
            </div>
          </div>

          {/* Instant lead form */}
          <div className="lg:col-span-6 xl:col-span-5 xl:col-start-8">
            <QuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
}
