import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ctaBanner from "@/assets/cta-banner.png";

const Transform = () => {
  return (
    <section 
      className="relative py-48 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${ctaBanner})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-2xl text-white">
          <h2 className="font-montserrat text-h2 font-bold leading-tight mb-8 text-white">
            Transform Your Farm.<br />
            Empower Your Future.
          </h2>
          
          <Button variant="cta" size="lg" className="bg-primary hover:bg-primary-dark">
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Transform;