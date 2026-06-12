import React from "react";
import { motion } from "framer-motion";

import { Card as BaseCard, fadeIn } from "../analyses/analysisCommon";

// local wrapper that sets the border color for this page
const Card: React.FC<
  Omit<React.ComponentProps<typeof BaseCard>, "borderColorClass">
> = (props) => (
  <BaseCard borderColorClass="!border-[#db0096]" {...props} />
);

/* ---------- Page (placeholder) ---------- */

export default function VoltLegacyAnalysis() {
  return (
    <main className="max-w-6xl mx-auto px-4 pt-20 pb-16 text-white">
      <motion.h1
        className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-8 md:mb-10"
        {...fadeIn}
      >
        Volt Legacy
      </motion.h1>

      <Card title="Analysis coming soon">
        <p>
          A full design and development breakdown of Volt Legacy is on the way.
          Check back soon.
        </p>
      </Card>
    </main>
  );
}
