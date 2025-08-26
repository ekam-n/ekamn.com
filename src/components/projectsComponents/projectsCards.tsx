// projectsCards.tsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion"; // ⬅️ add AnimatePresence
import Yellow from "./projectCards/yellowJacket";
import Volt from "./projectCards/voltLegacy";
import Snuggle from "./projectCards/snuggleSculptors";
import Chaos from "./projectCards/demonsGate";
import { CORE_LABELS, type CoreLabel, type Label } from "../projectsComponents";

type Props = {
  selected: Label[]; // empty => show all
};

const isCoreLabel = (v: string): v is CoreLabel =>
  (CORE_LABELS as readonly string[]).includes(v);

const PROJECTS: { key: string; label: CoreLabel | "Unlabeled"; node: React.JSX.Element }[] = [
  { key: "yellow",  label: "Video Games", node: <Yellow /> },
  { key: "volt",    label: "Video Games", node: <Volt /> },
  { key: "snuggle", label: "Web Apps",    node: <Snuggle /> },
  { key: "chaos",   label: "Board Games", node: <Chaos /> },
];

export default function ProjectsCards({ selected }: Props) {
  const showAll = selected.length === 0;
  const selectedCore = selected.filter(isCoreLabel);
  const wantsMisc = selected.includes("Miscellaneous");
  const coreSet = new Set<CoreLabel>(selectedCore);

  const visible = PROJECTS.filter(({ label }) => {
    if (showAll) return true;
    const normalHit = isCoreLabel(label) && coreSet.has(label);
    const miscHit = wantsMisc && !isCoreLabel(label);
    return normalHit || miscHit;
  });

  const transition = { duration: 0.5, ease: "easeOut" };

  return (
    <motion.section
      layout
      className="pt-14 grid grid-cols-1 min-[900px]:grid-cols-2 gap-4 items-stretch"
    >
      <AnimatePresence mode="popLayout" initial={false}>
        {visible.map((p, index) => (
          <motion.div
            key={p.key}
            layout
            className="h-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={transition}
          >
            {p.node}
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.section>
  );
}
