"use client";

import { useRef, useState } from "react";

export default function WorkExperience() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [volume, setVolume] = useState(0.5);
  const [playing, setPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

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
    setVolume(val);
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
    if (!next && volume === 0) {
      setVolume(0.5);
      videoRef.current.volume = 0.5;
    }
  }

  function toggleFullscreen() {
    const el = videoRef.current;
    if (!el) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      el.requestFullscreen?.();
    }
  }

  return (
    <div className="bg-[#5301B7] rounded-3xl shadow-lg p-6 md:p-8 text-white">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
        Work Experience
      </h2>
      {/*
        Mobile (one column): simple flex-col, ordered title → video → text → pills.
        Desktop (xl, two columns): grid with named areas keeps the original layout —
        title/text/pills stacked on the left, the (single) video on the right.
      */}
      <div
        className="flex flex-col gap-4 xl:grid xl:gap-x-6 xl:gap-y-2 xl:grid-cols-[1fr_33rem] xl:grid-rows-[auto_1fr_auto] xl:[grid-template-areas:'head_video'_'text_video'_'pills_video']"
      >
        {/* Title + date */}
        <div className="order-1 xl:[grid-area:head]">
          <h3 className="text-lg md:text-xl lg:text-2xl">
            Augmented Reality Technician — Plan Your Space
          </h3>
          <p className="text-sm md:text-base lg:text-lg text-white/70 mt-1">
            January 2026 – Present
          </p>
        </div>

        {/* Video */}
        <div className="order-2 xl:[grid-area:video] xl:self-center w-full">
          <div className="relative w-full overflow-hidden rounded-2xl">
            <video
              ref={videoRef}
              src="/images/workImgsVids/PYS/pys-AR.mp4"
              className="w-full block cursor-pointer"
              autoPlay
              loop
              muted
              playsInline
              onClick={togglePlay}
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
              onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
              onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
            />

            {/* Controls overlaid on the video */}
            <div className="absolute inset-x-0 bottom-0 flex items-center gap-2 px-3 py-2 bg-linear-to-t from-black/70 to-transparent">
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

              <button
                onClick={toggleMute}
                aria-label={muted ? "Unmute" : "Mute"}
                className="text-white/90 hover:text-white transition-colors shrink-0"
              >
                {muted || volume === 0 ? (
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
                value={muted ? 0 : volume}
                onChange={handleVolumeChange}
                aria-label="Volume"
                className="w-16 shrink-0 accent-white h-1 cursor-pointer"
              />

              <button
                onClick={toggleFullscreen}
                aria-label="Fullscreen"
                className="text-white/90 hover:text-white transition-colors shrink-0"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="order-3 xl:[grid-area:text] space-y-4 text-sm md:text-base lg:text-lg">
          <p>
            Plan Your Space is a Burnaby studio where clients walk through their architectural plans at lifesize scale using Apple Vision Pro, visualizing and refining design decisions before construction begins.
          </p>
          <p>
            I lead Plan Your Space's AR pipeline end-to-end — converting client Revit and SketchUp models into optimized Apple Vision Pro experiences, handling all 3ds Max optimization to hit real-time rendering targets on standalone hardware, and leading live walkthroughs that help clients make design decisions earlier in the build process.
          </p>
        </div>

        {/* Tags */}
        <div className="order-4 xl:[grid-area:pills] flex flex-wrap gap-3">
          {["AR", "Apple Vision Pro", "3ds Max"].map((skill) => (
            <span
              key={skill}
              className="bg-white/20 px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm lg:text-base"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
