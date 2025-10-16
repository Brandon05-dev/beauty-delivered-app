import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";

const Gallery = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Our <span className="text-accent">Transformations</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            See the magic happen — real clients, real results
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto mb-12">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div
              key={item}
              className="aspect-square rounded-2xl bg-gradient-to-br from-primary/60 via-accent/20 to-primary/40 hover:scale-105 transition-transform duration-300 cursor-pointer overflow-hidden group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="text-center">
          <p className="text-muted-foreground mb-4">Follow us for more transformations</p>
          <Button variant="outline" size="lg" className="group">
            <Instagram className="w-5 h-5" />
            @glamongo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
