import { useEffect, useRef, useState } from "react";
import MediaControls from "./MediaControls";
import { useFullscreen } from "./useFullscreen";

interface CardYouTubeProps {
  videoId: string;      // the ?v= id, e.g. "rUDn-PJZg38"
  title?: string;
  aspectClass?: string; // full Tailwind aspect class; defaults to aspect-video
  controls?: boolean;   // overlaid play/pause + seek scrubber
  volume?: boolean;     // overlaid mute toggle + volume slider
  fullscreen?: boolean; // overlaid fullscreen toggle
  fill?: boolean;       // fill the parent's height (ignores aspectClass)
}

// The IFrame Player API is a single global script shared by every player on the
// page, so loading is memoized here rather than per-component.
let apiPromise: Promise<any> | null = null;

function loadYouTubeApi(): Promise<any> {
  const w = window as any;
  if (w.YT?.Player) return Promise.resolve(w.YT);
  if (apiPromise) return apiPromise;

  apiPromise = new Promise((resolve) => {
    // Chain rather than clobber — another script may already own this hook.
    const prev = w.onYouTubeIframeAPIReady;
    w.onYouTubeIframeAPIReady = () => {
      prev?.();
      resolve(w.YT);
    };
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.head.appendChild(tag);
  });
  return apiPromise;
}

// A YouTube embed dressed to match <CardVideo />: same rounded frame, same
// autoplay/loop/muted behaviour, same overlaid control bar. YouTube's own chrome is
// disabled (controls=0) and the iframe is pointer-events-none with a click-catcher
// above it, so its hover title bar, end screens, and context menu are unreachable.
export default function CardYouTube({
  videoId,
  title,
  aspectClass = "aspect-video",
  controls = false,
  volume = false,
  fullscreen = false,
  fill = false,
}: CardYouTubeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mountRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<any>(null);

  const [ready, setReady] = useState(false);
  const [muted, setMuted] = useState(true);
  const [vol, setVol] = useState(0.5);
  const [playing, setPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // No iOS fallback: there's no <video> element of ours to hand off to.
  const { isFullscreen, toggleFullscreen } = useFullscreen(containerRef);

  useEffect(() => {
    let cancelled = false;

    loadYouTubeApi().then((YT) => {
      if (cancelled || !mountRef.current) return;

      playerRef.current = new YT.Player(mountRef.current, {
        videoId,
        playerVars: {
          autoplay: 1,
          mute: 1,             // required for autoplay to be allowed
          controls: 0,         // hide YouTube's control bar; ours replaces it
          loop: 1,
          playlist: videoId,   // single-video loop only works with playlist set
          playsinline: 1,
          rel: 0,              // keep end-of-video suggestions in-channel
          iv_load_policy: 3,   // no annotations
          disablekb: 1,        // no keyboard control of the hidden player
          modestbranding: 1,
          enablejsapi: 1,
        },
        events: {
          onReady: (e: any) => {
            if (cancelled) return;
            e.target.mute();
            e.target.setVolume(vol * 100);
            e.target.playVideo();
            setDuration(e.target.getDuration() || 0);
            setReady(true);
          },
          onStateChange: (e: any) => {
            if (cancelled) return;
            setPlaying(e.data === YT.PlayerState.PLAYING);
            const d = e.target.getDuration?.() || 0;
            if (d) setDuration(d);
          },
        },
      });
    });

    return () => {
      cancelled = true;
      playerRef.current?.destroy?.();
      playerRef.current = null;
    };
    // vol is read once to seed the player; later changes go through handleVolumeChange.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoId]);

  // The API emits no timeupdate equivalent, so the scrubber is driven by polling.
  useEffect(() => {
    if (!ready || !controls || !playing) return;
    const id = setInterval(() => {
      const t = playerRef.current?.getCurrentTime?.();
      if (typeof t === "number") setCurrentTime(t);
    }, 200);
    return () => clearInterval(id);
  }, [ready, controls, playing]);

  function togglePlay() {
    const p = playerRef.current;
    if (!p) return;
    if (playing) p.pauseVideo();
    else p.playVideo();
  }

  function handleSeek(val: number) {
    setCurrentTime(val);
    playerRef.current?.seekTo(val, true);
  }

  function handleVolumeChange(val: number) {
    const p = playerRef.current;
    setVol(val);
    setMuted(val === 0);
    if (!p) return;
    p.setVolume(val * 100);
    if (val === 0) p.mute();
    else p.unMute();
  }

  function toggleMute() {
    const p = playerRef.current;
    if (!p) return;
    const next = !muted;
    setMuted(next);
    if (next) {
      p.mute();
    } else {
      p.unMute();
      if (vol === 0) {
        setVol(0.5);
        p.setVolume(50);
      }
    }
  }

  // An iframe has no object-fit, so the 16:9 player is sized against the frame with
  // container units and centered: max() crops like object-cover, min() letterboxes
  // like object-contain (used in fullscreen, matching CardVideo).
  const frameSize = isFullscreen
    ? { width: "min(100cqw, 177.7778cqh)", height: "min(100cqh, 56.25cqw)" }
    : { width: "max(100cqw, 177.7778cqh)", height: "max(100cqh, 56.25cqw)" };

  return (
    <div
      ref={containerRef}
      className={
        isFullscreen
          ? "relative w-full h-full flex items-center justify-center bg-black overflow-hidden"
          : fill
          ? "relative w-full h-full overflow-hidden"
          : `relative w-full overflow-hidden rounded-2xl ${aspectClass}`
      }
      style={{ containerType: "size" }}
    >
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={frameSize}
      >
        {/* Replaced in place by the API with the actual <iframe> */}
        <div ref={mountRef} className="w-full h-full" />
      </div>

      {/* Swallows clicks so they never reach YouTube's UI; doubles as play/pause. */}
      <button
        type="button"
        onClick={controls ? togglePlay : undefined}
        aria-label={title ? `${title} video` : "Video"}
        tabIndex={controls ? 0 : -1}
        className={`absolute inset-0 ${controls ? "cursor-pointer" : "cursor-default"}`}
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
