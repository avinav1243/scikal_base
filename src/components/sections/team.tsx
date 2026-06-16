import { Linkedin, Mail } from "lucide-react";

export function Team() {
  const team = [
    {
      name: "Dr. Arjun Mehta",
      title: "Co-Founder & CEO",
      bio: "PhD in Mechanical Engineering with 18 years of experience designing precision instruments for pharmaceutical and academic research. Passionate about bridging hardware and data science.",
      initials: "AM",
      color: "from-sky-500 to-blue-600",
    },
    {
      name: "Dr. Priya Nair",
      title: "Co-Founder & Chief Scientific Officer",
      bio: "Computational biologist with deep expertise in multiomics data analysis and bioinformatics pipeline development. Former research scientist at leading genomics institutes.",
      initials: "PN",
      color: "from-indigo-500 to-blue-700",
    },
    {
      name: "Rohit Sharma",
      title: "Head of Instrumentation",
      bio: "15 years of hands-on experience in electronic system design, PCB development, and embedded firmware. Leads Scikal's hardware design and manufacturing operations.",
      initials: "RS",
      color: "from-teal-500 to-cyan-600",
    },
    {
      name: "Dr. Kavita Iyer",
      title: "Director, Bioinformatics",
      bio: "Expert in immunomics, single-cell sequencing, and machine learning applications in drug discovery. Oversees Scikal's computational biology service delivery.",
      initials: "KI",
      color: "from-blue-500 to-indigo-600",
    },
    {
      name: "Marcus Chen",
      title: "Head of R&D IT",
      bio: "Cloud architect and DevOps lead specializing in scalable bioinformatics infrastructure. Experienced with AWS, Azure, GCP, and containerized pipeline orchestration.",
      initials: "MC",
      color: "from-sky-600 to-blue-800",
    },
    {
      name: "Dr. Ananya Bose",
      title: "Principal Scientist, Data Science",
      bio: "Statistician and data scientist with expertise in predictive modelling, biomarker development, and systems biology simulations for pharma applications.",
      initials: "AB",
      color: "from-cyan-500 to-sky-600",
    },
  ];

  return (
    <section id="team" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-primary tracking-wider uppercase mb-3">
            Our People
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-6 leading-tight">
            Meet Our Team
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Scikal is built on a multidisciplinary team of engineers, biologists, data scientists, and domain experts — united by a shared commitment to scientific excellence.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, idx) => (
            <div
              key={idx}
              data-testid={`card-team-${idx}`}
              className="group bg-white rounded-2xl border border-border overflow-hidden hover:border-primary/30 hover:shadow-xl transition-all duration-300"
            >
              {/* Avatar area */}
              <div className={`h-32 bg-gradient-to-br ${member.color} relative flex items-end px-6 pb-0`}>
                <div className="w-16 h-16 rounded-xl bg-white shadow-lg flex items-center justify-center translate-y-8 text-xl font-bold text-secondary">
                  {member.initials}
                </div>
              </div>

              {/* Content */}
              <div className="pt-12 pb-7 px-6">
                <h4 className="text-lg font-bold text-secondary mb-1">{member.name}</h4>
                <p className="text-primary text-sm font-semibold mb-4">{member.title}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{member.bio}</p>

                <div className="flex gap-3">
                  <button
                    data-testid={`button-linkedin-${idx}`}
                    className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin size={14} />
                    LinkedIn
                  </button>
                  <button
                    data-testid={`button-email-${idx}`}
                    className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail size={14} />
                    Contact
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join CTA */}
        <div className="mt-14 text-center">
          <p className="text-muted-foreground mb-4">Passionate about science and engineering?</p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-secondary text-secondary font-semibold hover:bg-secondary hover:text-white transition-all duration-300"
          >
            Join the Scikal Team
          </a>
        </div>
      </div>
    </section>
  );
}
