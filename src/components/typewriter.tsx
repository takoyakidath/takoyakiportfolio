"use client"

import { Typewriter } from "react-simple-typewriter"
import { motion } from "framer-motion"

interface TypewriterProps {
  texts: string[]
}

export default function TypewriterComponent({ texts }: TypewriterProps) {
  return (
    <div className="min-h-[2rem] flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0.8 }}
        animate={{ opacity: 1 }}
        className="text-xl md:text-2xl font-medium text-muted-foreground"
      >
        <Typewriter words={texts} loop={0} cursor cursorStyle="|" typeSpeed={70} deleteSpeed={50} delaySpeed={1500} />
      </motion.div>
    </div>
  )
}
