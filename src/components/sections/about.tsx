import { Award, Globe, Users, Microscope } from "lucide-react";

export function About() {
  const milestones = [
    {
      icon: Microscope,
      title: "Scientific Precision",
      description:
        "From high-tolerance mechanical fabrication to advanced electronics, our hardware division brings rigorous engineering discipline to every instrument.",
    },
    {
      icon: Users,
      title: "Multidisciplinary Expertise",
      description:
        "Our team spans mechanical engineers, electronics specialists, bioinformaticians, data scientists, and domain experts — all under one roof.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description:
        "We serve research institutions, biotechnology companies, and pharmaceutical organizations around the world with reliable, scalable solutions.",
    },
    {
      icon: Award,
      title: "Proven Track Record",
      description:
        "Trusted by world-leading pharma and research institutions, we deliver on complex projects with the reliability our clients depend on.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <h2 className="text-sm font-bold text-primary tracking-wider uppercase mb-3">
              Who We Are
            </h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-8 leading-tight">
              Where Precision Engineering Meets Computational Life Sciences
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Scikal sits at the intersection of two demanding disciplines: the
              physical science of precision instrumentation and the
              computational science of biological data. We believe that true
              scientific progress requires both — the tools to generate
              high-quality data and the intelligence to interpret it.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Founded on the principle that great science deserves great tools,
              Scikal has grown into a trusted partner for organizations that
              refuse to compromise on quality. From early-stage prototyping to
              full-scale bioinformatics infrastructure, we engage where it
              matters most.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether you need a custom instrument that doesn't yet exist, a
              bioinformatics pipeline to process your most complex datasets, or
              end-to-end support through your R&D lifecycle — Scikal delivers
              with precision and purpose.
            </p>
          </div>

          {/* Right: Milestones */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {milestones.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-border p-7 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="h-11 w-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                    <Icon size={22} strokeWidth={1.5} />
                  </div>
                  <h4 className="font-semibold text-secondary mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
