import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export type CSSSize = number | string;

export type RowProps = {
  cols?: 1 | 2 | 3 | 4;
  colsClass?: string;
  className?: string;
  children: React.ReactNode;
};

export type CardProps = {
  title?: string;
  className?: string;
  children?: React.ReactNode;
  height?: CSSSize;
  width?: CSSSize;
  style?: React.CSSProperties;
  /** per-page accent, e.g. "!border-[#5000FF]" */
  borderColorClass?: string;
};

const gridColsByCount: Record<Required<RowProps>["cols"], string> = {
  1: "grid-cols-1",
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
};

export const fadeIn: any = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

export const toCss = (v?: CSSSize) =>
  typeof v === "number" ? `${v}px` : v;

export function Row({ cols = 2, colsClass, className = "", children }: RowProps) {
  const grid = colsClass ?? gridColsByCount[cols];
  return (
    <section className={`grid ${grid} gap-4 items-stretch ${className}`}>
      {children}
    </section>
  );
}

export function Card({
  title,
  className = "",
  children,
  height,
  width,
  style,
  borderColorClass = "!border-[#5000FF]", // default, override per-page
}: CardProps) {
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
        "h-full rounded-2xl border-3 bg-black/60",
        borderColorClass,
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

export function ImageCard({
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
        <div className="relative flex-1 min-h-[160px] min-w-0">
          <img
            src={src}
            alt={alt}
            className={["absolute inset-0 h-full w-full object-cover", imgClassName].join(" ")}
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

export function ArrowRow({
  src = "/images/Arrow.png",
  size = 64,
  gap = 16,
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
        <img src={src} alt="" style={imgStyle} className="inline-block select-none" />
        <img src={src} alt="" style={imgStyle} className="hidden md:inline-block select-none" />
        <img src={src} alt="" style={imgStyle} className="hidden lg:inline-block select-none" />
      </div>
    </div>
  );
}

export function VideoCard({
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
  loop = true,
  preload = "auto",
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

// Robust autoplay + hard-mute enforcement
useEffect(() => {
  const v = videoRef.current;
  if (!v) return;

  // Ensure critical attributes exist as actual DOM attrs for iOS
  v.setAttribute("playsinline", "");
  v.setAttribute("muted", "");

  // Hard mute when audio="off"
  const forceMute = () => {
    const mustMute = audio === "off";
    v.muted = mustMute || muted;          // keep muted if either requires it
    if (mustMute && v.volume !== 0) v.volume = 0;
  };

  forceMute();

  // Try to start playback after the first usable frame arrives
  const tryPlay = async () => {
    if (!autoPlay) return;
    try {
      // Temporarily hide controls to reduce friction on mobile
      const originalControls = v.controls;
      if (originalControls) v.controls = false;
      await v.play();
      // Restore controls if you had them enabled
      v.controls = originalControls;
    } catch {
      // If autoplay is still blocked, we’ll retry on visibility or first tap
    }
  };

  // If enough data is already there, start; else wait until it's ready
  if (v.readyState >= 2) {
    tryPlay();
  } else {
    const onLoaded = () => { forceMute(); tryPlay(); };
    v.addEventListener("loadeddata", onLoaded, { once: true });
    // cleanup for this listener happens below
  }

  // Retry when the tab becomes visible (helps Safari on reload)
  const onVis = () => { if (!document.hidden) tryPlay(); };

  // Last-resort: first user interaction anywhere (does nothing if already playing)
  const onPointer = () => { tryPlay(); window.removeEventListener("pointerdown", onPointer); };

  document.addEventListener("visibilitychange", onVis);
  window.addEventListener("pointerdown", onPointer, { once: true });

  return () => {
    v.removeEventListener("loadeddata", tryPlay as any); // safe even if not attached
    document.removeEventListener("visibilitychange", onVis);
    window.removeEventListener("pointerdown", onPointer);
  };
}, [autoPlay, audio, muted]);


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
