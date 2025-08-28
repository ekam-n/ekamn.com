import React from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import Yellow from "./projectCards/yellowJacket";
import Volt from "./projectCards/voltLegacy";
import Snuggle from "./projectCards/snuggleSculptors";
import Demon from "./projectCards/demonsGate";
import Solar from "./projectCards/solarConquest";
import { CORE_LABELS, type CoreLabel, type Label } from "../projectsComponents";

type Props = {
  selected: Label[]; // empty => show all
};

const isCoreLabel = (v: string): v is CoreLabel =>
  (CORE_LABELS as readonly string[]).includes(v);

const PROJECTS: { key: string; label: CoreLabel | "Unlabeled"; node: React.JSX.Element }[] = [
  { key: "solar",   label: "Board Games", node: <Solar /> },
  { key: "demon",   label: "Board Games", node: <Demon /> },
  { key: "yellow",  label: "Video Games", node: <Yellow /> },
  { key: "volt",    label: "Video Games", node: <Volt /> },
  { key: "snuggle", label: "Web Apps",    node: <Snuggle /> },
];

export default function ProjectsCards({ selected }: Props) {
  const showAll = selected.length === 0;
  const wantsMisc = selected.includes("Miscellaneous");
  const selectedCore = selected.filter(isCoreLabel);
  const coreSet = new Set<CoreLabel>(selectedCore);

  // Keep original order; filter decides visibility only.
  const visible = PROJECTS.filter(({ label }) => {
    if (showAll) return true;
    const normalHit = isCoreLabel(label) && coreSet.has(label);
    const miscHit = wantsMisc && !isCoreLabel(label);
    return normalHit || miscHit;
  });

  // Tuned for smoothness on both 1-col and 2-col
  const layoutSpring = { type: "spring", stiffness: 220, damping: 50, mass: 0.9 };

  return (
    <LayoutGroup id="projects-grid">
      <motion.section
        layout
        transition={{ layout: layoutSpring }}
        className="pt-14 grid grid-cols-1 min-[900px]:grid-cols-2 gap-4 items-stretch"
      >
        <AnimatePresence mode="wait" initial={false}>
          {visible.map((p) => (
            // This wrapper is the grid "slot" — it stays put while the card fades
            <motion.div
              key={p.key}
              layout="position"                       // survivors slide smoothly after exit completes
              className="h-full"
              transition={{ layout: { type: "spring", stiffness: 220, damping: 50, mass: 0.9 } }}
              // Only opacity changes; position doesn't move during exit
              initial={{ opacity: 0 }}                // new items fade in
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}                   // toggled-off items fade out in place
            >
              {p.node}
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.section>
    </LayoutGroup>
  );
}
