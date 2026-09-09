import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectCard } from "../ProjectCard";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="projects-section"
      aria-labelledby="projects-title"
    >
      <div className="container section">
        <div className="section-label">
          <span>02 / SELECTED WORK</span>
          <span>アイデアを、かたちに。</span>
        </div>
        <div className="section-heading">
          <h2 id="projects-title" className="section-title" lang="en">
            Made with <em>curiosity.</em>
          </h2>
          <a
            className="text-link"
            href="https://github.com/takoyakidath?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            すべてのリポジトリ <ArrowUpRight size={17} aria-hidden="true" />
            <span className="sr-only">（新しいタブで開く）</span>
          </a>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
