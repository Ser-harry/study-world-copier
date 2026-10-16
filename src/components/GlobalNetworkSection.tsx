import { Globe, MapPin, Bus, Navigation, Building, Users, GraduationCap, Award } from "lucide-react";
import logoDoveGreen from "@/assets/logos/dovegreen1.png";
import logoSwce from "@/assets/logos/swce.png";
import logoMalta from "@/assets/logos/malta.png";
import logoLanka from "@/assets/logos/lanka.png";
import logoHolding from "@/assets/logos/holiday.png";

interface GlobalCampus {
  name: string;
  country: string;
  flag: string;
  type: string;
  description: string;
  logo?: string;
  badge: string;
}

const globalCampuses: GlobalCampus[] = [
  {
    name: "STUDY WORLD Institutions India",
    country: "India (Coimbatore, Tamil Nadu)",
    flag: "🇮🇳",
    type: "Higher Education Campuses",
    description: "26-acre green campus housing STUDY WORLD College of Engineering (SWCE), College of Arts & Science (SWCAS), and College of Allied Health Sciences (SWAHS).",
    logo: logoSwce,
    badge: "Engineering, Arts & Allied Health"
  },
  {
    name: "STUDY WORLD Campus Dubai",
    country: "United Arab Emirates",
    flag: "🇦🇪",
    type: "International Higher Education",
    description: "Located in Dubai International Academic City, delivering premier undergraduate and postgraduate programs with global accreditation.",
    logo: logoHolding,
    badge: "Dubai Academic City"
  },
  {
    name: "STUDY WORLD Global College Malta",
    country: "Malta (European Union)",
    flag: "🇲🇹",
    type: "European Accredited Campus",
    description: "Situated in SmartCity Malta, offering European higher education qualifications and pathway degrees recognized worldwide.",
    logo: logoMalta,
    badge: "European Union (EU)"
  },
  {
    name: "STUDY WORLD College Sri Lanka",
    country: "Sri Lanka",
    flag: "🇱🇰",
    type: "International Academic Center",
    description: "Expanding vocational, technology, and management degree pathways in partnership with renowned international examination bodies.",
    logo: logoLanka,
    badge: "South Asia Gateway"
  },
  {
    name: "STUDY WORLD Campus Saudi Arabia",
    country: "Kingdom of Saudi Arabia",
    flag: "🇸🇦",
    type: "Corporate & Higher Education",
    description: "International learning and vocational skill hub delivering specialized education and executive leadership training.",
    logo: logoHolding,
    badge: "Middle East Presence"
  },
  {
    name: "Dove Green Private School Dubai",
    country: "Dubai, UAE",
    flag: "🇦🇪",
    type: "British Curriculum School",
    description: "Leading British Curriculum institution located in Dubai Investment Park, nurturing foundation stage through secondary learners.",
    logo: logoDoveGreen,
    badge: "British Curriculum (UK)"
  }
];

const busRoutes = [
  "Coimbatore",
  "Tiruppur",
  "Pollachi",
  "Udumalaipet",
  "Palakkad",
  "Nenmara",
  "Vadakkanchery",
  "Ottapalam",
  "Kongad"
];

