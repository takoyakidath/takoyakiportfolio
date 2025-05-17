"use client"

import { motion } from "framer-motion"
import SkillCard from "@/components/skill-card"
import type { JSX } from "react"

interface Skill {
  name: string
  icon: JSX.Element
}

interface SkillsSectionProps {
  skills: Skill[]
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section id="skills" className="py-20 w-full px-4 md:px-6 bg-muted/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl font-bold mb-10">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <SkillCard key={index} name={skill.name} icon={skill.icon} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
