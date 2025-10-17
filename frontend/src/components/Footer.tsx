import { Instagram, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-glamongo-ivory border-t border-glamongo-blush/30 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-3xl font-playfair font-bold text-glamongo-charcoal">
              Glam<span className="text-glamongo-rose">ongo</span>
            </h3>
            <p className="text-glamongo-charcoal/70 font-poppins leading-relaxed">
              Experience luxury beauty booking with elegance and sophistication. Your perfect beauty appointment awaits.
            </p>
            <div className="accent-line" />
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-playfair font-semibold text-xl text-glamongo-charcoal">Quick Links</h4>
            <nav className="flex flex-col space-y-3">
              <Link 
                to="/" 
                className="text-glamongo-charcoal/70 hover:text-glamongo-rose transition-colors font-poppins"
              >
                Home
              </Link>
              <Link 
                to="/services" 
                className="text-glamongo-charcoal/70 hover:text-glamongo-rose transition-colors font-poppins"
              >
                Services
              </Link>
              <Link 
                to="/booking" 
                className="text-glamongo-charcoal/70 hover:text-glamongo-rose transition-colors font-poppins"
              >
                Book Now
              </Link>
            </nav>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="font-playfair font-semibold text-xl text-glamongo-charcoal">Connect With Us</h4>
            <div className="flex gap-3">
              <button className="w-12 h-12 rounded-full border-2 border-glamongo-blush bg-white hover:bg-glamongo-blush hover:shadow-rose transition-all duration-300 flex items-center justify-center text-glamongo-rose hover:scale-110">
                <Instagram className="w-5 h-5" />
              </button>
              <button className="w-12 h-12 rounded-full border-2 border-glamongo-blush bg-white hover:bg-glamongo-blush hover:shadow-rose transition-all duration-300 flex items-center justify-center text-glamongo-rose hover:scale-110">
                <Send className="w-5 h-5" />
              </button>
            </div>
            <p className="text-sm text-glamongo-charcoal/70 font-poppins leading-relaxed">
              Follow us for beauty inspiration, exclusive offers, and elegant transformations!
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-glamongo-blush/30 text-center text-sm text-glamongo-charcoal/60 font-poppins">
          <p>&copy; {new Date().getFullYear()} Glamongo. All rights reserved. Crafted with elegance.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
