import { useEffect, useRef, useState } from "react";

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
  const [isFullscreen, setIsFullscreen] = useState(false);

  const showOverlay = controls || volume || fullscreen;

  // Fullscreen the container (not the <video>) so the browser's native control bar
  // — which always includes a volume slider that can't be selectively hidden — never
  // appears. Our own overlay scales up instead, so volume only shows when `volume` is set.
  function toggleFullscreen() {
    const el = containerRef.current;
    if (!el) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      el.requestFullscreen?.();
    }
  }

  useEffect(() => {
    const onChange = () => setIsFullscreen(document.fullscreenElement === containerRef.current);
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  function togglePlay() {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }

  function handleSeek(e: React.ChangeEvent<HTMLInputElement>) {
    const val = parseFloat(e.target.value);
    setCurrentTime(val);
    if (videoRef.current) videoRef.current.currentTime = val;
  }

  function handleVolumeChange(e: React.ChangeEvent<HTMLInputElement>) {
    const val = parseFloat(e.target.value);
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

      {showOverlay && (
        <div className="absolute inset-x-0 bottom-0 flex items-center gap-2 px-3 py-2 bg-linear-to-t from-black/70 to-transparent">
          {controls && (
            <>
              <button
                onClick={togglePlay}
                aria-label={playing ? "Pause" : "Play"}
                className="text-white/90 hover:text-white transition-colors shrink-0"
              >
                {playing ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5h3v14H8zM13 5h3v14h-3z"/>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                )}
              </button>

              {/* Seek scrubber */}
              <input
                type="range"
                min={0}
                max={duration || 0}
                step={0.1}
                value={currentTime}
                onChange={handleSeek}
                aria-label="Seek"
                className="flex-1 accent-white h-1 cursor-pointer"
              />
            </>
          )}

          {volume && (
            <>
              <button
                onClick={toggleMute}
                aria-label={muted ? "Unmute" : "Mute"}
                className="text-white/90 hover:text-white transition-colors shrink-0"
              >
                {muted || vol === 0 ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13 3.41 7.41 9H4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h3.41L13 20.59A1 1 0 0 0 14.71 20V4a1 1 0 0 0-1.71-.59ZM19.07 4.93l-1.41 1.41A8 8 0 0 1 20 12a8 8 0 0 1-2.34 5.66l1.41 1.41A10 10 0 0 0 22 12a10 10 0 0 0-2.93-7.07ZM3 3 1.59 4.41 4.17 7H4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h3.41L13 18.59V20.6a1 1 0 0 0 1.7.7l2.12-2.12L19.59 21 21 19.59Z"/>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13 3.41 7.41 9H4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h3.41L13 20.59A1 1 0 0 0 14.71 20V4a1 1 0 0 0-1.71-.59ZM16.5 12A4.5 4.5 0 0 0 14 7.97v8.05A4.5 4.5 0 0 0 16.5 12ZM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54Z"/>
                  </svg>
                )}
              </button>

              {/* Volume */}
              <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={muted ? 0 : vol}
                onChange={handleVolumeChange}
                aria-label="Volume"
                className="w-16 shrink-0 accent-white h-1 cursor-pointer"
              />
            </>
          )}

          {fullscreen && (
            <button
              onClick={toggleFullscreen}
              aria-label="Fullscreen"
              className={`text-white/90 hover:text-white transition-colors shrink-0 ${controls ? "" : "ml-auto"}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
              </svg>
            </button>
          )}
        </div>
      )}
    </div>
  );
}
