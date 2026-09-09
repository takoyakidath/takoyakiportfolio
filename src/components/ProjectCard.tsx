import { ArrowUpRight, Github } from "lucide-react";
import Image from "next/image";
import type { Project } from "@/data/projects";

export function ProjectCard({
  title,
  description,
  image,
  imageAlt,
  tags,
  githubUrl,
  demoUrl,
  index,
}: Project & { index: number }) {
  return (
    <article className={`project-card project-${index + 1}`}>
      <a
        href={demoUrl}
        className="project-preview"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${title} のデモを新しいタブで開く`}
      >
        <div className="project-preview-label">
          <span>
            {String(index + 1).padStart(2, "0")} /{" "}
            {index === 0 ? "WEB APPLICATION" : "WEB GAME"}
          </span>
          <ArrowUpRight size={20} aria-hidden="true" />
        </div>
        <div className="project-image-frame">
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(max-width: 700px) 85vw, (max-width: 1200px) 40vw, 460px"
            className="project-image"
          />
        </div>
        <span className="preview-caption">
          {index === 0
            ? "Stay informed. Stay aware."
            : "A simple game. A little strategy."}
        </span>
        <span className="preview-hover">
          デモを開く <ArrowUpRight size={18} aria-hidden="true" />
        </span>
      </a>
      <div className="project-info">
        <div className="project-title-row">
          <h3>{title}</h3>
          <span>PERSONAL PROJECT</span>
        </div>
        <p>{description}</p>
        <ul className="tags" aria-label="使用技術">
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <div className="project-links">
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            Live demo <ArrowUpRight size={16} aria-hidden="true" />
            <span className="sr-only">（新しいタブで開く）</span>
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            <Github size={16} aria-hidden="true" /> Source code
            <span className="sr-only">（新しいタブで開く）</span>
          </a>
        </div>
      </div>
    </article>
  );
}
