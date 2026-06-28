import SectionTitle from "../components/SectionTitle.jsx";
import { team } from "../data/team.js";

export default function Team() {
  return (
    <main className="mx-auto max-w-7xl px-6 pb-24 pt-32">
      <SectionTitle
        eyebrow="Team and Contributors"
        title="A research lineage organized by platforms and technical themes."
        description="Replace this page with official laboratory names, photos, emails, personal pages, and authorized contributor information."
      />

      <div className="mt-12 grid gap-10">
        {team.map((group) => (
          <section key={group.group}>
            <h2 className="text-2xl font-semibold text-white">{group.group}</h2>
            <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {group.members.map((member) => (
                <div key={member.name} className="glass-soft rounded-3xl p-6">
                  <div className="mb-5 h-16 w-16 rounded-2xl bg-gradient-to-br from-cyan-300/30 to-violet-400/30 ring-1 ring-white/10" />
                  <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                  <p className="mt-1 text-sm text-cyan-100/75">{member.role}</p>
                  <p className="mt-4 text-sm leading-6 text-slate-400">{member.focus}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
