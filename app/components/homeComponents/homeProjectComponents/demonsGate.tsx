import ProjectCard from "../projectCardInterface";

export default function Demon() {
  return (
    <div>
      <ProjectCard
        title="Demon's Gate"
        description="Demon's Gate is a roll-and-move tabletop game where I led the design of mechanics, player types, events, and items while organizing ideation, playtests, and asset creation."
        image="./images/projectImages/demonsGate/demon1.png"
        tags={["Game Design", "Mechanic Design", "Level Design"]}
        link="https://github.com/ekam-n/snuggle-sculptors"
        // bgColor="#717DFC"
      />
    </div>
  );
}
