import ProjectCard from "../homeProjectInterface";

export default function Dished() {
  return (
    <div className="h-full">
      <ProjectCard
        label="Mobile App"
        title="dishedUp"
        description="dishedUp is a gamified cooking app concept for novice cooks that turns recipes into points, levels, and challenges to make learning to cook fun. I also built a responsive showcase website for it using Vite and Tailwind CSS."
        image="./images/projectImages/dishedUp/cover image.png"
        tags={["React", "Tailwind", "Figma", "ProtoPie"]}
        link="https://ridham225sharma.wixsite.com/iat210"
        buttonText="Analysis"
        buttonColor="bg-[#db0096] hover:bg-[#EC8DFF]"
      />
    </div>
  );
}
