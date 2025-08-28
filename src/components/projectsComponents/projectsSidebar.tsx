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
   // --- Mobile dropdown (visible below md) ---
  const [open, setOpen] = useState(false);
  const mobileRef = useRef<HTMLDivElement>(null);

  // NEW: resolve the portal host after mount
  const [host, setHost] = useState<HTMLElement | null>(null);
  useEffect(() => {
    const find = () => setHost(document.getElementById("filters-host"));
    find(); // try immediately
    const raf = requestAnimationFrame(find); // and again next frame
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
  const onPointerDown = (e: PointerEvent) => {
    const target = e.target as Node;
    if (open && mobileRef.current && !mobileRef.current.contains(target)) {
      setOpen(false);
    }
  };
  document.addEventListener("pointerdown", onPointerDown);
  return () => document.removeEventListener("pointerdown", onPointerDown);
}, [open]);

  // Where to render the mobile Filters: header slot if present, else fall back below header (right)
  {host &&
  createPortal(
    <div ref={mobileRef} className="relative">
      {/* ...unchanged Filters button + panel... */}
    </div>,
    host
  )
}

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
              className="px-3 py-2 text-white text-sm"
            >
              Filters
            </button>

            {open && (
              <div
                role="menu"
                className="absolute left-0 top-full mt-2 w-48 bg-black/90 text-white backdrop-blur-md border border-white/10 rounded-xl shadow-lg p-2 z-[60]"
              >
                {/* NEW: Reset (styled like 'Projects' item in Menu) */}
                <button
                  type="button"
                  onClick={() => {
                    // Clear all selected labels but keep the dropdown open
                    for (const l of Array.from(selected)) {
                      toggleLabel(l);
                    }
                  }}
                  className="block rounded-lg px-3 py-2 text-left cursor-pointer hover:bg-white/10"
                >
                  Reset
                </button>
                <div className="h-px bg-white/10 my-1" />

                {/* Existing label options */}
                <nav className="flex flex-col gap-2">
                  {labels.map((label) => {
                    const isActive = selected.has(label);
                    return (
                      <button
                        key={label}
                        type="button"
                        onClick={() => {
                          // Keep dropdown open after toggling
                          toggleLabel(label);
                        }}
                        aria-pressed={isActive}
                        className={[
                          "w-full text-left rounded-lg px-3 py-2 transition",
                          "hover:bg-white/10",
                          isActive ? "outline outline-2 outline-white" : "outline outline-2 outline-transparent",
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
          hidden md:block fixed left-0 top-15
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
