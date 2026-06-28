import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Roadmap from "./pages/Roadmap.jsx";
import Platforms from "./pages/Platforms.jsx";
import Projects from "./pages/Projects.jsx";
import ProjectDetail from "./pages/ProjectDetail.jsx";
import Publications from "./pages/Publications.jsx";
import Gallery from "./pages/Gallery.jsx";
import Resources from "./pages/Resources.jsx";
import Team from "./pages/Team.jsx";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#050816] text-slate-100">
      <div className="fixed inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(0,229,255,0.18),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(138,92,255,0.16),transparent_32%),linear-gradient(180deg,#050816_0%,#071020_55%,#03050d_100%)]" />
      <div className="fixed inset-0 -z-10 opacity-[0.18] bg-grid" />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/platforms" element={<Platforms />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/team" element={<Team />} />
      </Routes>
      <Footer />
    </div>
  );
}
