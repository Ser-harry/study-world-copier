import { Building2, Briefcase, Users2, Sparkles } from "lucide-react";

const items = [
  { icon: Building2, title: "Infrastructure", desc: "We have large infrastructure and amenities for students" },
  { icon: Briefcase, title: "Training & Placement", desc: "One of the largest Training & Placement records in India" },
  { icon: Users2, title: "Associations", desc: "College associations in various sectors" },
  { icon: Sparkles, title: "Clubs", desc: "Technical Gossipers Club, Innovators Club, SEED clubs" },
];

const CampusSection = () => (
  <section id="campus" className="section-padding bg-background">
    <div className="container-custom">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Our Campus Life</h2>
        <p className="text-muted-foreground leading-relaxed">
          The ideal atmosphere of an educational institution shapes one's career. Our campus provides a serene ambience for learners to concentrate on creative and research work.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map((item) => (
            <div key={item.title} className="bg-accent rounded-lg p-6 hover:bg-primary hover:text-primary-foreground group transition-colors duration-300 cursor-pointer">
              <item.icon className="w-8 h-8 text-secondary mb-3" />
              <h3 className="font-heading font-semibold text-foreground group-hover:text-primary-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/80">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="rounded-lg overflow-hidden shadow-xl">
          <img src="/Photos/campus_4.JPG" alt="Campus Life" className="w-full h-[400px] object-cover" loading="lazy" />
        </div>
      </div>
    </div>
  </section>
);

export default CampusSection;
