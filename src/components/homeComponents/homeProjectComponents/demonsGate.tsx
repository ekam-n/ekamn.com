import ProjectCard from "../homeProjectInterface";

export default function Demon() {
  return (
    <div className="h-full">
      <ProjectCard
        label="Boardgame"
        title="Demon's Gate"
        description="Demon's Gate is a roll-and-move tabletop game where I led the design of mechanics, player types, events, and items while organizing ideation, playtests, and asset creation."
        image="./images/projectImages/demonsGate/demon1.png"
        tags={["Game Design", "Mechanic Design", "Level Design"]}
        link="https://ridham225sharma.wixsite.com/iat210"
        buttonText="Website"
      />
    </div>
  );
}
