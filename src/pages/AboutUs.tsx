import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import campusLife from "@/assets/campus-life.jpg";
import heroCampus from "@/assets/hero-campus.jpg";
import { BookOpen, Award, Users, Target, Eye } from "lucide-react";

const AboutUs = () => (
  <div className="min-h-screen">
    <TopBar />
    <Navbar />

    {/* Page Banner */}
    <section className="relative h-[300px] overflow-hidden">
      <img src={heroCampus} alt="About Us" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-hero-overlay/80" />
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-3">About Us</h1>
      </div>
    </section>

    {/* The Group */}
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="text-secondary font-semibold text-sm uppercase tracking-widest">About Our Institution</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3 mb-6">
              Study World Institutions
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Study World Institutions is a multidisciplinary educational group established in 2009, committed to shaping future-ready professionals through quality education, practical learning, and industry-focused training. With a strong presence in Engineering, Arts and Science and Allied Health Sciences, we aim to provide students with a well-rounded academic experience that goes beyond textbooks.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our institutions are built on the belief that education should empower individuals with both knowledge and real-world skills. Across all our colleges, we focus on blending academic excellence with hands-on learning, ensuring students are prepared to meet the demands of today's competitive world.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-xl">
            <img src={campusLife} alt="Campus" className="w-full h-[400px] object-cover" loading="lazy" />
          </div>
        </div>
      </div>
    </section>

    {/* Our Institutions */}
    <section className="section-padding bg-section-alt">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center mb-14">Our Institutions</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card rounded-xl p-8 border border-border shadow-md hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mb-5">
              <Award className="w-7 h-7 text-secondary" />
            </div>
            <h3 className="font-heading font-bold text-xl text-foreground mb-3">Engineering College</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              We offer cutting-edge engineering programs designed to equip students with technical expertise and problem-solving abilities. With modern labs, experienced faculty and exposure to emerging technologies, we help students build strong foundations for careers in the tech-driven world.
            </p>
          </div>
          <div className="bg-card rounded-xl p-8 border border-border shadow-md hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mb-5">
              <BookOpen className="w-7 h-7 text-secondary" />
            </div>
            <h3 className="font-heading font-bold text-xl text-foreground mb-3">Arts and Science College</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Our Arts and Science programs are designed to nurture creativity, critical thinking, and analytical skills. From commerce and management to computer science and humanities, we provide diverse courses that open doors to multiple career paths.
            </p>
          </div>
          <div className="bg-card rounded-xl p-8 border border-border shadow-md hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mb-5">
              <Users className="w-7 h-7 text-secondary" />
            </div>
            <h3 className="font-heading font-bold text-xl text-foreground mb-3">Allied Health Science College</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Focused on healthcare education, our Allied Health Science programs prepare students for vital roles in the medical field. With practical training, clinical exposure and a strong emphasis on patient care, we aim to develop skilled healthcare professionals.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Vision & Mission */}
    <section className="section-padding bg-stats-bg">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-primary-foreground/10 backdrop-blur rounded-xl p-10 border border-primary-foreground/10">
            <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center mb-5">
              <Eye className="w-7 h-7 text-secondary" />
            </div>
            <h3 className="font-heading font-bold text-2xl text-primary-foreground mb-4">Our Vision</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              To be a leading educational group that transforms students into skilled, responsible and innovative professionals who contribute meaningfully to society.
            </p>
          </div>
          <div className="bg-primary-foreground/10 backdrop-blur rounded-xl p-10 border border-primary-foreground/10">
            <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center mb-5">
              <Target className="w-7 h-7 text-secondary" />
            </div>
            <h3 className="font-heading font-bold text-2xl text-primary-foreground mb-4">Our Mission</h3>
            <ul className="text-primary-foreground/80 leading-relaxed space-y-2 list-none">
              {[
                "To provide quality education across diverse disciplines",
                "To emphasize practical learning and industry relevance",
                "To support students in building successful careers",
                "To foster innovation, ethics, and lifelong learning",
              ].map((m) => (
                <li key={m} className="flex items-start gap-2">
                  <span className="text-secondary mt-1">✦</span>
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="text-center text-primary-foreground/70 mt-12 text-base italic">
          At Study World Institutions, we don't just educate — we prepare students for life.
        </p>
      </div>
    </section>

    <FooterSection />
  </div>
);

export default AboutUs;
