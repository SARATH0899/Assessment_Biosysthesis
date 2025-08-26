import Header from "@/components/Header";
import Hero from "@/components/Hero";
import GetStarted from "@/components/GetStarted";
import Transform from "@/components/Transform";
import GreenGrowthHub from "@/components/GreenGrowthHub";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <GetStarted />
        <Transform />
        <GreenGrowthHub />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
