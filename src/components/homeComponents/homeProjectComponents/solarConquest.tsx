import ProjectCard from "../homeProjectInterface";

export default function Solar() {
  return (
    <div className="h-full">
      <ProjectCard
        label="Boardgame"
        title="Solar Conquest"
        description="Solar Conquest is a 4X tabletop strategy game of colonization, hidden-transit trade, crafting, and tiered combat. I led systems design/balance through three 4-player playtests—doubling ship speed, tuning +1/+2 combat tiers, and capping accelerators per planet."
        image="./images/projectImages/solarConquest/solar1.png"
        tags={["Economy Design", "Systems Design", "Tabletop Simulator"]}
        ctaTo="/analysis/solar-conquest"
        buttonText="Analysis"
        buttonColor="bg-[#db0096] hover:bg-[#EC8DFF]"
      />
    </div>
  );
}
