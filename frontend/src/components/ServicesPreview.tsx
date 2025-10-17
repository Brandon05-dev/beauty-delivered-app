import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Clock, DollarSign, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    name: "Everyday Makeup",
    description: "Natural, flawless looks perfect for any day",
    duration: "60 min",
    price: "From $80",
    image: "/images/services/makeup.png",
  },
  {
    id: 2,
    name: "Nail Services",
    description: "Manicures, pedicures, and nail art",
    duration: "45-90 min",
    price: "From $50",
    image: "/images/services/nails.png",
  },
  {
    id: 3,
    name: "Bridal Glam",
    description: "Your perfect wedding day look",
    duration: "2-3 hours",
    price: "From $250",
    image: "/images/services/bridal glam.png",
  },
];

const ServicesPreview = () => {
  return (
    <section className="section-glamongo bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-6 animate-fade-in">
          <h2 className="subheading-glamongo">
            Our <span className="text-glamongo-purple">Services</span>
          </h2>
          <div className="flex justify-center">
            <div className="accent-line" />
          </div>
          <p className="text-glamongo text-glamongo-charcoal/70">
            Professional beauty treatments delivered with elegance and sophistication
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className="card-glamongo group border-2 border-glamongo-purple/20 hover:border-glamongo-rose"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-[4/3] bg-glamongo-blush/40 relative overflow-hidden rounded-xl mb-4">
                <img 
                  src={service.image} 
                  alt={service.name} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-playfair font-bold text-white">{service.name}</h3>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-glamongo-charcoal/70 font-poppins">{service.description}</p>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-glamongo-charcoal/60">
                    <Clock className="w-4 h-4 text-glamongo-purple" />
                    <span className="font-poppins">{service.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 font-semibold text-glamongo-rose">
                    <DollarSign className="w-4 h-4 text-glamongo-rose" />
                    <span className="font-poppins">{service.price}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/services">
            <button className="btn-glamongo-outline group inline-flex items-center gap-2">
              View All Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
