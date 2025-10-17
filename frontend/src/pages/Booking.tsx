import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { toast } from "sonner";
import { Calendar as CalendarIcon, Clock, MapPin } from "lucide-react";
import { bookingAPI } from "@/services/api";

const services = [
  { value: "Everyday Makeup", label: "Everyday Makeup - KES 10,400", duration: "60 min" },
  { value: "Nail Services", label: "Nail Services - From KES 6,500", duration: "45-90 min" },
  { value: "Bridal Glam", label: "Bridal Glam - From KES 32,500", duration: "2-3 hours" },
  { value: "Special Occasion", label: "Special Occasion - KES 15,600", duration: "75-90 min" },
];

const timeSlots = [
  "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
];

const Booking = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    time: "",
    address: "",
    notes: "",
    discountCode: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.service || !date || !formData.time || !formData.address) {
      toast.error("Please fill in all required fields");
      return;
    }

    const bookingDetails = [
      `*New Booking Request*`,
      `*Name:* ${formData.name}`,
      `*Phone:* ${formData.phone}`,
      `*Email:* ${formData.email || 'N/A'}`,
      `*Service:* ${formData.service}`,
      `*Date:* ${date.toLocaleDateString()}`,
      `*Time:* ${formData.time}`,
      `*Address:* ${formData.address}`,
      `*Notes:* ${formData.notes || 'None'}`,
      `*Discount Code:* ${formData.discountCode || 'None'}`
    ].join('%0A'); // URL-encode newlines

    const whatsappUrl = `https://wa.me/254790889066?text=${bookingDetails}`;

    window.open(whatsappUrl, '_blank');

    toast.success("Redirecting to WhatsApp to confirm your booking...", {
      duration: 5000,
    });

    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      service: "",
      time: "",
      address: "",
      notes: "",
      discountCode: "",
    });
    setDate(new Date());
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-glamongo-ivory/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="heading-glamongo">
              Book Your <span className="text-glamongo-rose">Appointment</span>
            </h1>
            <div className="flex justify-center">
              <div className="accent-line" />
            </div>
            <p className="text-xl text-glamongo-charcoal/70 font-poppins">
              Choose your service, pick your time, and experience elegant beauty at your convenience
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-elegant border-2 border-glamongo-blush/30 overflow-hidden">
            <div className="bg-glamongo-blush/20 p-8 border-b-2 border-glamongo-blush/30">
              <h2 className="text-3xl font-playfair font-bold text-glamongo-charcoal">Booking Details</h2>
              <p className="text-glamongo-charcoal/70 font-poppins mt-2">Fill in your details to reserve your appointment</p>
            </div>
            <div className="p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-playfair font-semibold flex items-center gap-3 text-glamongo-charcoal">
                    <div className="w-8 h-8 rounded-full bg-glamongo-rose/20 flex items-center justify-center text-glamongo-rose font-bold shadow-rose">1</div>
                    Your Information
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Jane Doe"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="+1 (555) 000-0000"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div className="space-y-4">
                  <h3 className="text-lg font-playfair font-semibold flex items-center gap-3 text-glamongo-charcoal">
                    <div className="w-8 h-8 rounded-full bg-glamongo-rose/20 flex items-center justify-center text-glamongo-rose font-bold shadow-rose">2</div>
                    Choose Your Service
                  </h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="service">Service *</Label>
                    <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                      <SelectTrigger id="service">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service.value} value={service.value}>
                            {service.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Date & Time */}
                <div className="space-y-4">
                  <h3 className="text-lg font-playfair font-semibold flex items-center gap-3 text-glamongo-charcoal">
                    <div className="w-8 h-8 rounded-full bg-glamongo-rose/20 flex items-center justify-center text-glamongo-rose font-bold shadow-rose">3</div>
                    Pick Date & Time
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label className="flex items-center gap-2">
                        <CalendarIcon className="w-4 h-4" />
                        Date *
                      </Label>
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        disabled={(date) => date < new Date()}
                        className="rounded-md border"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="time" className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        Time Slot *
                      </Label>
                      <Select value={formData.time} onValueChange={(value) => handleInputChange("time", value)}>
                        <SelectTrigger id="time">
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((slot) => (
                            <SelectItem key={slot} value={slot}>
                              {slot}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="space-y-4">
                  <h3 className="text-lg font-playfair font-semibold flex items-center gap-3 text-glamongo-charcoal">
                    <div className="w-8 h-8 rounded-full bg-glamongo-rose/20 flex items-center justify-center text-glamongo-rose font-bold shadow-rose">4</div>
                    Your Location
                  </h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="address" className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      Address *
                    </Label>
                    <Textarea
                      id="address"
                      value={formData.address}
                      onChange={(e) => handleInputChange("address", e.target.value)}
                      placeholder="123 Main Street, Apartment 4B, City, State, ZIP"
                      required
                      rows={3}
                    />
                  </div>
                </div>

                {/* Additional Details */}
                <div className="space-y-4">
                  <h3 className="text-lg font-playfair font-semibold text-glamongo-charcoal">Additional Details</h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="notes">Special Requests or Notes</Label>
                    <Textarea
                      id="notes"
                      value={formData.notes}
                      onChange={(e) => handleInputChange("notes", e.target.value)}
                      placeholder="Any special requests, allergies, or preferences?"
                      rows={3}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="discountCode">Discount Code</Label>
                    <Input
                      id="discountCode"
                      value={formData.discountCode}
                      onChange={(e) => handleInputChange("discountCode", e.target.value)}
                      placeholder="Enter your loyalty discount code"
                    />
                  </div>
                </div>

                {/* Submit */}
                <div className="pt-6 border-t border-glamongo-blush/40">
                  <button 
                    type="submit" 
                    className="btn-glamongo w-full text-lg py-4"
                  >
                    Confirm Booking on WhatsApp
                  </button>
                  <p className="text-sm text-glamongo-charcoal/60 text-center mt-4 font-poppins">
                    You will be redirected to WhatsApp to send your booking details.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Booking;
