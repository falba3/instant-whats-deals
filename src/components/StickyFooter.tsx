import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const StickyFooter = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky footer after scrolling 100vh
      const scrolled = window.scrollY > window.innerHeight;
      setIsVisible(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToRegistration = () => {
    document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white/95 backdrop-blur-sm border-t border-border shadow-lg">
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-sm md:text-base truncate">
            Ready for personalized deals?
          </p>
          <p className="text-xs md:text-sm text-muted-foreground truncate">
            Join 10K+ users getting exclusive MiniStores
          </p>
        </div>
        
        <div className="flex items-center gap-2">
          <Button 
            variant="cta" 
            size="sm"
            onClick={scrollToRegistration}
            className="whitespace-nowrap"
          >
            Start Free
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsVisible(false)}
            className="p-2"
          >
            <X size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StickyFooter;