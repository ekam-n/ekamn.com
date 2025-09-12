import React from "react";
import { motion } from "framer-motion";

type RowProps = {
  /** Number of columns at common breakpoints; override with colsClass for full control */
  cols?: 1 | 2 | 3 | 4;
  /** Advanced: pass your own Tailwind grid classes, e.g. "grid-cols-1 md:grid-cols-3" */
  colsClass?: string;
  className?: string;
  children: React.ReactNode;
};

type CardProps = {
  title?: string;
  className?: string;
  children?: React.ReactNode;
};

/* ---------- Helpers ---------- */

const gridColsByCount: Record<Required<RowProps>["cols"], string> = {
  1: "grid-cols-1",
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
};

const fadeIn: any = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

/** A flexible row that lays out cards in a responsive grid */
function Row({ cols = 2, colsClass, className = "", children }: RowProps) {
  const grid = colsClass ?? gridColsByCount[cols];
  return (
    <section className={`grid ${grid} gap-4 items-stretch ${className}`}>
      {children}
    </section>
  );
}

/** A simple, reusable content card */
function Card({ title, className = "", children }: CardProps) {
  return (
    <motion.article
      {...fadeIn}
      className={[
        "h-full rounded-2xl border border-white/10 bg-black/60",
        "backdrop-blur-md shadow-lg p-4 md:p-6",
        className,
      ].join(" ")}
    >
      {title && <h3 className="text-lg md:text-xl font-semibold mb-3">{title}</h3>}
      <div className="prose prose-invert max-w-none">
        {children ?? <p className="text-white/80">Add content…</p>}
      </div>
    </motion.article>
  );
}

/** NEW: Image card (image + caption) that matches row height */
function ImageCard({
  src,
  alt = "",
  caption,
  className = "",
  imgClassName = "",
}: {
  src: string;
  alt?: string;
  caption?: string;
  className?: string;
  imgClassName?: string;
}) {
  return (
    <motion.figure
      {...fadeIn}
      className={[
        "h-full rounded-2xl border border-white/10 bg-black/60",
        "backdrop-blur-md shadow-lg overflow-hidden", // clip image to rounded corners
        className,
      ].join(" ")}
    >
      {/* Fill available height so it matches siblings */}
      <div className="flex h-full flex-col">
        {/* Image grows to fill; min height guards against super-short rows */}
        <div className="relative flex-1 min-h-[160px]">
          <img
            src={src}
            alt={alt}
            className={["absolute inset-0 h-full w-full object-cover", imgClassName].join(" ")}
          />
        </div>

        {/* Caption */}
        <figcaption className="px-4 md:px-6 py-3 text-sm text-white/80">
          {caption}
        </figcaption>
      </div>
    </motion.figure>
  );
}

/** Centered down arrows to visually separate iteration phases */
function DividerArrows({ count = 3 }: { count?: number }) {
  return (
    <div className="flex justify-center my-6 md:my-8" aria-hidden="true">
      <div className="flex flex-col items-center gap-1 text-white/60">
        {Array.from({ length: count }).map((_, i) => (
          <span key={i} className="leading-none select-none">↓</span>
        ))}
      </div>
    </div>
  );
}

/* ---------- Page ---------- */

export default function SolarConquestAnalysis() {
  return (
    <main className="max-w-6xl mx-auto px-4 pt-20 pb-16 text-white">
      {/* H1 */}
      <motion.h1
        className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-8 md:mb-10"
        {...fadeIn}
      >
        Solar Conquest
      </motion.h1>

      {/* --- First 4 rows --- */}
      <div className="space-y-4 md:space-y-6">
        <Row cols={2}>
          <ImageCard
            src="/images/solar-conquest/setup.jpg"
            caption="Game Setup"
            alt="Board setup for Solar Conquest"
          />
          <Card title="Core Loop">
            <ul className="list-disc pl-5">
              <li>Gather → Build → Explore → Fight → Expand</li>
              <li>Progression & feedback beats</li>
            </ul>
          </Card>
          {/*
          Example usage:
          <ImageCard
            src="/images/solar-conquest/setup.jpg"
            caption="Game Setup"
            alt="Board setup for Solar Conquest"
          />
          */}
        </Row>

        <Row cols={3}>
          <Card title="Systems Map"><p>Economy, crafting, tech tree stubs…</p></Card>
          <Card title="Combat Pillars"><p>Positioning, counters, risk/reward…</p></Card>
          <Card title="UX Notes"><p>Onboarding, tooltips, readability…</p></Card>
        </Row>

        <Row cols={2}>
          <Card title="Constraints"><p>Scope, team, timeline, platform…</p></Card>
          <Card title="Success Metrics"><p>What “good” looks like…</p></Card>
        </Row>

        <Row cols={1}>
          <Card title="Research / Inspirations">
            <p>Comparable titles, genre trends, unique twist…</p>
          </Card>
        </Row>
      </div>

      {/* H2 */}
      <motion.h2
        className="mt-10 md:mt-14 mb-4 md:mb-6 text-2xl md:text-4xl font-semibold tracking-tight"
        {...fadeIn}
      >
        The Design
      </motion.h2>

      {/* One row after H2 */}
      <Row cols={2} className="mb-2">
        <Card title="Rules / Turn Structure" />
        <Card title="Components / Artifacts" />
      </Row>

      {/* Iteration block 1 */}
      <DividerArrows />
      <div className="space-y-4 md:space-y-6">
        <Row cols={2}>
          <Card title="Playtest #1 – Goals" />
          <Card title="Observations" />
        </Row>
        <Row cols={2}>
          <Card title="Issues Found" />
          <Card title="Immediate Fixes" />
        </Row>
      </div>

      {/* Iteration block 2 */}
      <DividerArrows />
      <div className="space-y-4 md:space-y-6">
        <Row cols={2}>
          <Card title="Playtest #2 – Goals" />
          <Card title="Observations" />
        </Row>
        <Row cols={2}>
          <Card title="Balancing Notes" />
          <Card title="System Changes" />
        </Row>
      </div>

      {/* Final iteration */}
      <DividerArrows />
      <Row cols={1}>
        <Card title="Final Outcomes / Next Steps">
          <ul className="list-disc pl-5">
            <li>What improved and why</li>
            <li>Open questions and future experiments</li>
          </ul>
        </Card>
      </Row>
    </main>
  );
}
