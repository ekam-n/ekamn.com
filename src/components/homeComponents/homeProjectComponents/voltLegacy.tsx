import ProjectCard from "../homeProjectInterface";

export default function Volt() {
  return (
    <div>
      <ProjectCard
        label="Videogame"
        title="Volt Legacy"
        description="Volt Legacy is a challenging platformer where I implemented physics, game logic, graphics, sound, and UI in Processing."
        image="./images/projectImages/voltLegacy/volt1.png"
        tags={["Mechanic Design", "Combat Design", "Processing"]}
        link="https://github.com/ekam-n/volt-legacy"
        // bgColor="#717DFC"
      />
    </div>
  );
}
