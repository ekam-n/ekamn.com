import ProjectCard from "../projectCardInterface";

export default function Volt() {
  return (
    <div>
      <ProjectCard
        title="Volt Legacy"
        description="A simulation of a Build-A-Bear workshop where users select various features for their bear."
        image="./images/projectImages/snuggleSculptors/snuggle1.png"
        tags={["Game Development", "Java", "Simulation"]}
        link="https://github.com/ekam-n/snuggle-sculptors"
      />
    </div>
  );
}
