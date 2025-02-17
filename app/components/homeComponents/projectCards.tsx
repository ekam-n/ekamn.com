import Snuggle from "./homeProjectComponents/snuggleSculptors";
import Volt from "./homeProjectComponents/voltLegacy";
import Yellow from "./homeProjectComponents/yellowJacket";

export default function ProjectCards() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Yellow />
      <Volt />
      <Snuggle />
    </section>
  );
}
