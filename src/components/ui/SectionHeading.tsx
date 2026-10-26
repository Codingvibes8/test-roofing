import type { ReactNode } from "react";

type SectionHeadingProps = {
  title: ReactNode;
  description?: string;
  /** Small mono label above the title — use sparingly (max 1 per 3 sections) */
  eyebrow?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
};

/** Stacked section heading: eyebrow (optional), h2, description. Never split. */
export default function SectionHeading({
  title,
  description,
  eyebrow,
  align = "left",
  tone = "light",
  className = "",
}: SectionHeadingProps) {
  const centered = align === "center";
  const dark = tone === "dark";

  return (
    <div className={`${centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}>
      {eyebrow ? (
        <p
          className={`font-mono text-[11px] font-medium uppercase tracking-[0.22em] ${
            dark ? "text-brand-300" : "text-brand-700"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-[2.6rem] lg:leading-[1.12] ${
          dark ? "text-white" : "text-ink-950"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            centered ? "mx-auto" : ""
          } max-w-[65ch] ${dark ? "text-slate-400" : "text-slate-600"}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
