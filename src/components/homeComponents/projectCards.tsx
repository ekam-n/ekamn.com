import Snuggle from "./homeProjectComponents/snuggleSculptors";
import Volt from "./homeProjectComponents/voltLegacy";
import Yellow from "./homeProjectComponents/yellowJacket";
import Demon from "./homeProjectComponents/demonsGate"

export default function ProjectCards() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Demon />
      <Yellow />
      <Volt />
      <Snuggle />
    </section>
  );
}
