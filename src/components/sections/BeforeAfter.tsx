"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronsLeftRight } from "lucide-react";
import PhotoSlot from "@/components/ui/PhotoSlot";

type BeforeAfterProps = {
  beforeSrc?: string;
  afterSrc?: string;
  title: string;
};

/**
 * Before/after comparison slider.
 * Native range input underneath, so it works with keyboard and touch.
 * Pass beforeSrc/afterSrc in siteData.ts to replace the photo slots.
 */
export default function BeforeAfter({ beforeSrc = "", afterSrc = "", title }: BeforeAfterProps) {
  const [pos, setPos] = useState(50);

  return (
    <div className="relative aspect-[16/10] w-full select-none overflow-hidden rounded-2xl bg-ink-900">
      {/* Base layer: AFTER */}
      {afterSrc ? (
        <Image
          src={afterSrc}
          alt={`${title}: completed work`}
          fill
          sizes="(max-width: 1024px) 100vw, 66vw"
          className="object-cover"
        />
      ) : (
        <PhotoSlot variant="after" label="After photo" align="bottom-right" />
      )}

      {/* Clipped layer: BEFORE (left side) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        aria-hidden="true"
      >
        {beforeSrc ? (
          <Image
            src={beforeSrc}
            alt=""
            fill
            sizes="(max-width: 1024px) 100vw, 66vw"
            className="object-cover grayscale-[0.35]"
          />
        ) : (
          <PhotoSlot variant="before" label="Before photo" align="bottom-left" />
        )}
      </div>

      {/* Labels */}
      <span className="pointer-events-none absolute left-3 top-3 z-10 rounded-full bg-black/60 px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-white backdrop-blur-sm">
        Before
      </span>
      <span className="pointer-events-none absolute right-3 top-3 z-10 rounded-full bg-brand-600 px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-white backdrop-blur-sm">
        After
      </span>

      {/* Handle */}
      <div
        className="pointer-events-none absolute inset-y-0 z-10 w-0.5 bg-white shadow-[0_0_18px_rgba(0,0,0,0.5)]"
        style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
        aria-hidden="true"
      >
        <span className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink-950 shadow-lg ring-1 ring-black/10">
          <ChevronsLeftRight className="h-5 w-5" strokeWidth={1.75} />
        </span>
      </div>

      {/* Interactive control (keyboard + touch accessible) */}
      <input
        type="range"
        min={0}
        max={100}
        step={1}
        value={pos}
        onChange={(event) => setPos(Number(event.target.value))}
        aria-label={`Drag to compare the before and after photos of ${title}`}
        className="ba-range absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0"
      />
    </div>
  );
}
