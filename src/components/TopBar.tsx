import { Phone, Mail, MapPin } from "lucide-react";

const TopBar = () => (
  <div className="bg-primary text-primary-foreground py-2 text-sm hidden md:block">
    <div className="container-custom flex justify-between items-center px-4 sm:px-6 lg:px-8">
      <div className="flex items-center gap-6">
        <a href="tel:+919944911933" className="flex items-center gap-2 hover:text-secondary transition-colors">
          <Phone className="w-3.5 h-3.5" />
          +91 99449 11933
        </a>
        <a href="mailto:coimbatore@swehg.com" className="flex items-center gap-2 hover:text-secondary transition-colors">
          <Mail className="w-3.5 h-3.5" />
          coimbatore@swehg.com
        </a>
        <span className="flex items-center gap-2">
          <MapPin className="w-3.5 h-3.5" />
          Alagu Nachiamman Kovil Road, Madukkarai
        </span>
      </div>
      <div className="flex items-center gap-4">
        {["Twitter", "Facebook", "Instagram", "Youtube", "LinkedIn"].map((s) => (
          <a key={s} href="#" className="hover:text-secondary transition-colors text-xs font-medium">{s}</a>
        ))}
      </div>
    </div>
  </div>
);

export default TopBar;
