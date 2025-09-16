// lib/variants.ts
import type { Variants } from "framer-motion";

export const pageVariants: Variants = {
  initial: { opacity: 0, y: 12 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] }, // easeOut-bezier
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: { duration: 0.35, ease: [0.4, 0, 1, 1] }, // easeIn-bezier
  },
};

