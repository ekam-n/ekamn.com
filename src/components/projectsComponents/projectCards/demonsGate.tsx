import ProjectCard from "../projectCardInterface";

export default function Demon() {
  return (
    <div className="h-full">
      <ProjectCard
        label="Boardgame"
        title="Demon's Gate"
        description="Demon’s Gate is a 1-vs-many survival board game where survivors complete tasks to escape via pentagram while a d8 Demon hunts with traps and a wall-phase cooldown. I ran playtests and wrote rules to tune fairness and pacing."
        image="./images/projectImages/demonsGate/demon1.png"
        tags={["Game Design", "Mechanic Design", "Level Design"]}
        link="https://ridham225sharma.wixsite.com/iat210"
        buttonText="Website"
      />
    </div>
  );
}
