import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const accentMap = {
  cyan: "from-cyan-300/25 to-blue-500/10 text-cyan-200",
  blue: "from-blue-300/25 to-indigo-500/10 text-blue-200",
  indigo: "from-indigo-300/25 to-violet-500/10 text-indigo-200",
  violet: "from-violet-300/25 to-fuchsia-500/10 text-violet-200",
  fuchsia: "from-fuchsia-300/25 to-pink-500/10 text-fuchsia-200",
  emerald: "from-emerald-300/25 to-cyan-500/10 text-emerald-200",
  teal: "from-teal-300/25 to-cyan-500/10 text-teal-200",
  amber: "from-amber-300/25 to-orange-500/10 text-amber-200",
};

export default function ProjectCard({ project }) {
  const accent = accentMap[project.accent] || accentMap.cyan;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.45 }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/55 p-5 shadow-2xl"
    >
      <div className={`absolute inset-x-0 top-0 h-36 bg-gradient-to-br ${accent} opacity-80`} />
      <div className="relative">
        <div className="mb-12 flex items-center justify-between">
          <span className="rounded-full border border-white/15 bg-slate-950/45 px-3 py-1 text-xs text-slate-200">
            {project.category}
          </span>
          <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-300">{project.year}</span>
        </div>

        <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5 backdrop-blur-xl">
          <h3 className="text-xl font-semibold text-white">{project.title}</h3>
          <p className="mt-1 text-sm text-cyan-100/80">{project.titleCN}</p>
          <p className="mt-4 line-clamp-3 text-sm leading-6 text-slate-400">{project.summary}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="rounded-full bg-white/6 px-3 py-1 text-xs text-slate-300">
                {tag}
              </span>
            ))}
          </div>

          <Link
            to={`/projects/${project.slug}`}
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 hover:text-cyan-100"
          >
            Open project <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
