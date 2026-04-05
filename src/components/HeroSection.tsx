import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { BlurFade } from "@/components/ui/blur-fade";
import { Link } from "react-router-dom";

const colleges = [
  { text: "College of Engineering", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2670" },
  { text: "College of Arts & Science", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2670" },
  { text: "College of Allied Health", img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2670" }
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Slower interval so it stays longer before switching
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % colleges.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[600px] lg:h-[700px] overflow-hidden">
      {colleges.map((college, i) => (
        <img
          key={college.text}
          src={college.img}
          alt={college.text}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ease-in-out ${
            index === i ? "opacity-100" : "opacity-0"
          }`}
          width={1920}
          height={1080}
        />
      ))}
      <div className="absolute inset-0 bg-hero-overlay/80" />
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <span className="inline-block bg-secondary text-secondary-foreground px-6 py-2 rounded-full text-sm font-semibold mb-6 tracking-wide animate-fade-in-up">
          STUDY WORLD GROUP OF INSTITUTIONS
        </span>

        <section id="header" className="mb-2">
          {/* Main Title slightly tighter mb */}
          <BlurFade delay={0.25} inView duration={0.8}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-primary-foreground leading-tight pb-2">
              Study World
            </h1>
          </BlurFade>
          
          {/* Subtitle container with relative tight height */}
          <div className="relative h-12 md:h-16 lg:h-20 mt-1 flex items-center justify-center">
            {colleges.map((college, i) => (
              index === i && (
                <div key={college.text} className="absolute inset-x-0 flex justify-center">
                  <BlurFade delay={0.1} inView duration={0.8}>
                    <span className="text-2xl md:text-4xl lg:text-5xl whitespace-nowrap text-primary-foreground/90 font-medium tracking-tighter block">
                      {college.text}
                    </span>
                  </BlurFade>
                </div>
              )
            ))}
          </div>
        </section>

        <p className="text-xl md:text-2xl text-primary-foreground/80 font-light mt-6 mb-8 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          Your Future Begins Here
        </p>
        <Link to="/contact">
          <Button
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-10 py-6 text-base font-semibold rounded-full animate-fade-in-up transition-transform hover:scale-105"
            style={{ animationDelay: "0.45s" }}
          >
            Enquire Now
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
