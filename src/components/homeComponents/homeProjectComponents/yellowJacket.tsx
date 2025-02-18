import ProjectCard from "../projectCardInterface";

export default function Yellow() {
  return (
    <div>
      <ProjectCard
        title="YellowJacket Escape"
        description="YellowJacket Escape is a top-down 2D dungeon crawler focused on strategic movement and survival, where players navigate hazards while avoiding or confronting YellowJacket enemies."
        image="./images/projectImages/yellowJacketEscape/yellow1.png"
        tags={["Level Design", "Unity", "Playtesting"]}
        link="https://github.com/ekam-n/iat312-p1"
        // bgColor="#FFF5A9"
      />
    </div>
  );
}
