import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import campusLife from "@/assets/campus-life.jpg";
import heroCampus from "@/assets/hero-campus.jpg";
import { BookOpen, Globe, Award, Users, Target, Eye } from "lucide-react";

const milestones = [
  { year: "2005", text: "Study World Group established in Dubai" },
  { year: "2009", text: "Study World College of Engineering founded in Coimbatore" },
  { year: "2012", text: "First batch of engineers graduated" },
  { year: "2015", text: "Expanded to 5 engineering departments" },
  { year: "2020", text: "AI & Data Science program launched" },
  { year: "2024", text: "5000+ alumni worldwide" },
];

const values = [
  { icon: BookOpen, title: "Academic Excellence", desc: "Rigorous curriculum aligned with industry standards and global best practices." },
  { icon: Globe, title: "Global Exposure", desc: "International partnerships and exchange programs for a global perspective." },
  { icon: Award, title: "Innovation", desc: "Fostering creativity and research through modern labs and incubation centers." },
  { icon: Users, title: "Holistic Development", desc: "Focus on leadership, communication, and personal growth alongside academics." },
];

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
              Study World Group of Institutions
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Study World Group's business originated from Dubai in the year 2005 and is currently registered in the British Virgin Islands. Through our wide network in different countries, we are engaged in a variety of education management activities ranging from K-12 schools to Universities.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our Group activities include Nurseries, Schools, Vocational Training Institutes, Colleges, Universities, Education Management, Infrastructure Support, Student Accommodation and Transport, and Student Recruitment and Marketing.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Study World College of Engineering, started in 2009, is one of the renowned private institutions of Coimbatore, India. The college offers a range of courses approved by AICTE and affiliated to Anna University.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-xl">
            <img src={campusLife} alt="Campus" className="w-full h-[400px] object-cover" loading="lazy" />
          </div>
        </div>
      </div>
    </section>

    {/* Vision & Mission */}
    <section className="section-padding bg-section-alt">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-card rounded-xl p-10 shadow-md border border-border">
            <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mb-5">
              <Eye className="w-7 h-7 text-secondary" />
            </div>
            <h3 className="font-heading font-bold text-2xl text-foreground mb-4">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To facilitate Global Education for indigenous students, on a par with International Standards, thereby enabling the creation of Global Leaders who can make a positive impact on the society at all levels.
            </p>
          </div>
          <div className="bg-card rounded-xl p-10 shadow-md border border-border">
            <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mb-5">
              <Target className="w-7 h-7 text-secondary" />
            </div>
            <h3 className="font-heading font-bold text-2xl text-foreground mb-4">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To provide state-of-the-art infrastructure in each of the fields and provide global exposure to students, nurturing creativity, fostering research and empowering leadership in the process.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Our Values */}
    <section className="section-padding bg-background">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center mb-14">Our Core Values</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v) => (
            <div key={v.title} className="text-center group">
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-5 group-hover:bg-secondary transition-colors duration-300">
                <v.icon className="w-7 h-7 text-accent-foreground group-hover:text-secondary-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{v.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Milestones */}
    <section className="section-padding bg-stats-bg">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground text-center mb-14">Our Journey</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {milestones.map((m) => (
            <div key={m.year} className="bg-primary-foreground/10 backdrop-blur rounded-lg p-6 border border-primary-foreground/10">
              <span className="text-secondary font-heading font-bold text-2xl">{m.year}</span>
              <p className="text-primary-foreground/80 mt-2 text-sm">{m.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Principal's Message */}
    <section className="section-padding bg-background">
      <div className="container-custom max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center mb-10">Message from the Principal</h2>
        <div className="bg-accent rounded-xl p-8 md:p-12">
          <p className="text-muted-foreground leading-relaxed mb-4">
            Greetings! I am delighted to welcome you to the Study World College of Engineering. I hope to convey the passion and enthusiasm that both staff and students bring, making Study World a best place to learn.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Born out of the vision of our founder, Dr. Vidhya Vinod started the Study World group in 2005, growing steadily on a global scale providing students worldwide with education of international standards.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our campus is located in a serene suburban area of Coimbatore which allows our budding engineers to focus their attention completely on studies, creativity and innovation. We provide the broadest possible scope and opportunity for academic exploration.
          </p>
        </div>
      </div>
    </section>

    <FooterSection />
  </div>
);

export default AboutUs;
