import type { Transition, Variants } from "framer-motion";

/**
 * Shared motion system.
 * Every animated surface pulls its easing, timing and variants from here so the
 * whole site moves with one consistent, deliberate rhythm.
 */

// Soft "ease-out" curve — quick to start, gently settles. Used for reveals.
export const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];
// Symmetric curve for elements that move both in and out (nav, toggles).
export const EASE_IN_OUT: [number, number, number, number] = [0.65, 0, 0.35, 1];

export const DURATION = {
  fast: 0.3,
  base: 0.55,
  slow: 0.75,
} as const;

// Reveal slightly before the element is fully in view — feels responsive, not "poppy".
export const viewportOnce = {
  once: true,
  margin: "0px 0px -12% 0px",
} as const;

const reveal: Transition = {
  duration: DURATION.base,
  ease: EASE_OUT,
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: reveal },
};

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: reveal },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: reveal },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { ...reveal, duration: DURATION.slow },
  },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { ...reveal, duration: DURATION.slow },
  },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { ...reveal, duration: DURATION.slow },
  },
};

/** Parent wrapper that reveals its children one after another. */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.08 },
  },
};

/** Tunable variant of {@link staggerContainer}. */
export const makeStagger = (stagger = 0.1, delayChildren = 0.08): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren: stagger, delayChildren } },
});
