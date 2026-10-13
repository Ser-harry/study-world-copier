import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Clock, Users, Award, ArrowUpRight, GraduationCap } from "lucide-react";
import { engineeringCourses, artsCourses, alliedHealthCourses, CourseDetail } from "@/data/courses";

export default function CoursesSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    { label: "All Programmes", value: "All" },
    { label: "Engineering (SWCE)", value: "Engineering" },
    { label: "Arts & Science (SWCAS)", value: "Arts & Science" },
    { label: "Allied Health Sciences (SWAHS)", value: "Allied Health Sciences" }
  ];

  const getFilteredCourses = (): CourseDetail[] => {
    if (selectedCategory === "Engineering") return engineeringCourses;
    if (selectedCategory === "Arts & Science") return artsCourses;
    if (selectedCategory === "Allied Health Sciences") return alliedHealthCourses;
    return [...engineeringCourses, ...artsCourses, ...alliedHealthCourses];
  };

  const displayedCourses = getFilteredCourses();

  return (
    <section id="courses" className="py-20 bg-section-alt relative">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12 px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/15 text-secondary border border-secondary/25 text-xs font-bold uppercase tracking-wider mb-3">
            <GraduationCap className="w-4 h-4" />
            Accredited Academic Programmes
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-foreground mb-4">
            Our Courses & Departments
          </h2>
          <div className="w-20 h-1.5 bg-secondary mx-auto rounded-full mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Choose from industry-driven undergraduate and postgraduate programmes across Engineering, Arts & Science, and Allied Health Sciences.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${
                  selectedCategory === cat.value
                    ? "bg-primary text-primary-foreground shadow-md scale-102"
                    : "bg-card text-foreground hover:bg-secondary/10 border border-border"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4">
          {displayedCourses.map((c) => (
            <div
              key={c.title}
              className="bg-card flex flex-col rounded-2xl overflow-hidden border border-border shadow-xs group hover:shadow-xl hover:border-secondary/30 transition-all duration-300"
            >
              {/* Course Thumbnail Image */}
              <div className="relative overflow-hidden h-48 shrink-0 bg-muted">
                <img
                  src={c.img}
                  alt={c.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                
                {/* Category Pill */}
                <div className="absolute top-3 left-3 bg-primary/90 text-primary-foreground text-[11px] font-bold px-2.5 py-0.5 rounded-full backdrop-blur-xs">
                  {c.category}
                </div>

                {/* Duration */}
                <div className="absolute bottom-3 left-3 text-white text-xs font-semibold flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-secondary" />
                  <span>{c.duration}</span>
                </div>
              </div>

              {/* Course Content */}
              <div className="p-5 flex flex-col flex-grow justify-between space-y-4">
                <div>
                  <span className="text-xs font-bold text-secondary uppercase tracking-wider block mb-1">
                    {c.shortTitle}
                  </span>
                  <h3 className="font-heading font-bold text-foreground text-base leading-snug group-hover:text-primary transition-colors line-clamp-2">
                    {c.title}
                  </h3>
                  
                  {c.affiliation && (
                    <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground mt-2">
                      <Award className="w-3.5 h-3.5 text-secondary shrink-0" />
                      <span className="truncate">{c.affiliation}</span>
                    </div>
                  )}

                  <p className="text-xs text-muted-foreground line-clamp-3 mt-3 leading-relaxed">
                    {c.desc}
                  </p>
                </div>

                {/* Card Footer */}
                <div className="pt-3 border-t border-border flex items-center justify-between gap-3">
                  <div className="text-[11px] font-semibold text-muted-foreground flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-secondary" />
                    <span>Seats: {c.seats}</span>
                  </div>

                  <a href="#admissions">
                    <Button
                      size="sm"
                      className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-xs font-bold px-4 rounded-lg flex items-center gap-1 shadow-xs"
                    >
                      Apply Now
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Wing Pages Links */}
        <div className="mt-14 pt-8 border-t border-border text-center">
          <p className="text-sm font-semibold text-muted-foreground mb-4">
            Explore dedicated department portals for in-depth faculty profiles & syllabus:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/institutions/engineering">
              <Button variant="outline" className="text-xs sm:text-sm font-bold border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                College of Engineering (Anna Univ) →
              </Button>
            </Link>
            <Link to="/institutions/arts">
              <Button variant="outline" className="text-xs sm:text-sm font-bold border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
                College of Arts & Science (Bharathiar Univ) →
              </Button>
            </Link>
            <Link to="/institutions/allied-health">
              <Button variant="outline" className="text-xs sm:text-sm font-bold border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                College of Allied Health Sciences (TNMGRMU) →
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
