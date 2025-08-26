import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import bannerImage from "@/assets/banner-image.png";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <div className="inline-flex items-center px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-white/20">
          <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
          Top Agro Researcher's
        </div>
        
        <h1 className="font-montserrat text-h1 font-bold leading-tight mb-6 text-white">
          Cultivating Next-Gen Growth<br />
          in Agriculture
        </h1>
        
        <p className="text-body text-white/90 mb-8 max-w-2xl mx-auto font-opensans">
          Empowering farmers with smarter tools,<br />
          bigger yields, and greener solutions
        </p>
        
        <Button variant="hero" size="lg" className="group text-cta">
          Get Started
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;