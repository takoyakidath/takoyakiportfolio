import { ScrollDown } from "../ScrollDown";
import { ProjectCard } from "../ProjectCard";
import { projects } from "@/data/projects";

export function ProjectsSection() {
  return (
    <div className="relative h-screen flex items-center justify-center px-4 md:px-8 lg:px-16">
      <div className="flex flex-col items-center gap-8 md:gap-12 w-full max-w-7xl">
        <div className="text-4xl md:text-6xl lg:text-8xl font-bold">Projects</div>
        <div className="w-full max-w-4xl border-b-2 border-gray-400"></div>
        <div className="w-full max-w-6xl overflow-x-auto">
          <div className="flex gap-6 md:gap-8 pb-4">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </div>
      <ScrollDown />
    </div>
  );
}

