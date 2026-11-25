import { Backdrop } from "@/components/Backdrop";
import { NavBar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutMe } from "@/components/AboutMe";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { EducationSection } from "@/components/EducationSection";
import { WorkSection } from "@/components/WorkSection";
import { Footer } from "@/components/Footer";

export const Home = () => {
  return (
    <div className="min-h-screen overflow-x-hidden text-foreground">
      <Backdrop />
      <NavBar />
      <main>
        <HeroSection />
        <AboutMe />
        <WorkSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};
