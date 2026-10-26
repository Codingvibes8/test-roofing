import Image from "next/image";
import { MapPin, CheckCircle2 } from "lucide-react";
import { projects, featuredProject } from "@/data/siteData";
import SectionHeading from "@/components/ui/SectionHeading";
import PhotoSlot from "@/components/ui/PhotoSlot";
import Reveal, { StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import BeforeAfter from "./BeforeAfter";

/** Project gallery: interactive before/after comparison plus recent work cards. */
export default function Gallery() {
  return (
    <section id="gallery" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Recent work"
            title="Before and after from across Surrey"
            description="Emergency call-outs, full re-roofs and flat roof replacements, each signed off by the homeowner before we leave."
          />
        </Reveal>

        {/* Featured before / after */}
        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-8">
            <BeforeAfter
              title={featuredProject.title}
              beforeSrc={featuredProject.beforeSrc}
              afterSrc={featuredProject.afterSrc}
            />
          </Reveal>

          <Reveal className="lg:col-span-4" delay={0.12}>
            <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-surface p-6">
              <span className="inline-flex w-fit rounded-full bg-ink-950 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-brand-300">
                {featuredProject.category}
              </span>
              <h3 className="mt-4 text-xl font-semibold tracking-tight text-ink-950">
                {featuredProject.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Ridge re-bedded, repointed and checked from inside the loft. Made watertight in a
                single visit while the storm warning was still active.
              </p>
              <div className="mt-auto space-y-3 pt-6">
                <div className="flex items-center justify-between border-t border-slate-200 pt-4 text-xs">
                  <span className="flex items-center gap-1.5 font-medium text-slate-600">
                    <MapPin className="h-3.5 w-3.5 text-brand-600" strokeWidth={1.75} aria-hidden="true" />
                    {featuredProject.location}
                  </span>
                  <span className="flex items-center gap-1.5 font-semibold text-emerald-700">
                    <CheckCircle2 className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden="true" />
                    Completed
                  </span>
                </div>
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-slate-600">
                  Drag the slider to compare
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Recent project cards */}
        <StaggerGroup className="mt-6 grid gap-6 md:grid-cols-3" stagger={0.1}>
          {projects.map((project) => (
            <StaggerItem key={project.title}>
              <article className="group h-full overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-xl">
              <div className="relative aspect-[4/3] overflow-hidden bg-ink-900">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={`${project.title} in ${project.location}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <PhotoSlot variant="after" label="Project photo" />
                )}
                <span className="absolute left-3 top-3 z-10 rounded-full bg-black/60 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
                  {project.category}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-semibold tracking-tight text-ink-950">{project.title}</h3>
                <div className="mt-3 flex items-center justify-between text-xs">
                  <span className="flex items-center gap-1.5 font-medium text-slate-500">
                    <MapPin className="h-3.5 w-3.5 text-brand-600" strokeWidth={1.75} aria-hidden="true" />
                    {project.location}
                  </span>
                  <span className="flex items-center gap-1.5 font-semibold text-emerald-700">
                    <CheckCircle2 className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden="true" />
                    Completed
                  </span>
                </div>
              </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
