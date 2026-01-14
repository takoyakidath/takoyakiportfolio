import { ScrollDown } from "../ScrollDown";
import { SkillProgressBar } from "../SkillProgressBar";
import { skills } from "@/data/skills";

export function SkillsSection() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-16">
      <div className="flex flex-col items-center gap-6 sm:gap-8 md:gap-12 w-full max-w-7xl">
        <div className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold">Skills</div>
        <div className="w-full max-w-4xl border-b-2 border-gray-400"></div>
        <div className="w-full max-w-6xl flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-16">
          {skills.map((skill) => (
            <SkillProgressBar key={skill.name} skill={skill.name} percentage={skill.percentage} />
          ))}
        </div>
      </div>
    </div>
  );
}

