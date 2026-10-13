import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { CheckCircle2, GraduationCap, Award, Sparkles, Send, ShieldCheck } from "lucide-react";

const AdmissionsSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    institution: "All",
    course: "",
    city: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.course) {
      toast({
        variant: "destructive",
        title: "Required Fields Missing",
        description: "Please fill in your name, phone number, and preferred course."
      });
      return;
    }

    setIsSubmitting(true);
    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("phone", form.phone);
    formData.append("course", `${form.course} (${form.institution}) - City: ${form.city || "Not specified"}`);

    const urlEncodedData = new URLSearchParams();
    formData.forEach((value, key) => {
      urlEncodedData.append(key, value.toString());
    });

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbxD6KN8Hue2IwYKGAj85TLgSc0eX-FVuX7x41MpW6ykMMBZ6T-u8DZLf9wmSgHKlt4/exec",
        {
          method: "POST",
          body: urlEncodedData,
          mode: "no-cors"
        }
      );

      toast({
        title: "Application Submitted Successfully! 🎉",
        description: "Our senior admission officer will contact you within 24 hours."
      });

      setForm({
        name: "",
        email: "",
        phone: "",
        institution: "All",
        course: "",
        city: ""
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Submission Error",
        description: "Unable to submit right now. Please call admissions at 9500 940 940."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="admissions" className="py-20 bg-gradient-to-b from-background via-section-alt to-background relative overflow-hidden">
      {/* Decorative background blurs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="container-custom">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Value Proposition & Details */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/15 text-secondary border border-secondary/30 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Admissions Open for Academic Year 2026 - 2027
            </div>

            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-foreground leading-tight">
              Begin Your Journey to a <span className="text-primary">Global Career</span>
            </h2>

            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Join India's premier international educational group. Secure your seat across Engineering, Arts & Science, and Allied Health Sciences with scholarship opportunities.
            </p>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border shadow-xs">
                <GraduationCap className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading font-bold text-foreground text-sm">₹50+ Lakhs Scholarships</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">Merit & Women Empowerment financial aid</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border shadow-xs">
                <Award className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading font-bold text-foreground text-sm">TNEA Code: 2770</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">Anna Univ & Bharathiar Univ Affiliated</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border shadow-xs">
                <CheckCircle2 className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading font-bold text-foreground text-sm">IBM Knowledge Partner</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">Industry-curated tech specializations</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border shadow-xs">
                <ShieldCheck className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading font-bold text-foreground text-sm">100% Placement Support</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">Top recruiters with CTC up to ₹14 LPA</p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-primary/5 border border-primary/10 text-xs text-muted-foreground flex items-center justify-between">
              <span>Need immediate guidance?</span>
              <a href="tel:+919500940940" className="text-primary font-bold hover:underline">
                Call: +91 9500 940 940
              </a>
            </div>
          </div>

          {/* Right Column: Admission Application Form */}
          <div className="lg:col-span-6">
            <div className="bg-card rounded-2xl shadow-xl border border-border p-6 sm:p-8 relative">
              <div className="mb-6">
                <h3 className="font-heading font-bold text-2xl text-foreground">
                  Online Application Form
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                  Fill in your details below to register your seat and request admission counselling.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1.5">
                    Candidate Full Name <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleInputChange}
                    placeholder="Enter candidate's full name"
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary text-sm transition-all"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1.5">
                      Phone Number <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleInputChange}
                      placeholder="+91 Mobile number"
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary text-sm transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleInputChange}
                      placeholder="name@email.com"
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary text-sm transition-all"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1.5">
                      Institution Wing
                    </label>
                    <select
                      name="institution"
                      value={form.institution}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary text-sm transition-all"
                    >
                      <option value="All">All Institutions</option>
                      <option value="Engineering (SWCE)">College of Engineering (SWCE)</option>
                      <option value="Arts & Science (SWCAS)">College of Arts & Science (SWCAS)</option>
                      <option value="Allied Health (SWAHS)">College of Allied Health Sciences (SWAHS)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1.5">
                      Preferred Course <span className="text-destructive">*</span>
                    </label>
                    <select
                      name="course"
                      value={form.course}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary text-sm transition-all"
                    >
                      <option value="">-- Choose Course --</option>
                      <optgroup label="Engineering (Anna University)">
                        <option value="B.E Computer Science & Engineering">B.E Computer Science & Engineering</option>
                        <option value="B.E CSE with Cyber Security">B.E CSE with Cyber Security</option>
                        <option value="B.E CSE with AI & ML">B.E CSE with AI & ML</option>
                        <option value="B.E Electronics & Communication">B.E Electronics & Communication</option>
                        <option value="B.E Electrical & Electronics">B.E Electrical & Electronics</option>
                        <option value="B.E Mechanical Engineering">B.E Mechanical Engineering</option>
                        <option value="B.Tech Artificial Intelligence & Data Science">B.Tech Artificial Intelligence & Data Science</option>
                        <option value="B.Tech Information Technology">B.Tech Information Technology</option>
                        <option value="MBA - Master of Business Administration">MBA - Master of Business Administration</option>
                      </optgroup>
                      <optgroup label="Arts & Science (Bharathiar University)">
                        <option value="B.Com (Computer Applications)">B.Com (Computer Applications)</option>
                        <option value="B.Com (CA) with Integrated CA">B.Com (CA) with Integrated CA</option>
                        <option value="BBA - Bachelor of Business Administration">BBA - Bachelor of Business Administration</option>
                        <option value="BBA with Aviation Management">BBA with Aviation Management</option>
                        <option value="BBA Logistics & Supply Chain Management">BBA Logistics & Supply Chain Management</option>
                        <option value="BCA - Bachelor of Computer Applications">BCA - Bachelor of Computer Applications</option>
                        <option value="BCA with IBM">BCA with IBM Collaboration</option>
                        <option value="B.Sc Computer Science">B.Sc Computer Science</option>
                        <option value="B.Sc Computer Science - AI & DS">B.Sc Computer Science - AI & DS</option>
                        <option value="B.Sc Information Technology">B.Sc Information Technology</option>
                        <option value="B.Sc Clinical Psychology">B.Sc Clinical Psychology</option>
                      </optgroup>
                      <optgroup label="Allied Health Sciences (TN Dr. M.G.R. Med Univ)">
                        <option value="B.Sc Cardiac Technology">B.Sc Cardiac Technology</option>
                        <option value="B.Sc Medical Laboratory Technology">B.Sc Medical Laboratory Technology</option>
                        <option value="B.Sc Operation Theatre & Anaesthesia">B.Sc Operation Theatre & Anaesthesia</option>
                        <option value="B.Sc Radiography & Imaging Technology">B.Sc Radiography & Imaging Technology</option>
                      </optgroup>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1.5">
                    Your City / Native Place
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={form.city}
                    onChange={handleInputChange}
                    placeholder="e.g. Coimbatore, Palakkad, Chennai, Tiruppur"
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary text-sm transition-all"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground py-3.5 text-base font-bold rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 mt-2"
                >
                  <Send className="w-4 h-4" />
                  {isSubmitting ? "Submitting Application..." : "Submit Application Form"}
                </Button>

                <p className="text-[11px] text-center text-muted-foreground pt-1">
                  🔒 Your information is secure with Study World Admissions Office. No spam guaranteed.
                </p>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AdmissionsSection;
