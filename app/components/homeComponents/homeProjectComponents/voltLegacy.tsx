import ProjectCard from "../projectCardInterface";

export default function Volt() {
  return (
    <div>
      <ProjectCard
        title="Volt Legacy"
        description="Volt Legacy is a challenging platformer where I implemented physics, game logic, graphics, sound, and UI in Processing."
        image="./images/projectImages/voltLegacy/volt1.png"
        tags={["Mechanic Design", "Combat Design", "Processing"]}
        link="https://github.com/ekam-n/snuggle-sculptors"
        // bgColor="#717DFC"
      />
    </div>
  );
}
