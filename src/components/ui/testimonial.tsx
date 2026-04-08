import { User, Quote } from "lucide-react";

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "Aditya Varma",
      role: "Software Engineer @ TCS",
      content: "The placement cell at SWCE provided excellent training. The industry exposure I received here was instrumental in securing my dream job in the software industry.",
      initials: "AV"
    },
    {
      name: "Kavita Reddy",
      role: "Design Engineer @ Mahindra",
      content: "State-of-the-art laboratory facilities and practical workshops gave me the hands-on experience needed for mechanical engineering. Truly a professional environment.",
      initials: "KR"
    },
    {
      name: "Sandeep Nair",
      role: "Systems Analyst @ Infosys",
      content: "Study World offers a holistic learning environment. The focus on both technical excellence and leadership skills has helped me grow immensely in my career.",
      initials: "SN"
    }
  ];

  return (
    <section className="py-20 bg-section-alt overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    
        * {
            font-family: 'Poppins', sans-serif;
        }
      `}</style>

      <div className="container-custom">
        <div className="text-center mb-16 px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">
            Alumni Success Stories
          </h2>
          <div className="w-20 h-1.5 bg-secondary mx-auto rounded-full"></div>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Our students have successfully transitioned into leaders at top global firms. Discover how Study World shaped their professional paths.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {testimonials.map((t, i) => (
            <div 
              key={i} 
              className="group relative bg-white p-8 rounded-2xl shadow-sm border border-border hover:shadow-xl hover:border-secondary/20 transition-all duration-300"
            >
              {/* Floating Quote Icon */}
              <div className="absolute -top-4 -right-4 bg-secondary text-white p-3 rounded-xl shadow-lg transform group-hover:rotate-12 transition-transform">
                <Quote size={24} />
              </div>

              <div className="flex flex-col h-full">
                <p className="text-foreground/80 italic mb-8 leading-relaxed text-lg">
                  "{t.content}"
                </p>
                
                <div className="mt-auto flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border-2 border-primary/20 text-primary font-bold">
                    {t.initials}
                  </div>
                  <div>
                    <h3 className="font-bold text-primary text-lg leading-tight uppercase tracking-wide">
                      {t.name}
                    </h3>
                    <p className="text-secondary font-semibold text-sm">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
