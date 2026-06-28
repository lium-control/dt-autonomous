import SectionTitle from "../components/SectionTitle.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import { projects } from "../data/projects.js";

export default function Projects() {
  return (
    <main className="mx-auto max-w-7xl px-6 pb-24 pt-32">
      <SectionTitle
        eyebrow="Projects"
        title="Research projects organized by unmanned system platform."
        description="Each project card opens a detailed page with research problem, digital twin framework, methods, outcomes, representative publications, and media placeholders."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => <ProjectCard key={project.slug} project={project} />)}
      </div>
    </main>
  );
}
