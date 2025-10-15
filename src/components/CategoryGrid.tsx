import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import all category images
//import sneakerDropsImg from "@/assets/sneaker-drops.jpg";
//import flashFashionImg from "@/assets/flash-fashion.jpg";
//import luxuryOutletImg from "@/assets/luxury-outlet.jpg";
// import restocksImg from "@/assets/restocks.jpg";
// import weekendEscapesImg from "@/assets/weekend-escapes.jpg";
// import bucketListImg from "@/assets/bucket-list.jpg";
// import vipEventsImg from "@/assets/vip-events.jpg";
// import foodieExperiencesImg from "@/assets/foodie-experiences.jpg";
// import newTechImg from "@/assets/new-tech.jpg";
// import gadgetsImg from "@/assets/gadgets.jpg";
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
    image: "https://i.pinimg.com/280x280_RS/a0/d3/68/a0d368ee22a55117c9866743b0778787.jpg",
    preview: "👕 Polos de calidad premium disponibles",
    url: "https://telegram.me/ElCapoteBot",
    available: true
  },
  {
    id: "plagas-iberica",
    name: "Plagas Ibérica",
    tagline: "Control de Plagas en Madrid",
    image: "https://i0.wp.com/plagasiberica.com/wp-content/uploads/2024/03/logo_negro_plagas.png",
    preview: "🐛 Servicios profesionales de control de plagas",
    url: "https://telegram.me/PlagasIbericaBot",
    available: true
  },
  {
    id: "europa-press",
    name: "Europa Press",
    tagline: "Noticias y actualidad de España y del Mundo",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/62/Logo_Europa_Press.jpeg",
    preview: "📰 Las últimas noticias al instante",
    url: "https://telegram.me/EuropaPressBot",
    available: true
  },
  {
    id: "amazon-offers",
    name: "Amazon Best Offers",
    tagline: "Discover new promotions from Amazon",
    image: "https://portal.gifted.ph/storage/images/medium/39d22feb587ab1bbecfbd25ea08bad93.jpg",
    preview: "📦 Grandes Ofertas",
    url: "https://telegram.me/AmazonBestOffersBot",
    available: true
  },
  {
    id: "daily-pics",
    name: "Pic of the Day",
    tagline: "Daily photography brought to you by Deanna",
    image: "https://png.pngtree.com/thumb_back/fh260/background/20220314/pngtree-slr-camera-on-white-background-image_1051451.jpg",
    preview: "🌴 Recibe las mejores fotos de Deanna",
    url: "https://telegram.me/DeannaPicsBot",
    available: true
  },
  {
    id: "real-madrid",
    name: "Real Madrid Fans",
    tagline: "¡Hala Madrid!",
    image: "https://imageio.forbes.com/i-forbesimg/media/lists/teams/real-madrid_416x416.jpg?format=jpg",
    preview: "🗺️ ¡Hala Madrid!",
    url: "https://telegram.me/FansRealMadridBot",
    available: true
  },
  {
    id: "deanna-celebrities",
    name: "Latest on Celebrities",
    tagline: "All the latest in celebrity news",
    image: "https://www.celebrity-cutouts.com.au/wp-content/uploads/2023/05/bad-bunny-white-outfit-buddy.jpg",
    preview: "All the latest in celebrity news",
    url: "https://telegram.me/CelebsNewsBot",
    available: true
  },
  {
    id: "laura-homes",
    name: "Laura Homes",
    tagline: "Elegant living, made simple",
    image: "https://i.pinimg.com/736x/4d/62/6f/4d626f34e71b87949f2bbf44cf4c0232.jpg",
    preview: "Elegant living, made simple",
    url: "https://telegram.me/LauraHomesBot",
    available: true
  },
  {
    id: "special-gifts",
    name: "Special Gifts",
    tagline: "Special gifts for every special someone",
    image: "https://i.pinimg.com/736x/0f/3f/a9/0f3fa92172441d78168838c04c7e58bc.jpg",
    preview: "Special gifts for every special someone",
    url: "https://telegram.me/DeannaGiftsBot",
    available: true
  },
  {
    id: "well-being",
    name: "Health and Well Being",
    tagline: "Healthy living for a happier you",
    image: "https://img.freepik.com/free-photo/close-up-young-pleasant-girl-smiling-looking-friendly-happy-cute-face-expression-smile-white-teeth-standing-casual-blouse-against-white-background_176420-47612.jpg",
    preview: "Healthy living for a happier you",
    url: "https://telegram.me/DeannaWellBeingBot",
    available: true
  },
  {
    id: "suggestions",
    name: "Deanna Suggestions",
    tagline: "All kinds of recommendations by Deanna",
    image: "https://plus.unsplash.com/premium_photo-1705010662192-a1d7bca9d516?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3VnZ2VzdGlvbnxlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000",
    preview: "All kinds of recommendations by Deanna",
    url: "https://telegram.me/DeannaSuggestionsBot",
    available: true
  },
  {
    id: "mental-health",
    name: "Deanna Mental Healthy",
    tagline: "Clarity. Care. Calm",
    image: "https://static.vecteezy.com/system/resources/thumbnails/006/792/345/small_2x/mental-health-blooming-human-brain-line-icon-mind-concept-love-life-new-page-illustration-free-vector.jpg",
    preview: "Clarity. Care. Calm",
    url: "https://telegram.me/DeannaMentalHealthBot",
    available: true
  },
  {
    id: "product-of-the-day",
    name: "Product of the Day",
    tagline: "Find the products that make life easier",
    image: "https://images.pexels.com/photos/2536965/pexels-photo-2536965.jpeg",
    preview: "Find the products that make life easier",
    url: "https://telegram.me/ProductOfTheDayBot",
    available: true
  },
  {
    id: "todays-history",
    name: "Today's History",
    tagline: "History, one day at a time",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/World_Map_1689.JPG/500px-World_Map_1689.JPG",
    preview: "History, one day at a time",
    url: "https://telegram.me/TodaysHistoryBot",
    available: true
  },
  {
    id: "science-in-a-snap",
    name: "Science in a Snap",
    tagline: "Your quick guide to understanding big discoveries",
    image: "https://www.biologyforlife.com/uploads/2/2/3/9/22392738/compound-microscope-m500-left.jpg?376",
    preview: "Your quick guide to understanding big discoveries",
    url: "https://telegram.me/ScienceInASnapBot",
    available: true
  },
  {
    id: "recipes",
    name: "Deanna Recipes",
    tagline: "Your favorite dishes by Deanna",
    image: "https://m.media-amazon.com/images/I/61ZnT0Q9BpL.jpg",
    preview: "Your favorite dishes by Deanna",
    url: "https://telegram.me/DeannaRecipesBot",
    available: true
  },
  {
    id: "who-is",
    name: "Who is?",
    tagline: "Iconic people, everyday",
    image: "https://www.baps.org.uk/wp-content/uploads/2020/05/mystery-person.jpg",
    preview: "Iconic people, everyday",
    url: "https://telegram.me/WhoIsDailyBot",
    available: true
  },
  {
    id: "sports-products",
    name: "Sports Products",
    tagline: "Gear up. Game on",
    image: "https://www.shutterstock.com/image-photo/sport-white-background-sprinter-leaving-600nw-2223589957.jpg",
    preview: "Gear up. Game on",
    url: "https://telegram.me/SportsProductsBot",
    available: true
  },
  {
    id: "mediamarkt-offers",
    name: "Mediamarkt Offers",
    tagline: "Discover the hottest Mediamarkt Promos",
    image: "https://www.miramarcc.com/wp-content/uploads/2024/07/cd62b602311fcf7b7ef55864a2ea1d5a2f58070f.jpg",
    preview: "Discover the hottest Mediamarkt Promos",
    url: "https://telegram.me/MediamarktOffersBot",
    available: true
  },
  {
    id: "pinterest-trends",
    name: "Pinterest Trends",
    tagline: "Pinterest's Latest Trends!",
    image: "https://images.ctfassets.net/h67z7i6sbjau/5zteWRcC1qbgLZoClcMmYl/a0391fdc321eddce7de41152108723b5/Brand_Guidelines_hero_2x.jpg?fm=webp&q=85",
    preview: "Pinterest's Latest Trends!",
    url: "https://telegram.me/PinterestTrendsBot",
    available: true
  }
];

const CategoryGrid = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const handleCategoryClick = (category: any) => {
    if (category.available && category.url) {
      window.open(category.url, '_blank');
    }
  };

  const scrollToRegistration = () => {
    document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="categories" className="py-20 px-4 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Choose Your <span className="gradient-text">Passions</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Select the categories you love and get instant alerts when deals drop
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-12">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`relative cursor-pointer group transition-all duration-300 ${
                category.available 
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
                {/* {selectedCategories.includes(category.id) && (
                  <div className="absolute top-2 right-2 w-6 h-6 bg-Telegram rounded-full flex items-center justify-center">
                    <Check size={14} className="text-white" />
                  </div>
                )} */}
                
                {/* Preview on hover */}
                {hoveredCategory === category.id && (
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 -translate-y-full z-10">
                    <div className="bg-white rounded-lg shadow-xl p-3 min-w-64 border">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-6 bg-Telegram rounded-full flex items-center justify-center">
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
        
        {/* {selectedCategories.length > 0 && (
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
        )} */}
      </div>
    </section>
  );
};

export default CategoryGrid;