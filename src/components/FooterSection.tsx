import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const FooterSection = () => (
  <footer id="contact" className="bg-primary text-primary-foreground">
    <div className="container-custom section-padding pb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
        <div>
          <div className="flex items-center gap-3 mb-5">
            <img src={logo} alt="Study World" className="w-14 h-14 object-contain brightness-200" />
            <div>
              <p className="font-heading font-bold text-lg">Study World</p>
              <p className="text-xs text-primary-foreground/60">Institutions</p>
            </div>
          </div>
          <p className="text-primary-foreground/70 text-sm leading-relaxed">
            Study World Institutions is a part of Study World Education Holding Group, providing quality education since 2009.
          </p>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-lg mb-5">Quick Links</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/70">
            {["Home", "About Us", "Courses", "Campus Life", "Contact"].map((l) => (
              <li key={l}><a href="#" className="hover:text-secondary transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-lg mb-5">Contact Us</h4>
          <div className="space-y-4 text-sm text-primary-foreground/70">
            <a href="tel:+919500940940" className="flex items-center gap-3 hover:text-secondary transition-colors">
              <Phone className="w-4 h-4 text-secondary shrink-0" />
              +91 9500 940 940
            </a>
            <a href="mailto:coimbatore@swehg.com" className="flex items-center gap-3 hover:text-secondary transition-colors">
              <Mail className="w-4 h-4 text-secondary shrink-0" />
              coimbatore@swehg.com
            </a>
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
              1/2A-1, ALAGU NACHIAMMAN KOVIL ROAD, PALATHURAI, MADUKKARAI POST, COIMBATORE - 641 105, TAMILNADU
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 pt-6 text-center text-sm text-primary-foreground/50">
        © 2024 Study World Institutions. All Rights Reserved.
      </div>
    </div>
  </footer>
);

export default FooterSection;
