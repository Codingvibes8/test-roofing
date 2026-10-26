import { ArrowUpRight } from "lucide-react";
import { testimonials, googleReviewsUrl, siteConfig } from "@/data/siteData";
import SectionHeading from "@/components/ui/SectionHeading";
import Stars from "@/components/ui/Stars";
import Reveal, { StaggerGroup, StaggerItem } from "@/components/ui/Reveal";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");
}

function Attribution({ name, role, service }: { name: string; role: string; service: string }) {
  return (
    <div className="mt-5 flex items-center gap-3 border-t border-slate-200 pt-4">
      <span
        aria-hidden="true"
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-600 text-sm font-semibold text-white"
      >
        {initials(name)}
      </span>
      <span className="min-w-0">
        <span className="block text-sm font-semibold text-ink-950">{name}</span>
        <span className="block text-xs text-slate-500">{role}</span>
      </span>
      <span className="ml-auto hidden shrink-0 rounded-full bg-slate-100 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-slate-600 sm:block">
        {service}
      </span>
    </div>
  );
}

/** Social proof: one featured review plus two supporting reviews. */
export default function Testimonials() {
  const [featured, ...rest] = testimonials;

  return (
    <section id="reviews" className="bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            title={`Rated ${siteConfig.rating} by homeowners across ${siteConfig.county}`}
            description={`${siteConfig.reviewCount} verified reviews on Google and Checkatrade. Here is what a few of them said.`}
          />
          <a
            href={googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-800"
          >
            Read all {siteConfig.reviewCount} reviews
            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          {/* Featured review */}
          <Reveal className="lg:col-span-5">
            <figure className="flex h-full flex-col rounded-2xl bg-ink-950 p-7 text-white sm:p-8">
              <Stars rating={featured.rating} className="text-brand-400" size="h-4 w-4" />
              <blockquote className="mt-4 text-lg leading-relaxed text-slate-200 sm:text-xl">
                “{featured.quote}”
              </blockquote>
              <figcaption className="mt-auto pt-6">
                <div className="flex items-center gap-3 border-t border-white/10 pt-4">
                  <span
                    aria-hidden="true"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-600 text-sm font-semibold text-white"
                  >
                    {initials(featured.name)}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-white">{featured.name}</span>
                    <span className="block text-xs text-slate-400">{featured.role}</span>
                  </span>
                  <span className="ml-auto hidden shrink-0 rounded-full bg-white/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-brand-300 sm:block">
                    {featured.service}
                  </span>
                </div>
              </figcaption>
            </figure>
          </Reveal>

          {/* Supporting reviews */}
          <StaggerGroup className="grid gap-6 lg:col-span-7" stagger={0.12}>
            {rest.map((review) => (
              <StaggerItem
                key={review.name}
                as="figure"
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-colors duration-300 hover:border-brand-300 sm:p-7"
              >
                <Stars rating={review.rating} size="h-4 w-4" />
                <blockquote className="mt-3.5 text-base leading-relaxed text-slate-700">
                  “{review.quote}”
                </blockquote>
                <Attribution name={review.name} role={review.role} service={review.service} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
