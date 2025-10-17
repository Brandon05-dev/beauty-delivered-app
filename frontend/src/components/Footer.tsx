import { Instagram, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-glamongo-charcoal text-white py-16 border-t-4 border-glamongo-purple">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-3xl font-playfair font-bold">
              <span className="text-glamongo-blush">
                Glam
              </span>
              <span className="text-glamongo-purple">
                ongo
              </span>
            </h3>
            <p className="text-white/80 font-poppins leading-relaxed">
              Experience luxury beauty booking with elegance and sophistication. Your perfect beauty appointment awaits.
            </p>
            <div className="accent-line" />
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-playfair font-semibold text-xl text-glamongo-blush">Quick Links</h4>
            <nav className="flex flex-col space-y-3">
              <Link 
                to="/" 
                className="text-white/80 hover:text-glamongo-blush transition-colors font-poppins hover:translate-x-2 transform duration-200"
              >
                Home
              </Link>
              <Link 
                to="/services" 
                className="text-white/80 hover:text-glamongo-purple transition-colors font-poppins hover:translate-x-2 transform duration-200"
              >
                Services
              </Link>
              <Link 
                to="/booking" 
                className="text-white/80 hover:text-glamongo-mint transition-colors font-poppins hover:translate-x-2 transform duration-200"
              >
                Book Now
              </Link>
            </nav>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="font-playfair font-semibold text-xl text-glamongo-purple">Connect With Us</h4>
            <div className="flex gap-3">
              <button className="w-12 h-12 rounded-full bg-glamongo-blush hover:bg-glamongo-rose transition-all duration-300 flex items-center justify-center text-white hover:scale-110 shadow-rose">
                <Instagram className="w-5 h-5" />
              </button>
              <button className="w-12 h-12 rounded-full bg-glamongo-purple hover:bg-glamongo-lavender transition-all duration-300 flex items-center justify-center text-white hover:scale-110 shadow-purple">
                <Send className="w-5 h-5" />
              </button>
            </div>
            <p className="text-sm text-white/70 font-poppins leading-relaxed">
              Follow us for beauty inspiration, exclusive offers, and elegant transformations!
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/20 text-center text-sm text-white/60 font-poppins">
          <p>&copy; {new Date().getFullYear()} Glamongo. All rights reserved. Crafted with elegance.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
