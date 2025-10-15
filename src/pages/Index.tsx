import { Navbar } from "@/components/Navbar";
import { BannerSlider } from "@/components/BannerSlider";
import { ProductsCarousel } from "@/components/ProductsCarousel";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <BannerSlider />
        <ProductsCarousel />
        
        {/* Marquee Footer */}
        <div className="bg-foreground text-background py-4 overflow-hidden">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-8 text-lg font-bold">
            <span>🧘 IN LOVE WITH THE YOGA WAY OF LIFE</span>
            <span>🧘 PRACTICE YUM-ASANA EVERY DAY</span>
            <span>🧘 ALL ABOUT THE YUM LIFE</span>
            <span>🧘 IN LOVE WITH THE YOGA WAY OF LIFE</span>
            <span>🧘 PRACTICE YUM-ASANA EVERY DAY</span>
            <span>🧘 ALL ABOUT THE YUM LIFE</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
