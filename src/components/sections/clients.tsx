import { Quote } from "lucide-react";

export function Clients() {
  const stats = [
    { value: "50+", label: "Research institutions served" },
    { value: "16", label: "of top 20 pharma companies" },
    { value: "9/10", label: "clients return for new engagements" },
    { value: "1000+", label: "successful project deliveries" },
  ];

  const testimonials = [
    {
      quote: "Scikal's custom instrumentation saved us months of development time. The level of precision they delivered was beyond our expectations — and their team was embedded with ours every step of the way.",
      name: "Senior Research Director",
      org: "Global Pharmaceutical Company",
    },
    {
      quote: "The bioinformatics pipeline Scikal built for our multiomics program became the backbone of our discovery platform. They understood both the biology and the engineering — a rare combination.",
      name: "Chief Scientific Officer",
      org: "Biotechnology Firm",
    },
    {
      quote: "What impressed us most was their commitment to our timelines without compromising rigor. From instrument design to data visualization, they delivered a complete, integrated solution.",
      name: "Head of R&D Operations",
      org: "Academic Research Institute",
    },
  ];

  const collaborationAreas = [
    "Pharmaceutical R&D",
    "Academic Research Institutions",
    "Biotechnology Startups",
    "Agricultural Sciences",
    "Clinical Research Organizations",
    "Government Research Labs",
    "Medical Device Companies",
    "Contract Research Organizations",
  ];

  return (
    <section id="clients" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-sm font-bold text-primary tracking-wider uppercase mb-3">
            Our Network
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-6 leading-tight">
            Clients &amp; Collaborations
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We're proud to work alongside some of the world's most ambitious scientific organizations — from early-stage startups to established global pharma leaders.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-slate-50 rounded-2xl border border-border p-7 text-center hover:border-primary/30 hover:bg-white hover:shadow-md transition-all duration-300"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
              <p className="text-sm text-muted-foreground leading-snug">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              data-testid={`card-testimonial-${idx}`}
              className="bg-slate-50 rounded-2xl border border-border p-8 hover:border-primary/30 hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <Quote className="text-primary/40 mb-5 flex-shrink-0" size={32} strokeWidth={1.5} />
              <p className="text-secondary/80 leading-relaxed italic flex-1 mb-6">"{t.quote}"</p>
              <div>
                <p className="font-semibold text-secondary text-sm">{t.name}</p>
                <p className="text-muted-foreground text-sm">{t.org}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Collaboration Areas */}
        <div className="bg-gradient-to-br from-secondary to-secondary/90 rounded-3xl p-10 md:p-14">
          <h4 className="text-white text-2xl font-bold mb-2">Sectors We Serve</h4>
          <p className="text-white/60 mb-8">Scikal partners with organizations across the full spectrum of life science and research.</p>
          <div className="flex flex-wrap gap-3">
            {collaborationAreas.map((area, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-medium hover:bg-white/20 transition-colors cursor-default"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
