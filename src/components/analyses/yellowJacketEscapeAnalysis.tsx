import React, { useEffect, useRef } from "react";
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

function VideoCard({
  src,
  caption,
  poster,
  className = "",
  videoClassName = "",
  height,
  width,
  style,
  controls = true,
  autoPlay = true,
  muted = true,                    // still available when audio="allow"
  loop = false,
  preload = "metadata",
  playsInline = true,
  /** NEW: "off" = absolutely no audio; "allow" = normal behavior */
  audio = "off",
}: {
  src: string;
  caption?: string;
  poster?: string;
  className?: string;
  videoClassName?: string;
  height?: number | string;
  width?: number | string;
  style?: React.CSSProperties;
  controls?: boolean;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  preload?: "none" | "metadata" | "auto";
  playsInline?: boolean;
  audio?: "off" | "allow";
}) {
  const sizedStyle: React.CSSProperties = {
    ...(style || {}),
    ...(height !== undefined ? { height: typeof height === "number" ? `${height}px` : height } : {}),
    ...(width  !== undefined ? { width:  typeof width  === "number" ? `${width}px`  : width  } : {}),
  };

  const videoRef = useRef<HTMLVideoElement>(null);

  // Enforce hard mute when audio="off" (prevents user from unmuting)
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const forceMute = () => {
      if (audio === "off") {
        v.muted = true;
        if (v.volume !== 0) v.volume = 0;
      }
    };

    forceMute();
    v.addEventListener("loadedmetadata", forceMute);
    v.addEventListener("play", forceMute);
    v.addEventListener("volumechange", forceMute);

    return () => {
      v.removeEventListener("loadedmetadata", forceMute);
      v.removeEventListener("play", forceMute);
      v.removeEventListener("volumechange", forceMute);
    };
  }, [audio]);

  const noAudioControls =
    audio === "off"
      ? // hide mute/volume in WebKit; other browsers will still be hard-muted by the effect above
        "[&::-webkit-media-controls-mute-button]:hidden [&::-webkit-media-controls-volume-slider]:hidden"
      : "";

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
        {/* Video fills remaining height above caption */}
        <div className="relative flex-1 min-h-[160px] min-w-0">
          <video
            ref={videoRef}
            src={src}
            poster={poster}
            className={["absolute inset-0 h-full w-full object-cover", noAudioControls, videoClassName].join(" ")}
            controls={controls}
            autoPlay={autoPlay}
            // If audio is off, we force mute regardless of the `muted` prop
            muted={audio === "off" ? true : muted}
            loop={loop}
            preload={preload}
            playsInline={playsInline}
            // optional: limit some controls (browsers vary)
            controlsList="noplaybackrate nodownload noremoteplayback"
          />
        </div>

        {caption && (
          <figcaption className="px-4 md:px-6 py-3 text-sm text-white/80">
            {caption}
          </figcaption>
        )}
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
            src="/images/projectImages/yellowJacketEscape/Zone 3 Final.png"
            height="25rem"
            width="30rem"
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
            src="/images/projectImages/yellowJacketEscape/Zone 2 v1 Gameplay.mp4"
                caption="Zone 2 Lack of Route Options"
                className="h-full"
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
            src="/images/projectImages/yellowJacketEscape/Zone 2 v1 Gameplay.mp4"
                caption="Zone 2 Lack of Route Options"
                className="h-full"
                height="100%" 
          />
          <VideoCard
            src="/images/projectImages/yellowJacketEscape/Zone 2 v1 Gameplay.mp4"
                caption="Zone 2 Lack of Route Options"
                className="h-full"
                height="100%" 
          />
          <VideoCard
            src="/images/projectImages/yellowJacketEscape/Zone 2 v1 Gameplay.mp4"
                caption="Zone 2 Lack of Route Options"
                className="h-full"
                height="100%" 
          />
          </Row>
      </div>

      <ArrowRow src="/images/projectImages/yellowJacketEscape/Arrow.png" size={100} gap={180} />
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
