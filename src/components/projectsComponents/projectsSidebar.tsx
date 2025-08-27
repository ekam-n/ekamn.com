import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { Label } from "../projectsComponents";

type Props = {
  labels: readonly Label[];
  selected: Set<Label>;
  toggleLabel: (label: Label) => void;
};

export default function ProjectsSidebar({ labels, selected, toggleLabel }: Props) {
  // --- Mobile dropdown (visible below md) ---
  const [open, setOpen] = useState(false);
  const mobileRef = useRef<HTMLDivElement>(null);

  // Close when clicking/tapping outside the button+panel
  useEffect(() => {
    const onDown = (e: PointerEvent) => {
      const t = e.target as Node;
      if (!mobileRef.current?.contains(t)) setOpen(false);
    };
    document.addEventListener("pointerdown", onDown);
    return () => document.removeEventListener("pointerdown", onDown);
  }, []);

  // Where to render the mobile Filters: header slot if present, else fall back below header (right)
  const host =
    typeof document !== "undefined" ? document.getElementById("filters-host") : null;

  return (
    <>
      {/* ---------- Mobile: render Filters INSIDE the header via portal ---------- */}
      {host &&
        createPortal(
          <div ref={mobileRef} className="relative">
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="rounded-xl px-3 py-2 bg-black/70 text-white backdrop-blur-md border border-white/10 hover:bg-black/60 transition text-[0.9rem]"
            >
              Filters
            </button>

            {open && (
              <div
                role="menu"
                className="absolute left-0 top-full mt-2 w-48 bg-black text-white backdrop-blur-md border border-white/10 rounded-xl shadow-lg p-2 z-[60]"
              >
                <nav className="flex flex-col gap-2">
                  {labels.map((label) => {
                    const isActive = selected.has(label);
                    return (
                      <button
                        key={label}
                        type="button"
                        onClick={() => {
                          toggleLabel(label);
                          setOpen(false);
                        }}
                        aria-pressed={isActive}
                        className={[
                          "w-full text-left rounded-lg px-3 py-2 transition",
                          "hover:bg-white/10",
                          isActive
                            ? "outline outline-2 outline-white"
                            : "outline outline-2 outline-transparent",
                        ].join(" ")}
                      >
                        {label}
                      </button>
                    );
                  })}
                </nav>
              </div>
            )}
          </div>,
          host
        )}

      {/* ---------- Desktop: original sidebar (unchanged) ---------- */}
      <aside
        className="
          hidden md:block fixed left-0 top-14
          h-[calc(100vh-3.5rem)]
          md:w-52 lg:w-56 xl:w-52
          bg-black/70 text-white backdrop-blur-md p-6 border-r border-white/10
          z-30
        "
      >
        <nav className="flex flex-col gap-3">
          {labels.map((label) => {
            const isActive = selected.has(label);
            return (
              <button
                key={label}
                type="button"
                onClick={() => toggleLabel(label)}
                aria-pressed={isActive}
                className={[
                  "w-full text-left rounded-xl px-3 py-2 transition",
                  "hover:bg-white/10",
                  isActive
                    ? "outline outline-2 outline-white"
                    : "outline outline-2 outline-transparent",
                ].join(" ")}
              >
                {label}
              </button>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
