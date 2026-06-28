import SectionTitle from "../components/SectionTitle.jsx";
import { publications, theses } from "../data/publications.js";
import { Download, FileText } from "lucide-react";

export default function Resources() {
  const published = publications.filter((item) => item.status === "Published");
  const submitted = publications.filter((item) => item.status !== "Published");

  return (
    <main className="mx-auto max-w-7xl px-6 pb-24 pt-32">
      <SectionTitle
        eyebrow="Resources"
        title="Download center for papers, theses, videos, and citation files."
        description="Keep this page clean and carefully controlled. Do not publish manuscripts, figures, or datasets without permission from all relevant authors."
      />

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-white">Published Papers</h2>
        <div className="mt-6 grid gap-4">
          {published.map((item) => (
            <div key={item.id} className="glass-soft flex flex-col gap-4 rounded-3xl p-5 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="text-sm text-cyan-200">{item.year} · {item.shortVenue}</div>
                <h3 className="mt-1 font-semibold text-white">{item.title}</h3>
                <p className="mt-1 text-sm text-slate-400">{item.titleCN}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {item.pdf && (
                  <a href={item.pdf} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-4 py-2 text-sm font-semibold text-slate-950">
                    <Download size={16} /> PDF
                  </a>
                )}
                {item.doi && (
                  <a href={item.doi} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-slate-200">
                    DOI
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-white">Submitted / In-Progress Works</h2>
        <div className="mt-6 grid gap-4">
          {submitted.map((item) => (
            <div key={item.id} className="glass-soft rounded-3xl p-5">
              <div className="text-sm text-amber-200">{item.year} · {item.status}</div>
              <h3 className="mt-1 font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-400">Full text is not released publicly before acceptance or author approval.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-white">Master Theses</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {theses.map((item) => (
            <a key={item.title} href={item.url} target="_blank" rel="noreferrer" className="glass-soft rounded-3xl p-5 hover:border-cyan-300/40">
              <FileText className="mb-4 text-cyan-200" />
              <h3 className="font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-400">Author: {item.author}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-white/7 px-3 py-1 text-xs text-slate-300">{tag}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
