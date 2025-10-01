"use client"

import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { ContactSection } from "@/components/sections/contact-section"
import { Footer } from "@/components/footer"
import { ThemeToggle } from "@/components/theme-toggle"
import type { Project } from "@/components/sections/projects-section"
import { FaDocker } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiKubernetes, SiTypescript } from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa";

export default function Home() {
  const skills = [
    { name: "Docker", icon: <FaDocker /> },
    { name: "Next.js", icon: <RiNextjsFill />},
    { name: "Kubernetes", icon: <SiKubernetes /> },
    { name: "React Native", icon: <FaReact /> },
    { name: "TypeScript", icon:<SiTypescript /> },
    { name: "Node.js", icon: <FaNodeJs /> },
  ]

const projects: Project[] = [
  {
    id: 1,
    title: "TripleWin",
    description: "A minimalist Tic-Tac-Toe game powered by the Minimax algorithm. Built with Next.js and Supabase, it features smooth UI and challenging AI gameplay.",
    shortDescription: "AI Tic-Tac-Toe with Minimax",
    techStack: ["Next.js", "TypeScript", "Supabase", "shadcn/ui"],
    image: "/projects/triplewin.png", 
    URL: "https://triplewin.pkopko.jp"
  },
    {
    id: 2,
    title: "EarthRader",
    description: "EarthRader is a web application that provides real-time earthquake information in Japan. Built with Next.js and Leaflet, it offers a user-friendly interface to stay informed about seismic activities.",
    shortDescription: "japanese earthquake information app",
    techStack: ["Next.js", "TypeScript", "Leaflet"],
    image: "/projects/earthrader.png", 
    URL: "https://earthrader.pkopko.jp"
  }
]


const typingTexts = [
  "I tame servers with Kubernetes and Ubuntu",
  "I let shell scripts and Python handle all the boring stuff",
  "My birthday is October 5th — mark your calendars 🐙",
  "I'm automating my life, one API call at a time",
]



  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <ThemeToggle />
      <HeroSection typingTexts={typingTexts} />
      <AboutSection />
      <SkillsSection skills={skills} />
      <ProjectsSection projects={projects} />
      <ContactSection />
      <Footer />
    </main>
  )
}
