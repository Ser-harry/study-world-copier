import { Button } from "@/components/ui/button";

const AdmissionsSection = () => (
  <section id="admissions" className="section-padding bg-section-alt">
    <div className="container-custom">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">Admission Started</h2>
        <p className="text-muted-foreground">Reserve your seats for 2026-27 batch</p>
      </div>

      <div className="max-w-xl mx-auto bg-card rounded-xl shadow-lg p-8">
        <h3 className="font-heading font-semibold text-xl text-foreground mb-6 text-center">Registration For Course</h3>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary text-sm"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary text-sm"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary text-sm"
          />
          <select className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary text-sm">
            <option>Select Course</option>
            <option>B.E Mechanical Engineering</option>
            <option>B.E Electronics and Communication Engineering</option>
            <option>B.E Electrical and Electronics Engineering</option>
            <option>B.E Computer Science and Engineering</option>
            <option>Information Technology</option>
            <option>Artificial Intelligence & Data Science</option>
            <option>MBA</option>
          </select>
          <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground py-6 text-base font-semibold rounded-lg">
            Submit Application
          </Button>
        </form>
      </div>
    </div>
  </section>
);

export default AdmissionsSection;
