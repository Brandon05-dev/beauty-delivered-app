import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-glamongo-blush/30 shadow-rose">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="text-2xl md:text-3xl font-playfair font-bold text-glamongo-charcoal hover:scale-105 transition-transform">
            Glam<span className="text-glamongo-rose">ongo</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              to="/" 
              className="text-glamongo-charcoal hover:text-glamongo-rose transition-colors font-poppins font-medium"
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className="text-glamongo-charcoal hover:text-glamongo-rose transition-colors font-poppins font-medium"
            >
              Services
            </Link>
            <Link to="/booking">
              <button className="btn-glamongo">Book Now</button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-glamongo-charcoal hover:text-glamongo-rose transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-glamongo-blush/30 bg-white/95 backdrop-blur-sm rounded-b-lg">
            <Link 
              to="/" 
              className="block text-glamongo-charcoal hover:text-glamongo-rose transition-colors font-poppins font-medium px-2 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className="block text-glamongo-charcoal hover:text-glamongo-rose transition-colors font-poppins font-medium px-2 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link to="/booking" onClick={() => setIsMenuOpen(false)}>
              <button className="btn-glamongo w-full">Book Now</button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
