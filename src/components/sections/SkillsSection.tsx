import { skills } from "@/data/skills";
import { SkillProgressBar } from "../SkillProgressBar";

export function SkillsSection() {
  return (
    <div className="section-container">
      <div className="flex flex-col items-center gap-6 sm:gap-8 md:gap-12 w-full max-w-7xl">
        <div className="section-title">Skills</div>
        <div className="section-divider"></div>
        <div className="w-full max-w-6xl flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-16">
          {skills.map((skill) => (
            <SkillProgressBar
              key={skill.name}
              skill={skill.name}
              percentage={skill.percentage}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
