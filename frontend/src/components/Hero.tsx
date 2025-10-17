import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section 
      className="relative min-h-[90vh] flex items-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero/hero-1.png')" }}
    >
      <div className="absolute inset-0 bg-black/60 z-0" />
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side: Text Content */}
          <div className="text-center md:text-left space-y-6 animate-fade-in">
            <h1 className="heading-glamongo text-white">
              <span className="text-glamongo-blush">
                Experience
              </span>
              <br />
              <span className="text-glamongo-purple">
                Glamongo
              </span>
            </h1>
            <div className="flex justify-center md:justify-start">
              <div className="accent-line" />
            </div>
            <p className="text-lg md:text-xl text-white/90 max-w-xl mx-auto md:mx-0 leading-relaxed font-poppins italic font-bold">
              Elevate your beauty routine with our sophisticated booking platform.
              <br />
              <span className="font-semibold text-glamongo-lavender">Professional services</span>, 
              <span className="font-semibold text-glamongo-blush"> elegant experience</span>, 
              effortless appointments.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4">
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

          {/* Right Side: Image Frames */}
          <div className="hidden md:flex justify-center items-center relative h-96">
            <div className="absolute top-0 right-10 w-64 h-80 rounded-2xl overflow-hidden shadow-rose-lg transform rotate-6 transition-transform duration-500 hover:scale-105">
              <img src="/images/hero/hero-2.png" alt="Beauty Service 1" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-0 right-32 w-56 h-72 rounded-2xl overflow-hidden shadow-purple transform -rotate-8 transition-transform duration-500 hover:scale-105">
              <img src="/images/hero/hero-3.png" alt="Beauty Service 2" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
