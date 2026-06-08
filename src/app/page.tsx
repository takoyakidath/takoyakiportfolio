import { AboutSection } from "@/components/sections/AboutSection";
import { CareerSection } from "@/components/sections/CareerSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <CareerSection />
      <ContactSection />
    </div>
  );
}
