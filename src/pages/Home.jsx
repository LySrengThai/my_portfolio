import StarBackground  from "@/components/StarBackground";
import ThemeToggle from "@/components/ThemeToggle";
import { NavBar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutMe } from "@/components/AboutMe";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { EducationSection } from "@/components/EducationSection";
import { Footer } from "@/components/Footer";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle*/}
      <ThemeToggle />
      {/* Background Effects */}
      <StarBackground />
      {/* Navbar */}
      <NavBar />
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutMe />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </main>


      {/* Footer */}
      <Footer />
    </div>
  );
};
