// src/routes/AnalysisRouter.tsx (new)
import { lazy, Suspense } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

// lazy pages (add more as you create them)
const SolarConquestAnalysis = lazy(() => import("../components/analyses/solarConquestAnalysis"));
const YellowJacketEscapeAnalysis = lazy(() => import("../components/analyses/yellowJacketEscapeAnalysis"));
const SetSailAnalysis = lazy(() => import("../components/analyses/setSailAnalysis"));
const DishedUpAnalysis = lazy(() => import("../components/analyses/dishedUpAnalysis"));
const PostureCoachAnalysis = lazy(() => import("../components/analyses/postureCoachAnalysis"));

const registry: Record<string, React.LazyExoticComponent<() => React.ReactElement>> = {
  "solar-conquest": SolarConquestAnalysis,
  "yellowjacket-escape": YellowJacketEscapeAnalysis,
  "set-sail": SetSailAnalysis,
  "dished-up": DishedUpAnalysis,
  "posture-coach": PostureCoachAnalysis,
};

export default function AnalysisRouter() {
  const { slug = "" } = useParams();
  const Comp = registry[slug];
  if (!Comp) return <div className="text-white/70 p-6">Analysis not found.</div>;

  // same fade as /projects
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Suspense fallback={<div className="text-white/70 p-6">Loading…</div>}>
        <Comp />
      </Suspense>
    </motion.div>
  );
}
