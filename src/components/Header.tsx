import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 py-3">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between rounded-full bg-white/95 backdrop-blur-sm border border-border/50 shadow-sm">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Biosynthesis Logo" className="h-12 object-contain" />
        </div>

        <div className="hidden md:flex items-center space-x-8 px-6 py-2 rounded-full bg-black/90 border border-border/50 shadow-sm">
        <nav className="flex items-center space-x-6">
          <Button variant="nav" className="hover:text-primary">Home</Button>
          <Button variant="nav" className="hover:text-primary">About Us</Button>
          <Button variant="nav" className="hover:text-primary">Reviews</Button>
          <Button variant="nav" className="hover:text-primary">Products</Button>
          <Button variant="nav" className="hover:text-primary">Blog</Button>
        </nav>
        </div>

        <div className="flex items-center space-x-3">
          <Button variant="ghost" className="text-foreground hover:text-primary">
            Log in
          </Button>
          <Button variant="outline" className="border-2 border-foreground hover:bg-foreground hover:text-background">
            Sign up Free
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;