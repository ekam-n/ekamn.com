import ProjectCards from "./projectsComponents/projectsCards";
import ProjectsSidebar from "./projectsComponents/projectsSidebar"; 

export default function projectsComponents() {
  return (
    <div className="min-h-screen">
      <ProjectsSidebar />
      <section
        className="
          px-4 md:px-8
          md:ml-52 md:w-[calc(100%-13rem)]
          w-full
          overflow-x-hidden
        "
      >
        <ProjectCards />
      </section>
    </div>
  );
}
