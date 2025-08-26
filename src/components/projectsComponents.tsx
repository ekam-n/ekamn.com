// projectsComponents.tsx
import { useState, useMemo } from "react";
import ProjectsSidebar from "./projectsComponents/projectsSidebar";
import ProjectsCards from "./projectsComponents/projectsCards";

// Keep this list in ONE place so "Miscellaneous" logic is reliable
// Keep labels tidy and typed
export const CORE_LABELS = ["Video Games", "Web Apps", "Board Games"] as const;
export type CoreLabel = typeof CORE_LABELS[number];

export type SpecialLabel = "Miscellaneous";
export type Label = CoreLabel | SpecialLabel;

export const ALL_LABELS = [...CORE_LABELS, "Miscellaneous"] as const;

export default function ProjectsComponents() {
  const [selected, setSelected] = useState<Set<Label>>(new Set());

  const toggleLabel = (label: Label) => {
    setSelected(prev => {
      const next = new Set(prev);
      if (next.has(label)) next.delete(label);
      else next.add(label);
      return next;
    });
  };

  // Convenience: an array for props where order matters
  const selectedArray = useMemo(() => Array.from(selected), [selected]);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <ProjectsSidebar
        labels={ALL_LABELS}
        selected={selected}
        toggleLabel={toggleLabel}
      />
      <section className="w-full px-0 xl:px-8
          md:ml-52 md:w-[calc(100%-16rem)]   // ← match md:w-64
          lg:ml-56 lg:w-[calc(100%-14rem)]   // ← match lg:w-56
          xl:ml-52 xl:w-[calc(100%-13rem)]   // ← match xl:w-52
          overflow-x-hidden">
      <ProjectsCards
          selected={selectedArray}   // ← remove `labels={CORE_LABELS}`
        />
      </section>

    </div>
  );
}
