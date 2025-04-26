// src/lib/variants.ts
export const pageVariants = {
  initial: {
    opacity: 0,
    y: 50,                      // start 50px below
  },
  animate: {
    opacity: 1,
    y: 0,                       // slide into place
    transition: { duration: 0.6, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -50,                     // exit by sliding up
    transition: { duration: 0.4, ease: "easeIn" },
  },
};
