import { motion } from "framer-motion";

import {
  Row,
  Card as Card,
  ImageCard,
  ArrowRow,
  fadeIn,
} from "../analyses/analysisCommon";

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
