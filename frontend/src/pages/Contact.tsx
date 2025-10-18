import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Loader2 } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill out all fields.");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Message sent successfully! We'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error(result.message || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Contact form submission error:", error);
      toast.error("An unexpected error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 bg-glamongo-ivory/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="heading-glamongo">
              Contact <span className="text-glamongo-rose">Us</span>
            </h1>
            <div className="flex justify-center">
              <div className="accent-line" />
            </div>
            <p className="text-xl text-glamongo-charcoal/70 font-poppins">
              We'd love to hear from you! Whether you have a question or want to book a service, we're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-elegant border-2 border-glamongo-blush/30">
              <h2 className="text-3xl font-playfair font-bold text-glamongo-charcoal mb-6">Send a Message</h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Your Name" value={formData.name} onChange={handleInputChange} disabled={isSubmitting} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" value={formData.email} onChange={handleInputChange} disabled={isSubmitting} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="How can we help you?" rows={5} value={formData.message} onChange={handleInputChange} disabled={isSubmitting} />
                </div>
                <Button type="submit" className="btn-glamongo w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Submit"
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Info & Map */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-elegant border-2 border-glamongo-blush/30">
                <h2 className="text-3xl font-playfair font-bold text-glamongo-charcoal mb-6">Our Info</h2>
                <div className="space-y-4 font-poppins">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-glamongo-rose mt-1" />
                    <div>
                      <h3 className="font-semibold text-glamongo-charcoal">Our Location</h3>
                      <p className="text-glamongo-charcoal/70">Kasarani, Nairobi, Kenya</p>
                      <p className="text-sm text-glamongo-charcoal/60">(We are a mobile service and come to you!)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-glamongo-rose mt-1" />
                    <div>
                      <h3 className="font-semibold text-glamongo-charcoal">Call Us</h3>
                      <p className="text-glamongo-charcoal/70">(254) 790 889 066</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-glamongo-rose mt-1" />
                    <div>
                      <h3 className="font-semibold text-glamongo-charcoal">Email Us</h3>
                      <p className="text-glamongo-charcoal/70">contact@glamourgo.com</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-elegant border-2 border-glamongo-blush/30">
                {/* Replace with your actual map embed */}
                <iframe
                  src="https://maps.google.com/maps?q=Kasarani,Nairobi&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  title="Google Maps Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contact;
