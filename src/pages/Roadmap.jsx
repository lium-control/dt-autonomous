import SectionTitle from "../components/SectionTitle.jsx";

const layers = [
  {
    name: "Layer 1",
    title: "Physical Unmanned Systems",
    text: "WMR, OMR, car-like UGV, UAV, autonomous vehicle, USV, and quadruped robot.",
  },
  {
    name: "Layer 2",
    title: "Digital Twin Modeling",
    text: "Robot models, environmental models, virtual scenes, sensor states, and communication interfaces.",
  },
  {
    name: "Layer 3",
    title: "Virtual–Physical Synchronization",
    text: "State synchronization, mapping consistency, delay compensation, and virtual-physical error correction.",
  },
  {
    name: "Layer 4",
    title: "Planning and Control",
    text: "Trajectory planning, collision avoidance, MPC, tube MPC, feedforward-feedback control, and robust tracking.",
  },
  {
    name: "Layer 5",
    title: "Autonomous Deployment",
    text: "Navigation, narrow-corner traversal, intersection avoidance, UAV obstacle avoidance, urban driving, and parking.",
  },
];

export default function Roadmap() {
  return (
    <main className="mx-auto max-w-7xl px-6 pb-24 pt-32">
      <SectionTitle
        eyebrow="Research Roadmap"
        title="From virtual–physical modeling to autonomous intelligence."
        description="This roadmap turns digital twin from a keyword into a progressive research line: modeling, synchronization, planning, control, and multi-domain deployment."
      />

      <div className="mt-14 grid gap-5">
        {layers.map((layer, index) => (
          <div key={layer.name} className="glass-soft grid gap-6 rounded-3xl p-6 md:grid-cols-[180px_1fr]">
            <div>
              <div className="text-sm uppercase tracking-[0.25em] text-cyan-300">{layer.name}</div>
              <div className="mt-2 text-4xl font-semibold text-white">{String(index + 1).padStart(2, "0")}</div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-white">{layer.title}</h2>
              <p className="mt-3 text-slate-400">{layer.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 grid gap-6 lg:grid-cols-3">
        {[
          {
            title: "System Design",
            text: "Unit-level WMR and OMR studies establish the digital twin system architecture and virtual-physical mapping foundation.",
          },
          {
            title: "Scenario Intelligence",
            text: "UGV, UAV, urban-road AV, and parking studies push the twin toward dynamic, constrained, and safety-critical scenarios.",
          },
          {
            title: "Robust Extension",
            text: "Communication delay, USV disturbance rejection, and quadruped locomotion extend the framework toward harder physical worlds.",
          },
        ].map((item) => (
          <div key={item.title} className="glass rounded-3xl p-7">
            <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
            <p className="mt-4 text-sm leading-7 text-slate-400">{item.text}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
