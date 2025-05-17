"use client"
import type { JSX } from "react"
import { motion } from "framer-motion"

interface SkillCardProps {
  name: string
  icon: JSX.Element
  index: number
}

export default function SkillCard({ name, icon, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="bg-background rounded-lg p-4 shadow-sm flex flex-col items-center justify-center text-center border border-border"
    >
      <span className="text-3xl mb-2">{icon}</span>
      <h3 className="font-medium">{name}</h3>
    </motion.div>
  )
}
