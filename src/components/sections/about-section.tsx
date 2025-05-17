"use client";

import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section id="about" className="py-20 w-full px-4 md:px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-lg text-muted-foreground">
          I&apos;m a developer who enjoys turning everyday annoyances into side
          projects. Infra, frontend, bots — if it&apos;s fun, I&apos;m in.
        </p>
      </motion.div>
    </section>
  );
}
