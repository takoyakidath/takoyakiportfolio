"use client"

import { motion } from "framer-motion"
import dynamic from "next/dynamic"
import ScrollIndicator from "@/components/scroll-indicator"

// クライアントサイドのみでレンダリングするために dynamic import を使用
const TypewriterComponent = dynamic(() => import("@/components/typewriter"), {
  ssr: false,
  loading: () => <div className="h-8 w-64 bg-muted/20 animate-pulse rounded"></div>,
})

interface HeroSectionProps {
  typingTexts: string[]
}

export function HeroSection({ typingTexts }: HeroSectionProps) {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen w-full px-4 md:px-6 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 font-montserrat gradient-text tracking-tight">
          takoyakidath
        </h1>
        <div className="h-16 md:h-20 flex items-center justify-center">
          <TypewriterComponent texts={typingTexts} />
        </div>
      </motion.div>
      <ScrollIndicator />
    </section>
  )
}
