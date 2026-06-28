import SectionTitle from "../components/SectionTitle.jsx";
import { platforms } from "../data/platforms.js";

export default function Platforms() {
  return (
    <main className="mx-auto max-w-7xl px-6 pb-24 pt-32">
      <SectionTitle
        eyebrow="Platforms"
        title="A multi-domain robot platform matrix."
        description="The laboratory direction covers ground, aerial, marine, and legged systems, forming a scalable testbed for digital twin planning and control."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {platforms.map((platform, index) => (
          <div key={platform.name} className="glass relative overflow-hidden rounded-[2rem] p-7">
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-cyan-300/15 blur-3xl" />
            <div className="text-sm uppercase tracking-[0.25em] text-cyan-300">Platform {index + 1}</div>
            <h2 className="mt-4 text-3xl font-semibold text-white">{platform.name}</h2>
            <p className="mt-4 leading-7 text-slate-400">{platform.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {platform.systems.map((sys) => (
                <span key={sys} className="rounded-full bg-white/7 px-3 py-1 text-sm text-slate-300">{sys}</span>
              ))}
            </div>
            <div className="mt-8 h-52 rounded-3xl border border-white/10 bg-[radial-gradient(circle_at_30%_30%,rgba(34,211,238,0.22),transparent_36%),radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.2),transparent_38%),linear-gradient(135deg,rgba(15,23,42,0.95),rgba(2,6,23,0.96))]">
              <div className="flex h-full items-center justify-center text-center text-sm uppercase tracking-[0.25em] text-slate-500">
                Replace with platform photo / simulation screenshot / GIF
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
