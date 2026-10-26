import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { pricingPlans, siteConfig } from "@/data/siteData";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal, { StaggerGroup, StaggerItem } from "@/components/ui/Reveal";

/** Indicative pricing tiers. Every job is quoted free and fixed before work starts. */
export default function Pricing() {
  return (
    <section id="pricing" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Guide prices"
            title="Transparent prices, fixed before we start"
            description="Every quote is free, itemised and valid for 30 days. The price we write down is the price you pay."
          />
        </Reveal>

        <StaggerGroup
          className="mx-auto mt-12 grid max-w-6xl items-stretch gap-6 md:grid-cols-3"
          stagger={0.1}
        >
          {pricingPlans.map((plan) => (
            <StaggerItem
              key={plan.id}
              className={`relative flex flex-col rounded-2xl border p-7 transition-all duration-300 ${
                plan.highlighted
                  ? "border-ink-950 bg-ink-950 text-white shadow-2xl shadow-ink-900/25 md:-mt-3"
                  : "border-slate-200 bg-white text-ink-950 hover:border-brand-300 hover:shadow-lg"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-7 rounded-full bg-brand-600 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white shadow-md shadow-brand-900/40">
                  Most popular
                </span>
              )}

              <h3 className="text-base font-semibold tracking-tight">{plan.name}</h3>
              <p
                className={`mt-1.5 text-sm leading-relaxed ${
                  plan.highlighted ? "text-slate-400" : "text-slate-600"
                }`}
              >
                {plan.description}
              </p>

              <div className="mt-5">
                <span className="block font-mono text-4xl font-medium tracking-tight">
                  {plan.price}
                </span>
                <span
                  className={`mt-1 block text-xs ${plan.highlighted ? "text-slate-400" : "text-slate-500"}`}
                >
                  {plan.priceNote}
                </span>
              </div>

              <ul className="mt-6 space-y-3 border-t pt-6 text-sm"
                style={{
                  borderColor: plan.highlighted ? "rgba(255,255,255,0.1)" : "#eef1f4",
                }}
              >
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check
                      className={`mt-0.5 h-4 w-4 shrink-0 ${
                        plan.highlighted ? "text-brand-400" : "text-brand-600"
                      }`}
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                    <span className={plan.highlighted ? "text-slate-300" : "text-slate-600"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="#quote"
                className={`group mt-7 flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-200 active:scale-[0.98] ${
                  plan.highlighted
                    ? "bg-white text-ink-950 hover:bg-slate-100"
                    : "bg-brand-600 text-white shadow-lg shadow-brand-600/20 hover:bg-brand-700"
                }`}
              >
                {plan.cta}
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal delay={0.15}>
          <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-relaxed text-slate-500">
            Guide prices based on typical jobs across {siteConfig.county}. Materials, access and
            roof size affect the final figure, and VAT applies where quoted. Your fixed price is
            confirmed after the free inspection.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
