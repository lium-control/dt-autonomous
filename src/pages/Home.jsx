import { motion } from "motion/react";
import { ArrowRight, BookOpen, Film, Network, Rocket } from "lucide-react";
import ButtonLink from "../components/ButtonLink.jsx";
import HeroVisual from "../components/HeroVisual.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import Timeline from "../components/Timeline.jsx";
import { projects } from "../data/projects.js";
import { publications } from "../data/publications.js";

const metrics = [
  { value: "14+", label: "Research Works" },
  { value: "10+", label: "SCI Journal Papers" },
  { value: "4", label: "Master Theses" },
  { value: "6+", label: "Unmanned Platforms" },
];

export default function Home() {
  const featured = projects.filter((p) =>
    ["uav-obstacle-avoidance", "autonomous-driving", "autonomous-parking", "car-like-ugv"].includes(p.slug)
  );

  return (
    <main>
      <section className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 pb-20 pt-32 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/8 px-4 py-2 text-sm text-cyan-100"
          >
            <Rocket size={16} />
            Digital Twin · Planning · Control · Multi-Domain Robotics
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.75 }}
            className="neon-text text-5xl font-semibold tracking-[-0.05em] text-white md:text-7xl"
          >
            Digital Twin Autonomous Unmanned Systems
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16, duration: 0.75 }}
            className="mt-6 max-w-2xl text-lg leading-8 text-slate-300"
          >
            Virtual–Physical Synchronization, Motion Planning, and Robust Control for ground,
            aerial, marine, and legged unmanned systems.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24, duration: 0.75 }}
            className="mt-3 max-w-2xl text-base leading-7 text-cyan-100/70"
          >
            面向多域自主无人系统的数字孪生建模、虚实同步、运动规划、决策控制与鲁棒跟踪研究成果展示。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32, duration: 0.75 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <ButtonLink to="/projects">Explore Projects <ArrowRight className="ml-2" size={16} /></ButtonLink>
            <ButtonLink to="/publications" variant="secondary">View Publications</ButtonLink>
            <ButtonLink to="/gallery" variant="secondary">Watch Videos</ButtonLink>
          </motion.div>
        </div>

        <HeroVisual />
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-4 md:grid-cols-4">
          {metrics.map((item) => (
            <div key={item.label} className="glass rounded-3xl p-6">
              <div className="text-4xl font-semibold text-cyan-200">{item.value}</div>
              <div className="mt-2 text-sm uppercase tracking-[0.18em] text-slate-400">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle
          eyebrow="Research Vision"
          title="From physical robots to intelligent virtual–physical closed loops."
          description="The research line evolves from digital twin system construction to virtual–physical synchronization, planning-control integration, communication-delay compensation, and multi-domain autonomous deployment."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            { icon: Network, title: "Digital Twin Modeling", text: "Build virtual counterparts for robot platforms, environments, states, and control interfaces." },
            { icon: Rocket, title: "Planning and Control", text: "Integrate trajectory planning, collision avoidance, feedforward-feedback control, MPC, and robust tracking." },
            { icon: Film, title: "Multi-Domain Deployment", text: "Extend the framework from wheeled robots to UAVs, autonomous vehicles, USVs, and quadruped robots." },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="glass-soft rounded-3xl p-6">
                <Icon className="mb-5 text-cyan-200" size={30} />
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{item.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle
          eyebrow="Featured Projects"
          title="A platform universe for digital twin autonomous systems."
          description="Each project page links representative papers, videos, figures, downloadable resources, and technical highlights."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featured.map((project) => <ProjectCard key={project.slug} project={project} />)}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle
          eyebrow="Publication Timeline"
          title="A continuous research trajectory from 2024 to 2026."
          description={`${publications.length} works are organized by research development order, platform type, venue, and project direction.`}
        />
        <Timeline />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="glass relative overflow-hidden rounded-[2rem] p-8 md:p-12">
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-cyan-300/20 blur-3xl" />
          <BookOpen className="mb-6 text-cyan-200" size={34} />
          <h2 className="max-w-4xl text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Papers, theses, videos, framework figures, and BibTeX in one curated research portal.
          </h2>
          <p className="mt-5 max-w-3xl text-slate-400">
            Use the Resources page as a lightweight download center. For manuscripts under review, keep public pages
            available while releasing full PDFs only after acceptance.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink to="/resources">Open Resources</ButtonLink>
            <ButtonLink to="/roadmap" variant="secondary">See Roadmap</ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}
