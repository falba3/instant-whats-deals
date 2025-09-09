import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import all category images
import sneakerDropsImg from "@/assets/sneaker-drops.jpg";
import flashFashionImg from "@/assets/flash-fashion.jpg";
import luxuryOutletImg from "@/assets/luxury-outlet.jpg";
import restocksImg from "@/assets/restocks.jpg";
import weekendEscapesImg from "@/assets/weekend-escapes.jpg";
import bucketListImg from "@/assets/bucket-list.jpg";
import vipEventsImg from "@/assets/vip-events.jpg";
import foodieExperiencesImg from "@/assets/foodie-experiences.jpg";
import newTechImg from "@/assets/new-tech.jpg";
import gadgetsImg from "@/assets/gadgets.jpg";
import gamingGearImg from "@/assets/gaming-gear.jpg";
import tinyHomeImg from "@/assets/tiny-home.jpg";
import seasonalHomeImg from "@/assets/seasonal-home.jpg";
import gardenKitsImg from "@/assets/garden-kits.jpg";
import beautyMustTriesImg from "@/assets/beauty-must-tries.jpg";
import wellnessRetreatsImg from "@/assets/wellness-retreats.jpg";
import fitnessGearImg from "@/assets/fitness-gear.jpg";
import collectiblesImg from "@/assets/collectibles.jpg";
import diyMasterpiecesImg from "@/assets/diy-masterpieces.jpg";
import petPerfectionImg from "@/assets/pet-perfection.jpg";

const categories = [
  {
    id: "polos-el-capote",
    name: "Polos El Capote",
    tagline: "Encuentra el look ideal en El Capote",
    image: sneakerDropsImg,
    preview: "👕 Polos de calidad premium disponibles",
    url: "https://telegram.me/ElCapoteBot",
    available: true
  },
  {
    id: "plagas-iberica",
    name: "Plagas Ibérica",
    tagline: "Control de Plagas en Madrid",
    image: flashFashionImg,
    preview: "🐛 Servicios profesionales de control de plagas",
    url: "https://telegram.me/PlagasIbericaBot",
    available: true
  },
  {
    id: "europa-press",
    name: "Europa Press",
    tagline: "Noticias y actualidad de España y del Mundo",
    image: luxuryOutletImg,
    preview: "📰 Las últimas noticias al instante",
    url: "https://telegram.me/EuropaPressBot",
    available: true
  },
  {
    id: "restocks",
    name: "Sold-Out Restocks",
    tagline: "Coming Soon",
    image: restocksImg,
    preview: "📦 Próximamente disponible",
    available: false
  },
  {
    id: "weekend-escapes",
    name: "$99 Weekend Escapes",
    tagline: "Coming Soon",
    image: weekendEscapesImg,
    preview: "🌴 Próximamente disponible",
    available: false
  },
  {
    id: "bucket-list",
    name: "Bucket List Adventures",
    tagline: "Coming Soon",
    image: bucketListImg,
    preview: "🗺️ Próximamente disponible",
    available: false
  },
  {
    id: "vip-events",
    name: "VIP Event Access",
    tagline: "Coming Soon",
    image: vipEventsImg,
    preview: "🎤 Próximamente disponible",
    available: false
  },
  {
    id: "foodie-experiences",
    name: "Secret Foodie Experiences",
    tagline: "Coming Soon",
    image: foodieExperiencesImg,
    preview: "🍽️ Próximamente disponible",
    available: false
  },
  {
    id: "new-tech",
    name: "New Tech First",
    tagline: "Coming Soon",
    image: newTechImg,
    preview: "📱 Próximamente disponible",
    available: false
  },
  {
    id: "gadgets",
    name: "Game-Changer Gadgets",
    tagline: "Coming Soon",
    image: gadgetsImg,
    preview: "⚡ Próximamente disponible",
    available: false
  },
  {
    id: "gaming-gear",
    name: "Pro Gaming Gear",
    tagline: "Coming Soon",
    image: gamingGearImg,
    preview: "🎮 Próximamente disponible",
    available: false
  },
  {
    id: "tiny-home",
    name: "Tiny Home Upgrades",
    tagline: "Coming Soon",
    image: tinyHomeImg,
    preview: "🛋️ Próximamente disponible",
    available: false
  },
  {
    id: "seasonal-home",
    name: "Seasonal Home Glow-Ups",
    tagline: "Coming Soon",
    image: seasonalHomeImg,
    preview: "🍂 Próximamente disponible",
    available: false
  },
  {
    id: "garden-kits",
    name: "Garden-to-Table Kits",
    tagline: "Coming Soon",
    image: gardenKitsImg,
    preview: "🌱 Próximamente disponible",
    available: false
  },
  {
    id: "beauty-must-tries",
    name: "New Beauty Must-Tries",
    tagline: "Coming Soon",
    image: beautyMustTriesImg,
    preview: "💖 Próximamente disponible",
    available: false
  },
  {
    id: "wellness-retreats",
    name: "Wellness Retreats",
    tagline: "Coming Soon",
    image: wellnessRetreatsImg,
    preview: "🧘 Próximamente disponible",
    available: false
  },
  {
    id: "fitness-gear",
    name: "Fitness Gear You'll Use",
    tagline: "Coming Soon",
    image: fitnessGearImg,
    preview: "🏃 Próximamente disponible",
    available: false
  },
  {
    id: "collectibles",
    name: "Rare Collectibles",
    tagline: "Coming Soon",
    image: collectiblesImg,
    preview: "🎨 Próximamente disponible",
    available: false
  },
  {
    id: "diy-masterpieces",
    name: "DIY Masterpieces",
    tagline: "Coming Soon",
    image: diyMasterpiecesImg,
    preview: "🎯 Próximamente disponible",
    available: false
  },
  {
    id: "pet-perfection",
    name: "Pet Perfection",
    tagline: "Coming Soon",
    image: petPerfectionImg,
    preview: "🐾 Próximamente disponible",
    available: false
  }
];

