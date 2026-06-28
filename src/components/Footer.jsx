import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/40">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <h3 className="text-xl font-semibold text-white">Digital Twin Autonomous Unmanned Systems</h3>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">
            A research showcase for virtual–physical synchronization, motion planning, trajectory tracking,
            collision avoidance, and robust control across ground, aerial, marine, and legged unmanned systems.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Navigation</h4>
          <div className="mt-4 grid gap-2 text-sm text-slate-400">
            <Link to="/projects" className="hover:text-cyan-200">Projects</Link>
            <Link to="/publications" className="hover:text-cyan-200">Publications</Link>
            <Link to="/resources" className="hover:text-cyan-200">Resources</Link>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Contact</h4>
          <p className="mt-4 text-sm leading-6 text-slate-400">
            Replace this section with your laboratory name, university, contact email, GitHub, and ResearchGate links.
          </p>
        </div>
      </div>
    </footer>
  );
}
