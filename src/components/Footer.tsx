import { Instagram, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground/5 border-t border-accent/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              Glam<span className="text-accent">On</span>Go
            </h3>
            <p className="text-muted-foreground">
              Your beauty, delivered. Professional makeup and nail services at your doorstep.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-muted-foreground hover:text-accent transition-colors">
                Home
              </Link>
              <Link to="/services" className="text-muted-foreground hover:text-accent transition-colors">
                Services
              </Link>
              <Link to="/booking" className="text-muted-foreground hover:text-accent transition-colors">
                Book Now
              </Link>
            </nav>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Connect With Us</h4>
            <div className="flex gap-3">
              <Button variant="outline" size="icon" className="rounded-full">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Send className="w-5 h-5" />
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Follow us for beauty tips, exclusive offers, and transformations!
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-accent/20 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} GlamOnGo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
