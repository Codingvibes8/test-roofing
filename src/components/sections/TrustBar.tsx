import { Award, Star, Clock, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/data/siteData";
import { StaggerGroup, StaggerItem } from "@/components/ui/Reveal";

const stats = [
  {
    icon: Award,
    label: "Checkatrade & Google",
    value: `${siteConfig.rating} / 5.0 rating`,
  },
  {
    icon: Star,
    label: "Verified reviews",
    value: `${siteConfig.reviewCount}+ happy clients`,
  },
  {
    icon: Clock,
    label: "Trading since",
    value: `${siteConfig.yearsExperience}+ years`,
  },
  {
    icon: ShieldCheck,
    label: "Workmanship warranty",
    value: "Up to 25 years",
  },
] as const;

/** Trust bar directly under the hero: rating, review count, experience, warranty. */
export default function TrustBar() {
  return (
    <section aria-label="Trust indicators" className="border-b border-slate-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 md:py-7 lg:px-8">
        <StaggerGroup
          className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6"
          stagger={0.07}
        >
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <StaggerItem
                key={stat.label}
                className="flex items-center gap-2.5 rounded-2xl border border-slate-100 bg-slate-50/60 p-3 transition-colors duration-300 hover:border-brand-200 hover:bg-brand-50/60 sm:gap-4 sm:p-3.5"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-brand-600 shadow-sm sm:h-11 sm:w-11">
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block font-mono text-[10px] font-medium uppercase leading-tight tracking-[0.14em] text-slate-500">
                    {stat.label}
                  </span>
                  {/* Wraps rather than truncates so the proof stays readable at 2-col mobile */}
                  <span className="mt-0.5 block text-sm font-semibold leading-tight tracking-tight text-ink-950 sm:text-base">
                    {stat.value}
                  </span>
                </span>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
