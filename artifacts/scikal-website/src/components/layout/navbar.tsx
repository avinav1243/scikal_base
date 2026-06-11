import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import scikalLogo from "@assets/scikal_logo_1781199851527.png";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, sectionId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setAboutOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const navLinks = [
    { name: "Instrumentation", id: "instrumentation" },
    { name: "Computational Biology", id: "computational-biology" },
    { name: "Services", id: "services" },
    { name: "Clients", id: "clients" },
  ];

  const aboutLinks = [
    { name: "Why SciKal Was Born", id: "why-born" },
    { name: "What Drives Us", id: "what-drives-us" },
    { name: "Meet Our Team", id: "team" },
    { name: "About Us", id: "about" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-b border-border shadow-sm py-3"
          : "bg-white/50 backdrop-blur-sm py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center cursor-pointer">
            <img src={scikalLogo} alt="Scikal Logo" className="h-10 w-auto" />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => scrollToSection(e, link.id)}
              className="text-sm font-medium text-secondary/80 hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}

          {/* About dropdown */}
          <div className="relative">
            <button
              data-testid="button-about-dropdown"
              onClick={() => setAboutOpen((v) => !v)}
              className="flex items-center gap-1 text-sm font-medium text-secondary/80 hover:text-primary transition-colors"
            >
              Company
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${aboutOpen ? "rotate-180" : ""}`}
              />
            </button>
            {aboutOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-52 bg-white rounded-xl shadow-xl border border-border py-2 z-50">
                {aboutLinks.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={(e) => scrollToSection(e, link.id)}
                    className="block px-4 py-2.5 text-sm text-secondary/80 hover:text-primary hover:bg-slate-50 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "contact")}
            className="text-sm font-medium text-secondary/80 hover:text-primary transition-colors"
          >
            Contact
          </a>

          <Button
            onClick={(e) => scrollToSection(e as any, "contact")}
            className="bg-primary hover:bg-primary/90 text-white rounded-full px-6"
          >
            Get in Touch
          </Button>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          data-testid="button-mobile-menu"
          className="md:hidden p-2 text-secondary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-border shadow-lg py-4 px-4 flex flex-col gap-1 max-h-[80vh] overflow-y-auto">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => scrollToSection(e, link.id)}
              className="text-base font-medium text-secondary p-3 rounded-lg hover:bg-slate-50 hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="border-t border-border mt-2 pt-2">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-3 py-2">Company</p>
            {aboutLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => scrollToSection(e, link.id)}
                className="text-base font-medium text-secondary p-3 rounded-lg hover:bg-slate-50 hover:text-primary transition-colors block"
              >
                {link.name}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "contact")}
            className="text-base font-medium text-secondary p-3 rounded-lg hover:bg-slate-50 hover:text-primary transition-colors"
          >
            Contact
          </a>
          <Button
            onClick={(e) => scrollToSection(e as any, "contact")}
            className="w-full mt-2 bg-primary hover:bg-primary/90 text-white"
          >
            Get in Touch
          </Button>
        </div>
      )}
    </header>
  );
}
