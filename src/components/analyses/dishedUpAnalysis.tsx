import { motion } from "framer-motion";

import {
  Row,
  Card as BaseCard,
  ImageCard,
  ArrowRow as BaseArrowRow,
  fadeIn,
  VideoCard,
} from "../analyses/analysisCommon";

// local wrapper that sets the border color for this page
const Card: React.FC<
  Omit<React.ComponentProps<typeof BaseCard>, "borderColorClass">
> = (props) => (
  <BaseCard borderColorClass="!border-[#E98800]" {...props} />
);

// local wrapper that sets the src img for the arrow row
const ArrowRow: React.FC<
  Omit<React.ComponentProps<typeof BaseArrowRow>, "src">
> = (props) => (
  <BaseArrowRow src="/images/projectImages/dishedUp/Arrow.png" {...props} />
);

/* ---------- Page ---------- */

export default function DishedUpAnalysis() {
  return (
    <main className="max-w-6xl mx-auto px-4 pt-20 pb-16 text-white">
      {/* H1 */}
      <motion.h1
        className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-8 md:mb-10"
        {...fadeIn}
      >
        dishedUp
      </motion.h1>

      {/* --- First 4 rows --- */}
      <div className="space-y-4 md:space-y-6">
        <Row colsClass="grid-cols-1 md:[grid-template-columns:auto_1fr]">
          <ImageCard
            src="/images/projectImages/dishedUp/cover image.png"
            height="25rem"
            width="40rem"
            caption="Various Screens from the dishedUp App"
            alt="Various Screens from the dishedUp App"
          />
          <Card>
            <p>
              dishedUp is a gamified cooking app concept for novice cooks that turns recipes into points, levels, and challenges to make learning to cook fun. We used Figma for design and ProtoPie to make the app completely accessible for use through voice commands. I also built a responsive showcase website for it using Vite and Tailwind CSS.
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
                    Class Project, <em>Interface Design</em>
                  </li>
                  <li>March 2025 - April 2025</li>
                </ul>
                {/* Skills tags */}
                <div className="not-prose mt-3 flex flex-wrap gap-2 md:gap-3">
                  <span className="bg-white/20 px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm lg:text-base">
                    Figma
                  </span>
                  <span className="bg-white/20 px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm lg:text-base">
                    ProtoPie
                  </span>
                  <span className="bg-white/20 px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm lg:text-base">
                    Vite
                  </span>
                  <span className="bg-white/20 px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm lg:text-base">
                    Tailwind
                  </span>
                  {/* add more tags as needed */}
                </div>
              </Card>
              <Card title="Team">
                <ul className="list-disc pl-5 space-y-1">
                  <li>Ekam: UI Designer, Backend Developer, Web Developer</li>
                  <li>Sabrina: UI Designer, User Researcher</li>
                  <li>Khushy: UI Designer, UX Designer</li>
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
          <Card title="Links and Resources">
            <ul className="list-disc pl-5 space-y-1">
              <li>We created the {" "}
                <a
                  href="https://cloud.protopie.io/p/29618e4fe3b5a6107042e269"
                  className="underline underline-offset-2"
                  target="_blank"
                  rel="noreferrer"
                >
                  prototype
                </a>{" "}
                and made it available to try using ProtoPie's cloud sharing feature.</li>
              <li>I developed and deployed the dishedUp showcase {" "}
                <a
                  href="https://dishedup.netlify.app/"
                  className="underline underline-offset-2"
                  target="_blank"
                  rel="noreferrer"
                >
                  website
                </a>{" "}
                using Vite and Tailwind CSS, hosted by Netlify.</li>
              <li>
                I used a GitHub{" "}
                <a
                  href="https://github.com/ekam-n/dishedUp-website"
                  className="underline underline-offset-2"
                  target="_blank"
                  rel="noreferrer"
                >
                  repository
                </a>{" "}
                to manage the website code and track changes.
              </li>
            </ul>
          </Card>
        </Row>

        <Row cols={1}>
          <Card title="Objective">
            <p>We wanted to design a gamified, voice-controlled cooking app that helps novice and health-focused home cooks build confidence and consistency by turning everyday recipes into hands-free challenges, points, and long-term goals, and to showcase the concept on a custom Vite + Tailwind website.
            </p>
          </Card>
        </Row>
      </div>

      {/* H2 */}
      <motion.h2
        className="mt-10 md:mt-14 mb-4 md:mb-6 text-2xl md:text-4xl font-medium tracking-tight"
        {...fadeIn}
      >
        Design Process
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
            To achieve this, we used a UX-driven, iterative design process: we built personas and user flows for novice and fitness-focused cooks, then designed both a gamification system (points, levels, badges, challenges) and a voice-first interaction model so recipes can be followed hands-free. I created wireframes and high-fidelity UI mockups for key voice-accessible screens, then implemented a responsive multi-page website with Vite and Tailwind CSS, hosting it on Netlify to showcase the concept and core interactions.
          </p>
        </Card>
      </Row>

      {/* Iteration block 1 */}
      <ArrowRow size={100} gap={180} />   
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
      <ArrowRow size={100} gap={180} />
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
      <ArrowRow size={100} gap={180} />
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

      <ArrowRow size={100} gap={180} />
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
