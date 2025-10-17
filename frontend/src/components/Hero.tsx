import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section 
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero/hero-1.png')" }}
    >
      <div className="absolute inset-0 bg-black/50 z-0" />
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Main Heading */}
          <h1 className="heading-glamongo text-white">
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
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed font-poppins italic">
            Elevate your beauty routine with our sophisticated booking platform.
            <br />
            <span className="font-semibold text-glamongo-lavender">Professional services</span>, 
            <span className="font-semibold text-glamongo-blush"> elegant experience</span>, 
            effortless appointments.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link to="/booking">
              <button className="btn-glamongo group inline-flex items-center gap-2">
                Book Appointment
              </button>
            </Link>
            <Link to="/services">
              <button className="btn-glamongo-outline text-white border-white hover:bg-white hover:text-glamongo-rose">
                View Services
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
