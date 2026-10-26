import Link from "next/link";
import { MapPin, CheckCircle2, Navigation, ArrowRight } from "lucide-react";
import { siteConfig, surroundingAreas, mapEmbedUrl } from "@/data/siteData";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal, { StaggerGroup, StaggerItem } from "@/components/ui/Reveal";

/** Local SEO: town + five surrounding areas with postcodes, plus a live area map. */
export default function LocalSEO() {
  return (
    <section id="areas" className="border-y border-slate-100 bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-6">
            <Reveal>
              <SectionHeading
                title={
                  <>
                    We cover {siteConfig.town} and five surrounding towns
                  </>
                }
                description={`Based in ${siteConfig.town} town centre, our roofers work across ${siteConfig.county} within a 20-mile radius. Call with your postcode and we will confirm coverage in seconds.`}
              />
            </Reveal>

            <StaggerGroup className="mt-8 grid gap-3 sm:grid-cols-2" stagger={0.06}>
              <StaggerItem
                className="flex items-center gap-3 rounded-2xl bg-ink-950 p-4 text-white"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-600 text-white">
                  <Navigation className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-sm font-semibold">
                    {siteConfig.town}{" "}
                    <span className="font-mono text-[11px] font-medium text-brand-300">
                      {siteConfig.address.postcode.split(" ")[0]}
                    </span>
                  </span>
                  <span className="mt-0.5 block text-xs text-slate-400">Head office &amp; depot</span>
                </span>
              </StaggerItem>

              {surroundingAreas.map((area) => (
                <StaggerItem
                  key={area.name}
                  className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 transition-colors duration-300 hover:border-brand-300"
                >
                  <CheckCircle2
                    className="h-5 w-5 shrink-0 text-brand-600"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                  <span>
                    <span className="block text-sm font-semibold text-ink-950">{area.name}</span>
                    <span className="mt-0.5 block font-mono text-[11px] text-slate-500">
                      Postcode {area.postcode}
                    </span>
                  </span>
                </StaggerItem>
              ))}
            </StaggerGroup>

            <Reveal delay={0.1}>
              <Link
                href="#quote"
                className="group mt-7 inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/20 transition-all duration-200 hover:bg-brand-700 active:scale-[0.98]"
              >
                Free Quote
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </Reveal>
          </div>

          {/* Live service-area map */}
          <div className="lg:col-span-6">
            <Reveal delay={0.1} y={32}>
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-900/5">
                <div className="flex items-center justify-between gap-3 bg-ink-950 px-4 py-3 text-white">
                  <span className="flex items-center gap-2.5 text-xs font-semibold">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                    </span>
                    Response units active
                  </span>
                  <span className="rounded-full bg-white/10 px-2.5 py-1 font-mono text-[11px] text-brand-300">
                    20-mile radius
                  </span>
                </div>
                <iframe
                  src={mapEmbedUrl}
                  title={`Map of ${siteConfig.town} and the surrounding areas ${siteConfig.shortName} covers`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-72 w-full border-0 grayscale-[0.25] sm:h-80 lg:h-[22rem]"
                />
                <div className="flex items-center gap-2 border-t border-slate-100 px-4 py-3 text-xs text-slate-500">
                  <MapPin className="h-3.5 w-3.5 text-brand-600" strokeWidth={1.75} aria-hidden="true" />
                  <span>
                    {siteConfig.address.street}, {siteConfig.town} ·{" "}
                    {surroundingAreas.map((a) => a.name).join(" · ")}
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
