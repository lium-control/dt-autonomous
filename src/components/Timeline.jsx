import { publications } from "../data/publications.js";

export default function Timeline() {
  const publishedAndSelected = publications
    .filter((item) => ["Published", "Submitted", "In Progress"].includes(item.status))
    .sort((a, b) => a.year - b.year);

  return (
    <div className="relative mt-12">
      <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-cyan-300 via-violet-300 to-transparent md:left-1/2" />
      <div className="grid gap-7">
        {publishedAndSelected.map((item, index) => (
          <div
            key={item.id}
            className={`relative grid gap-5 md:grid-cols-2 ${index % 2 === 0 ? "" : "md:[&>*:first-child]:col-start-2"}`}
          >
            <div className="glass-soft ml-10 rounded-3xl p-5 md:ml-0">
              <div className="mb-3 flex flex-wrap gap-2">
                <span className="rounded-full bg-cyan-300/12 px-3 py-1 text-xs text-cyan-200">{item.year}</span>
                <span className="rounded-full bg-white/8 px-3 py-1 text-xs text-slate-300">{item.shortVenue}</span>
                <span className="rounded-full bg-white/8 px-3 py-1 text-xs text-slate-300">{item.status}</span>
              </div>
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-cyan-100/75">{item.titleCN}</p>
              <p className="mt-3 text-sm text-slate-400">{item.platform}</p>
            </div>
            <div className="absolute left-4 top-7 h-3 w-3 -translate-x-1/2 rounded-full bg-cyan-200 shadow-[0_0_22px_rgba(34,211,238,0.75)] md:left-1/2" />
          </div>
        ))}
      </div>
    </div>
  );
}
