import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import  forestWaterfall from "@/assets/forest-waterfall.png";

const ContactSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 rounded-3xl overflow-hidden bg-gray-100">
          <div className="bg-muted/30 rounded-3xl p-8 lg:p-12">
            <h2 className="font-montserrat text-h3 font-bold mb-4 text-font-400">We'd love to help</h2>
            <p className="font-opensans text-lg text-font-800 mb-8">
              Streamline your farm operations with smart automation 
              for faster, easier, and more efficient growth.
            </p>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-opensans text-cta font-medium mb-2 text-font-400">First Name</label>
                  <Input className="bg-white border-gray-300 rounded-full" placeholder="Enter your First name" />
                </div>
                <div>
                  <label className="block font-opensans text-cta font-medium mb-2 text-font-400">Last Name</label>
                  <Input className="bg-white border-gray-300 rounded-full" placeholder="Enter your Last name" />
                </div>
              </div>
              
              <div>
                <label className="block font-opensans text-cta font-medium mb-2 text-font-400">Email</label>
                <Input className="bg-white border-gray-300 rounded-full" placeholder="Enter your email" type="email" />
              </div>
              
              <div>
                <label className="block font-opensans text-cta font-medium mb-2 text-font-400">Message</label>
                <Textarea 
                  className="bg-white border-gray-300 rounded-2xl min-h-[120px] resize-none" 
                  placeholder="Enter your message" 
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-foreground text-background hover:bg-primary/90 rounded-full py-3 font-opensans text-white font-semibold"
              >
                Send
              </Button>
            </form>
          </div>
          
          <div className="h-full">
            <img 
              src={forestWaterfall} 
              alt="Natural forest waterfall" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 