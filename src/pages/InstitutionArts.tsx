import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import heroCampus from "@/assets/hero-campus.jpg";
import { Button } from "@/components/ui/button";
import { Clock, Users, BookOpen, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { artsCourses } from "@/data/courses";

const InstitutionArts = () => (
  <div className="min-h-screen">
    <TopBar />
    <Navbar />

    {/* Page Banner */}
    <section className="relative h-[300px] overflow-hidden">
      <img src={heroCampus} alt="Arts & Science" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-hero-overlay/80" />
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-3">Arts & Science</h1>
      </div>
    </section>

    {/* Intro */}
    <section className="section-padding bg-background">
      <div className="container-custom text-center max-w-3xl mx-auto">
        <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Academic Programs</span>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3 mb-5">
          Arts & Science Programmes
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Study World College of Arts and Science offers diverse undergraduate programs affiliated to Bharathiar University.
          Empowering dreams with excellence and joy for enthusiastic aspirants.
        </p>
      </div>
    </section>

    {/* Department Cards */}
    <section className="pb-20 bg-background">
      <div className="container-custom px-4 sm:px-6 lg:px-8 space-y-16">
        {artsCourses.map((dept, i) => (
          <div
            key={dept.title}
            className={`grid lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}
          >
            <div className={`rounded-xl overflow-hidden shadow-xl ${i % 2 === 1 ? "lg:order-2" : ""}`}>
              <img src={dept.img} alt={dept.shortTitle} className="w-full h-[350px] object-cover" loading="lazy" />
            </div>
            <div className={i % 2 === 1 ? "lg:order-1" : ""}>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">{dept.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{dept.desc}</p>

              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 text-secondary" />
                  <span>{dept.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="w-4 h-4 text-secondary" />
                  <span>{dept.seats} Seats</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <BookOpen className="w-4 h-4 text-secondary" />
                  <span>UG Programme</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Award className="w-4 h-4 text-secondary" />
                  <span>Bharathiar University</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {dept.highlights.map((h) => (
                  <div key={h} className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                    {h}
                  </div>
                ))}
              </div>

              <Link to="/#admissions">
                <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 rounded-full font-semibold">
                  Apply Now
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>

    <FooterSection />
  </div>
);

export default InstitutionArts;
