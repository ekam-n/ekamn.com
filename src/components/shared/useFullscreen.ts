import { useEffect, useState, type RefObject } from "react";

// Fullscreen the container element (not the media itself) so the browser's native
// control bar — which always includes a volume slider that can't be selectively
// hidden — never appears. Our own overlay scales up instead.
//
// `iosFallback` covers iOS Safari/Chrome, which doesn't support requestFullscreen
// on div elements at all; <CardVideo /> passes video.webkitEnterFullscreen there.
export function useFullscreen(
  containerRef: RefObject<HTMLElement | null>,
  iosFallback?: () => void
) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const onChange = () =>
      setIsFullscreen(
        document.fullscreenElement === containerRef.current ||
        (document as any).webkitFullscreenElement === containerRef.current
      );
    document.addEventListener("fullscreenchange", onChange);
    document.addEventListener("webkitfullscreenchange", onChange);
    return () => {
      document.removeEventListener("fullscreenchange", onChange);
      document.removeEventListener("webkitfullscreenchange", onChange);
    };
  }, [containerRef]);

  function toggleFullscreen() {
    const el = containerRef.current;
    if (!el) return;

    const isFs =
      !!document.fullscreenElement ||
      !!(document as any).webkitFullscreenElement;

    if (isFs) {
      document.exitFullscreen?.() ?? (document as any).webkitExitFullscreen?.();
    } else if (el.requestFullscreen) {
      el.requestFullscreen();
    } else if ((el as any).webkitRequestFullscreen) {
      (el as any).webkitRequestFullscreen();
    } else {
      iosFallback?.();
    }
  }

  return { isFullscreen, toggleFullscreen };
}
