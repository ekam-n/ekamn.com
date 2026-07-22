import { useRef, useState } from "react";
import MediaControls from "./MediaControls";
import { useFullscreen } from "./useFullscreen";

interface CardVideoProps {
  src: string;
  title?: string;
  aspectClass?: string; // full Tailwind aspect class; defaults to aspect-110/100
  controls?: boolean;   // overlaid play/pause + seek scrubber
  volume?: boolean;     // overlaid mute toggle + volume slider
  fullscreen?: boolean; // overlaid fullscreen toggle
  fill?: boolean;       // fill the parent's height (ignores aspectClass) — for fixed-height card slots
}

// A self-contained card video. Mirrors the Plan Your Space (work experience) video:
// autoplaying, looping, muted-by-default, with optional controls overlaid along the
// bottom over a dark gradient. Each instance owns its ref/state, so it's safe to
// render more than once (ProjectCard renders media in both a small- and large-screen slot).
export default function CardVideo({
  src,
  title,
  aspectClass = "aspect-110/100",
  controls = false,
  volume = false,
  fullscreen = false,
  fill = false,
}: CardVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [muted, setMuted] = useState(true);
  const [vol, setVol] = useState(0.5);
  const [playing, setPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // iOS only supports webkitEnterFullscreen() on <video> elements (opens native player).
  const { isFullscreen, toggleFullscreen } = useFullscreen(containerRef, () =>
    (videoRef.current as any)?.webkitEnterFullscreen?.()
  );

  function togglePlay() {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }

  function handleSeek(val: number) {
    setCurrentTime(val);
    if (videoRef.current) videoRef.current.currentTime = val;
  }

  function handleVolumeChange(val: number) {
    setVol(val);
    if (videoRef.current) {
      videoRef.current.volume = val;
      videoRef.current.muted = val === 0;
    }
    setMuted(val === 0);
  }

  function toggleMute() {
    if (!videoRef.current) return;
    const next = !muted;
    setMuted(next);
    videoRef.current.muted = next;
    if (!next && vol === 0) {
      setVol(0.5);
      videoRef.current.volume = 0.5;
    }
  }

  return (
    <div
      ref={containerRef}
      className={
        isFullscreen
          ? "relative w-full h-full flex items-center justify-center bg-black overflow-hidden"
          : fill
          ? "relative w-full h-full overflow-hidden"
          : "relative w-full overflow-hidden rounded-2xl"
      }
    >
      <video
        ref={videoRef}
        src={src}
        className={
          isFullscreen
            ? `block max-h-screen max-w-full w-auto object-contain ${controls ? "cursor-pointer" : ""}`
            : fill
            ? `h-full w-full block object-cover ${controls ? "cursor-pointer" : ""}`
            : `w-full block ${aspectClass} object-cover ${controls ? "cursor-pointer" : ""}`
        }
        autoPlay
        loop
        muted
        playsInline
        aria-label={title}
        onClick={controls ? togglePlay : undefined}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
      />

      <MediaControls
        controls={controls}
        volume={volume}
        fullscreen={fullscreen}
        playing={playing}
        currentTime={currentTime}
        duration={duration}
        muted={muted}
        vol={vol}
        onTogglePlay={togglePlay}
        onSeek={handleSeek}
        onToggleMute={toggleMute}
        onVolumeChange={handleVolumeChange}
        onToggleFullscreen={toggleFullscreen}
      />
    </div>
  );
}
