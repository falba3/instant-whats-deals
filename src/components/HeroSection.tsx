import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-whatsapp-shopping.jpg";

const HeroSection = () => {
  const scrollToCategories = () => {
    document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 hero-gradient" />
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="space-y-6 animate-in fade-in duration-700">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Get the Hottest{" "}
            <span className="gradient-text bg-gradient-to-r from-white to-Telegram-light bg-clip-text text-transparent">
              Deals & Drops
            </span>{" "}
            — First
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            We deliver personalized MiniStores instantly to your Telegram.{" "}
            <span className="font-semibold text-Telegram-light">Be first, not last.</span>
          </p>
          
          <div className="pt-4">
            <Button 
              size="lg" 
              variant="hero"
              onClick={scrollToCategories}
              className="text-lg px-8 py-4 h-auto"
            >
              Start Free
            </Button>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default HeroSection;