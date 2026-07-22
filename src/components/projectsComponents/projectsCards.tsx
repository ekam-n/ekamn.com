import { motion, AnimatePresence, LayoutGroup, type Transition } from "framer-motion";
import ProjectCard from "../shared/ProjectCard";
import { PROJECTS } from "../../data/projects";
import { CORE_LABELS, type CoreLabel, type Label } from "../projectsComponents";

type Props = {
  selected: Label[]; // empty => show all
};

const isCoreLabel = (v: string): v is CoreLabel =>
  (CORE_LABELS as readonly string[]).includes(v);

// Display order of the projects-page grid. Each key references a card in the registry.
const PROJECTS_ORDER = [
  "exportToReality",
  "postureCoach",
  "voltLegacy",
  "solarConquest",
  "controlledChaos",
  "yellowJacket",
  "greatMapleSyrupHeist",
  "dishedUp",
  "snuggleSculptors",
  "demonsGate",
  "setSail",
];

export default function ProjectsCards({ selected }: Props) {
  const showAll = selected.length === 0;
  const wantsMisc = selected.includes("Miscellaneous");
  const selectedCore = selected.filter(isCoreLabel);
  const coreSet = new Set<CoreLabel>(selectedCore);

  // Keep original order; filter decides visibility only.
  const visible = PROJECTS_ORDER.filter((key) => {
    if (showAll) return true;
    const { category } = PROJECTS[key];
    const normalHit = isCoreLabel(category) && coreSet.has(category);
    const miscHit = wantsMisc && !isCoreLabel(category);
    return normalHit || miscHit;
  });

 // Tuned for smoothness on both 1-col and 2-col
  const layoutSpring: Transition = {
    type: "spring",
    stiffness: 220,
    damping: 50,
    mass: 0.9,
  };

  return (
    <LayoutGroup id="projects-grid">
      <motion.section
        layout
        transition={ layoutSpring }
        className="pt-14 grid grid-cols-1 min-[900px]:grid-cols-2 gap-4 items-stretch"
      >
        <AnimatePresence mode="wait" initial={false}>
          {visible.map((key) => (
            // This wrapper is the grid "slot" — it stays put while the card fades
            <motion.div
              key={key}
              layout="position"                       // survivors slide smoothly after exit completes
              className="h-full"
              transition={ layoutSpring }
              // Only opacity changes; position doesn't move during exit
              initial={{ opacity: 0 }}                // new items fade in
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}                   // toggled-off items fade out in place
            >
              <ProjectCard variant="projects" {...PROJECTS[key].card} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.section>
    </LayoutGroup>
  );
}
