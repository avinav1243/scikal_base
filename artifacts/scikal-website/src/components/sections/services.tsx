import {
  Lightbulb,
  Code2,
  FlaskConical,
  GraduationCap,
  ClipboardCheck,
  HardDrive,
  FileText,
  Wrench
} from "lucide-react";

export function Services() {
  const services = [
    {
      title: "R&D Consulting",
      description: "Expert scientific and engineering consulting across domains. We bring deep domain expertise to help you define, scope, and execute your most complex R&D challenges.",
      icon: Lightbulb,
    },
    {
      title: "Technology Solutions",
      description: "End-to-end custom software and hardware solutions designed to accelerate your research workflows, integrate seamlessly with existing infrastructure, and scale with your needs.",
      icon: Code2,
    },
    {
      title: "Laboratory Setup",
      description: "Full laboratory design, equipment procurement, installation, and commissioning. We deliver turnkey lab environments ready for day-one operation.",
      icon: FlaskConical,
    },
    {
      title: "Training & Support",
      description: "On-site and remote training programs for instruments and software. We ensure your teams are fully equipped to maximize the value of every system.",
      icon: GraduationCap,
    },
    {
      title: "Maintenance Contracts",
      description: "Preventive maintenance programs and rapid-response support agreements that minimize downtime and extend the operational life of your critical instruments.",
      icon: ClipboardCheck,
    },
    {
      title: "Data Management",
      description: "Scientific data management strategy, LIMS integration, data governance frameworks, and compliance support for regulated research environments.",
      icon: HardDrive,
    },
    {
      title: "Regulatory Support",
      description: "End-to-end documentation, instrument and system validation, and regulatory submission support for clinical, GxP, and other compliance-driven contexts.",
      icon: FileText,
    },
    {
      title: "Field Services",
      description: "On-site installation, qualification (IQ/OQ/PQ), and rapid troubleshooting by certified field engineers — wherever your operations are located.",
      icon: Wrench,
    },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-3xl">
            <h2 className="text-sm font-bold text-primary tracking-wider uppercase mb-3">
              Solutions
            </h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-6 leading-tight">
              Services
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Beyond instruments and data pipelines, we offer a comprehensive portfolio of professional services to support every phase of your scientific journey — from strategy through implementation.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                data-testid={`card-service-${index}`}
                className="group relative p-8 rounded-2xl border border-border bg-slate-50/50 hover:bg-white hover:border-primary/30 hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Gradient accent top-left */}
                <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-primary/5 to-transparent rounded-br-full pointer-events-none" />

                <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Icon size={24} strokeWidth={1.5} />
                </div>

                <h4 className="text-xl font-semibold text-secondary mb-3">{service.title}</h4>
                <p className="text-muted-foreground leading-relaxed text-sm">{service.description}</p>
              </div>
            );
          })}
        </div>

        {/* CTA Strip */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-primary/10 to-sky-100 border border-primary/20 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-xl font-bold text-secondary mb-2">
              Not sure which service fits your needs?
            </h4>
            <p className="text-muted-foreground">
              Our team is happy to walk you through the right approach for your project.
            </p>
          </div>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex-shrink-0 inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-white font-semibold hover:bg-primary/90 transition-colors"
          >
            Talk to an Expert
          </a>
        </div>
      </div>
    </section>
  );
}
