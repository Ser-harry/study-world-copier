import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import heroCampus from "@/assets/hero-campus.jpg";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

const ContactUs = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    // Workaround: map subject to course if sharing the same basic endpoint
    formData.append("course", form.subject || "General Enquiry");
    
    try {
      await fetch("https://script.google.com/macros/s/AKfycbwisYnDrAGG9xAXJ4_7IG_LdjfxUQInu0PRBjfx65P-f75m3CDUPy-5NaWhlgeAy6wz/exec", {
        method: "POST",
        body: formData,
        mode: "no-cors"
      });
      
      toast({ 
        title: "Message Sent Successfully!", 
        description: "Our team will reach out to you within 24 hours." 
      });
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (error) {
      toast({ 
        variant: "destructive", 
        title: "Submission Error", 
        description: "Something went wrong. Please try again later." 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <TopBar />
      <Navbar />

      {/* Banner */}
      <section className="relative h-[300px] overflow-hidden">
        <img src={heroCampus} alt="Contact Us" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay/80" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-3">Contact Us</h1>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-14">
            {/* Info */}
            <div>
              <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Get In Touch</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3 mb-6">
                We'd Love to Hear From You
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Have questions about admissions, programs, or campus life? Reach out to us and our team will get back to you promptly.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-1">Address</h3>
                    <p className="text-muted-foreground text-sm">
                      1/2A-1, ALAGU NACHIAMMAN KOVIL ROAD,<br />
                      PALATHURAI, MADUKKARAI POST,<br />
                      COIMBATORE - 641 105, TAMILNADU.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-1">Phone</h3>
                    <p className="text-muted-foreground text-sm">+91 9500 940 940</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-1">Email</h3>
                    <p className="text-muted-foreground text-sm">coimbatore@swehg.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-1">Office Hours</h3>
                    <p className="text-muted-foreground text-sm">Monday – Saturday: 9:00 AM – 5:00 PM<br />Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-card rounded-xl p-8 border border-border shadow-md">
              <h3 className="font-heading font-bold text-xl text-foreground mb-6">Send us a Message</h3>
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-5">
                  <input name="name" value={form.name} onChange={handleChange} placeholder="Your Name" className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary" />
                  <input name="email" value={form.email} onChange={handleChange} placeholder="Your Email" type="email" className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary" />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number" className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary" />
                  <input name="subject" value={form.subject} onChange={handleChange} placeholder="Subject" className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary" />
                </div>
                <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your Message" rows={5} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary resize-none" />
                <Button disabled={isSubmitting} className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 rounded-full font-semibold w-full sm:w-auto">
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-section-alt">
        <div className="container-custom py-10">
          <h2 className="text-2xl font-heading font-bold text-foreground text-center mb-8">Find Us on the Map</h2>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              title="Study World College Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.069458925567!2d76.958639075702!3d10.882329259206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85b1f9cfc7743%3A0x4dc89d9c9b59b0eb!2sStudy%20World%20Group%20of%20Institution!5e0!3m2!1sen!2sin!4v1712289410114!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default ContactUs;
