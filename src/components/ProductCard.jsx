import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const ProductCard = ({ image, name, price, originalPrice, discount, rating, reviews }) => {
  const renderStars = () => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < Math.floor(rating) ? "fill-warning text-warning" : "fill-muted text-muted"}`}
      />
    ));
  };

  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-primary">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        {discount && (
          <Badge className="absolute top-3 right-3 bg-destructive text-destructive-foreground">
            {discount}% OFF
          </Badge>
        )}
        <Badge className="absolute bottom-3 left-3 bg-success text-success-foreground">
          Free Shipping
        </Badge>
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2 min-h-[3.5rem]">{name}</h3>
        <div className="flex items-center gap-1 mb-2">{renderStars()}</div>
        <p className="text-sm text-muted-foreground mb-3">({reviews} reviews)</p>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl font-bold text-primary">₹{price}</span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">₹{originalPrice}</span>
          )}
        </div>
        <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold">
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};
