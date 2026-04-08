import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ClientsSection from "@/components/ClientsSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ClientsSection />
      <GallerySection />
      <TestimonialsSection />
      <FooterSection />
    </div>
  );
};

export default Index;
