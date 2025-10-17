import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b-2 border-glamongo-purple/20 shadow-purple">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="text-2xl md:text-3xl font-playfair font-bold hover:scale-105 transition-transform">
            <span className="text-glamongo-blush">
              Glam
            </span>
            <span className="text-glamongo-purple">
              ongo
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              to="/" 
              className="text-glamongo-charcoal hover:text-glamongo-rose transition-colors font-poppins font-semibold relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-glamongo-purple group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              to="/services" 
              className="text-glamongo-charcoal hover:text-glamongo-rose transition-colors font-poppins font-semibold relative group"
            >
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-glamongo-purple group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              to="/about" 
              className="text-glamongo-charcoal hover:text-glamongo-rose transition-colors font-poppins font-semibold relative group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-glamongo-purple group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              to="/contact" 
              className="text-glamongo-charcoal hover:text-glamongo-rose transition-colors font-poppins font-semibold relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-glamongo-purple group-hover:w-full transition-all duration-300"></span>
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
          <div className="md:hidden py-4 space-y-4 border-t-2 border-glamongo-purple/20 bg-white/95 backdrop-blur-sm rounded-b-lg shadow-purple">
            <Link 
              to="/" 
              className="block text-glamongo-charcoal hover:text-glamongo-rose transition-colors font-poppins font-semibold px-2 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className="block text-glamongo-charcoal hover:text-glamongo-rose transition-colors font-poppins font-semibold px-2 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/about" 
              className="block text-glamongo-charcoal hover:text-glamongo-rose transition-colors font-poppins font-semibold px-2 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="block text-glamongo-charcoal hover:text-glamongo-rose transition-colors font-poppins font-semibold px-2 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
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
