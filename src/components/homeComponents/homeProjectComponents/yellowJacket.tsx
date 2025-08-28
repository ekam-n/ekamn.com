import ProjectCard from "../homeProjectInterface";

export default function Yellow() {
  return (
    <div className="h-full">
      <ProjectCard
        label="Videogame"
        title="YellowJacket Escape"
        description="YellowJacket Escape is a top-down 2D dungeon crawler focused on strategic movement and survival, where players navigate hazards while avoiding or confronting YellowJacket enemies."
        image="./images/projectImages/yellowJacketEscape/yellow1.png"
        tags={["Level Design", "Unity", "Playtesting"]}
        link="https://github.com/ekam-n/iat312-p1"
        buttonText="Analysis"
        buttonColor="bg-[#db0096] hover:bg-[#EC8DFF]"
      />
    </div>
  );
}
