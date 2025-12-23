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
  <BaseCard borderColorClass="!border-[#646665]" {...props} />
);

// local wrapper that sets the src img for the arrow row
const ArrowRow: React.FC<
  Omit<React.ComponentProps<typeof BaseArrowRow>, "src">
> = (props) => (
  <BaseArrowRow src="/images/projectImages/setSail/Arrow.png" {...props} />
);

/* ---------- Page ---------- */

export default function SetSailAnalysis() {
  return (
    <main className="max-w-6xl mx-auto px-4 pt-20 pb-16 text-white">
      {/* H1 */}
      <motion.h1
        className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-8 md:mb-10"
        {...fadeIn}
      >
        SetSail
      </motion.h1>

      {/* --- First 4 rows --- */}
      <div className="space-y-4 md:space-y-6">
        <Row colsClass="grid-cols-1 md:[grid-template-columns:auto_1fr]">
          <ImageCard
            src="/images/projectImages/setSail/empty OCD.png"
            height="25rem"
            width="40rem"
            caption="Game Setup"
            alt="Game setup for Solar Conquest"
          />
          <Card>
            <p>
              SetSail is a terminal-based C++ reservation system for Coastal Ferry Corp that lets a single ferry clerk create sailings and vessels, manage vehicle reservations with capacity limits, and view sailing reports, with all data persisted via custom binary file I/O.
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
                    Class Project, <em>Introduction to Software Engineering</em>
                  </li>
                  <li>May 2025 - August 2025</li>
                </ul>
                {/* Skills tags */}
                <div className="not-prose mt-3 flex flex-wrap gap-2 md:gap-3">
                  <span className="bg-white/20 px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm lg:text-base">
                    OOP
                  </span>
                  <span className="bg-white/20 px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm lg:text-base">
                    SDLC
                  </span>
                  <span className="bg-white/20 px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm lg:text-base">
                    C++
                  </span>
                  <span className="bg-white/20 px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm lg:text-base">
                    Git
                  </span>
                  {/* add more tags as needed */}
                </div>
              </Card>
              <Card title="Team">
                <ul className="list-disc pl-5 space-y-1">
                  <li>Ekam: Systems Designer, C++ Backend Developer</li>
                  <li>Ravdeep: C++ Backend Developer</li>
                  <li>Yasna: Data Designer</li>
                  <li>Enya: Testing & QA</li>
                  <li>Marco: Project Coordinator</li>
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
              <li>
                We used a GitHub{" "}
                <a
                  href="https://github.com/ekam-n/SetSail"
                  className="underline underline-offset-2"
                  target="_blank"
                  rel="noreferrer"
                >
                  repository
                </a>{" "}
                to manage our code and track changes.
              </li>
            </ul>
          </Card>
        </Row>

        <Row cols={1}>
          <Card title="Objective">
            <p>We wanted to build a simple, reliable desktop reservation system that lets a single ferry clerk create sailings, manage vehicle bookings with capacity limits, and quickly look up trip information without needing an internet connection.</p>
          </Card>
        </Row>
      </div>

      {/* H2 */}
      <motion.h2
        className="mt-10 md:mt-14 mb-4 md:mb-6 text-2xl md:text-4xl font-medium tracking-tight"
        {...fadeIn}
      >
        Development Process
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
            We approached SetSail as a full software development lifecycle project, modeling sailings, vessels, and reservations in C++ with object-oriented design and wrapping them in a CLI application for clerks. I implemented binary file I/O for data persistence and state management, plus input validation and error handling to keep the system robust. As a team, we used Git for version control to coordinate work and integrate features cleanly.

          </p>
        </Card>
      </Row>

      {/* Iteration block 1 */}
      <ArrowRow size={100} gap={180} />   
      <div className="space-y-4 md:space-y-6">
        <Row cols={1}>
          <Card title="Requirements Specifications">
            <ul className="list-disc pl-5 space-y-4">
                  <li>I helped turn the client's needs into a formal requirements spec, defining the system overview, business objectives, macOS terminal environment, and constraints for a single-clerk ferry reservation system.</li>
                  <li>We wrote and refined use case scenarios and UI/operations sections that walk through how clerks create vessels, schedule sailings, manage reservations, and run reports in the CLI.</li>
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
          <Card title="User Manual">
            <ul className="list-disc pl-5 space-y-4">
                  <li>I contributed to the retained data model, state diagrams, and performance/acceptance criteria so the data structures and workflows matched real capacity limits and success metrics like reduced wait times.</li>
                  <li>I co-authored the user manual, translating the spec into step-by-step installation, startup, and menu navigation instructions plus concrete scenarios that non-technical ferry clerks can follow.</li>
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

      {/* Iteration block 3 */}
      <ArrowRow size={100} gap={180} />
      <div className="space-y-4 md:space-y-6">
        <Row cols={1}>
          <Card title="Architectural Design">
            <ul className="list-disc pl-5 space-y-4">
                  <li>I designed the core OOP model for SetSail, defining Vessel, Sailing, Vehicle, and Reservation classes plus their responsibilities and relationships so each principal object owned its own data and scenario logic.</li>
                  <li>I chose a roll-up design for vehicles (one unified Vehicle class instead of a SpecialVehicle subclass), trading a small storage cost for simpler class hierarchies, cleaner validation, and uniform binary file I/O.</li>
                  <li>I specified the public interfaces and exported functions for each module (e.g., Vehicle, Vessel, Sailing, Reservation and their *_io counterparts), separating domain logic from raw data access to support encapsulation and black-box testing.</li>
                  <li>I helped define the startup/shutdown sequence and raw binary file access strategy so each class initializes, opens, and closes its own data store, while main and the UI stay focused on orchestration and CLI interaction.</li>
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

      {/* Iteration block 4 */}
      <ArrowRow size={100} gap={180} />
      <div className="space-y-4 md:space-y-6">
        <Row cols={1}>
          <Card title="Detailed Design">
            <ul className="list-disc pl-5 space-y-4">
                  <li>We translated the architectural design into concrete modules and source files, breaking SetSail into separate C++ units for vessels, sailings, reservations, vehicles, and their corresponding *_io modules, with the UI module handling all user interaction.</li>
                  <li>We documented the detailed file layout (headers, implementations, and IO layers) so that each class’s responsibilities, preconditions, and function contracts are clear in the .h files and supported by implementation comments in the .cpp files.</li>
                  <li>I designed and implemented unit tests for the Vehicle module to verify initialization, vehicle creation, and license validation logic using assert-based checks.</li>
                  <li>I built integration-style tests for the VehicleIO module to confirm that special vehicles can be written to and read from binary files correctly, including negative checks for non-existent records, and verified all tests passed via console output.</li>
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
          <Card title="Integration Report">
            <ul className="list-disc pl-5 space-y-4">
                  <li>We discussed how we approached integration: with a bottom-up / sandwich approach, wiring up VesselIO, SailingIO, and ReservationIO first, then business logic and the UI. </li>
                  <li>I debugged integration bugs in capacity checks and file I/O, strengthening preconditions, error handling, and file state management.</li>
                  <li>We ran end-to-end functional, stress, and performance tests using Google Test, system drivers, and manual UI walkthroughs</li>
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
                  <li>I learned how to take a project through a full software development lifecycle—from requirements and use cases, to OOP design, detailed modules, implementation, testing, and integration—rather than just “writing code.”</li>
                  <li>I deepened my C++ and OOP skills by designing classes, relationships, and interfaces that had to stay consistent across multiple documents, modules, and team members.</li>
                  <li>I gained practical experience with data persistence and state management, using binary file I/O in a real project where saving, reloading, and recovering from errors actually mattered to the user.</li>
                  <li>I saw how important incremental testing, integration planning, and clear documentation (req spec, detailed design, user manual) are for keeping a team aligned and shipping a working system on time.</li>
                </ul>
          </Card>
        </Row>
      </div>
    </main>
  );
}
