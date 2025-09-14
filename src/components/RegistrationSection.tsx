import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MessageCircle, Shield } from "lucide-react";

const RegistrationSection = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("+1");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Show success message
    alert("🎉 Welcome to MiniStores! You'll receive your first personalized alert within 24 hours.");
    
    setIsSubmitting(false);
    setPhoneNumber("");
  };

  const countryCodes = [
    { code: "+1", country: "US/CA" },
    { code: "+44", country: "UK" },
    { code: "+33", country: "FR" },
    { code: "+49", country: "DE" },
    { code: "+34", country: "ES" },
    { code: "+39", country: "IT" },
    { code: "+91", country: "IN" },
    { code: "+86", country: "CN" },
    { code: "+81", country: "JP" },
    { code: "+82", country: "KR" },
    { code: "+61", country: "AU" },
    { code: "+55", country: "BR" },
  ];

  return (
    <section id="registration" className="py-20 px-4 bg-gradient-to-br from-Telegram/5 to-secondary/5">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-12">
          <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-Telegram to-Telegram-dark rounded-2xl flex items-center justify-center">
            <MessageCircle size={32} className="text-white" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start Getting Your <span className="gradient-text">MiniStores</span>
          </h2>
          
          <p className="text-xl text-muted-foreground">
            Enter your mobile number to receive personalized shopping alerts directly on Telegram
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex gap-2">
            <Select value={countryCode} onValueChange={setCountryCode}>
              <SelectTrigger className="w-24">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {countryCodes.map((country) => (
                  <SelectItem key={country.code} value={country.code}>
                    {country.code} {country.country}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Input
              type="tel"
              placeholder="Enter your mobile number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="flex-1 h-12 text-lg"
              required
            />
          </div>

          <Button
            type="submit"
            size="lg"
            variant="cta"
            disabled={!phoneNumber || isSubmitting}
            className="w-full text-lg py-4 h-auto"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                Connecting to Telegram...
              </>
            ) : (
              <>
                <MessageCircle size={20} className="mr-2" />
                Send to My Telegram
              </>
            )}
          </Button>

          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Shield size={16} />
            <span>We'll send MiniStores directly to your Telegram. No spam, ever.</span>
          </div>
        </form>

        {/* Trust indicators */}
        <div className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-border/50">
          <div className="text-center">
            <div className="text-2xl font-bold text-Telegram">10K+</div>
            <div className="text-sm text-muted-foreground">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-Telegram">50+</div>
            <div className="text-sm text-muted-foreground">Daily Deals</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-Telegram">95%</div>
            <div className="text-sm text-muted-foreground">Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;