import Snuggle from "./projectCards/snuggleSculptors";
import Volt from "./projectCards/voltLegacy";
import Yellow from "./projectCards/yellowJacket";
import Demon from "./projectCards/demonsGate"

export default function ProjectCards() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Yellow />
      <Volt />
      <Demon />
      <Snuggle />
    </section>
  );
}
