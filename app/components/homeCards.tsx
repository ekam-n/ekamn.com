import { motion } from "framer-motion";
import Hero from "./homeComponents/hero";
import Education from "./homeComponents/education";
import Skills from "./homeComponents/skills";
import ProjectCards from "~/components/homeComponents/projectCards";

// Animation Variants
const fadeInVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: delay * 0.1 }, // Delay based on index
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
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          custom={index} // Pass index as delay factor
        >
          {section.component}
        </motion.div>
      ))}
    </section>
  );
}
