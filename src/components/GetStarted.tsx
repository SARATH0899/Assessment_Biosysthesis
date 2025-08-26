import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import organicFarm from "@/assets/organic-farm.png";
import organicFertilizer from "@/assets/organic-fertilizer.png";
import technologyIrrigation from "@/assets/technology-irrigation.png";
import agriculturalMonitoring from "@/assets/agricultural-monitoring.png";

const GetStarted = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-opensans text-body font-bold text-font-400 mb-8">2025</p>
            <p className="font-opensans text-body text-font-800 leading-relaxed">
              At BioSynthesis, we're growing a greener, smarter future for 
              agriculture. With innovative tools and sustainable solutions, we help 
              farmers boost yields, cut waste, and protect the planet. Together, 
              we're cultivating healthier crops, stronger communities, and a brighter 
              tomorrow.
            </p>
          </div>
          
          <div className="relative">
            <h2 className="font-montserrat text-h3 font-semibold mb-8 flex items-center text-font-400">
              Get Started Now
              <Button variant="cta" size="sm" className="ml-4">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </h2>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img 
                    src={organicFarm} 
                    alt="Organic Farm" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-center font-opensans text-cta font-medium text-font-800">Organic Farm</p>
                
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img 
                    src={organicFertilizer} 
                    alt="Organic Fertilizer" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-center font-opensans text-cta font-medium text-font-800">Organic Fertilizer</p>
              </div>
              
              <div className="space-y-4 mt-8">
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img 
                    src={technologyIrrigation} 
                    alt="Technology Irrigation" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-center font-opensans text-cta font-medium text-font-800">Technology Irrigation</p>
                
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img 
                    src={agriculturalMonitoring} 
                    alt="Agricultural Monitoring" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-center font-opensans text-cta font-medium text-font-800">Agricultural Monitoring</p>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 space-x-4">
              <Button variant="outline" size="icon" className="rounded-full">
                <ArrowRight className="h-4 w-4 rotate-180" />
              </Button>
              <Button variant="default" size="icon" className="rounded-full">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;