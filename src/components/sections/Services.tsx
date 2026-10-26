import Link from "next/link";
import { Wrench, Home, Layers, ShieldAlert, ArrowRight, type LucideIcon } from "lucide-react";
import { services } from "@/data/siteData";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal, { StaggerGroup, StaggerItem } from "@/components/ui/Reveal";

const iconMap: Record<string, LucideIcon> = {
  Wrench,
  Home,
  Layers,
  ShieldAlert,
};

/**
 * Service cards in an asymmetric bento (3+3 / 2+4 of 6 columns):
 * the emergency card is dark, the chimney card is brand-tinted, the rest are white.
 * Motion animates a wrapper so Tailwind's hover lift stays free on the card itself.
 */
export default function Services() {
  return (
    <section id="services" className="bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            align="center"
            title="Professional roofing, built to last"
            description="Whether it is a single slipped tile or an entirely new roof, our certified team delivers the same standard of workmanship, guaranteed in writing."
          />
        </Reveal>

        <StaggerGroup className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-6" stagger={0.09}>
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] ?? Wrench;
            const featured = index === 0; // dark card
            const tinted = index === 3; // brand-tinted card
            const span =
              index < 2 ? "lg:col-span-3" : index === 2 ? "lg:col-span-2" : "lg:col-span-4";

            const cardClass = featured
              ? "bg-ink-950 border-ink-800 text-white hover:shadow-black/30"
              : tinted
                ? "bg-brand-50 border-brand-200/70 text-ink-950 hover:border-brand-400"
                : "bg-white border-slate-200/80 text-ink-950 hover:border-brand-300";

            return (
              <StaggerItem key={service.id} className={span}>
                <article
                  className={`group relative flex h-full flex-col rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7 ${cardClass}`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <span
                      className={`flex h-12 w-12 items-center justify-center rounded-xl transition-colors duration-300 ${
                        featured
                          ? "bg-white/10 text-brand-300 group-hover:bg-brand-600 group-hover:text-white"
                          : tinted
                            ? "bg-white text-brand-600 group-hover:bg-brand-600 group-hover:text-white"
                            : "bg-brand-50 text-brand-600 group-hover:bg-brand-600 group-hover:text-white"
                      }`}
                    >
                      <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                    </span>
                    <span
                      className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide ${
                        featured
                          ? "border border-brand-500/40 bg-brand-500/15 text-brand-300"
                          : tinted
                            ? "bg-brand-100 text-brand-800"
                            : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-semibold tracking-tight sm:text-xl">
                    {service.title}
                  </h3>
                  <p
                    className={`mt-2.5 text-sm leading-relaxed ${
                      featured ? "text-slate-400" : "text-slate-600"
                    }`}
                  >
                    {service.description}
                  </p>

                  <Link
                    href="#quote"
                    className={`mt-6 inline-flex items-center gap-2 border-t pt-4 pb-1 text-sm font-semibold transition-colors ${
                      featured
                        ? "border-white/10 text-white hover:text-brand-300"
                        : "border-slate-100 text-ink-950 hover:text-brand-700"
                    }`}
                  >
                    Free Quote
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </article>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
