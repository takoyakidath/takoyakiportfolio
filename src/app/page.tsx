import { SiteHeader } from "@/components/SiteHeader";
import { AboutSection } from "@/components/sections/AboutSection";
import { CareerSection } from "@/components/sections/CareerSection";
import {
  ContactSection,
  SiteFooter,
} from "@/components/sections/ContactSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
export default function Home() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        メインコンテンツへスキップ
      </a>
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <CareerSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
