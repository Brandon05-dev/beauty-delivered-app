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
      <section className="relative py-20 bg-gradient-to-br from-primary/30 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold">
              Our <span className="text-accent">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Professional beauty treatments tailored to your needs, delivered wherever you are
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-12">
            {services.map((service, index) => (
              <Card 
                key={service.id}
                className={`overflow-hidden border-2 hover:border-accent/50 transition-all duration-300 ${
                  index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                }`}
              >
                <div className="md:flex">
                  {/* Image */}
                  <div className="md:w-2/5 aspect-[4/3] md:aspect-auto bg-gradient-to-br from-primary/60 via-accent/30 to-primary/40" />
                  
                  {/* Content */}
                  <CardContent className="md:w-3/5 p-8 space-y-6">
                    <div>
                      <h3 className="text-3xl font-bold mb-2">{service.name}</h3>
                      <p className="text-accent font-medium">{service.tagline}</p>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>

                    {/* Details */}
                    <div className="flex gap-8 py-4 border-y border-accent/20">
                      <div className="flex items-center gap-2">
                        <Clock className="w-5 h-5 text-accent" />
                        <div>
                          <p className="text-sm text-muted-foreground">Duration</p>
                          <p className="font-semibold">{service.duration}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-5 h-5 text-accent" />
                        <div>
                          <p className="text-sm text-muted-foreground">Price</p>
                          <p className="font-semibold text-accent">{service.price}</p>
                        </div>
                      </div>
                    </div>

                    {/* Includes */}
                    <div>
                      <p className="font-semibold mb-3">What's Included:</p>
                      <ul className="space-y-2">
                        {service.includes.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <Link to="/booking">
                      <Button variant="gold" size="lg" className="w-full md:w-auto">
                        Book This Service
                      </Button>
                    </Link>
                  </CardContent>
                </div>
              </Card>
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
