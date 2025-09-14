import { Heart, Smartphone, ShoppingBag } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Heart,
      title: "Pick Your Passions",
      description: "Choose from 20 exclusive categories",
      color: "text-accent"
    },
    {
      icon: Smartphone,
      title: "Get Instant MiniStores",
      description: "Visual, shoppable alerts direct to Telegram",
      color: "text-Telegram"
    },
    {
      icon: ShoppingBag,
      title: "Shop Before It's Gone",
      description: "One tap to buy before others",
      color: "text-secondary"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground">
            Three simple steps to never miss a deal again
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                {/* Step number */}
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                
                {/* Icon container */}
                <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center group-hover:shadow-lg transition-all duration-300 ${step.color}`}>
                  <step.icon size={32} />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-3">
                {step.title}
              </h3>
              
              <p className="text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Connection lines for desktop */}
        <div className="hidden md:block relative -mt-16">
          <div className="absolute top-10 left-1/6 right-1/6 border-t-2 border-dashed border-muted-foreground/30" />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;