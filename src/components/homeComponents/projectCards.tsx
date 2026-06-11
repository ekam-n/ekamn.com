import ProjectCard from "../shared/ProjectCard";
import { PROJECTS } from "../../data/projects";

// Target home set: Export To: Reality, Controlled Chaos, Volt Legacy, Solar Conquest.
// Only volt + solar exist today; the two new projects get prepended here once their
// content is authored as entries in src/data/projects.tsx.
const HOME_KEYS = ["yellowJacket","solarConquest" ];

export default function ProjectCards() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {HOME_KEYS.map((key) => (
        <div key={key} className="h-full">
          <ProjectCard variant="home" {...PROJECTS[key].card} />
        </div>
      ))}
    </section>
  );
}
