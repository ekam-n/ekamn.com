import ProjectCard from "../projectCardInterface";

export default function Snuggle() {
  return (
    <div>
      <ProjectCard
        title="Snuggle Sculptors"
        description="Snuggle Sculptors is a build-a-bear simulation built in Java, where I used decorator and factory patterns to dynamically update the bear with graphics and sound integration."
        image="./images/projectImages/snuggleSculptors/snuggle1.png"
        tags={["Software Design", "Java", "Illustrator"]}
        link="https://github.com/ekam-n/snuggle-sculptors"
        // bgColor="#D8F9A5"
      />
    </div>
  );
}
