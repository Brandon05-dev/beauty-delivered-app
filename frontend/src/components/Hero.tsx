import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white">
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border-2 border-glamongo-purple backdrop-blur-sm shadow-purple">
            <Sparkles className="w-4 h-4 text-glamongo-purple animate-pulse-glow" />
            <span className="text-sm font-semibold text-glamongo-charcoal">Luxury Beauty Booking</span>
          </div>

          {/* Main Heading */}
          <h1 className="heading-glamongo">
            <span className="text-glamongo-blush">
              Experience
            </span>
            <br />
            <span className="text-glamongo-purple">
              Glamongo
            </span>
          </h1>

          {/* Accent Line */}
          <div className="flex justify-center">
            <div className="accent-line" />
          </div>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-glamongo-charcoal/70 max-w-2xl mx-auto leading-relaxed font-poppins">
            Elevate your beauty routine with our sophisticated booking platform. 
            Professional services, elegant experience, effortless appointments.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link to="/booking">
              <button className="btn-glamongo group inline-flex items-center gap-2">
                Book Appointment
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link to="/services">
              <button className="btn-glamongo-outline inline-flex items-center gap-2">
                View Services
              </button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 pt-8 text-sm text-glamongo-charcoal/70">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-glamongo-blush shadow-rose" />
              <span className="font-medium">Premium Service</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-glamongo-purple shadow-purple" />
              <span className="font-medium">Expert Artists</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-glamongo-mint shadow-neon" />
              <span className="font-medium">Flexible Booking</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
