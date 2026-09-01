import ProjectCard from "../shared/ProjectCard";
import { PROJECTS } from "../../data/projects";

// Default (technical/SWE) home lineup. fullStackApp and nlpSummarizer are stubs
// in src/data/projects.tsx awaiting real content.
const HOME_KEYS = ["fullStackApp", "nlpSummarizer", "exportToReality", "voltLegacy"];

export default function ProjectCards({ keys = HOME_KEYS }: { keys?: string[] }) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {keys.map((key) => (
        <div key={key} className="h-full">
          <ProjectCard variant="home" {...PROJECTS[key].card} />
        </div>
      ))}
    </section>
  );
}
