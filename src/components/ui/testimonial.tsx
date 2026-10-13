import { useState } from "react";
import { Quote, Star, Building2, GraduationCap, ChevronRight } from "lucide-react";
import { testimonialsData, topRecruiters, Testimonial } from "@/data/testimonials";

export default function TestimonialSection() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const categories = ["All", "Engineering", "Arts & Science", "Allied Health Sciences"];

  const filteredTestimonials = activeFilter === "All"
    ? testimonialsData
    : testimonialsData.filter((t) => t.institution === activeFilter);

  return (
    <section id="testimonials" className="py-20 bg-section-alt overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12 px-4">
          <span className="text-secondary font-semibold text-sm uppercase tracking-widest">
            Student & Alumni Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mt-2 mb-4">
            Real Stories, Real Global Careers
          </h2>
          <div className="w-20 h-1.5 bg-secondary mx-auto rounded-full"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Hear from our graduates thriving across top multinational corporations and leading healthcare institutions worldwide.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeFilter === cat
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-card text-foreground hover:bg-secondary/10 border border-border"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {filteredTestimonials.map((t: Testimonial) => (
            <div
              key={t.id}
              className="group relative bg-card p-8 rounded-2xl shadow-sm border border-border hover:shadow-xl hover:border-secondary/30 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Floating Quote Icon */}
              <div className="absolute -top-3.5 -right-3.5 bg-secondary text-secondary-foreground p-3 rounded-xl shadow-md group-hover:scale-110 transition-transform">
                <Quote size={20} />
              </div>

              <div>
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4 text-amber-500">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" stroke="none" />
                  ))}
                  <span className="text-xs font-semibold text-muted-foreground ml-2">
                    5.0 Verified Student
                  </span>
                </div>

                {/* Content */}
                <p className="text-foreground/85 leading-relaxed text-sm md:text-base mb-6 italic">
                  "{t.content}"
                </p>
              </div>

              {/* Author & Placement Details */}
              <div className="pt-4 border-t border-border/70">
                <div className="flex items-center gap-3 mb-3">
                  {t.avatar ? (
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-secondary/40 shrink-0 shadow-sm"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border-2 border-primary/20 text-primary font-bold shrink-0">
                      {t.initials}
                    </div>
                  )}
                  <div>
                    <h3 className="font-heading font-bold text-foreground text-base leading-tight">
                      {t.name}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-0.5">
                      <GraduationCap className="w-3.5 h-3.5 text-secondary" />
                      <span>{t.course}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs bg-muted/60 px-3 py-2 rounded-lg">
                  <div className="flex items-center gap-1.5 font-medium text-foreground">
                    <Building2 className="w-3.5 h-3.5 text-primary" />
                    <span>{t.company}</span>
                  </div>
                  {t.year && (
                    <span className="text-muted-foreground font-semibold">{t.year}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Top Recruiters Marquee / Showcase from Brochure */}
        <div className="mt-16 pt-12 border-t border-border/60">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Top Placement Partners & Campus Recruiters
            </span>
            <p className="text-sm text-foreground/80 font-medium mt-1">
              70+ Recruiters Across 5 Campuses • Highest CTC ₹14 Lakhs/Annum • 500+ Placement Offers
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 px-4">
            {topRecruiters.map((recruiter) => (
              <span
                key={recruiter}
                className="px-4 py-2 bg-card rounded-lg border border-border/80 text-xs sm:text-sm font-semibold text-foreground/80 shadow-xs hover:border-secondary hover:text-secondary transition-colors"
              >
                {recruiter}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
