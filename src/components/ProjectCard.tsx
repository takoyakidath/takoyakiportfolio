import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

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
    <div className="card-hover group relative p-4 sm:p-6 md:p-8 shrink-0 w-[280px] sm:w-80 md:w-96 flex flex-col items-center">
      <div className="mb-4">
        <Image
          src={image}
          alt={imageAlt}
          width={300}
          height={200}
          className="w-full h-40 sm:h-48 object-cover rounded-lg"
        />
      </div>
      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 text-center">
        {title}
      </h3>
      <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-4 wrap-break-word overflow-hidden text-center">
        {description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4 justify-center">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2 sm:px-3 py-1 text-xs md:text-sm bg-gray-200 text-gray-700 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-3 sm:gap-4 justify-center">
        <a
          href={githubUrl}
          className="flex items-center gap-1.5 sm:gap-2 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <Github size={18} className="sm:w-5 sm:h-5" />
          <span className="text-xs sm:text-sm">GitHub</span>
        </a>
        <a
          href={demoUrl}
          className="flex items-center gap-1.5 sm:gap-2 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <ExternalLink size={18} className="sm:w-5 sm:h-5" />
          <span className="text-xs sm:text-sm">Demo</span>
        </a>
      </div>
    </div>
  );
}
