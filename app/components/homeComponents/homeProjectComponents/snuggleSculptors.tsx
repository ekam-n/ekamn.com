import ProjectCard from "../projectCardInterface";

export default function Snuggle() {
  return (
    <div>
      <ProjectCard
        title="Snuggle Sculptors"
        description="A fun and cheery simulation of a build-a-bear workshop. I utilized the decorator and factory programming patterns to update the bear as you progress through the simulation. This is made completely in Java, utilizing graphics and sound libraries."
        image="./images/projectImages/snuggleSculptors/snuggle1.png"
        tags={["Game Development", "Java", "Simulation"]}
        link="https://github.com/ekam-n/snuggle-sculptors"
        bgColor="#629D04"
      />
    </div>
  );
}
