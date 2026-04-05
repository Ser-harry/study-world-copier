import courseMech from "@/assets/course-mechanical.jpg";
import courseECE from "@/assets/course-ece.jpg";
import courseEEE from "@/assets/course-eee.jpg";
import courseCSE from "@/assets/course-cse.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const courses = [
  { img: courseMech, title: "B.E Mechanical Engineering" },
  { img: courseECE, title: "B.E Electronics and Communication Engineering" },
  { img: courseEEE, title: "B.E Electrical and Electronics Engineering" },
  { img: courseCSE, title: "B.E Computer Science and Engineering" },
];

const CoursesSection = () => (
  <section id="courses" className="section-padding bg-section-alt">
    <div className="container-custom">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">Our Courses</h2>
        <p className="text-muted-foreground">Study World College of Engineering</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {courses.map((c) => (
          <div key={c.title} className="bg-card rounded-lg overflow-hidden shadow-md group hover:shadow-2xl transition-shadow duration-300">
            <div className="overflow-hidden h-48">
              <img src={c.img} alt={c.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
            </div>
            <div className="p-5">
              <span className="text-xs font-semibold text-secondary">Engineering Programmes</span>
              <h3 className="font-heading font-semibold text-foreground mt-2 mb-4 text-sm leading-snug">{c.title}</h3>
              <Link to="/contact" className="block w-full">
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
