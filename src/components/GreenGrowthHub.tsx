import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import farmingPrecision from "@/assets/farming-precision.png";
import cropSurveillance from "@/assets/crop-surveillance.png";
import automatedFarming from "@/assets/automated-farming.png";

const GreenGrowthHub = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="font-montserrat text-h2 font-bold leading-tight mb-6 text-font-400">
              The Green Growth Hub:<br />
              Innovation & Earthwise
            </h2>
            <p className="font-opensans text-body text-font-800 leading-relaxed">
              Insights, tips, and stories from the world of sustainable farming and 
              innovative agriculture — offering expert advice, real-world success 
              stories, and the latest trends to help farmers embrace smarter, eco-friendly practices. From cutting-edge technology to time-tested 
              solutions, we're here to inspire and guide you on the journey toward a 
              more sustainable, productive future.
            </p>
          </div>
          
          <div className="grid gap-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img 
                    src={farmingPrecision} 
                    alt="Farming Precision" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-montserrat text-h4 font-semibold mb-2 text-font-400">Farming Precision</h3>
                  <p className="font-opensans text-cta text-font-800 mb-3">
                    Optimize your fields, reduce waste, 
                    and boost yields with smart, precise 
                    farming solutions.
                  </p>
                  <Button variant="link" className="text-primary p-0 h-auto text-cta">
                    Read more <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img 
                    src={automatedFarming} 
                    alt="Automated Farming" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-montserrat text-h4 font-semibold mb-2 text-font-400">Automated Farming</h3>
                  <p className="font-opensans text-cta text-font-800 mb-3">
                    Streamline your farm operations with 
                    smart automation for faster, easier, 
                    and more efficient growth.
                  </p>
                  <Button variant="link" className="text-primary p-0 h-auto text-cta">
                    Read more <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-2xl p-6 border">
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div className="aspect-video rounded-xl overflow-hidden">
                  <img 
                    src={cropSurveillance} 
                    alt="Crop Surveillance" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-montserrat text-h4 font-semibold mb-3 text-font-400">Crop Surveillance</h3>
                  <p className="font-opensans text-cta text-font-800 mb-4">
                    Monitor crop health in real-time with smart tools that detect 
                    issues early and protect your yield.
                  </p>
                  <Button variant="link" className="text-primary p-0 h-auto text-cta">
                    Read more <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GreenGrowthHub;