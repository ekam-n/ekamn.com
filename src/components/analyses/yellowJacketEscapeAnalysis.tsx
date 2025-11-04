import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

import {
  Row,
  Card as BaseCard,
  ImageCard,
  ArrowRow,
  fadeIn,
  VideoCard,
} from "../analyses/analysisCommon";

// local wrapper that sets the border color for this page
const Card: React.FC<
  Omit<React.ComponentProps<typeof BaseCard>, "borderColorClass">
> = (props) => (
  <BaseCard borderColorClass="!border-[#FFD000]" {...props} />
);

/* ---------- Page ---------- */

export default function YellowJacketEscapeAnalysis() {
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
            src="/images/projectImages/yellowJacketEscape/Zone 1 final.png"
            height="25rem"
            width="40rem"
            caption="Zone 2"
            alt="Zone 2 of the first level of YellowJacket Escape"
          />
          <Card>
            <p>
              YellowJacket Escape is a top-down 2D dungeon crawler where the player, controlling a small spider, must navigate the multi-path environment while evading YellowJacket enemies. The game emphasizes strategic planning, timing, and precise movement.
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
                  <li>January 2025 - February 2025</li>
                </ul>
                {/* Skills tags */}
                <div className="not-prose mt-3 flex flex-wrap gap-2 md:gap-3">
                  <span className="bg-white/20 px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm lg:text-base">
                    Level Design
                  </span>
                  <span className="bg-white/20 px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm lg:text-base">
                    AI Design
                  </span>
                  <span className="bg-white/20 px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm lg:text-base">
                    Unity
                  </span>
                  {/* add more tags as needed */}
                </div>
              </Card>
              <Card title="Team">
                <ul className="list-disc pl-5 space-y-1">
                  <li>Ekam: Designer, Lead Developer </li>
                  <li>Kaleb: Visual Artist, Developer</li>
                  <li>Baseer: Visual Artist</li>
                  <li>Travis: Developer</li>
                </ul>
              </Card>
            </div>
          </div>
          {/* Column A: one tall card (regular or image) */}
          <div className="h-full">
            <ImageCard
              src="/images/projectImages/yellowJacketEscape/title-screen.png"
              caption="Title Screen"
              alt="Title Screen of YellowJacket Escape"
              className="h-full"
              height="100%"       // optional; Card/ImageCard already use h-full
            />
          </div>
        </Row>

        <Row cols={1}>
          <Card title="Objective">
            <p>We wanted to create an engaging game with multiple ways to win that centers around Challenge Fun and appeals to Survivor and Mastermind players by combining tense escapes, thoughtful planning, and skill-based enemy-encounters.</p>
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
          src="/images/projectImages/yellowJacketEscape/Unity Wasp Animation Frames.png"
              caption="YellowJacket Animation Frames"
              alt="Animation frames for the YellowJacket enemy in YellowJacket Escape"
              className="h-full"
              height="18rem" 
        />
        <Card title="Methodology">
          <p>
            To foreground skill-expressive play, I designed the game around precision movement under pressure. Enemies are larger and faster than the player to feel imposing and to punish sloppy routing. The map provides multiple viable paths to the escape point, each with different risk and timing profiles. With movement as the only tool, success comes from reading enemy patterns, planning routes, and adapting mid-run as threats close in.
          </p>
        </Card>
      </Row>

      {/* Iteration block 1 */}
      <ArrowRow src="/images/projectImages/yellowJacketEscape/Arrow.png" size={100} gap={180} />
      <div className="space-y-4 md:space-y-6">
        <Row cols={3}>
          <Card title="Initial Level Design">
            <ul className="list-disc pl-5 space-y-4">
                  <li>I designed zones to have more than one path to the escape point to support route planning and player agency.</li>
                  <li>I scripted enemy movement patterns and combined them with choke points and sightlines to create readable, challenging patrol puzzles.</li>
                  <li>I added an optional NPC rescue collectible that the player can carry to the exit to reward Achiever play and encourage exploration.</li>
                  <li>I built smooth zone transitions with a short rest area between sections to ease pacing and provide easy fun.</li>
                </ul>
          </Card>
          <ImageCard
            src="/images/projectImages/yellowJacketEscape/Zone 2 Concept 1.jpg"
                caption="Zone 2 Concept 1"
                alt="Initial concept art for Zone 2 of YellowJacket Escape"
                className="h-full"
                height="100%" 
          />
          <ImageCard
            src="/images/projectImages/yellowJacketEscape/Zone 2 Concept 2.jpg"
                caption="Zone 2 Concept 2"
                alt="Secondary concept art for Zone 2 of YellowJacket Escape"
                className="h-full"
                height="100%" 
          />
        </Row>
      </div>

      {/* Iteration block 2 */}
      <ArrowRow src="/images/projectImages/yellowJacketEscape/Arrow.png" size={100} gap={180} />
      <div className="space-y-4 md:space-y-6">
        <Row cols={3}>
          <Card title="Key Changes To Levels">
            <ul className="list-disc pl-5 space-y-4">
                  <li>I added more hiding spots and brief safe alcoves so players could pause, plan, and read patrols, better supporting Mastermind play.</li>
                  <li>I increased route variety by adding small obstacles and gaps to create additional paths, improving player agency and skill-expressive movement toward the escape.</li>
                </ul>
          </Card>
          <ImageCard
            src="/images/projectImages/yellowJacketEscape/Zone 2 v1.png"
                caption="Zone 2 Intermediate Implementation"
                alt="Zone 2 Intermediate Implementation"
                className="h-full"
                height="40rem" 
          />
          <VideoCard
            src="/images/projectImages/yellowJacketEscape/zone 2 v1 gameplay.mp4"
                caption="Zone 2 Lack of Route Options (2x Speed)"
                className="h-full"
                autoPlay={true}
                loop={true}
                height="100%" 
          />
        </Row>
      </div>

      {/* Final iteration */}
      <ArrowRow src="/images/projectImages/yellowJacketEscape/Arrow.png" size={100} gap={180} />
      <div className="space-y-4 md:space-y-6">
        <Row cols={2}>
          <Card title="Final Level Design">
            <ul className="list-disc pl-5 space-y-4">
                  <li>I finalized zone maps with multiple viable routes to the escape and added hiding alcoves so players can effectively pause and plan.</li>
                  <li>Paths were tuned to reward precise timing against patrols, with small enemy speed differences adding light randomness so patterns shift while staying readable.</li>
                </ul>
          </Card>
          <ImageCard
            src="/images/projectImages/yellowJacketEscape/Zone 2 Final.png"
                caption="Zone 2 Final Implementation"
                alt="Zone 2 Final Implementation"
                className="h-full"
                height="40rem" 
          />
        </Row>
        <Row cols={3}>
          <VideoCard
            src="/images/projectImages/yellowJacketEscape/zone 2 final gameplay 1.mp4"
                caption="Zone 2 Route 1 (2x Speed)"
                className="h-full"
                autoPlay={true}
                loop={true}
                height="30rem" 
          />
          <VideoCard
            src="/images/projectImages/yellowJacketEscape/zone 2 final gameplay 2.mp4"
                caption="Zone 2 Route 2 (2x Speed)"
                className="h-full"
                autoPlay={true}
                loop={true}
                height="100%" 
          />
          <VideoCard
            src="/images/projectImages/yellowJacketEscape/zone 2 final gameplay 3.mp4"
                caption="Zone 2 Route 3 (2x Speed)"
                className="h-full"
                autoPlay={true}
                loop={true}
                height="100%" 
          />
          </Row>
      </div>

      <ArrowRow src="/images/projectImages/yellowJacketEscape/Arrow.png" size={100} gap={180} />
      <div className="space-y-4 md:space-y-6">
        <Row cols={1}>
          <Card title="Takeaways">
            <ul className="list-disc pl-5 space-y-4">
                  <li>I learned that multi-path level design is more than adding extra routes; each path needs a clear purpose and balanced risk-reward, with sightlines, cover, and choke points arranged so players can read patrols, pause to plan, and choose routes that fit their skill and goals.</li>
                  <li>I would have liked to have leaned further into the optional “spider-friends” rescue, since playtests showed it adds easy fun and makes a challenge-heavy, skill-expressive game feel more rounded and enjoyable, and I would consider similar easy-fun sidequests in my next challenge-heavy design.</li>
                </ul>
          </Card>
        </Row>
      </div>
    </main>
  );
}
