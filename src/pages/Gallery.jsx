import SectionTitle from "../components/SectionTitle.jsx";
import { mediaItems } from "../data/media.js";
import { Play } from "lucide-react";

export default function Gallery() {
  return (
    <main className="mx-auto max-w-7xl px-6 pb-24 pt-32">
      <SectionTitle
        eyebrow="Media Gallery"
        title="Videos, GIFs, figures, and experimental highlights."
        description="This page is designed as the visual showroom. Replace each placeholder with real demos from CARLA, physical robots, UAV obstacle avoidance, autonomous parking, and synchronization experiments."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {mediaItems.map((item) => (
          <article key={item.title} className="glass group overflow-hidden rounded-[2rem] p-4">
            <div className="relative aspect-video overflow-hidden rounded-3xl border border-white/10 bg-[radial-gradient(circle_at_30%_25%,rgba(34,211,238,0.25),transparent_34%),radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.22),transparent_38%),linear-gradient(135deg,rgba(15,23,42,0.95),rgba(2,6,23,0.96))]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-cyan-300/15 ring-1 ring-cyan-200/30 transition group-hover:scale-110">
                  <Play className="text-cyan-100" />
                </div>
              </div>
              <div className="absolute bottom-3 left-3 rounded-full bg-slate-950/70 px-3 py-1 text-xs text-slate-300 backdrop-blur">
                {item.category}
              </div>
            </div>
            <div className="p-3">
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-1 text-sm text-cyan-100/75">{item.project}</p>
              <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-400">{item.description}</p>
              <a className="mt-5 inline-flex text-sm font-semibold text-cyan-200 hover:text-cyan-100" href={item.src} target="_blank" rel="noreferrer">
                Open media
              </a>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
