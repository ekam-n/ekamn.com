import React from "react";
import { motion } from "framer-motion";

import {
  Row,
  Card as BaseCard,
  ImageCard,
  ArrowRow,
  fadeIn,
} from "../analyses/analysisCommon";
import CardVideo from "../shared/CardVideo";

// local wrapper that sets the border color for this page
const Card: React.FC<
  Omit<React.ComponentProps<typeof BaseCard>, "borderColorClass">
> = (props) => (
  <BaseCard borderColorClass="!border-[#00cf29]" {...props} />
);

/* ---------- Page ---------- */

export default function ExportToRealityAnalysis() {
  return (
    <main className="max-w-6xl mx-auto px-4 pt-20 pb-16 text-white">
      {/* H1 */}
      <motion.h1
        className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-8 md:mb-10"
        {...fadeIn}
      >
        Export to: Reality
      </motion.h1>

      {/* --- First rows: overview, context/team, objective --- */}
      <div className="space-y-4 md:space-y-6">
        <Row colsClass="grid-cols-1 md:[grid-template-columns:auto_1fr]">
          <motion.figure
            {...fadeIn}
            style={{ width: "40rem", height: "25rem", maxWidth: "100%" }}
            className="h-full rounded-2xl border border-white/10 bg-black/60 backdrop-blur-md shadow-lg overflow-hidden"
          >
            <div className="flex h-full flex-col min-h-0">
              {/* Video fills remaining height above caption (same as VideoCard) */}
              <div className="relative flex-1 min-h-40 min-w-0">
                <CardVideo
                  src="/images/projectImages/exportToReality/exportToRealityTrailer.mp4"
                  title="Export to: Reality gameplay trailer"
                  fill
                  controls
                  volume
                  fullscreen
                />
              </div>
              <figcaption className="px-4 md:px-6 py-3 text-sm text-white/80">
                Gameplay Trailer
              </figcaption>
            </div>
          </motion.figure>
          <Card>
            <p>
              Export to: Reality is a two-player cooperative puzzle-platformer
              built around asymmetrical co-op. One player controls the Mover — a
              self-aware game character escaping the digital world — using a
              controller. The other controls the Maker, an operator outside the
              screen who places, rotates, and deletes platforms through a
              mouse-driven mod menu. The Mover travels through three layers of
              the computer (Desktop, Kernel, Hardware) while the game's
              Anticheat hunts them down.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="https://play.unity.com/en/games/a762ec20-3d05-4253-bfa2-93af02952f2c/export-to-reality"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transition-colors px-4 py-2 rounded-lg text-sm md:text-base bg-[#00cf29] hover:bg-[#00e82e] text-black"
              >
                Play in Browser
              </a>
              <a
                href="https://orangegoose.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transition-colors px-4 py-2 rounded-lg text-sm md:text-base bg-white/20 hover:bg-white/30"
              >
                Team Journal
              </a>
            </div>
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
                    Class Project, <em>Game Design Workshop</em>
                  </li>
                  <li>2025</li>
                </ul>
                {/* Skills tags */}
                <div className="not-prose mt-3 flex flex-wrap gap-2 md:gap-3">
                  <span className="bg-white/20 px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm lg:text-base">
                    Game AI
                  </span>
                  <span className="bg-white/20 px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm lg:text-base">
                    Level Design
                  </span>
                  <span className="bg-white/20 px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm lg:text-base">
                    Unity
                  </span>
                  <span className="bg-white/20 px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm lg:text-base">
                    C#
                  </span>
                  {/* add more tags as needed */}
                </div>
              </Card>
              <Card title="Team">
                <ul className="list-disc pl-5 space-y-1">
                  <li>Ekam: Lead Designer, Lead Developer</li>
                  <li>Teammate: Role</li>
                  <li>Teammate: Role</li>
                  {/* update with real team members + roles */}
                </ul>
              </Card>
            </div>
          </div>
          {/* Column A: one tall card (regular or image) */}
          <div className="h-full">
            <ImageCard
              src="/images/projectImages/exportToReality/title-screen.png"
              caption="Title Screen"
              alt="Title Screen of Export to: Reality"
              className="h-full"
              height="100%"
            />
          </div>
        </Row>

        <Row cols={1}>
          <Card title="Objective">
            <p>
              We wanted to create a co-op game where the two roles are
              fundamentally different in feel and input method — not just two
              copies of the same character — so that constant communication and
              coordination is the core mechanic, not an optional extra. Each
              role has a distinct fantasy: the Mover plays a precise, pressured
              platformer; the Maker plays a real-time spatial puzzle with a
              god's-eye view but no direct control. An AI pursuer sustains
              tension, with pressure that scales with player behavior —
              rewarding efficient movement and punishing hesitation.
            </p>
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
          src="/images/projectImages/exportToReality/mod-menu.png"
          caption="The Maker's Mod-Menu Interface"
          alt="The Maker's mod-menu platform placement interface in Export to: Reality"
          className="h-full"
          height="18rem"
        />
        <Card title="Methodology">
          <p>
            We enforced asymmetry at the input level: controller for the Mover,
            mouse and keyboard for the Maker, on a single shared screen.
            Responsibilities were divided so the Mover owns movement and
            survival while the Maker owns puzzle-solving and environmental
            manipulation — success requires both, and neither can carry the
            other. The three levels escalate: platform placement and the basic
            chase loop in Level 1, pressure-based environmental interactions in
            Level 2, and pulley-based puzzles combined with chase and firewall
            systems in Level 3.
          </p>
        </Card>
      </Row>

      {/* Iteration block 1 */}
      <ArrowRow src="/images/projectImages/yellowJacketEscape/Arrow.png" size={100} gap={180} />
      <div className="space-y-4 md:space-y-6">
        <Row cols={3}>
          <Card title="The Anticheat: FSM + Behavior Tree AI">
            <ul className="list-disc pl-5 space-y-4">
              <li>
                I built the game's primary antagonist, the Anticheat, around a
                four-state finite state machine — Chase, Stun, Rewind, and
                Crash — with behavior trees handling per-frame decision logic
                inside the Chase and Stun states.
              </li>
              <li>
                <span className="font-semibold">Chase:</span> the Anticheat
                replays the Mover's own recorded movement history at a fixed
                delay — linger anywhere and it closes the gap. A rubber-band
                mechanism accelerates it through 2–4 recorded frames per tick
                when the path grows too long.
              </li>
              <li>
                <span className="font-semibold">Stun:</span> dropping a
                Maker-placed platform on the Anticheat stuns it — turning the
                Maker's building tool into a defensive weapon.
              </li>
              <li>
                <span className="font-semibold">Rewind &amp; Crash:</span>{" "}
                after a stun, the Anticheat retraces its trajectory back to its
                pre-stun position, and guiding a stunned Anticheat into a death
                laser destroys it with a BSOD effect — resolving each chase
                with a coordinated, earned payoff.
              </li>
            </ul>
          </Card>
          <ImageCard
            src="/images/projectImages/exportToReality/anticheat-fsm.png"
            caption="Anticheat FSM Diagram"
            alt="Finite state machine diagram for the Anticheat AI"
            className="h-full"
            height="100%"
          />
          <ImageCard
            src="/images/projectImages/exportToReality/anticheat-chase.png"
            caption="The Anticheat Mid-Chase"
            alt="The Anticheat pursuing the Mover through a level"
            className="h-full"
            height="100%"
          />
        </Row>
      </div>

      {/* Iteration block 2 */}
      <ArrowRow src="/images/projectImages/yellowJacketEscape/Arrow.png" size={100} gap={180} />
      <div className="space-y-4 md:space-y-6">
        <Row cols={3}>
          <Card title="Key Changes From Playtesting">
            <ul className="list-disc pl-5 space-y-4">
              <li>
                Early playtests revealed a workload imbalance: the Maker
                carried disproportionate stress during chase sequences while
                the Mover had little agency beyond running and jumping. We
                iterated on the stun mechanic and added pressure plates and
                toggle buttons in Level 2 so the Mover takes an active,
                meaningful role in puzzles.
              </li>
              <li>
                In the alpha, the Maker selected and deleted platforms through
                small on-screen buttons — which fell apart under time pressure.
                Replacing them with keyboard hotkeys (Q/W/E) and larger
                hitboxes dramatically improved usability.
              </li>
            </ul>
          </Card>
          <ImageCard
            src="/images/projectImages/exportToReality/alpha-ui.png"
            caption="Alpha Mod-Menu UI"
            alt="Alpha version of the Maker's mod-menu interface"
            className="h-full"
            height="100%"
          />
          <ImageCard
            src="/images/projectImages/exportToReality/pressure-plates.png"
            caption="Level 2 Pressure Plates"
            alt="Pressure plate puzzles added in Level 2"
            className="h-full"
            height="100%"
          />
        </Row>
      </div>

      {/* Final iteration */}
      <ArrowRow src="/images/projectImages/yellowJacketEscape/Arrow.png" size={100} gap={180} />
      <div className="space-y-4 md:space-y-6">
        <Row cols={2}>
          <Card title="Final Design">
            <ul className="list-disc pl-5 space-y-4">
              <li>
                We learned that physical leading beats dialogue: slit
                receptacles that only fit specific platform types and gaps
                calibrated to particular platform lengths guided players to
                intended solutions without explicit instruction.
              </li>
              <li>
                Shipped a public WebGL build on Unity Play with three complete
                levels, each combining traversal, environmental manipulation,
                and timed chase sequences — extended with an in-game dialogue
                system, timed Anticheat taunts, a controls popup, visible
                checkpoint effects, and environmental puzzle systems including
                pressure-activated gates and pulley structures.
              </li>
              <li>
                Post-iteration playtests confirmed the rebalanced roles: both
                players stayed engaged through chase sequences, and
                coordination — not either player's solo skill — decided
                success.
              </li>
            </ul>
          </Card>
          <ImageCard
            src="/images/projectImages/exportToReality/level-3-final.png"
            caption="Level 3 Final Implementation"
            alt="Final implementation of Level 3 with pulley puzzles and firewall"
            className="h-full"
            height="40rem"
          />
        </Row>
      </div>

      <ArrowRow src="/images/projectImages/yellowJacketEscape/Arrow.png" size={100} gap={180} />
      <div className="space-y-4 md:space-y-6">
        <Row cols={1}>
          <Card title="Takeaways">
            <ul className="list-disc pl-5 space-y-4">
              <li>
                Asymmetric co-op lives or dies on workload balance. Two roles
                that are different in kind must still be equal in engagement,
                and the only way to find that balance is watching real pairs
                play.
              </li>
              <li>
                Interface clarity is a gameplay mechanic in cooperative games —
                usability problems that are tolerable in calm moments become
                game-breaking under chase pressure, so the UI must be designed
                for the worst moment, not the average one.
              </li>
              <li>
                Environments teach better than text. Shaping geometry so
                intended solutions are the natural ones outperformed every
                dialogue hint we wrote.
              </li>
            </ul>
          </Card>
        </Row>
      </div>
    </main>
  );
}
