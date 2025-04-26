import { motion } from "framer-motion";
import Hero from "./homeComponents/hero";
import Education from "./homeComponents/education";
import Skills from "./homeComponents/skills";
import ProjectCards from "./homeComponents/projectCards";

// Animation Variants
const fadeInVariant = {
  hidden: (i: number) => ({
    opacity: 0,
    y: i === 0 ? 0 : 50,    // hero (i=0) only fades, others slide up
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

export default function HomeCards() {
  const sections = [
    { component: <Hero />, key: "hero" },
    { component: <Skills />, key: "skills" },
    { component: <Education />, key: "education" },
    { component: <ProjectCards />, key: "projects" },
  ];

  return (
    <section className="space-y-4">
      {sections.map((section, index) => (
        <motion.div
          key={section.key}
          variants={fadeInVariant}
          initial="hidden"
          animate="visible"
          custom={index}
        >
          {section.component}
        </motion.div>
      ))}
    </section>
  );
}
