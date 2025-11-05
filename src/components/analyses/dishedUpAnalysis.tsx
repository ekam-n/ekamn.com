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
              <li>Our project is featured in SFU SIAT's Spring 2025 {" "}<a
                  href="https://www.sfu.ca/siat/showcase/spring-2025-project-showcase/iat-334-dishedup.html"
                  className="underline underline-offset-2"
                  target="_blank"
                  rel="noreferrer"
                >
                  Showcase.
                </a>{" "}
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
        Design & Development Process
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
          <Card title="Initial Interface Design">
            <ul className="list-disc pl-5 space-y-4">
                  <li>I helped define the core information architecture and user flows (sign up, home, quests, profile, leaderboard, lessons) around our three main systems: interactive cooking quests, personalized learning paths, and social/competitive features.</li>
                  <li>We designed an onboarding flow that collects goals, skill level, allergies, and diet preferences to drive personalized lesson plans and progress tracking.</li>
                  <li>The initial lesson interface used step-by-step, image-supported instructions with voice control (“Next”, “Go back”, “Hey Dish…”) to support hands-free cooking and reduce cognitive load for novice cooks.</li>
                  <li>We introduced gamification patterns—levels, stars, points, quests, and leaderboards—to turn recipes into missions and provide clear progression and positive reinforcement.</li>
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
          <Card title="User Testing & Insights">
            <ul className="list-disc pl-5 space-y-4">
                  <li>Through think-aloud usability testing, we learned that users didn’t always understand when and where voice commands were available, so we needed clearer affordances and in-context guidance.</li>
                  <li>Participants struggled to start the tutorial and read some icons (especially leaderboard and quests), revealing gaps in signifiers, labelling, and iconography.</li>
                  <li>Users found blocks of recipe text overwhelming and wanted more structured steps and the ability to return home mid-lesson, pushing us to streamline content hierarchy and navigation controls.</li>
                  <li>From this, our next-step recommendations focused on UX refinements: adding pop-up labels for available voice commands, making tutorial instructions more explicit, and improving “Hey Dish” responsiveness and navigation options.</li>
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
          <Card title="Final Interface & Prototype">
            <ul className="list-disc pl-5 space-y-4">
                  <li>I contributed to a high-fidelity prototype where lessons are structured as levels with growing difficulty, combining voice-first interaction, visual step cards, and fallback touch controls for robust accessibility.</li>
                  <li>The onboarding, profile, quests, and leaderboard views were refined to align with our personas’ goals, supporting personalized learning paths and social/competitive engagement in a coherent visual language.</li>
                  <li>We clarified global navigation: users can move between home, lessons, quests, profile, and leaderboard via both touch and voice, reinforcing a consistent mental model for app flow.</li>
                  <li>Overall, the final prototype embodies a voice-enabled, gamified cooking experience that blends conversational guidance, progress tracking, and social features to keep novice cooks engaged over time.</li>
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

      {/* Final iteration */}
      <ArrowRow size={100} gap={180} />
      <div className="space-y-4 md:space-y-6">
        <Row cols={1}>
          <Card title="Custom Showcase Website">
            <ul className="list-disc pl-5 space-y-4">
                  <li>I implemented a responsive multi-page showcase site using Vite and Tailwind CSS to present the brand, core flows, and key screens of DishedUp in a portfolio-ready format.</li>
                  <li>The site highlights UX artifacts (personas, user flows, wireframes, and final UI) and explains the interaction model and gamification strategy for recruiters and stakeholders.</li>
                  <li>I deployed the site on Netlify under my custom domain, demonstrating practical frontend development, deployment, and product storytelling skills.</li>
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
                  <li>I learned how to run a full UX cycle end-to-end—research, personas, flows, UI design, prototyping, and usability testing—and use feedback to refine a voice-first, gamified experience.</li>
                  <li>I strengthened both my interaction design and frontend skills by designing for hands-free, voice-controlled workflows and then implementing a responsive multi-page showcase with Vite and Tailwind on my own domain.</li>
                </ul>
          </Card>
        </Row>
      </div>
    </main>
  );
}
