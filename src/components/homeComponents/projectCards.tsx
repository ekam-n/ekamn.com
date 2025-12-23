// import Snuggle from "./homeProjectComponents/snuggleSculptors";
// import Volt from "./homeProjectComponents/voltLegacy";
import Yellow from "./homeProjectComponents/yellowJacket";
// import Demon from "./homeProjectComponents/demonsGate"
import Solar from "./homeProjectComponents/solarConquest"
import Posture from "./homeProjectComponents/postureCoach";
import Dished from "./homeProjectComponents/dishedUp";
import Sail from "./homeProjectComponents/setSail";

export default function ProjectCards() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Posture />
      <Sail />
      <Dished />
      {/* <Solar /> */}
      <Yellow />
      {/* <Volt />
      <Snuggle /> */}
    </section>
  );
}
