import { useState } from "react";

const tabs = [
  {
    label: "The Group",
    content: "Study World Group's business originated from Dubai in the year 2005 and is currently registered in the British Virgin Islands. Through our wide network in different countries, we are engaged in a variety of education management activities ranging from K-12 schools to Universities. Our Group activities include Nurseries, Schools, Vocational Training Institutes, Colleges, Universities, and Education Management.",
  },
  {
    label: "Principal",
    content: "Study World College of Engineering (SWCE) is one of the reputed private institutions of higher education located in Coimbatore, India. Our campus is located in a serene suburban area which allows our budding engineers to focus their attention completely on studies, creativity and innovation. We provide the broadest possible scope and opportunity for academic exploration.",
  },
  {
    label: "Vision & Mission",
    content: "VISION: To facilitate Global Education for indigenous students, on a par with International Standards, thereby enabling the creation of Global Leaders who can make a positive impact on the society at all levels. MISSION: To provide state-of-the-art infrastructure and provide global exposure to students, nurturing creativity, fostering research and empowering leadership.",
  },
];

const WhyChooseSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center mb-12">
          Why People Choose Our Education
        </h2>
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tabs.map((tab, i) => (
            <button
              key={tab.label}
              onClick={() => setActive(i)}
              className={`px-6 py-3 rounded-full font-semibold text-sm transition-all ${
                active === i
                  ? "bg-secondary text-secondary-foreground shadow-lg"
                  : "bg-accent text-accent-foreground hover:bg-secondary/20"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="max-w-3xl mx-auto bg-accent rounded-xl p-8 md:p-10">
          <h3 className="font-heading font-semibold text-xl text-foreground mb-4">{tabs[active].label}</h3>
          <p className="text-muted-foreground leading-relaxed">{tabs[active].content}</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
