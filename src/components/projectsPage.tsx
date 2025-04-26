import ProjectCards from "./projectsComponents/projectsCards";
import ProjectsSidebar from "./projectsComponents/projectsSidebar"; 

export default function ProjectsCards() {
  return (
    <div className="flex">
      <ProjectsSidebar />
      <section className="space-y-4">
        <ProjectCards />
      </section>
    </div>
  );
}
