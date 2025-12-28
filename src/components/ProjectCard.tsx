import Image from "next/image";
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  tags: string[];
  githubUrl: string;
  demoUrl: string;
}

export function ProjectCard({
  title,
  description,
  image,
  imageAlt,
  tags,
  githubUrl,
  demoUrl,
}: ProjectCardProps) {
  return (
    <div className="group relative p-6 md:p-8 border-2 border-gray-400 rounded-lg hover:border-gray-600 transition-colors duration-300 shrink-0 w-80 md:w-96">
      <div className="mb-4">
        <Image
          src={image}
          alt={imageAlt}
          width={300}
          height={200}
          className="w-full h-48 object-cover rounded-lg"
        />
      </div>
      <h3 className="text-2xl md:text-3xl font-bold mb-3">{title}</h3>
      <p className="text-base md:text-lg text-gray-400 mb-4 break-words overflow-hidden">
        {description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 text-xs md:text-sm bg-gray-200 text-gray-700 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        <a
          href={githubUrl}
          className="flex items-center gap-2 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <Github size={20} />
          <span className="text-sm">GitHub</span>
        </a>
        <a
          href={demoUrl}
          className="flex items-center gap-2 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <ExternalLink size={20} />
          <span className="text-sm">Demo</span>
        </a>
      </div>
    </div>
  );
}

