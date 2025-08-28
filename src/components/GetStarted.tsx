import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import organicFarm from "@/assets/organic-farm.png";
import organicFertilizer from "@/assets/organic-fertilizer.png";
import technologyIrrigation from "@/assets/technology-irrigation.png";
import agriculturalMonitoring from "@/assets/agricultural-monitoring.png";

const GetStarted = () => {
  return (
    <section className="py-20 bg-background">
      <div className="w-full">
        <div className="container mx-auto px-4 mb-48">
          <div className="grid grid-cols-2 gap-16 items-start">
            <div>
              <p className="font-opensans text-lg font-bold text-font-400 mb-8">2025</p>
            </div>
            <div>
              <p className="font-opensans text-body text-font-800 text-justify leading-relaxed">
                At <span className="text-primary">BioSynthesis</span>, we're growing a greener, smarter future for
                agriculture. With innovative tools and sustainable solutions, we help 
                farmers boost yields, cut waste, and protect the planet. Together, 
                we're cultivating healthier crops, stronger communities, and a brighter 
                tomorrow.
              </p>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute top-[-80px] left-[27%] z-10 flex items-center">
            <h2 className="font-montserrat text-2xl font-semibold text-black mr-6">
              Get<br />Started Now
            </h2>
            <Button variant="cta" size="sm" className="bg-green-600 hover:bg-green-700 rounded-full p-3">
              <ArrowRight className="h-5 w-5 text-white" />
            </Button>
          </div>
          
          <div className="grid grid-cols-12 gap-4 px-4">
            <div className="col-span-3 space-y-4 -mt-8">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                <img 
                  src={organicFarm} 
                  alt="Organic Farm" 
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-center font-opensans text-base font-medium text-font-800">Organic Farm</p>
            </div>
            
            <div className="col-span-3 space-y-4 mt-8">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                <img 
                  src={organicFertilizer} 
                  alt="Organic Fertilizer" 
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-center font-opensans text-base font-medium text-font-800">Organic Fertilizer</p>
            </div>
            
            <div className="col-span-3 space-y-4 -mt-8">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                <img 
                  src={technologyIrrigation} 
                  alt="Technology Irrigation" 
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-center font-opensans text-base font-medium text-font-800">Technology Irrigation</p>
            </div>
            
            <div className="col-span-3 space-y-4 mt-8">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                <img 
                  src={agriculturalMonitoring} 
                  alt="Agricultural Monitoring" 
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-center font-opensans text-base font-medium text-font-800">Agricultural Monitoring</p>
            </div>
          </div>
          
          <div className="flex justify-start pl-4 mt-8 space-x-4">
            <Button variant="outline" size="icon" className="rounded-full border-gray-300 bg-white">
              <ArrowRight className="h-4 w-4 rotate-180 text-gray-600" />
            </Button>
            <Button variant="default" size="icon" className="rounded-full bg-gray-800">
              <ArrowRight className="h-4 w-4 text-white" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;