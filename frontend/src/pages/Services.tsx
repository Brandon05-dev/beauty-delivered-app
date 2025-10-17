import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, DollarSign, Check } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    name: "Everyday Makeup",
    tagline: "Natural radiance for your daily confidence",
    description: "Perfect for work, meetings, or casual outings. Enhance your natural features with a fresh, flawless look that lasts all day.",
    duration: "60 minutes",
    price: "KES 5,400",
    includes: [
      "Skin prep and primer",
      "Foundation and concealer",
      "Eye makeup (natural or defined)",
      "Blush, bronzer, and highlighter",
      "Lipstick and setting spray",
    ],
    image: "/images/services/makeup.png",
  },
  {
    id: 2,
    name: "Nail Services",
    tagline: "Beautiful hands and feet, wherever you are",
    description: "Professional manicures, pedicures, and nail art delivered to your doorstep. Relax and enjoy salon-quality nail care in the comfort of your home.",
    duration: "45-90 minutes",
    price: "From KES 1,500",
    includes: [
      "Nail shaping and filing",
      "Cuticle care and hand/foot massage",
      "Polish application (classic or gel)",
      "Custom nail art designs",
      "Aftercare tips and recommendations",
    ],
    image: "/images/services/nails.png",
  },
  {
    id: 3,
    name: "Bridal Glam",
    tagline: "Your dream look for the biggest day of your life",
    description: "Comprehensive bridal beauty package including trial, wedding day makeup, and touch-up services. Look absolutely stunning from ceremony to reception.",
    duration: "2-3 hours",
    price: "From KES 15,000",
    includes: [
      "Pre-wedding trial session",
      "Airbrush or traditional makeup",
      "False lashes and contouring",
      "Hairstyling coordination",
      "On-location service and touch-up kit",
    ],
    image: "/images/services/bridal glam.png",
  },
  {
    id: 4,
    name: "Special Occasion",
    tagline: "Glam up for parties, photoshoots, and events",
    description: "Whether it's a party, photoshoot, or special event, we create a customized look that makes you feel confident and camera-ready.",
    duration: "75-90 minutes",
    price: "KES 4,600",
    includes: [
      "Consultation and mood board creation",
      "Full face makeup (dramatic or elegant)",
      "Contouring and highlighting",
      "Statement eyes or lips",
      "Long-lasting setting techniques",
    ],
    image: "/images/services/special occasion.png",
  },
  {
    id: 5,
    name: "Hair Services",
    tagline: "Stunning hairstyles for any event",
    description: "From elegant updos to beautiful braids, our hair stylists will create the perfect look for you, wherever you are.",
    duration: "60-120 minutes",
    price: "From KES 2,700",
    includes: [
      "Consultation and hair assessment",
      "Shampoo and conditioning (optional)",
      "Professional hairstyling (updo, curls, braids, etc.)",
      "Finishing spray and shine treatment",
      "On-location service for your convenience",
    ],
    image: "/images/services/hair.png",
  },
  {
    id: 6,
    name: "Barbershop Services",
    tagline: "Classic cuts and modern styles for men",
    description: "Experience traditional barbershop services with a modern twist. From sharp haircuts to clean shaves, we'll have you looking your best.",
    duration: "30-60 minutes",
    price: "From KES 700",
    includes: [
      "Consultation and style assessment",
      "Precision haircut and styling",
      "Hot towel shave and beard trim",
      "Facial massage and aftershave",
      "Mobile service for your convenience",
    ],
    image: "/images/services/barbershop.png",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="relative py-28 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/services/services hero-1.png')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold text-white">
              Our <span className="text-glamongo-rose">Services</span>
            </h1>
            <div className="flex justify-center">
              <div className="accent-line bg-white" />
            </div>
            <p className="text-xl text-white/90 font-poppins">
              Professional beauty treatments tailored to your needs, delivered with elegance
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div 
                key={service.id}
                className="overflow-hidden rounded-2xl shadow-elegant hover:shadow-rose-lg transition-all duration-300 bg-white border-2 border-glamongo-blush/30 animate-fade-in flex flex-col"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.name} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div>
                    <h3 className="text-2xl font-playfair font-bold text-glamongo-charcoal mb-2">{service.name}</h3>
                    <p className="text-glamongo-rose font-poppins font-medium text-sm">{service.tagline}</p>
                  </div>

                  <p className="text-glamongo-charcoal/70 leading-relaxed font-poppins my-4 text-sm flex-grow">
                    {service.description}
                  </p>

                  {/* Details */}
                  <div className="flex gap-4 py-3 border-y border-glamongo-blush/40 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-glamongo-rose" />
                      <div>
                        <p className="font-semibold text-glamongo-charcoal font-poppins">{service.duration}</p>
                      </div>
                    </div>
                  </div>

                  {/* Includes */}
                  <div className="py-4">
                    <p className="font-semibold mb-3 text-glamongo-charcoal font-playfair text-sm">What's Included:</p>
                    <ul className="space-y-1.5">
                      {service.includes.slice(0, 3).map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-glamongo-charcoal/70 font-poppins">
                          <Check className="w-3.5 h-3.5 text-glamongo-rose mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Price */}
                  <div className="py-3 text-sm">
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-glamongo-rose" />
                      <div>
                        <p className="font-semibold text-glamongo-rose font-poppins">{service.price}</p>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-auto">
                    <Link to="/booking">
                      <button className="btn-glamongo w-full">
                        Book This Service
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Services;
