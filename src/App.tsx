// App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import HomeCards from "./components/homeCards";
import ProjectsCards from "./components/projectsComponents/projectsCards";
import "./App.css";

export default function App() {
  return (
    <Router>
      <Header />
      <main className="min-h-screen mb-4 bg-black px-4">
        <Routes>
          {/* when path is exactly "/" render home */}
          <Route path="/" element={<HomeCards />} />
          {/* when path is "/projects" render your projects page */}
          <Route path="/projects" element={<ProjectsCards />} />
        </Routes>
      </main>
    </Router>
  );
}
