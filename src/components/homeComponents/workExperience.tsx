"use client";

import { useRef, useState } from "react";

export default function WorkExperience() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [volume, setVolume] = useState(0.5);

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

  return (
    <div className="bg-[#5301B7] rounded-3xl shadow-lg p-6 md:p-8 text-white">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
        Work Experience
      </h2>
      <div className="flex flex-col xl:flex-row gap-6">
        <div className="flex flex-col flex-1">
          <h3 className="text-lg md:text-xl lg:text-2xl">
            Augmented Reality Technician — Plan Your Space
          </h3>
          <p className="text-sm md:text-base lg:text-lg text-white/70 mb-4">
            Jan 2026 – Present
          </p>
          <p className="text-sm md:text-base lg:text-lg mb-4">
            Plan Your Space is a Burnaby-based studio that lets clients walk through their architectural plans at lifesize scale before construction begins — helping homeowners, designers, and developers make confident design decisions early in the build process. The studio uses augmented reality on Apple Vision Pro to overlay and visualize spaces in real time, bringing blueprint decisions to life before a single wall goes up.
          </p>
          <p className="text-sm md:text-base lg:text-lg mb-4">
            I own Plan Your Space's end-to-end AR pipeline — converting client Revit and SketchUp models into optimized Apple Vision Pro experiences, handling all 3ds Max optimization to hit real-time rendering targets on standalone hardware, and leading live walkthroughs that help clients make design decisions earlier in the build process.
          </p>
          <div className="flex flex-wrap gap-3 mt-auto">
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
        <div className="flex flex-col shrink-0 w-full lg:w-132 gap-2">
          <video
            ref={videoRef}
            src="/images/workImgsVids/PYS/pys-AR.mp4"
            className="w-full rounded-2xl"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="flex items-center gap-2">
            <button onClick={toggleMute} className="text-white/80 hover:text-white transition-colors shrink-0">
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
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={muted ? 0 : volume}
              onChange={handleVolumeChange}
              className="w-full accent-white h-1 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
