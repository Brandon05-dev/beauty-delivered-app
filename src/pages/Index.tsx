import Hero from "@/components/Hero";
import ServicesPreview from "@/components/ServicesPreview";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ServicesPreview />
      <Testimonials />
      <Gallery />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
