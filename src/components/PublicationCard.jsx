import { ExternalLink, FileText, FolderOpen } from "lucide-react";
import { Link } from "react-router-dom";

export default function PublicationCard({ item }) {
  const isSubmitted = item.status !== "Published";
  return (
    <article className="glass-soft rounded-3xl p-5 transition hover:border-cyan-200/35 hover:bg-slate-900/65">
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-cyan-300/12 px-3 py-1 text-xs font-semibold text-cyan-200">
          {item.year}
        </span>
        <span className="rounded-full bg-violet-300/12 px-3 py-1 text-xs font-semibold text-violet-200">
          {item.shortVenue}
        </span>
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            isSubmitted ? "bg-amber-300/12 text-amber-200" : "bg-emerald-300/12 text-emerald-200"
          }`}
        >
          {item.status}
        </span>
        <span className="rounded-full bg-white/7 px-3 py-1 text-xs text-slate-300">{item.platform}</span>
      </div>

      <h3 className="mt-4 text-lg font-semibold leading-snug text-white">{item.title}</h3>
      <p className="mt-2 text-sm leading-6 text-cyan-100/75">{item.titleCN}</p>
      <p className="mt-3 text-sm text-slate-400">{item.authors}</p>
      <p className="mt-1 text-sm text-slate-500">{item.venue}, {item.detail}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {item.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-slate-400">
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap gap-3">
        {item.doi && (
          <a
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs font-semibold text-slate-200 hover:border-cyan-300/50 hover:text-cyan-200"
            href={item.doi}
            target="_blank"
            rel="noreferrer"
          >
            DOI <ExternalLink size={14} />
          </a>
        )}
        {item.pdf ? (
          <a
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs font-semibold text-slate-200 hover:border-cyan-300/50 hover:text-cyan-200"
            href={item.pdf}
            target="_blank"
            rel="noreferrer"
          >
            PDF <FileText size={14} />
          </a>
        ) : (
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-300/10 bg-amber-300/5 px-4 py-2 text-xs text-amber-200">
            PDF upon acceptance
          </span>
        )}
        <Link
          className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs font-semibold text-slate-200 hover:border-cyan-300/50 hover:text-cyan-200"
          to={item.project}
        >
          Project <FolderOpen size={14} />
        </Link>
      </div>
    </article>
  );
}
