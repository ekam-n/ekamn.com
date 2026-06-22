import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Header from "./components/header";
import HomeCards from "./components/homePage";
import ProjectsPage from "./components/projectsComponents";
import { pageVariants } from "./lib/variants";
import './App.css'
import AnalysisRouter from "./routes/AnalysisRouter";

const EA_KEYS = ["yellowJacket", "solarConquest", "exportToReality", "voltLegacy"];

function HomeVariant({ variant, keys }: { variant?: "ea"; keys?: string[] }) {
  useEffect(() => {
    if (variant === "ea") sessionStorage.setItem("homeVariant", "ea");
    else sessionStorage.removeItem("homeVariant");
  }, [variant]);
  return <HomeCards keys={keys} variant={variant} />;
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
              <HomeVariant />
            </motion.div>
          }
        />
        <Route
          path="/ea"
          element={
            <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
              <HomeVariant variant="ea" keys={EA_KEYS} />
            </motion.div>
          }
        />
        <Route
          path="/projects"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{ willChange: "opacity" }}
            >
              <ProjectsPage />
            </motion.div>
          }
        />
        <Route path="/analyses/:slug" element={<AnalysisRouter />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="min-h-screen bg-black px-4">
        <AnimatedRoutes />
      </main>
    </BrowserRouter>
  );
}
