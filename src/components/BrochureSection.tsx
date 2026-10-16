import { FileText, Download, ExternalLink, BookOpen, Award, CheckCircle2, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface BrochureItem {
  id: string;
  institution: string;
  shortCode: string;
  tagline: string;
  affiliation: string[];
  coverImage: string;
  pdfUrl?: string;
  highlights: string[];
  isAvailable: boolean;
}

const brochures: BrochureItem[] = [
  {
    id: "swce",
    institution: "STUDY WORLD College of Engineering",
    shortCode: "SWCE",
    tagline: "India's 1st International College • Designing the Future Through Global Collaboration",
    affiliation: ["AICTE Approved", "Anna University, Chennai", "TNEA Code: 2770", "IBM Knowledge Partner"],
    coverImage: "/brochures/swce-brochure-cover.png",
    pdfUrl: "/brochures/Study_World_Engineering_Brochure.pdf",
    highlights: [
      "9 Next-Gen B.E, B.Tech & MBA programmes",
      "Center of Excellence with IBM, KGISL, IEEE, CSI",
      "Highest CTC ₹14 Lakhs/Annum | 70+ Recruiters",
      "₹50+ Lakhs Scholarships (Merit & Women Empowerment)",
      "Japan & German Language Centers"
    ],
    isAvailable: true
  },
  {
    id: "swcas",
    institution: "STUDY WORLD College of Arts & Science",
    shortCode: "SWCAS",
    tagline: "Empowering Students for Global Careers • 26-Acre Green Campus",
    affiliation: ["Govt. of Tamil Nadu Approved", "Bharathiar University, Coimbatore", "Coimbatore Campus"],
    coverImage: "/brochures/swcas-brochure-cover.png",
    pdfUrl: "/brochures/Study_World_Arts_and_Science_Brochure.pdf",
    highlights: [
      "Commerce: B.Com (CA) & Integrated CA",
      "Management: BBA Aviation & Logistics Management",
      "Tech: BCA with IBM, B.Sc CS, AI & DS, IT",
      "Psychology: B.Sc Clinical Psychology",
      "Industry tie-ups with Airports, Logistics & IT firms"
    ],
    isAvailable: true
  },
  {
    id: "swahs",
    institution: "STUDY WORLD College of Allied Health Sciences",
    shortCode: "SWAHS",
    tagline: "Healthcare Education Aligned with Global Medical Standards",
    affiliation: ["The Tamil Nadu Dr. M.G.R. Medical University, Chennai", "Hospital Clinical Training"],
    coverImage: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop",
    highlights: [
      "B.Sc Cardiac Technology",
      "B.Sc Medical Laboratory Technology",
      "B.Sc Operation Theatre & Anaesthesia Technology",
      "B.Sc Radiography & Imaging Technology",
      "Extensive hospital clinical rotations and diagnostics training"
    ],
    isAvailable: false
  }
];

export default function BrochureSection() {
  return (
    <section id="brochures" className="py-20 bg-background relative overflow-hidden border-t border-border/60">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-14 px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-bold uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5 text-secondary" />
            Official Academic Literature
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-foreground mb-4">
            Download College Brochures
          </h2>
          <div className="w-20 h-1.5 bg-secondary mx-auto rounded-full mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Access our comprehensive prospectuses for curriculum syllabi, laboratory infrastructure, eligibility criteria, and global campus pathways.
          </p>
        </div>

        {/* Brochure Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {brochures.map((item) => (
            <div
              key={item.id}
              className="bg-card rounded-2xl border border-border shadow-sm hover:shadow-2xl hover:border-secondary/30 transition-all duration-300 flex flex-col overflow-hidden group"
            >
              {/* Cover Preview */}
              <div className="relative h-64 sm:h-72 bg-muted overflow-hidden">
                <img
                  src={item.coverImage}
                  alt={`${item.institution} Brochure`}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Badge */}
                <div className="absolute top-4 left-4 bg-primary/90 text-primary-foreground text-xs font-bold px-3 py-1 rounded-md backdrop-blur-xs shadow-md">
                  {item.shortCode} Official Brochure
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-heading font-bold text-xl leading-snug drop-shadow-sm">
                    {item.institution}
                  </h3>
                  <p className="text-xs text-white/80 line-clamp-1 mt-1 drop-shadow-xs">
                    {item.tagline}
                  </p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow justify-between space-y-6">
                <div>
                  {/* Affiliation Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {item.affiliation.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-semibold bg-muted text-foreground/80 px-2.5 py-0.5 rounded-full border border-border/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Highlights List */}
                  <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                    {item.highlights.map((h, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                        <span className="text-foreground/85">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-border flex flex-col sm:flex-row gap-3">
                  {item.isAvailable && item.pdfUrl ? (
                    <>
                      <a
                        href={item.pdfUrl}
                        download
                        className="flex-1"
                      >
                        <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground text-xs sm:text-sm font-bold flex items-center justify-center gap-2 py-5 rounded-lg shadow-sm">
                          <Download className="w-4 h-4" />
                          Download PDF
                        </Button>
                      </a>
                      <a
                        href={item.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="sm:shrink-0"
                      >
                        <Button
                          variant="outline"
                          className="w-full sm:w-auto border-border text-foreground hover:bg-muted text-xs sm:text-sm font-semibold flex items-center justify-center gap-1.5 py-5 rounded-lg"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Preview
                        </Button>
                      </a>
                    </>
                  ) : (
                    <div className="w-full flex flex-col gap-2">
                      <Link to="/institutions/allied-health" className="w-full">
                        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-xs sm:text-sm font-bold py-5 rounded-lg">
                          View Allied Programmes
                        </Button>
                      </Link>
                      <a href="#admissions" className="w-full">
                        <Button
                          variant="outline"
                          className="w-full text-xs font-semibold py-4 border-dashed"
                        >
                          Request SWAHS Prospectus
                        </Button>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Brochure Helpline Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-primary/10 via-accent/30 to-secondary/15 border border-primary/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-14 h-14 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center shrink-0 shadow-md hidden sm:flex">
              <FileText className="w-7 h-7" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-lg md:text-xl text-foreground">
                Need a physical prospectus or personalized counselling?
              </h4>
              <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                Our admissions department can dispatch a physical prospectus pack directly to your address or share digital syllabi on WhatsApp.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a href="tel:+919500940940">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-bold flex items-center gap-2 px-6 py-5 rounded-lg shadow-sm">
                <PhoneCall className="w-4 h-4" />
                +91 9500 940 940
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
