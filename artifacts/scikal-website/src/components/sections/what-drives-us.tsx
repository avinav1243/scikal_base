import { Target, Lightbulb, ShieldCheck, Handshake, TrendingUp, Zap } from "lucide-react";

export function WhatDrivesUs() {
  const values = [
    {
      icon: Target,
      title: "Scientific Rigor",
      description: "Every instrument we design and every pipeline we build is held to the highest standards of scientific accuracy. We don't cut corners — precision is our baseline.",
    },
    {
      icon: Lightbulb,
      title: "Innovation Without Compromise",
      description: "We push the boundaries of what's possible in instrumentation and computational biology — while never losing sight of practical, real-world deployability.",
    },
    {
      icon: Handshake,
      title: "True Partnership",
      description: "We don't just deliver and disappear. We embed ourselves in your challenges, learn your workflows, and stay invested in your outcomes long after deployment.",
    },
    {
      icon: ShieldCheck,
      title: "Reliability You Can Count On",
      description: "Research timelines can't afford failure. From hardware QC to data pipeline validation, every Scikal deliverable is tested, documented, and built to last.",
    },
    {
      icon: TrendingUp,
      title: "Continuous Improvement",
      description: "Science evolves, and so do we. Our team continuously incorporates the latest methodologies, tools, and technologies to ensure our clients are always at the frontier.",
    },
    {
      icon: Zap,
      title: "Speed With Substance",
      description: "Quick turnaround and agile delivery don't have to mean shallow work. We've built our processes to move fast without sacrificing depth or quality.",
    },
  ];

  return (
    <section id="what-drives-us" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-primary tracking-wider uppercase mb-3">
            Our Values
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-6 leading-tight">
            What Drives Us
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Behind every instrument, every pipeline, and every client engagement is a set of deeply held principles that guide how we work and who we are.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, idx) => {
            const Icon = value.icon;
            return (
              <div
                key={idx}
                data-testid={`card-value-${idx}`}
                className="group bg-white rounded-2xl border border-border p-8 hover:border-primary/30 hover:shadow-xl transition-all duration-300"
              >
                <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Icon size={24} strokeWidth={1.5} />
                </div>
                <h4 className="text-xl font-semibold text-secondary mb-3">{value.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>

        {/* Divider tagline */}
        <div className="mt-16 text-center">
          <p className="text-secondary/70 text-lg font-medium italic">
            "Precision in every instrument. Clarity in every dataset."
          </p>
        </div>
      </div>
    </section>
  );
}
