import { useState } from "react";
import { Menu, Search, User, ShoppingCart, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const categories = [
  { label: "New Launches\n& Offers", image: "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=200&h=200&fit=crop", color: "bg-yellow-200" },
  { label: "Plant\nProtein", image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=200&h=200&fit=crop", color: "bg-green-200" },
  { label: "Whey\nProtein", image: "https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?w=200&h=200&fit=crop", color: "bg-yellow-300" },
  { label: "All\nProducts", image: "https://images.unsplash.com/photo-1599666515506-a91e2f6a0e88?w=200&h=200&fit=crop", color: "bg-cyan-200" },
  { label: "Breakfast", image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=200&h=200&fit=crop", color: "bg-purple-200" },
  { label: "Protein", image: "https://images.unsplash.com/photo-1622484211827-f1ea4cee63c2?w=200&h=200&fit=crop", color: "bg-cyan-300" },
  { label: "Muesli", image: "https://images.unsplash.com/photo-1613926209753-7b2c4f9e7b5c?w=200&h=200&fit=crop", color: "bg-pink-200" },
  { label: "Bars", image: "https://images.unsplash.com/photo-1519915212116-7cfef71f1d3e?w=200&h=200&fit=crop", color: "bg-orange-200" },
  { label: "Dry Fruits\n& Seeds", image: "https://images.unsplash.com/photo-1608797178974-15b35a64ede9?w=200&h=200&fit=crop", color: "bg-amber-300" },
  { label: "Oats &\nQuinoa", image: "https://images.unsplash.com/photo-1574085733277-851d9d856a3a?w=200&h=200&fit=crop", color: "bg-pink-300" },
  { label: "Gifting", image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=200&h=200&fit=crop", color: "bg-lime-200" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(true);

  return (
    <nav className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left: Hamburger Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary/80">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-full max-w-full bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 border-none p-0 overflow-y-auto">
              <div className="p-6 sm:p-8">
                <div className="flex flex-col gap-2">
                  {/* Shop by Category - Collapsible */}
                  <Collapsible open={categoryOpen} onOpenChange={setCategoryOpen}>
                    <CollapsibleTrigger className="w-full">
                      <div className="flex items-center justify-between w-full py-4 px-2 text-white hover:bg-white/10 rounded-lg transition-colors">
                        <span className="text-xl sm:text-2xl font-bold tracking-wide">SHOP BY CATEGORY</span>
                        <ChevronDown className={`h-6 w-6 transition-transform ${categoryOpen ? 'rotate-180' : ''}`} />
                      </div>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 mb-6">
                        {categories.map((category) => (
                          <a
                            key={category.label}
                            href="#category"
                            className="group relative bg-[#F5E6D3] rounded-3xl p-6 flex items-center justify-between hover:scale-105 transition-transform duration-300 overflow-hidden"
                            onClick={() => setOpen(false)}
                          >
                            <div className="flex-1 z-10">
                              <h3 className="text-gray-900 font-bold text-base sm:text-lg leading-tight whitespace-pre-line">
                                {category.label}
                              </h3>
                            </div>
                            <div className="relative flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 ml-4">
                              <div className={`absolute inset-0 ${category.color} rounded-full scale-150 -z-0`}></div>
                              <img 
                                src={category.image} 
                                alt={category.label.replace('\n', ' ')}
                                className="relative z-10 w-full h-full object-contain drop-shadow-lg"
                              />
                            </div>
                          </a>
                        ))}
                      </div>
                    </CollapsibleContent>
                  </Collapsible>

                  {/* Our Story */}
                  <a
                    href="#story"
                    className="w-full py-4 px-2 text-white hover:bg-white/10 rounded-lg transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    <span className="text-xl sm:text-2xl font-bold tracking-wide">OUR STORY</span>
                  </a>

                  {/* Track Your Order */}
                  <a
                    href="#track"
                    className="w-full py-4 px-2 text-white hover:bg-white/10 rounded-lg transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    <span className="text-xl sm:text-2xl font-bold tracking-wide">TRACK YOUR ORDER</span>
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          {/* Center: Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <div className="bg-background rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
              <span className="text-primary font-black text-xl">YB</span>
            </div>
          </div>

          {/* Right: Icons */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary/80">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary/80">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary/80 relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-secondary text-secondary-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