const CategoryGrid = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const handleCategoryClick = (category: any) => {
    if (category.available && category.url) {
      window.open(category.url, '_blank');
    } else if (category.available) {
      toggleCategory(category.id);
    }
    // Do nothing for unavailable categories
  };

  const scrollToRegistration = () => {
    document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 px-4 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Choose Your <span className="gradient-text">Passions</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Select the categories you love and get instant alerts when deals drop
          </p>
          {selectedCategories.length > 0 && (
            <div className="inline-flex items-center gap-2 bg-whatsapp/10 text-whatsapp px-4 py-2 rounded-full">
              <Check size={16} />
              {selectedCategories.length} categories selected
            </div>
          )}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-12">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`relative cursor-pointer group transition-all duration-300 ${
                selectedCategories.includes(category.id)
                  ? 'ring-2 ring-whatsapp shadow-lg scale-105'
                  : category.available 
                    ? 'hover:shadow-lg hover:scale-102'
                    : 'opacity-60 cursor-not-allowed'
              }`}
              onClick={() => handleCategoryClick(category)}
              onMouseEnter={() => setHoveredCategory(category.id)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              {/* Category Card */}
              <div className="relative overflow-hidden rounded-2xl aspect-square">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                  <h3 className="font-bold text-sm mb-1 leading-tight">
                    {category.name}
                  </h3>
                  <p className="text-xs opacity-90">
                    {category.tagline}
                  </p>
                </div>
                
                {/* Coming Soon overlay */}
                {!category.available && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <div className="bg-white/90 px-3 py-1 rounded-full">
                      <span className="text-xs font-semibold text-gray-700">Coming Soon</span>
                    </div>
                  </div>
                )}
                
                {/* Selection indicator */}
                {selectedCategories.includes(category.id) && (
                  <div className="absolute top-2 right-2 w-6 h-6 bg-whatsapp rounded-full flex items-center justify-center">
                    <Check size={14} className="text-white" />
                  </div>
                )}
                
                {/* Preview on hover */}
                {hoveredCategory === category.id && (
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 -translate-y-full z-10">
                    <div className="bg-white rounded-lg shadow-xl p-3 min-w-64 border">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-6 bg-whatsapp rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">MS</span>
                        </div>
                        <span className="font-semibold text-sm">MiniStores</span>
                      </div>
                      <p className="text-xs text-gray-600">{category.preview}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {selectedCategories.length > 0 && (
          <div className="text-center">
            <Button
              size="lg"
              variant="cta"
              onClick={scrollToRegistration}
              className="text-lg px-8 py-4 h-auto"
            >
              Get My MiniStores ({selectedCategories.length} selected)
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CategoryGrid;