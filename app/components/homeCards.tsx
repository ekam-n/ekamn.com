import Hero from "./homeComponents/hero";
import Education from "./homeComponents/education";
import Skills from "./homeComponents/skills";
import ProjectCards from "~/components/homeComponents/projectCards";

export default function HomeCards() {
  return (
    <section className="space-y-4">
      <div>
        <Hero />
      </div>
      <div>
        <Education />
      </div>
      <div>
      <Skills />
      </div>
      <div>
      <ProjectCards />
      </div>
    </section>
  );
}
