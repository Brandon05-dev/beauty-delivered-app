import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Clock, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    name: "Everyday Makeup",
    description: "Natural, flawless looks perfect for any day",
    duration: "60 min",
    price: "From $80",
    image: "makeup",
  },
  {
    id: 2,
    name: "Nail Services",
    description: "Manicures, pedicures, and nail art",
    duration: "45-90 min",
    price: "From $50",
    image: "nails",
  },
  {
    id: 3,
    name: "Bridal Glam",
    description: "Your perfect wedding day look",
    duration: "2-3 hours",
    price: "From $250",
    image: "bridal",
  },
];

const ServicesPreview = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/50 border border-accent/20">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Beauty Services <span className="text-accent">Tailored for You</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Professional beauty treatments delivered wherever you are
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {services.map((service) => (
            <Card 
              key={service.id} 
              className="group overflow-hidden border-2 hover:border-accent/50 transition-all duration-300 hover:shadow-[0_8px_32px_hsla(43,68%,52%,0.15)]"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/40 to-accent/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-foreground mb-1">{service.name}</h3>
                </div>
              </div>
              <CardContent className="p-6 space-y-4">
                <p className="text-muted-foreground">{service.description}</p>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{service.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 font-semibold text-accent">
                    <DollarSign className="w-4 h-4" />
                    <span>{service.price}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/services">
            <Button variant="gold" size="lg">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
