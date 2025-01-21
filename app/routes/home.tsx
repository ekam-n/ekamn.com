import type { Route } from "./+types/home";
import Header from "../header";
import Hero from "../hero";

// Metadata for the Home route
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Ekam Nijjar Portfolio" },
    { name: "description", content: "Welcome to my portfolio website!" },
  ];
}

// Main Home component
export default function Home() {
  return (
    <div>
      <Header />
      <main className="min-h-screen bg-black">
        <Hero />
      </main>
    </div>
  );
}
