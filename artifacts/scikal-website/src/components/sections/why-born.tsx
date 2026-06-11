import { FlaskConical, Cpu, Dna } from "lucide-react";

export function WhyBorn() {
  return (
    <section id="why-born" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-secondary to-secondary/80 p-10 min-h-[420px] flex flex-col justify-end">
              {/* Decorative circles */}
              <div className="absolute top-8 right-8 w-40 h-40 rounded-full bg-primary/20 blur-2xl pointer-events-none" />
              <div className="absolute bottom-12 left-8 w-32 h-32 rounded-full bg-primary/10 blur-xl pointer-events-none" />

              {/* Icon grid */}
              <div className="absolute top-10 left-10 right-10 grid grid-cols-3 gap-4">
                {[FlaskConical, Cpu, Dna].map((Icon, i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center"
                  >
                    <Icon className="text-primary/90" size={28} strokeWidth={1.5} />
                  </div>
                ))}
              </div>

              <blockquote className="relative z-10 text-white/90 text-lg leading-relaxed font-light italic">
                "We saw scientists spending more time wrestling with inadequate tools than actually doing science. We decided to change that."
              </blockquote>
              <p className="mt-4 text-primary text-sm font-semibold">— Founders, Scikal</p>
            </div>
          </div>

          {/* Right: Text */}
          <div className="order-1 lg:order-2">
            <h2 className="text-sm font-bold text-primary tracking-wider uppercase mb-3">
              Our Origin
            </h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-8 leading-tight">
              Why SciKal Was Born
            </h3>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Scikal was founded at the intersection of two growing frustrations in modern research: the lack of reliable, customizable scientific instruments, and the explosion of biological data that most organizations lacked the tools to interpret.
              </p>
              <p>
                Our founders — engineers and life scientists by training — had experienced firsthand the gap between what research demanded and what the market offered. Off-the-shelf instruments rarely fit the precise requirements of advanced experiments. Bioinformatics pipelines were either too rigid, too expensive, or built for someone else's data.
              </p>
              <p>
                Scikal was born to bridge that gap — a company that could design and build the physical instruments you need, and simultaneously develop the computational infrastructure to make sense of the data those instruments generate.
              </p>
              <p>
                From the first prototype to large-scale pharma partnerships, our mission has remained constant: give scientists the tools they deserve.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
