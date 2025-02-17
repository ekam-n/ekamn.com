import type { Route } from "./+types/home";
import Header from "../header";
import HomeCards from "../components/homeCards"
// import Hero from "../components/hero";

// Metadata for the Home route
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Ekam Nijjar" },
    { name: "description", content: "Welcome to my portfolio website!" },
  ];
}

// Main Home component
export default function Home() {
  return (
    <div>
      <Header />
      <main className="min-h-screen bg-black px-4">
        <HomeCards />
      </main>
    </div>
  );
}
