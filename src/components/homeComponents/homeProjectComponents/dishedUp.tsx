import ProjectCard from "../homeProjectInterface";

export default function Dished() {
  return (
    <div className="h-full">
      <ProjectCard
        label="Mobile App"
        title="dishedUp"
        description="Demon’s Gate is a 1-vs-many survival board game where survivors complete tasks to escape via pentagram while a d8 Demon hunts with traps and a wall-phase cooldown. I ran playtests and wrote rules to tune fairness and pacing."
        image="./images/projectImages/demonsGate/demon1.png"
        tags={["React", "Tailwind", "Figma"]}
        link="https://ridham225sharma.wixsite.com/iat210"
        buttonText="Analysis"
        buttonColor="bg-[#db0096] hover:bg-[#EC8DFF]"
      />
    </div>
  );
}
