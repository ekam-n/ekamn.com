import ProjectCard from "../projectCardInterface";

export default function Volt() {
  return (
    <div>
      <ProjectCard
        title="Volt Legacy"
        description="Multi-level challenging platformer where each level focuses on introducing game mechanics, building on them, and then combining mechanics for increased difficulty. I manually implemented all physics, game-logic, graphics, sound effects, music, and the menu GUI in Processing (based on Java)."
        image="./images/projectImages/voltLegacy/volt1.png"
        tags={["Game Development", "Java", "Simulation"]}
        link="https://github.com/ekam-n/snuggle-sculptors"
        // bgColor="#717DFC"
      />
    </div>
  );
}
