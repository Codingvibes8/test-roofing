import Link from "next/link";
import {
  FileText,
  ShieldCheck,
  Wallet,
  BadgeCheck,
  Users,
  Clock,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { guarantees, siteConfig } from "@/data/siteData";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal, { StaggerGroup, StaggerItem } from "@/components/ui/Reveal";

const iconMap: Record<string, LucideIcon> = {
  FileText,
  ShieldCheck,
  Wallet,
  BadgeCheck,
  Users,
  Clock,
};

/** Benefits: the guarantees that de-risk the decision for the homeowner. */
export default function Benefits() {
  return (
    <section id="why-us" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHeading
                title={
                  <>
                    Six reasons {siteConfig.town} calls Apex first
                  </>
                }
                description="Every job is priced before we start, carried out by our own insured roofers, and backed in writing. No surprises, no subcontractors, no mess."
              />
              <Link
                href="#quote"
                className="group mt-7 inline-flex items-center gap-2 rounded-full bg-ink-950 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-ink-800 active:scale-[0.98]"
              >
                Free Quote
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <StaggerGroup
              className="grid gap-x-8 gap-y-7 sm:grid-cols-2"
              stagger={0.07}
            >
              {guarantees.map((item) => {
                const Icon = iconMap[item.icon] ?? ShieldCheck;
                return (
                  <StaggerItem key={item.title} className="flex gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                      <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-sm font-semibold text-ink-950">{item.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerGroup>
          </div>
        </div>
      </div>
    </section>
  );
}
