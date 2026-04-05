import { BookOpen, Library, Users, Dumbbell } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Education",
    desc: "Engineering education is the key to create a sophisticated modern world through practical application of science.",
  },
  {
    icon: Library,
    title: "Library",
    desc: "A well-equipped library with sufficient volumes of books, periodicals and journals covering Science & Engineering.",
  },
  {
    icon: Users,
    title: "Campus Life",
    desc: "A proactive learning style and infinite capability for innovation form the cornerstone of successful organizations.",
  },
  {
    icon: Dumbbell,
    title: "Physical Education",
    desc: "The department concentrates on both indoor and outdoor games for holistic student development.",
  },
];

const WelcomeSection = () => (
  <section id="about" className="section-padding bg-background">
    <div className="container-custom">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
          Welcome To Study World College of Engineering
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Started in 2009, Study World College of Engineering is one of the renowned private institutions of Coimbatore, India. The college offers a range of courses approved by AICTE and affiliated to Anna University.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((f) => (
          <div
            key={f.title}
            className="bg-card border border-border rounded-lg p-8 text-center group hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-5 group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
              <f.icon className="w-7 h-7 text-accent-foreground group-hover:text-secondary-foreground" />
            </div>
            <h3 className="font-heading font-semibold text-lg text-foreground mb-3">{f.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WelcomeSection;
