import { projects } from "@/data/projects";
import { ProjectCard } from "../ProjectCard";

export function ProjectsSection() {
  return (
    <div className="section-container">
      <div className="flex flex-col items-center gap-6 sm:gap-8 md:gap-12 w-full max-w-7xl">
        <div className="section-title">Projects</div>
        <div className="section-divider"></div>
        <div className="w-full max-w-6xl overflow-x-auto hidden-scrollbar">
          <div className="flex gap-4 sm:gap-6 md:gap-8 pb-4 px-2 sm:px-4 justify-center">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
