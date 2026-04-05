import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const institutions = [
  { label: "Study World Engineering", to: "/institutions/engineering" },
  { label: "Study World Arts & Science", to: "/institutions/arts" },
  { label: "Study World Allied Health Sciences", to: "/institutions/allied-health" },
];

const navItems = [
  { label: "Home", to: "/" },
  { label: "About us", to: "/about" },
  { label: "Institutions", to: "#", dropdown: institutions },
  { label: "Campus Life", to: "/campus-life" },
  { label: "Contact Us", to: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-background shadow-md sticky top-0 z-50">
      <div className="container-custom flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Study World College of Engineering" className="h-16 w-16 object-contain" />
          <div className="hidden sm:block">
            <p className="font-heading font-bold text-primary text-lg leading-tight">Study World</p>
            <p className="text-xs text-muted-foreground">Institutions</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) =>
            item.dropdown ? (
              <div key={item.label} className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="px-4 py-2 text-sm font-semibold text-foreground hover:text-secondary transition-colors flex items-center gap-1"
                >
                  {item.label}
                  <ChevronDown className={`w-4 h-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                </button>
                {dropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 w-72 bg-card rounded-lg shadow-xl border border-border py-2 z-50">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.label}
                        to={sub.to}
                        className="block px-5 py-3 text-sm text-foreground hover:bg-accent hover:text-secondary transition-colors"
                        onClick={() => setDropdownOpen(false)}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                to={item.to}
                className="px-4 py-2 text-sm font-semibold text-foreground hover:text-secondary transition-colors flex items-center gap-1"
              >
                {item.label}
              </Link>
            )
          )}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div className="lg:hidden bg-background border-t border-border">
          {navItems.map((item) =>
            item.dropdown ? (
              <div key={item.label}>
                <button
                  onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                  className="w-full flex items-center justify-between px-6 py-3 text-sm font-semibold text-foreground hover:bg-accent transition-colors"
                >
                  {item.label}
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileDropdownOpen ? "rotate-180" : ""}`} />
                </button>
                {mobileDropdownOpen && (
                  <div className="bg-accent/50">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.label}
                        to={sub.to}
                        className="block px-10 py-3 text-sm text-foreground hover:text-secondary transition-colors"
                        onClick={() => { setOpen(false); setMobileDropdownOpen(false); }}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                to={item.to}
                className="block px-6 py-3 text-sm font-semibold text-foreground hover:bg-accent transition-colors"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            )
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
