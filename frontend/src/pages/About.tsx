import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Target, Eye } from "lucide-react";

const teamMembers = [
  {
    name: "Jane Doe",
    role: "Lead Stylist & Founder",
    bio: "With over 10 years of experience in the beauty industry, Jane is passionate about making every client feel like a star. She specializes in bridal and special occasion makeup.",
    image: "/images/testimonials/avatar-1.png",
  },
  {
    name: "John Smith",
    role: "Nail & Hair Specialist",
    bio: "John's creativity knows no bounds. From intricate nail art to stunning updos, he brings a fresh and modern approach to every appointment.",
    image: "/images/testimonials/avatar-2.png",
  },
  {
    name: "Emily White",
    role: "Barber & Men's Grooming Expert",
    bio: "Emily is a master of precision cuts and classic shaves. She is dedicated to providing top-notch grooming services that blend tradition with modern style.",
    image: "/images/testimonials/avatar-3.png",
  },
];

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section 
        className="relative py-28 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/about/about-1.png')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold text-white">
              About <span className="text-glamongo-rose">Us</span>
            </h1>
            <div className="flex justify-center">
              <div className="accent-line bg-white" />
            </div>
            <p className="text-xl text-white/90 font-poppins">
              Meet the passionate team behind GlamourGo, dedicated to bringing beauty to your doorstep.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="subheading-glamongo">Our Story</h2>
            <p className="text-lg text-glamongo-charcoal/80 leading-relaxed font-poppins">
              Founded in 2023, GlamourGo was born from a simple idea: to provide luxurious, convenient, and personalized beauty services that fit into your busy lifestyle. We believe that everyone deserves to feel pampered and confident, without the hassle of traveling to a salon. Our team of professional stylists is committed to delivering a top-tier experience in the comfort of your own home, office, or event venue.
            </p>
            <p className="text-lg text-glamongo-charcoal/80 leading-relaxed font-poppins">
              We use only the highest quality products and stay up-to-date with the latest trends to ensure you receive the best service possible. Your beauty and satisfaction are our top priorities.
            </p>
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-20 bg-glamongo-ivory/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-6 bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="flex justify-center mb-4">
                <Target className="w-12 h-12 text-glamongo-rose" />
              </div>
              <h3 className="text-3xl font-playfair font-bold text-glamongo-charcoal">Our Mission</h3>
              <div className="accent-line-small mx-auto" />
              <p className="text-glamongo-charcoal/80 leading-relaxed font-poppins">
                To empower individuals by delivering convenient, high-quality, and personalized beauty services that inspire confidence and celebrate unique style, anytime and anywhere.
              </p>
            </div>
            <div className="space-y-6 bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="flex justify-center mb-4">
                <Eye className="w-12 h-12 text-glamongo-rose" />
              </div>
              <h3 className="text-3xl font-playfair font-bold text-glamongo-charcoal">Our Vision</h3>
              <div className="accent-line-small mx-auto" />
              <p className="text-glamongo-charcoal/80 leading-relaxed font-poppins">
                To become the leading on-demand beauty service provider, renowned for our exceptional artistry, unparalleled convenience, and commitment to making every client feel extraordinary.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center space-y-12">
            <h2 className="subheading-glamongo">Meet Our Team</h2>
            <div className="grid md:grid-cols-3 gap-12">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center space-y-4 animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                  <Avatar className="w-32 h-32 mx-auto border-4 border-glamongo-rose/50 shadow-lg">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-2xl font-playfair font-bold text-glamongo-charcoal">{member.name}</h3>
                    <p className="text-glamongo-rose font-medium">{member.role}</p>
                  </div>
                  <p className="text-glamongo-charcoal/70 font-poppins text-sm">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default About;
