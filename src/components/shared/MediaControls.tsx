interface MediaControlsProps {
  // Which control groups to render
  controls?: boolean;   // play/pause + seek scrubber
  volume?: boolean;     // mute toggle + volume slider
  fullscreen?: boolean; // fullscreen toggle

  // Player state + handlers, supplied by whichever player owns the media
  playing: boolean;
  currentTime: number;
  duration: number;
  muted: boolean;
  vol: number;
  onTogglePlay: () => void;
  onSeek: (seconds: number) => void;
  onToggleMute: () => void;
  onVolumeChange: (vol: number) => void;
  onToggleFullscreen: () => void;
}

// The overlaid control bar shared by <CardVideo /> (native <video>) and
// <CardYouTube /> (YouTube IFrame API). Purely presentational — it holds no
// player state, so both media types look and behave identically.
export default function MediaControls({
  controls = false,
  volume = false,
  fullscreen = false,
  playing,
  currentTime,
  duration,
  muted,
  vol,
  onTogglePlay,
  onSeek,
  onToggleMute,
  onVolumeChange,
  onToggleFullscreen,
}: MediaControlsProps) {
  if (!controls && !volume && !fullscreen) return null;

  return (
    <div className="absolute inset-x-0 bottom-0 flex items-center gap-2 px-3 py-2 bg-linear-to-t from-black/70 to-transparent">
      {controls && (
        <>
          <button
            onClick={onTogglePlay}
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
            onChange={(e) => onSeek(parseFloat(e.target.value))}
            aria-label="Seek"
            className="flex-1 accent-white h-1 cursor-pointer"
          />
        </>
      )}

      {volume && (
        <>
          <button
            onClick={onToggleMute}
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
            onChange={(e) => onVolumeChange(parseFloat(e.target.value))}
            aria-label="Volume"
            className="w-16 shrink-0 accent-white h-1 cursor-pointer"
          />
        </>
      )}

      {fullscreen && (
        <button
          onClick={onToggleFullscreen}
          aria-label="Fullscreen"
          className={`text-white/90 hover:text-white transition-colors shrink-0 ${controls ? "" : "ml-auto"}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
          </svg>
        </button>
      )}
    </div>
  );
}
