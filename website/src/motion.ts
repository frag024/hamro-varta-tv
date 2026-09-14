import type { Variants } from "framer-motion";

/** Shared easing — matches the editorial, unhurried feel (no bounce/elastic). */
export const EASE = [0.22, 0.68, 0.32, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export const staggerChildren = (stagger = 0.1, delay = 0): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger, delayChildren: delay } },
});

export const clipReveal: Variants = {
  hidden: { clipPath: "inset(0 0 0 100%)" },
  show: { clipPath: "inset(0 0 0 0%)", transition: { duration: 0.9, ease: EASE } },
};

export const viewportOnce = { once: true, margin: "-80px" };
