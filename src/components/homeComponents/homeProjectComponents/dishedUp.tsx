import ProjectCard from "../homeProjectInterface";

export default function Dished() {
  return (
    <div className="h-full">
      <ProjectCard
        label="Mobile App"
        title="dishedUp"
        description="dishedUp is a gamified cooking app concept for novice cooks that turns recipes into points, levels, and challenges to make learning to cook fun. We used Figma for design and ProtoPie to make the app completely accessible for use through voice commands. I also built a responsive showcase website for it using Vite and Tailwind CSS."
        image="./images/projectImages/dishedUp/cover image.png"
        tags={[ "Figma", "ProtoPie", "Vite", "Tailwind"]}
        ctaTo="/analyses/dished-up"
        buttonText="Analysis"
        buttonColor="bg-[#db0096] hover:bg-[#EC8DFF]"
      />
    </div>
  );
}
