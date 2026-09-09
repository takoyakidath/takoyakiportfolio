import { ArrowUpRight, Blocks, Braces, Server } from "lucide-react";
import { skillGroups } from "@/data/skills";

const icons = [Braces, Server, Blocks];

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="section container skills-section"
      aria-labelledby="skills-title"
    >
      <div className="section-label">
        <span>03 / TOOLKIT</span>
        <span>つくるための、引き出し。</span>
      </div>
      <div className="skills-layout">
        <div>
          <h2 id="skills-title" className="section-title" lang="en">
            The right tools.
            <br />
            <em>Endless possibilities.</em>
          </h2>
          <p className="section-description">
            フロントエンドから、その裏側まで。
            <br />
            つくりたいものに合わせて技術を選び、
            <br />
            学びながら、試しながら。
          </p>
          <span className="learning-note">
            <span className="status-dot" /> ALWAYS LEARNING
          </span>
        </div>
        <div className="skill-groups">
          {skillGroups.map((group, index) => {
            const Icon = icons[index];
            return (
              <article className="skill-group" key={group.title}>
                <div className="skill-group-heading">
                  <span className="skill-icon">
                    <Icon size={21} strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <div>
                    <h3>{group.title}</h3>
                    <p>{group.description}</p>
                  </div>
                  <ArrowUpRight
                    className="skill-arrow"
                    size={18}
                    aria-hidden="true"
                  />
                </div>
                <ul className="tags">
                  {group.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
