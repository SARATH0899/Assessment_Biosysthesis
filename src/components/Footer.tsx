import { Instagram, Twitter, Linkedin, Facebook } from "lucide-react";
import footerLogo from "@/assets/footer-logo.png"

const Footer = () => {
  return (
    <footer className="relative bg-foreground text-background py-16 overflow-hidden">
      <div className="absolute bottom-8 left-0 right-0 z-0">
        <div className="text-center font-montserrat font-black opacity-20 text-background text-[80px] md:text-[120px] lg:text-[160px] leading-none transform translate-y-1/2 select-none">
          REEP TO GROW
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid lg:grid-cols-6 gap-12 mb-12">
          <div className="lg:col-span-2 pr-8">
            <div className="flex items-center space-x-2 mb-6">
              <img src={footerLogo} alt="Footer Logo" className="h-12 object-contain" />
            </div>

            <p className="font-opensans text-body text-white/70 mb-6 max-w-md">
              Monitor crop health in real-time with
              smart tools that detect issues early
              and protect your yield.
            </p>

            <div className="flex space-x-4">
              <Instagram className="h-5 w-5 text-background/70 hover:text-background cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-background/70 hover:text-background cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-background/70 hover:text-background cursor-pointer transition-colors" />
              <Facebook className="h-5 w-5 text-background/70 hover:text-background cursor-pointer transition-colors" />
            </div>
          </div>

          <div className="pr-8">
            <h3 className="font-montserrat text-cta font-semibold mb-4 text-white">COMPANY</h3>
            <ul className="space-y-3 font-opensans text-cta text-white/70">
              <li><a href="#">Features</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Product</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div className="pr-8">
            <h3 className="font-montserrat text-cta font-semibold mb-4 text-white">RESOURCE</h3>
            <ul className="space-y-3 font-opensans text-cta text-white/70">
              <li><a href="#">Blog</a></li>
              <li><a href="#">Customer Stories</a></li>
              <li><a href="#">Info</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Payments</a></li>
            </ul>
          </div>

          <div className="pr-8">
            <h3 className="font-montserrat text-cta font-semibold mb-4 text-white">CAREER</h3>
            <ul className="space-y-3 font-opensans text-cta text-white/70">
              <li><a href="#">Jobs</a></li>
              <li><a href="#">Hiring</a></li>
              <li><a href="#">News</a></li>
              <li><a href="#">Tips & Tricks</a></li>
            </ul>
          </div>

          <div className="pr-8">
            <h3 className="font-montserrat text-cta font-semibold mb-4 text-white">HELP</h3>
            <ul className="space-y-3 font-opensans text-cta text-white/70">
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Support</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
