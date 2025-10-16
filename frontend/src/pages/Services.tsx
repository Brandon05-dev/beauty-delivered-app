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
    price: "$80",
    includes: [
      "Skin prep and primer",
      "Foundation and concealer",
      "Eye makeup (natural or defined)",
      "Blush, bronzer, and highlighter",
      "Lipstick and setting spray",
    ],
  },
  {
    id: 2,
    name: "Nail Services",
    tagline: "Beautiful hands and feet, wherever you are",
    description: "Professional manicures, pedicures, and nail art delivered to your doorstep. Relax and enjoy salon-quality nail care in the comfort of your home.",
    duration: "45-90 minutes",
    price: "From $50",
    includes: [
      "Nail shaping and filing",
      "Cuticle care and hand/foot massage",
      "Polish application (classic or gel)",
      "Custom nail art designs",
      "Aftercare tips and recommendations",
    ],
  },
  {
    id: 3,
    name: "Bridal Glam",
    tagline: "Your dream look for the biggest day of your life",
    description: "Comprehensive bridal beauty package including trial, wedding day makeup, and touch-up services. Look absolutely stunning from ceremony to reception.",
    duration: "2-3 hours",
    price: "From $250",
    includes: [
      "Pre-wedding trial session",
      "Airbrush or traditional makeup",
      "False lashes and contouring",
      "Hairstyling coordination",
      "On-location service and touch-up kit",
    ],
  },
  {
    id: 4,
    name: "Special Occasion",
    tagline: "Glam up for parties, photoshoots, and events",
    description: "Whether it's a party, photoshoot, or special event, we create a customized look that makes you feel confident and camera-ready.",
    duration: "75-90 minutes",
    price: "$120",
    includes: [
      "Consultation and mood board creation",
      "Full face makeup (dramatic or elegant)",
      "Contouring and highlighting",
      "Statement eyes or lips",
      "Long-lasting setting techniques",
    ],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-glamongo-ivory via-glamongo-blush/20 to-glamongo-champagne/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="heading-glamongo">
              Our <span className="text-glamongo-rose">Services</span>
            </h1>
            <div className="flex justify-center">
              <div className="accent-line" />
            </div>
            <p className="text-xl text-glamongo-charcoal/70 font-poppins">
              Professional beauty treatments tailored to your needs, delivered with elegance
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-12">
            {services.map((service, index) => (
              <div 
                key={service.id}
                className={`overflow-hidden rounded-2xl shadow-elegant hover:shadow-rose-lg transition-all duration-300 bg-gradient-to-br from-white to-glamongo-ivory/30 border-2 border-glamongo-blush/30 ${
                  index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                } animate-fade-in`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="md:flex">
                  {/* Image */}
                  <div className="md:w-2/5 aspect-[4/3] md:aspect-auto bg-gradient-to-br from-glamongo-blush/60 via-glamongo-rose/40 to-glamongo-champagne/60 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-white/90 flex items-center justify-center shadow-rose">
                      <span className="text-4xl">✨</span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="md:w-3/5 p-8 space-y-6">
                    <div>
                      <h3 className="text-3xl font-playfair font-bold text-glamongo-charcoal mb-2">{service.name}</h3>
                      <p className="text-glamongo-rose font-poppins font-medium">{service.tagline}</p>
                    </div>

                    <p className="text-glamongo-charcoal/70 leading-relaxed font-poppins">
                      {service.description}
                    </p>

                    {/* Details */}
                    <div className="flex gap-8 py-4 border-y border-glamongo-blush/40">
                      <div className="flex items-center gap-2">
                        <Clock className="w-5 h-5 text-glamongo-rose" />
                        <div>
                          <p className="text-sm text-glamongo-charcoal/60 font-poppins">Duration</p>
                          <p className="font-semibold text-glamongo-charcoal font-poppins">{service.duration}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-5 h-5 text-glamongo-rose" />
                        <div>
                          <p className="text-sm text-glamongo-charcoal/60 font-poppins">Price</p>
                          <p className="font-semibold text-glamongo-rose font-poppins">{service.price}</p>
                        </div>
                      </div>
                    </div>

                    {/* Includes */}
                    <div>
                      <p className="font-semibold mb-3 text-glamongo-charcoal font-playfair">What's Included:</p>
                      <ul className="space-y-2">
                        {service.includes.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-glamongo-charcoal/70 font-poppins">
                            <Check className="w-4 h-4 text-glamongo-rose mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <Link to="/booking">
                      <button className="btn-glamongo w-full md:w-auto">
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
