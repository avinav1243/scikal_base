import scikalLogo from "@/assets/scikal_logo_1781199851527.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    {
      heading: "Capabilities",
      items: [
        { label: "Instrumentation", id: "instrumentation" },
        { label: "Design & Fabrication", id: "instrumentation" },
        { label: "Computational Biology", id: "computational-biology" },
        { label: "Services", id: "services" },
      ],
    },
    {
      heading: "Company",
      items: [
        { label: "About Scikal", id: "about" },
        { label: "Contact Us", id: "contact" },
      ],
    },
  ];

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4 md:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-white/10">
          {/* Brand */}
          <div>
            <img
              src={scikalLogo}
              alt="Scikal"
              className="h-10 w-auto mb-5 brightness-0 invert"
            />
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Precision instrumentation, design & fabrication, and advanced computational biology — delivered by experts who understand science.
            </p>
          </div>

          {/* Links */}
          {links.map((group) => (
            <div key={group.heading}>
              <h4 className="text-xs font-bold uppercase tracking-wider text-primary/80 mb-5">
                {group.heading}
              </h4>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => scrollTo(e, item.id)}
                      className="text-white/60 hover:text-white transition-colors text-sm"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            &copy; {currentYear} Scikal. All rights reserved.
          </p>
          <p className="text-white/40 text-xs">
            Precision Engineering &amp; Computational Life Sciences
          </p>
        </div>
      </div>
    </footer>
  );
}
