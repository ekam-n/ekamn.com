import ProjectCard from "../homeProjectInterface";

export default function Sail() {
  return (
    <div className="h-full">
      <ProjectCard
        label="CLI App"
        title="SetSail"
        description="SetSail is a terminal-based C++ reservation system for Coastal Ferry Corp that lets a single ferry clerk create sailings and vessels, manage vehicle reservations with capacity limits, and view sailing reports, with all data persisted via custom binary file I/O."
        image="./images/projectImages/setSail/empty OCD.png"
        tags={["OOP", "SDLC", "C++", "Git"]}
        link="https://ridham225sharma.wixsite.com/iat210"
        buttonText="Analysis"
        buttonColor="bg-[#db0096] hover:bg-[#EC8DFF]"
      />
    </div>
  );
}
