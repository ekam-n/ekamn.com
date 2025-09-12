// src/App.tsx
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Header from "./components/header";
import HomeCards from "./components/homePage";
import ProjectsPage from "./components/projectsComponents";
import { pageVariants } from "./lib/variants";
import './App.css'
import AnalysisRouter from "./routes/AnalysisRouter";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <HomeCards />
            </motion.div>
          }
        />
        <Route
          path="/projects"
          element={
            <motion.div
              initial={{ opacity: 0 }}     // no y/x transforms
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{ willChange: "opacity" }} // optional hint
            >
              <ProjectsPage />
            </motion.div>
          }
        />
<Route path="/analyses/:slug" element={<AnalysisRouter />} />

      </Routes>
      {/* // src/App.tsx — add a Route (keep the rest as-is) */}
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
