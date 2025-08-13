import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import CategoryGrid from "@/components/CategoryGrid";
import RegistrationSection from "@/components/RegistrationSection";
import StickyFooter from "@/components/StickyFooter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <HowItWorks />
      <CategoryGrid />
      <RegistrationSection />
      <StickyFooter />
      <Footer />
    </main>
  );
};

export default Index;
