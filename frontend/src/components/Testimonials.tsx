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
    <section className="section-glamongo bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-6 animate-fade-in">
          <h2 className="subheading-glamongo">
            What Our <span className="text-glamongo-rose">Clients Say</span>
          </h2>
          <div className="flex justify-center">
            <div className="accent-line" />
          </div>
          <p className="text-glamongo text-glamongo-charcoal/70">
            Real stories from clients who trust us with their beauty journey
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="bg-gradient-to-br from-glamongo-blush/20 to-glamongo-champagne/20 border-2 border-glamongo-blush/40 rounded-2xl p-8 hover:shadow-rose-lg hover:scale-[1.02] transition-all duration-300"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="space-y-4">
                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-glamongo-rose text-glamongo-rose" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-glamongo-charcoal/80 leading-relaxed font-poppins italic">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="pt-4 border-t border-glamongo-blush/40">
                  <p className="font-semibold text-glamongo-charcoal font-playfair text-lg">{testimonial.name}</p>
                  <p className="text-sm text-glamongo-charcoal/60 font-poppins">{testimonial.service}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
