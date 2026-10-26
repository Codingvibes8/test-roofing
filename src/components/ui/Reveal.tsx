"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";

type RevealTag = "div" | "section" | "li" | "article";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** seconds to wait before animating in */
  delay?: number;
  /** vertical offset in px */
  y?: number;
  /** how much of the element must be visible before triggering */
  amount?: number;
  as?: RevealTag;
};

/**
 * Scroll reveal wrapper. Animates transform + opacity only, runs once,
 * and collapses to a static render under prefers-reduced-motion.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  amount = 0.2,
  as = "div",
}: RevealProps) {
  const reduce = useReducedMotion();

  const initial = reduce ? false : ({ opacity: 0, y } as const);
  const transition = {
    duration: 0.65,
    delay: reduce ? 0 : delay,
    ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
  };
  const viewport = { once: true, amount } as const;

  const shared = { initial, whileInView: { opacity: 1, y: 0 }, viewport, transition, className };

  switch (as) {
    case "section":
      return <motion.section {...shared}>{children}</motion.section>;
    case "li":
      return <motion.li {...shared}>{children}</motion.li>;
    case "article":
      return <motion.article {...shared}>{children}</motion.article>;
    default:
      return <motion.div {...shared}>{children}</motion.div>;
  }
}

/** Shared child variants for staggered groups. */
export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

/**
 * Parent that staggers its motion.* children on scroll into view.
 * Usage: <StaggerGroup>{items.map(i => <StaggerItem key={i.id}>…</StaggerItem>)}</StaggerGroup>
 * StaggerGroup and StaggerItem must be composed together (both are client components).
 */
export function StaggerGroup({
  children,
  className,
  amount = 0.2,
  stagger = 0.08,
}: {
  children: ReactNode;
  className?: string;
  amount?: number;
  stagger?: number;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: reduce ? 0 : stagger } } }}
    >
      {children}
    </motion.div>
  );
}

type StaggerTag = "div" | "article" | "figure" | "li";

/** A single animated item inside a StaggerGroup. */
export function StaggerItem({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: StaggerTag;
}) {
  const shared = { variants: staggerChild, className };

  switch (as) {
    case "article":
      return <motion.article {...shared}>{children}</motion.article>;
    case "figure":
      return <motion.figure {...shared}>{children}</motion.figure>;
    case "li":
      return <motion.li {...shared}>{children}</motion.li>;
    default:
      return <motion.div {...shared}>{children}</motion.div>;
  }
}
