import { ImageIcon } from "lucide-react";

type PhotoSlotProps = {
  /** "before" renders a dull/damaged treatment, anything else renders the "after" treatment */
  variant?: "before" | "after";
  label?: string;
  spec?: string;
  /**
   * Where the caption sits inside the frame.
   * Comparison sliders pass a corner so the caption never collides with the
   * centred drag handle or with the caption on the other side of the split.
   */
  align?: "center" | "bottom-left" | "bottom-right";
};

/**
 * Designed placeholder for project photography.
 * Drop a real image URL into siteData.ts and this swaps for <Image> automatically.
 */
export default function PhotoSlot({
  variant = "after",
  label = "Project photo",
  spec = "1600 × 1000",
  align = "center",
}: PhotoSlotProps) {
  const isBefore = variant === "before";

  const alignClasses =
    align === "bottom-left"
      ? "items-start justify-end text-left"
      : align === "bottom-right"
        ? "items-end justify-end text-right"
        : "items-center justify-center text-center";

  const isStacked = align !== "center";

  return (
    <div
      className={`absolute inset-0 flex flex-col overflow-hidden ${
        isStacked ? "gap-1.5 px-5 py-5" : "gap-2.5"
      } ${alignClasses}`}
      style={{
        backgroundColor: isBefore ? "#242a31" : "#0f141b",
        backgroundImage: isBefore
          // "Before" reads flat, weathered and washed out.
          ? "repeating-linear-gradient(135deg, rgba(255,255,255,0.055) 0px, rgba(255,255,255,0.055) 2px, transparent 2px, transparent 13px)"
          : "repeating-linear-gradient(135deg, rgba(255,255,255,0.045) 0px, rgba(255,255,255,0.045) 2px, transparent 2px, transparent 15px)",
      }}
      aria-hidden="true"
    >
      {!isBefore && (
        <>
          <span className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand-600/35 blur-2xl" />
          <span className="absolute -bottom-20 -left-10 h-40 w-40 rounded-full bg-brand-400/15 blur-2xl" />
        </>
      )}
      {isBefore && (
        <>
          <span className="absolute -bottom-16 -left-16 h-44 w-44 rounded-full bg-slate-500/25 blur-2xl" />
          <span className="absolute -top-20 right-0 h-36 w-36 rounded-full bg-slate-400/10 blur-2xl" />
        </>
      )}

      <span
        className={`relative flex h-11 w-11 items-center justify-center rounded-full ring-1 ${
          isBefore
            ? "bg-white/8 text-slate-300 ring-white/12"
            : "bg-white/10 text-white ring-white/20"
        }`}
      >
        <ImageIcon className="h-5 w-5" strokeWidth={1.75} />
      </span>
      <span
        className={`relative font-mono text-[11px] font-medium uppercase tracking-[0.18em] ${
          isBefore ? "text-slate-400" : "text-slate-200"
        }`}
      >
        {label}
      </span>
      <span className="relative font-mono text-[10px] uppercase tracking-[0.14em] text-slate-500">
        {spec}
      </span>
    </div>
  );
}
