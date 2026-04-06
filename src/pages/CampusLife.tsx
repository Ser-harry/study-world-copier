import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import heroCampus from "@/assets/hero-campus.jpg";
import { Dumbbell, Music, BookOpen, Users, Wifi, Home, UtensilsCrossed, Bus } from "lucide-react";

const facilities = [
  { icon: BookOpen, title: "Library", desc: "Well-stocked library with over 25,000 books, e-journals, and digital resources." },
  { icon: Dumbbell, title: "Sports Complex", desc: "Indoor and outdoor sports facilities including cricket, football, basketball, and badminton." },
  { icon: Music, title: "Cultural Club", desc: "Active cultural club organizing annual festivals, dance, music, and drama events." },
  { icon: Users, title: "Student Clubs", desc: "Technical and non-technical clubs for robotics, coding, debate, and photography." },
  { icon: Wifi, title: "Wi-Fi Campus", desc: "Complete campus covered with high-speed Wi-Fi for seamless learning and research." },
  { icon: Home, title: "Hostel", desc: "Separate hostel facilities for boys and girls with 24/7 security and amenities." },
  { icon: UtensilsCrossed, title: "Cafeteria", desc: "Hygienic cafeteria serving nutritious meals and snacks throughout the day." },
  { icon: Bus, title: "Transport", desc: "College bus services covering major routes in and around Coimbatore." },
];

const gallery = [
  { img: "/Photos/campus_1.JPG", title: "Campus Environment" },
  { img: "/Photos/campus_3.JPG", title: "Landscape View" },
  { img: "/Photos/campus_5.JPG", title: "College Buildings" },
  { img: "/Photos/Room_1.jpg", title: "Study Facilities" },
];

const CampusLife = () => (
  <div className="min-h-screen">
    <TopBar />
    <Navbar />

    {/* Banner */}
    <section className="relative h-[300px] overflow-hidden">
      <img src={heroCampus} alt="Campus Life" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-hero-overlay/80" />
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-3">Campus Life</h1>
      </div>
    </section>

    {/* Intro */}
    <section className="section-padding bg-background">
      <div className="container-custom text-center max-w-3xl mx-auto">
        <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Life at Study World</span>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3 mb-5">
          Beyond the Classroom
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Life at Study World Institutions offers a vibrant and enriching student experience that goes beyond academics. As a leading educational institution offering Engineering, Arts and Science, and Allied Health Sciences, we provide a dynamic campus environment where students can learn, explore, and grow holistically.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          From cultural events and technical fests to sports, clubs, and student activities, our campus life encourages active participation and skill development. Students gain exposure to teamwork, leadership, and real-world experiences that prepare them for future careers.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          With modern facilities, a supportive learning atmosphere, and diverse opportunities, campus life at Study World Institutions plays a key role in shaping confident, well-rounded individuals ready to succeed in both professional and personal life.
        </p>
      </div>
    </section>

    {/* Gallery */}
    <section className="pb-16 bg-background">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {gallery.map((g) => (
            <div key={g.title} className="rounded-xl overflow-hidden shadow-md group">
              <div className="relative h-60 overflow-hidden">
                <img src={g.img} alt={g.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                <div className="absolute inset-0 bg-hero-overlay/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-primary-foreground font-semibold">{g.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Facilities */}
    <section className="section-padding bg-section-alt">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center mb-14">Campus Facilities</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {facilities.map((f) => (
            <div key={f.title} className="bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-lg transition-shadow text-center">
              <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <f.icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Student Activities */}
    <section className="section-padding bg-stats-bg">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-10">Student Activities</h2>
        <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { num: "15+", label: "Student Clubs" },
            { num: "20+", label: "Events per Year" },
            { num: "10+", label: "Sports Teams" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-4xl font-heading font-bold text-secondary mb-2">{s.num}</p>
              <p className="text-primary-foreground/80">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <FooterSection />
  </div>
);

export default CampusLife;
