// src/components/projectsComponents/ProjectsPage.tsx
import { motion } from "framer-motion";
import Yellow from "./projectCards/yellowJacket";
import Volt from "./projectCards/voltLegacy";
import Snuggle from "./projectCards/snuggleSculptors";
import Chaos from "./projectCards/demonsGate";

// Animation Variants (from home)
const fadeInVariant = {
  hidden: (i: number) => ({
    opacity: 0,
    y: i < 2 ? 0 : 50,
  }),
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: i * 0.1,
    },
  }),
};

export default function ProjectsPage() {
  const sections = [
    { component: <Yellow />, key: "yellow" },
    { component: <Volt />,   key: "volt"   },
    { component: <Snuggle />,key: "snuggle"},
    { component: <Chaos />,  key: "chaos"  },
  ];

  return (
    <section className="pt-14 grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
      {sections.map((section, index) => (
        <motion.div
          key={section.key}
          className="h-full"             // ← ensure wrapper is full height
          variants={fadeInVariant}
          initial="hidden"
          animate="visible"
          custom={index}
        >
          {section.component}           {/* each card must itself fill h-full */}
        </motion.div>
      ))}
    </section>
  );
}
