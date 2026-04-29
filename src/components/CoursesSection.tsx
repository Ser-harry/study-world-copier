import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { engineeringCourses } from "@/data/courses";

const CoursesSection = () => (
  <section id="courses" className="section-padding bg-section-alt">
    <div className="container-custom">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">Our Courses</h2>
        <p className="text-muted-foreground">Study World College of Engineering</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {engineeringCourses.map((c) => (
          <div key={c.title} className="bg-card flex flex-col rounded-lg overflow-hidden shadow-md group hover:shadow-2xl transition-shadow duration-300">
            <div className="overflow-hidden h-40 shrink-0">
              <img src={c.img} alt={c.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <span className="text-xs font-semibold text-secondary">{c.shortTitle}</span>
              <h3 className="font-heading font-semibold text-foreground mt-2 mb-4 text-sm leading-snug flex-grow">{c.title}</h3>
              <Link to="/contact" className="block w-full mt-auto">
                <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full text-xs">
                  Apply Now
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CoursesSection;
