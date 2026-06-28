import { useMemo, useState } from "react";
import SectionTitle from "../components/SectionTitle.jsx";
import PublicationCard from "../components/PublicationCard.jsx";
import { publications } from "../data/publications.js";

const filters = ["All", "Published", "Submitted", "In Progress", "TVT", "TIE", "T-ITS", "UAV", "Autonomous Vehicle", "WMR"];

export default function Publications() {
  const [filter, setFilter] = useState("All");

  const list = useMemo(() => {
    return publications
      .filter((item) => {
        if (filter === "All") return true;
        return item.status === filter || item.shortVenue === filter || item.platform.includes(filter) || item.tags.includes(filter);
      })
      .sort((a, b) => b.year - a.year);
  }, [filter]);

  return (
    <main className="mx-auto max-w-7xl px-6 pb-24 pt-32">
      <SectionTitle
        eyebrow="Publications"
        title="A curated publication library for digital twin autonomous systems."
        description="Use filters to browse by status, venue, platform, and research topic. Published papers may link to DOI/PDF; submitted manuscripts should be released only after author approval."
      />

      <div className="mt-10 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              filter === f
                ? "bg-cyan-300 text-slate-950"
                : "border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-5">
        {list.map((item) => <PublicationCard key={item.id} item={item} />)}
      </div>
    </main>
  );
}
