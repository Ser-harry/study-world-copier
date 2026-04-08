import { GraduationCap, Calendar, BookMarked, TrendingUp } from "lucide-react";

const stats = [
  { icon: GraduationCap, value: "5000+", label: "Students" },
  { icon: Calendar, value: "20", label: "Years Legacy" },
  { icon: BookMarked, value: "23", label: "Courses" },
  { icon: TrendingUp, value: "95%", label: "Placement" },
];

const StatsSection = () => (
  <section className="bg-stats-bg py-16">
    <div className="container-custom px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center text-primary-foreground">
            <s.icon className="w-10 h-10 mx-auto mb-3 text-secondary" />
            <div className="text-4xl md:text-5xl font-heading font-bold mb-1">{s.value}</div>
            <div className="text-primary-foreground/70 text-sm font-medium tracking-wide uppercase">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