export default function GlobalNetworkSection() {
  return (
    <section id="global-network" className="py-20 bg-background relative overflow-hidden">
      {/* Background World Map Graphic Overlay */}
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary border border-secondary/20 text-xs font-bold uppercase tracking-wider mb-3">
            <Globe className="w-3.5 h-3.5" />
            STUDY WORLD Education Holding Group
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-foreground mb-4">
            Our Global Network
          </h2>
          <div className="w-20 h-1.5 bg-secondary mx-auto rounded-full mb-5"></div>
          <p className="text-foreground/80 font-medium text-base md:text-lg italic leading-relaxed">
            "Since its inception in the year 2005, the STUDY WORLD Group has been on the rise in the International Education Sector, empowering students worldwide with knowledge that is on a par with the best universities of the world."
          </p>
          <p className="text-muted-foreground text-sm mt-3">
            STUDY WORLD Group is stretching and multiplying exponentially across the globe — join us to build your borderless future today.
          </p>
        </div>

        {/* Global Statistics Strip from Brochure */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16 px-4">
          <div className="p-6 rounded-2xl bg-card border border-border shadow-xs text-center">
            <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-primary mb-3">
              <Globe className="w-6 h-6 text-secondary" />
            </div>
            <div className="text-3xl sm:text-4xl font-heading font-extrabold text-primary">5+</div>
            <div className="text-xs sm:text-sm font-semibold text-muted-foreground mt-1">Countries Globally</div>
          </div>

          <div className="p-6 rounded-2xl bg-card border border-border shadow-xs text-center">
            <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-primary mb-3">
              <Building className="w-6 h-6 text-secondary" />
            </div>
            <div className="text-3xl sm:text-4xl font-heading font-extrabold text-primary">10+</div>
            <div className="text-xs sm:text-sm font-semibold text-muted-foreground mt-1">Educational Institutions</div>
          </div>

          <div className="p-6 rounded-2xl bg-card border border-border shadow-xs text-center">
            <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-primary mb-3">
              <Users className="w-6 h-6 text-secondary" />
            </div>
            <div className="text-3xl sm:text-4xl font-heading font-extrabold text-primary">20,000+</div>
            <div className="text-xs sm:text-sm font-semibold text-muted-foreground mt-1">Graduates & Students</div>
          </div>

          <div className="p-6 rounded-2xl bg-card border border-border shadow-xs text-center">
            <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-primary mb-3">
              <Award className="w-6 h-6 text-secondary" />
            </div>
            <div className="text-3xl sm:text-4xl font-heading font-extrabold text-primary">20+ Years</div>
            <div className="text-xs sm:text-sm font-semibold text-muted-foreground mt-1">Global Track Record (2005)</div>
          </div>
        </div>

        {/* Global Institutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 mb-16">
          {globalCampuses.map((campus, idx) => (
            <div
              key={idx}
              className="bg-card rounded-2xl border border-border p-6 shadow-sm hover:shadow-xl hover:border-secondary/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="text-2xl" role="img" aria-label={campus.country}>
                      {campus.flag}
                    </span>
                    <span className="text-xs font-bold text-secondary uppercase tracking-wider">
                      {campus.badge}
                    </span>
                  </div>
                  {campus.logo && (
                    <img
                      src={campus.logo}
                      alt={campus.name}
                      className="h-8 max-w-[100px] object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                  )}
                </div>

                <h3 className="font-heading font-bold text-lg sm:text-xl text-foreground mb-1 group-hover:text-primary transition-colors">
                  {campus.name}
                </h3>
                <div className="text-xs text-primary font-semibold mb-3">
                  {campus.country}
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {campus.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-border/70 flex items-center justify-between text-xs font-semibold text-secondary">
                <span>{campus.type}</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>

        {/* Official Holding Logos Bar */}
        <div className="py-8 px-6 rounded-2xl bg-muted/40 border border-border/80 mb-16 text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-6">
            STUDY WORLD Group Official Global Network Partners
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-85 hover:opacity-100 transition-opacity">
            <img src={logoSwce} alt="STUDY WORLD College of Engineering" className="h-12 w-auto object-contain" />
            <img src={logoDoveGreen} alt="Dove Green Private School Dubai" className="h-12 w-auto object-contain" />
            <img src={logoMalta} alt="STUDY WORLD Global College Malta" className="h-12 w-auto object-contain" />
            <img src={logoLanka} alt="STUDY WORLD Lanka Campus" className="h-12 w-auto object-contain" />
            <img src={logoHolding} alt="STUDY WORLD Education Holding Group" className="h-12 w-auto object-contain" />
          </div>
        </div>

        {/* Campus Strategic Location & Bus Facilities (From Page 8 of SWCAS Brochure) */}
        <div className="bg-gradient-to-br from-primary via-primary/95 to-stats-bg text-primary-foreground rounded-3xl p-8 sm:p-12 shadow-xl">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-secondary border border-white/10 text-xs font-bold uppercase tracking-wider">
                <Navigation className="w-3.5 h-3.5" />
                Strategic Coimbatore Location
              </div>
              <h3 className="text-2xl sm:text-4xl font-heading font-extrabold leading-tight">
                26-Acre Green Canopy Campus with Extensive Connectivity
              </h3>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                Located on the scenic outskirts of Coimbatore, just 15 km from the Railway Station and 27 km from Coimbatore International Airport. STUDY WORLD provides comprehensive transportation across major districts of Tamil Nadu and Kerala.
              </p>

              <div className="pt-2">
                <div className="flex items-center gap-2 text-secondary font-bold text-sm mb-3">
                  <Bus className="w-4 h-4" />
                  <span>College Bus Facilities Operating Daily From:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {busRoutes.map((route) => (
                    <span
                      key={route}
                      className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/10 text-xs sm:text-sm font-semibold transition-colors"
                    >
                      📍 {route}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15 space-y-4">
              <h4 className="font-heading font-bold text-lg text-white">
                For Admission & Enquiries
              </h4>
              <p className="text-xs text-white/80 leading-relaxed">
                1/2A-1, Alagu Nachiamman Kovil Road, Palathurai, Madukkarai Post, Coimbatore - 641 105, Tamil Nadu.
              </p>
              
              <div className="pt-2 border-t border-white/15 space-y-2">
                <div className="text-xs text-white/70">Toll-Free Admission Desk:</div>
                <a
                  href="tel:+919500940940"
                  className="block text-2xl font-extrabold text-secondary hover:underline"
                >
                  9500 940 940
                </a>
                <div className="text-xs text-white/70">
                  Engineering Code: <strong className="text-white">TNEA 2770</strong>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
