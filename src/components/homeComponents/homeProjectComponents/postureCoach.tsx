import ProjectCard from "../homeProjectInterface";

export default function Posture() {
  return (
    <div className="h-full">
      <ProjectCard
        label="AI Model"
        title="Posture Coach"
        description="Posture Coach is a lightweight computer-vision project that fine-tunes a small YOLO classifier to recognize three webcam posture states—“looks good,” “sit up straight,” and “straighten head”—and provide fast, practical feedback for students and desk workers using typical laptop setups."
        image="./images/projectImages/postureCoach/cover image.png"
        tags={["Classification", "Python", "Git"]}
        link="https://ridham225sharma.wixsite.com/iat210"
        buttonText="Analysis"
        buttonColor="bg-[#db0096] hover:bg-[#EC8DFF]"
      />
    </div>
  );
}
