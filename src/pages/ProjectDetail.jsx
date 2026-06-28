import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ExternalLink, FileText, Play } from "lucide-react";
import { projects } from "../data/projects.js";
import { publications } from "../data/publications.js";
import SectionTitle from "../components/SectionTitle.jsx";
import PublicationCard from "../components/PublicationCard.jsx";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <main className="mx-auto max-w-4xl px-6 py-32">
        <h1 className="text-3xl font-semibold text-white">Project not found.</h1>
        <Link className="mt-6 inline-flex text-cyan-200" to="/projects">Back to projects</Link>
      </main>
    );
  }

  const related = publications.filter((item) => project.publications.includes(item.id));

  return (
    <main className="mx-auto max-w-7xl px-6 pb-24 pt-32">
      <Link to="/projects" className="mb-8 inline-flex items-center gap-2 text-sm text-cyan-200 hover:text-cyan-100">
        <ArrowLeft size={16} /> Back to Projects
      </Link>

      <section className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
        <div>
          <div className="mb-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-cyan-300/12 px-3 py-1 text-xs font-semibold text-cyan-200">{project.category}</span>
            <span className="rounded-full bg-white/8 px-3 py-1 text-xs text-slate-300">{project.year}</span>
          </div>
          <h1 className="neon-text text-4xl font-semibold tracking-tight text-white md:text-6xl">{project.title}</h1>
          <p className="mt-4 text-xl text-cyan-100/75">{project.titleCN}</p>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{project.summary}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="glass relative overflow-hidden rounded-[2rem] p-5">
          <div className="aspect-video rounded-3xl border border-white/10 bg-[radial-gradient(circle_at_35%_35%,rgba(34,211,238,0.2),transparent_35%),radial-gradient(circle_at_75%_65%,rgba(168,85,247,0.22),transparent_38%),linear-gradient(135deg,rgba(15,23,42,0.92),rgba(2,6,23,0.96))]">
            <div className="flex h-full flex-col items-center justify-center text-center">
              <Play className="mb-4 text-cyan-200" size={42} />
              <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Hero media placeholder</p>
              <p className="mt-2 text-xs text-slate-500">Put video at {project.video}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20 grid gap-6 lg:grid-cols-3">
        <div className="glass rounded-3xl p-7 lg:col-span-1">
          <h2 className="text-2xl font-semibold text-white">Research Problem</h2>
          <p className="mt-4 leading-7 text-slate-400">{project.problem}</p>
        </div>
        <div className="glass rounded-3xl p-7 lg:col-span-2">
          <h2 className="text-2xl font-semibold text-white">Method Overview</h2>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {project.methods.map((method) => (
              <div key={method} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300">
                {method}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-14 grid gap-6 lg:grid-cols-2">
        <div className="glass-soft rounded-3xl p-7">
          <h2 className="text-2xl font-semibold text-white">Digital Twin Framework</h2>
          <div className="mt-6 grid gap-3">
            {["Physical System", "Virtual Twin", "State Synchronization", "Planning Module", "Control Module", "Evaluation and Feedback"].map((step, index) => (
              <div key={step} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-300/12 text-sm font-semibold text-cyan-200">
                  {index + 1}
                </div>
                <div className="text-sm text-slate-300">{step}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-soft rounded-3xl p-7">
          <h2 className="text-2xl font-semibold text-white">Expected Outcomes</h2>
          <div className="mt-6 grid gap-3">
            {project.outcomes.map((outcome) => (
              <div key={outcome} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-6 text-slate-300">
                {outcome}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-20">
        <SectionTitle eyebrow="Related Publications" title="Representative papers and resources." />
        <div className="mt-8 grid gap-5">
          {related.map((item) => <PublicationCard key={item.id} item={item} />)}
        </div>
      </section>

      <section className="mt-20">
        <SectionTitle eyebrow="Media and Downloads" title="Replace placeholders with real figures, GIFs, and videos." />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <a href={project.video} target="_blank" rel="noreferrer" className="glass-soft rounded-3xl p-6 hover:border-cyan-300/40">
            <Play className="mb-5 text-cyan-200" />
            <h3 className="font-semibold text-white">Demo Video</h3>
            <p className="mt-2 text-sm text-slate-400">Upload MP4 to public/videos and update data/projects.js.</p>
          </a>
          {related[0]?.pdf ? (
            <a href={related[0].pdf} target="_blank" rel="noreferrer" className="glass-soft rounded-3xl p-6 hover:border-cyan-300/40">
              <FileText className="mb-5 text-cyan-200" />
              <h3 className="font-semibold text-white">Paper PDF</h3>
              <p className="mt-2 text-sm text-slate-400">Link to published PDF or local public file.</p>
            </a>
          ) : (
            <div className="glass-soft rounded-3xl p-6">
              <FileText className="mb-5 text-amber-200" />
              <h3 className="font-semibold text-white">Paper PDF</h3>
              <p className="mt-2 text-sm text-slate-400">Release after acceptance or keep “available upon request”.</p>
            </div>
          )}
          {related[0]?.doi && (
            <a href={related[0].doi} target="_blank" rel="noreferrer" className="glass-soft rounded-3xl p-6 hover:border-cyan-300/40">
              <ExternalLink className="mb-5 text-cyan-200" />
              <h3 className="font-semibold text-white">DOI / Publisher</h3>
              <p className="mt-2 text-sm text-slate-400">Open official publisher page.</p>
            </a>
          )}
        </div>
      </section>
    </main>
  );
}
