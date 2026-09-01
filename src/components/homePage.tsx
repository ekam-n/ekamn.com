import { motion, type Variants, cubicBezier } from "framer-motion";
import Hero from "./homeComponents/hero";
import Education from "./homeComponents/education";
import Skills from "./homeComponents/skills";
import ProjectCards from "./homeComponents/projectCards";
import WorkExperience from "./homeComponents/workExperience";

// make a function (ease-out-ish curve)
const easeOut = cubicBezier(0.22, 1, 0.36, 1);

// annotate as Variants (optional but helpful)
const fadeInVariant: Variants = {
  hidden: (i: number) => ({
    opacity: 0,
    y: i === 0 ? 0 : 50,
  }),
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
      ease: easeOut,      // <-- function, not an array
      delay: i * 0.15,
    },
  }),
};

export default function HomeCards({ keys, variant }: { keys?: string[]; variant?: "ea" | "3d" }) {
  const sections = [
    { component: <Hero variant={variant} />, key: "hero" },
    { component: <ProjectCards keys={keys} />, key: "projects" },
    ...(variant === "ea"
      ? [
          { component: <Education />, key: "education" },
          { component: <WorkExperience variant={variant} />, key: "workExperience" },
        ]
      : [
          { component: <WorkExperience variant={variant} />, key: "workExperience" },
          { component: <Education />, key: "education" },
        ]),
    { component: <Skills variant={variant} />, key: "skills" },
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
