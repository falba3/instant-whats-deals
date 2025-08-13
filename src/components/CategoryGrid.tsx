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
    id: "sneaker-drops",
    name: "Exclusive Sneaker Drops",
    tagline: "Drops You Can't Miss",
    image: sneakerDropsImg,
    preview: "🔥 Nike x Travis Scott drop — Only 200 pairs!"
  },
  {
    id: "flash-fashion",
    name: "Flash Fashion Finds",
    tagline: "Today Only Style",
    image: flashFashionImg,
    preview: "⏳ 24h flash sale — Oversized blazer $39."
  },
  {
    id: "luxury-outlet",
    name: "Luxury Outlet Steals",
    tagline: "Luxury for Less",
    image: luxuryOutletImg,
    preview: "💎 Gucci bag, 60% off, ships today."
  },
  {
    id: "restocks",
    name: "Sold-Out Restocks",
    tagline: "They're Back!",
    image: restocksImg,
    preview: "📦 PS5 restock now — tap to grab."
  },
  {
    id: "weekend-escapes",
    name: "$99 Weekend Escapes",
    tagline: "Getaway for Less",
    image: weekendEscapesImg,
    preview: "🌴 Miami 3 days, $99pp."
  },
  {
    id: "bucket-list",
    name: "Bucket List Adventures",
    tagline: "Dream Trips Await",
    image: bucketListImg,
    preview: "🗺️ Safari in Kenya, 2 spots left."
  },
  {
    id: "vip-events",
    name: "VIP Event Access",
    tagline: "First In Line",
    image: vipEventsImg,
    preview: "🎤 Taylor Swift presale code."
  },
  {
    id: "foodie-experiences",
    name: "Secret Foodie Experiences",
    tagline: "Hidden Dining Gems",
    image: foodieExperiencesImg,
    preview: "🍽️ Underground dinner, 8 seats."
  },
  {
    id: "new-tech",
    name: "New Tech First",
    tagline: "Latest Launches",
    image: newTechImg,
    preview: "📱 iPhone 17 Pro early access."
  },
  {
    id: "gadgets",
    name: "Game-Changer Gadgets",
    tagline: "Next-Gen Gear",
    image: gadgetsImg,
    preview: "⚡ Smart mug that heats forever."
  },
  {
    id: "gaming-gear",
    name: "Pro Gaming Gear",
    tagline: "Play Like a Pro",
    image: gamingGearImg,
    preview: "🎮 Xbox Elite controller restock."
  },
  {
    id: "tiny-home",
    name: "Tiny Home Upgrades",
    tagline: "Smart Space Living",
    image: tinyHomeImg,
    preview: "🛋️ Sofa bed, 40% off today."
  },
  {
    id: "seasonal-home",
    name: "Seasonal Home Glow-Ups",
    tagline: "Fresh for the Season",
    image: seasonalHomeImg,
    preview: "🍂 Autumn décor kit $49."
  },
  {
    id: "garden-kits",
    name: "Garden-to-Table Kits",
    tagline: "Grow Your Own",
    image: gardenKitsImg,
    preview: "🌱 Herb garden set $25."
  },
  {
    id: "beauty-must-tries",
    name: "New Beauty Must-Tries",
    tagline: "Glow Starts Here",
    image: beautyMustTriesImg,
    preview: "💖 Rare Beauty blush restock."
  },
  {
    id: "wellness-retreats",
    name: "Wellness Retreats",
    tagline: "Reset Your Mind",
    image: wellnessRetreatsImg,
    preview: "🧘 Bali yoga retreat $799."
  },
  {
    id: "fitness-gear",
    name: "Fitness Gear You'll Use",
    tagline: "Upgrade Your Workout",
    image: fitnessGearImg,
    preview: "🏃 Lululemon joggers $59 today."
  },
  {
    id: "collectibles",
    name: "Rare Collectibles",
    tagline: "Own the Rare",
    image: collectiblesImg,
    preview: "🎨 Banksy print — 3 available."
  },
  {
    id: "diy-masterpieces",
    name: "DIY Masterpieces",
    tagline: "Make It Yourself",
    image: diyMasterpiecesImg,
    preview: "🎯 Ceramic kit $35."
  },
  {
    id: "pet-perfection",
    name: "Pet Perfection",
    tagline: "For Your Furry Friend",
    image: petPerfectionImg,
    preview: "🐾 Dog raincoat $19."
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
                  : 'hover:shadow-lg hover:scale-102'
              }`}
              onClick={() => toggleCategory(category.id)}
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