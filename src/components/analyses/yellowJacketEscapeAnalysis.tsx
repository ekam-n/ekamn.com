import React from "react";
import { motion } from "framer-motion";

type RowProps = {
  cols?: 1 | 2 | 3 | 4;
  colsClass?: string;
  className?: string;
  children: React.ReactNode;
};

type CSSSize = number | string;

type CardProps = {
  title?: string;
  className?: string;
  children?: React.ReactNode;
  /** Optional explicit height (number = px, or CSS string like "24rem", "60vh") */
  height?: CSSSize;
  /** Optional explicit width (number = px, or CSS string like "32rem") */
  width?: CSSSize;
  /** Optional extra inline styles; height/width here are overridden by props above */
  style?: React.CSSProperties;
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

const toCss = (v?: CSSSize) =>
  typeof v === "number" ? `${v}px` : v;

/** Flexible row (unchanged) */
function Row({ cols = 2, colsClass, className = "", children }: RowProps) {
  const grid = colsClass ?? gridColsByCount[cols];
  return (
    <section className={`grid ${grid} gap-4 items-stretch ${className}`}>
      {children}
    </section>
  );
}

/** Card — now accepts height/width */
function Card({ title, className = "", children, height, width, style }: CardProps) {
  const sizedStyle: React.CSSProperties = {
    ...(style || {}),
    ...(height !== undefined ? { height: toCss(height) } : {}),
    ...(width  !== undefined ? { width:  toCss(width)  } : {}),
  };

  return (
    <motion.article
      {...fadeIn}
      style={sizedStyle}
      className={[
        "h-full rounded-2xl border-3 !border-[#FFD000] bg-black/60",
        "backdrop-blur-md shadow-lg p-4 md:p-6",
        className,
      ].join(" ")}
    >
      {title && <h3 className="text-xl md:text-2xl font-semibold mb-3">{title}</h3>}
      <div className="text-md prose prose-invert max-w-none leading-relaxed">
        {children ?? <p className="text-white/80">Add content…</p>}
      </div>
    </motion.article>
  );
}

/** ImageCard — now accepts height/width (outer card), keeps caption */
function ImageCard({
  src,
  alt = "",
  caption,
  className = "",
  imgClassName = "",
  height,
  width,
  style,
}: {
  src: string;
  alt?: string;
  caption?: string;
  className?: string;
  imgClassName?: string;
  height?: CSSSize;
  width?: CSSSize;
  style?: React.CSSProperties;
}) {
  const sizedStyle: React.CSSProperties = {
    ...(style || {}),
    ...(height !== undefined ? { height: toCss(height) } : {}),
    ...(width  !== undefined ? { width:  toCss(width)  } : {}),
  };

  return (
    <motion.figure
      {...fadeIn}
      style={sizedStyle}
      className={[
        "h-full rounded-2xl border border-white/10 bg-black/60",
        "backdrop-blur-md shadow-lg overflow-hidden",
        className,
      ].join(" ")}
    >
      <div className="flex h-full flex-col min-h-0">
        {/* Image area stretches to fill remaining height above caption */}
        <div className="relative flex-1 min-h-[160px] min-w-0">
          <img
            src={src}
            alt={alt}
            className={["absolute inset-0 h-full w-full object-cover", imgClassName].join(" ")}
          />
        </div>

        <figcaption className="px-4 md:px-6 py-3 text-sm text-white/80">
          {caption}
        </figcaption>
      </div>
    </motion.figure>
  );
}

// PNG arrow row: 3 at lg+, 2 at md, 1 below md
function ArrowRow({
  src = "/images/Arrow.png",  // update to your asset path if different
  size = 64,                  // px or CSS string (e.g., "4rem")
  gap = 16,                   // px or CSS string
  className = "",
}: {
  src?: string;
  size?: CSSSize;
  gap?: CSSSize;
  className?: string;
}) {
  const imgStyle: React.CSSProperties = { width: toCss(size), height: toCss(size) };
  const rowStyle: React.CSSProperties = { gap: toCss(gap) };

  return (
    <div className={`flex justify-center my-6 md:my-8 ${className}`} aria-hidden="true">
      <div className="flex items-center" style={rowStyle}>
        {/* 1st arrow: always visible */}
        <img src={src} alt="" style={imgStyle} className="inline-block select-none" />
        {/* 2nd arrow: visible from md up */}
        <img src={src} alt="" style={imgStyle} className="hidden md:inline-block select-none" />
        {/* 3rd arrow: visible from lg up */}
        <img src={src} alt="" style={imgStyle} className="hidden lg:inline-block select-none" />
      </div>
    </div>
  );
}


/* ---------- Page ---------- */

export default function yellowJacketEscapeAnalysis() {
  return (
    <main className="max-w-6xl mx-auto px-4 pt-20 pb-16 text-white">
      {/* H1 */}
      <motion.h1
        className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-8 md:mb-10"
        {...fadeIn}
      >
        YellowJacket Escape
      </motion.h1>

      {/* --- First 4 rows --- */}
      <div className="space-y-4 md:space-y-6">
        <Row colsClass="grid-cols-1 md:[grid-template-columns:auto_1fr]">
          <ImageCard
            src="/images/projectImages/solarConquest/Game Setup.png"
            height="25rem"
            width="40rem"
            caption="Game Setup"
            alt="Game setup for Solar Conquest"
          />
          <Card>
            <p>
              Solar Conquest is a space-themed board game where players claim planets, produce resources, and plan trade routes to outmaneuver rivals. Build and upgrade ships, troops, and planetary defense. Smart expansion, savvy deals, and well-timed strikes decide the winner.
            </p>
          </Card>
        </Row>

        {/* 2 columns at md+; single column on mobile */}
        <Row colsClass="grid-cols-1 md:grid-cols-2">
          {/* Column B: stack two cards vertically (equal heights) */}
          <div className="h-full">
            <div className="grid grid-cols-1 auto-rows-fr gap-4 h-full min-h-0">
              <Card title="Context">
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    Class Project, <em>Foundations of Game Design</em>
                  </li>
                  <li>March 2025 - April 2025</li>
                </ul>
                {/* Skills tags */}
                <div className="not-prose mt-3 flex flex-wrap gap-2 md:gap-3">
                  <span className="bg-white/20 px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm lg:text-base">
                    Economy Design
                  </span>
                  <span className="bg-white/20 px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm lg:text-base">
                    Systems Design
                  </span>
                  <span className="bg-white/20 px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm lg:text-base">
                    Tabletop Simulator
                  </span>
                  {/* add more tags as needed */}
                </div>
              </Card>
              <Card title="Team">
                <ul className="list-disc pl-5 space-y-1">
                  <li>Ekam: Designer, Developer </li>
                  <li>Kaleb: Visual Artist, Developer</li>
                  <li>Baseer: Visual Artist</li>
                  <li>Travis: Visual Artist</li>
                </ul>
              </Card>
            </div>
          </div>
          {/* Column A: one tall card (regular or image) */}
          <div className="h-full">
            <ImageCard
              src="/images/projectImages/solarConquest/Ships.png"
              caption="Ship Pieces"
              alt="Ship Pieces for Solar Conquest"
              className="h-full"
              height="100%"       // optional; Card/ImageCard already use h-full
            />
          </div>
        </Row>

        <Row cols={1}>
          <Card title="Objective">
            <p>We wanted to create a board game that emphasizes player agency in both cooperation and competition, is built on a clear, robust economy, and focuses on balancing chance vs strategy so randomness adds tension without deciding outcomes.</p>
          </Card>
        </Row>
      </div>

      {/* H2 */}
      <motion.h2
        className="mt-10 md:mt-14 mb-4 md:mb-6 text-2xl md:text-4xl font-medium tracking-tight"
        {...fadeIn}
      >
        The Design
      </motion.h2>

      {/* One row after H2 */}
      <Row cols={2} className="mb-2">
        <ImageCard
          src="/images/projectImages/solarConquest/Battle Scenario - Long.png"
              caption="Battle Scenario"
              alt="A typical battle scenario for Solar Conquest"
              className="h-full"
              height="20rem" 
        />
        <Card title="Methodology">
          <p>
            To enable player agency, I designed the game around four economic activities: resource accumulation, resource conversion, crafting, and trading. Each activity creates meaningful choices and tradeoffs that open multiple paths to progress, with trading linking cooperation and competition. Chance is present but limited, so strategy remains the primary driver of outcomes.
          </p>
        </Card>
      </Row>

      {/* Iteration block 1 */}
      <ArrowRow src="/images/projectImages/solarConquest/Arrow.png" size={100} gap={180} />   
      <div className="space-y-4 md:space-y-6">
        <Row cols={1}>
          <Card title="Initial Economy Design">
            <ul className="list-disc pl-5 space-y-4">
                  <li>I allocated resources to shape currency flow: players spawn on a corner planet, which each yield one resource with moons amplifying it, edge dwarf planets supply the two adjacent resources, and the center provides all, encouraging trading/bartering and balancing chance and strategy.</li>
                  <li>I prototyped transitive mechanics with tiered troop cards and planetary defense lasers, requiring multiple currencies to craft higher tiers.</li>
                  <li>I introduced production levers and feedback loops: accelerators as investments to grow positive feedback and converters that transform one currency into another.</li>
                  <li>I drafted the initial map with spawn locations and starting resources to test early pacing, route pressure, and trade opportunities.</li>
                </ul>
          </Card>
        </Row>
        <Row cols={2}>
          <ImageCard
            src="/images/projectImages/solarConquest/Annotated Initial Board.png"
                caption="Initial Game Board"
                alt="The first game board iteration for Solar Conquest, with one of the spawn locations indicated"
                className="h-full"
                height="20rem" 
          />
          <ImageCard
            src="/images/projectImages/solarConquest/Various Initial Game Cards.png"
                caption="Various Initial Game Cards"
                alt="Inital game card iterations for troops, a converter item, and a resource for Solar Conquest"
                className="h-full"
                height="20rem" 
          />
        </Row>
      </div>

      {/* Iteration block 2 */}
      <ArrowRow src="/images/projectImages/solarConquest/Arrow.png" size={100} gap={180} />
      <div className="space-y-4 md:space-y-6">
        <Row cols={1}>
          <Card title="Key Changes to Economy">
            <ul className="list-disc pl-5 space-y-4">
                  <li>I planned planet placement more carefully to prevent any player from having an easier route to the best resources, keeping the map fair and trading meaningful.</li>
                  <li>Through playtesting, we found that converters were too powerful, letting players build troops and lasers without visiting other planets, so I made them harder to get to avoid a single dominant strategy.</li>
                </ul>
          </Card>
        </Row>
        <Row colsClass="grid-cols-1 md:grid-cols-2">
          {/* Column B: stack two cards vertically (equal heights) */}
          {/* Column A: one tall card (regular or image) */}
          <div className="h-full">
            <ImageCard
              src="/images/projectImages/solarConquest/Improved Game Board.png"
              caption="Improved Game Board"
              alt="Improved Game Board for Solar Conquest"
              className="h-full"
              height="100%"       // optional; Card/ImageCard already use h-full
            />
          </div>
          <div className="h-full">
            <div className="grid grid-cols-1 auto-rows-fr gap-4 h-full min-h-0">
              <ImageCard
              src="/images/projectImages/solarConquest/Improved Resource Cards.png"
              caption="Improved Resource Cards"
              alt="Improved Resource Cards for Solar Conquest"
              className="h-full"
              height="15rem"       // optional; Card/ImageCard already use h-full
            />
              <ImageCard
              src="/images/projectImages/solarConquest/Improved Troop Cards.png"
              caption="Improved Resource Cards"
              alt="Improved Resource Cards for Solar Conquest"
              className="h-full"
              height="100%"       // optional; Card/ImageCard already use h-full
            />
            </div>
          </div>
        </Row>
      </div>

      {/* Final iteration */}
      <ArrowRow src="/images/projectImages/solarConquest/Arrow.png" size={100} gap={180} />
      <div className="space-y-4 md:space-y-6">
        <Row cols={1}>
          <Card title="Final Economy Design">
            <ul className="list-disc pl-5 space-y-4">
                  <li>I finalized the board so each planet, moon, and dwarf planet gave all players fair starting access to resources, clear currency flow, and meaningful trading/bartering routes, preserving player agency from turn one.</li>
                  <li>I balanced the cost/benefit of accelerators and converters to keep strategy ahead of chance, curb runaway positive feedback, and prevent any single dominant strategy so multiple paths to victory stay viable.</li>
                </ul>
          </Card>
        </Row>
        <Row colsClass="grid-cols-1 md:grid-cols-2">
          {/* Column B: stack two cards vertically (equal heights) */}
          {/* Column A: one tall card (regular or image) */}
          <div className="h-full">
            <ImageCard
              src="/images/projectImages/solarConquest/Final Game Board.png"
              caption="Improved Game Board"
              alt="Improved Game Board for Solar Conquest"
              className="h-full"
              height="100%"       // optional; Card/ImageCard already use h-full
            />
          </div>
          <div className="h-full">
            <div className="grid grid-cols-1 auto-rows-fr gap-4 h-full min-h-0">
              <ImageCard
              src="/images/projectImages/solarConquest/Planet With Converter.png"
              caption="Planet With a Converter"
              alt="A planet that has crafted a converter, in Solar Conquest"
              className="h-full"
              height="15rem"       // optional; Card/ImageCard already use h-full
            />
              <ImageCard
              src="/images/projectImages/solarConquest/Planet With Accelerator.png"
              caption="Planet With an Accelerator"
              alt="A planet that has crafted an accelerator, in Solar Conquest"
              className="h-full"
              height="100%"       // optional; Card/ImageCard already use h-full
            />
            </div>
          </div>
        </Row>
      </div>

      <ArrowRow src="/images/projectImages/solarConquest/Arrow.png" size={100} gap={180} />
      <div className="space-y-4 md:space-y-6">
        <Row cols={1}>
          <Card title="Takeaways">
            <ul className="list-disc pl-5 space-y-4">
                  <li>I learned how hard it is to balance a game economy: it took lots of playtesting and analysis to keep player agency high, chance vs strategy in equilibrium, and multiple viable paths to win.</li>
                  <li>I found the early game a bit slow to teach; too many options and rules created onboarding friction. Next time I would tighten the core loop, simplify first-turn choices, and provide a clearer first-play rulebook and quick reference to speed pacing.</li>
                </ul>
          </Card>
        </Row>
      </div>
    </main>
  );
}
