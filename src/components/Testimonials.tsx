import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    service: "Bridal Makeup",
    text: "Absolutely stunning! She made me feel like a princess on my wedding day. The makeup lasted all night and looked flawless in every photo.",
    rating: 5,
  },
  {
    id: 2,
    name: "Maya Patel",
    service: "Nail Art",
    text: "The convenience of having her come to my home was amazing. Beautiful nail art and such a relaxing experience. Highly recommend!",
    rating: 5,
  },
  {
    id: 3,
    name: "Jessica Lee",
    service: "Everyday Makeup",
    text: "Perfect for my busy mornings! She arrives on time, works her magic, and I'm ready to conquer the day. Love the natural look she creates.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            What Our <span className="text-accent">Clients Say</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Real stories from real clients who trust us with their beauty
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card 
              key={testimonial.id}
              className="border-2 hover:border-accent/50 transition-all duration-300 bg-primary/20"
            >
              <CardContent className="p-6 space-y-4">
                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-foreground leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="pt-4 border-t border-accent/20">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.service}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
