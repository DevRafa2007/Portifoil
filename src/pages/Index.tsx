import CustomCursor from '@/components/CustomCursor';
import BackgroundParticles from '@/components/BackgroundParticles';
import TerminalHero from '@/components/TerminalHero';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Custom Cursor */}
      <CustomCursor />
      
      {/* Animated Background */}
      <BackgroundParticles />
      
      {/* Main Content */}
      <main className="relative z-10">
        <TerminalHero />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;