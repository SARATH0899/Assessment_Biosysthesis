import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import bannerImage from "@/assets/banner-image.png";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-4 py-16">
      <div className="z-10 max-w-4xl mx-auto">
        <div className="inline-flex items-center px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-border">
          <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
          Top Agro Researcher's
        </div>

        <h1 className="font-montserrat text-h1 font-bold leading-tight mb-6">
          Cultivating Next-Gen Growth in Agriculture
        </h1>

        <p className="text-body text-foreground/70 mb-8 max-w-2xl mx-auto font-opensans">
          Empowering farmers with smarter tools, bigger yields, and greener solutions
        </p>

        <Button variant="hero" size="lg" className="group text-white">
          Get Started
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>

      <div className="w-full mt-12">
        <img
          src={bannerImage}
          alt="Agriculture Fields"
          className="w-full h-[400px] object-cover rounded-xl shadow-lg"
        />
      </div>
    </section>
  );
};

export default Hero;
