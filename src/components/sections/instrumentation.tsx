import { 
  Microscope, 
  Settings, 
  Wrench, 
  Layers, 
  Cpu, 
  CheckCircle, 
  Factory, 
  Box 
} from "lucide-react";

export function Instrumentation() {
  const capabilities = [
    {
      title: "Scientific Instruments",
      description: "Custom-designed precision instruments for research and industry.",
      icon: Microscope,
    },
    {
      title: "System Integration",
      description: "Turnkey instrument systems tailored to specific workflows.",
      icon: Layers,
    },
    {
      title: "Prototype Development",
      description: "Rapid prototyping from concept to functional device.",
      icon: Wrench,
    },
    {
      title: "Mechanical Fabrication",
      description: "High-tolerance machining and fabrication for lab environments.",
      icon: Settings,
    },
    {
      title: "Electronic Design",
      description: "Custom PCB design, firmware, and embedded systems.",
      icon: Cpu,
    },
    {
      title: "Calibration & Testing",
      description: "Rigorous testing protocols and instrument validation.",
      icon: CheckCircle,
    },
    {
      title: "Contract Manufacturing",
      description: "Volume production with consistent quality control.",
      icon: Factory,
    },
    {
      title: "Enclosure Design",
      description: "Ruggedized, ergonomic housings for field and lab use.",
      icon: Box,
    }
  ];

  return (
    <section id="instrumentation" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-3xl">
            <h2 className="text-sm font-bold text-primary tracking-wider uppercase mb-3">Hardware Division</h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-6 leading-tight">
              Instrumentation, Design <br className="hidden md:block"/> & Fabrication
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We design and build the physical tools that make groundbreaking research possible. From early-stage prototyping to high-tolerance manufacturing, our hardware division delivers precision at every scale.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap, index) => {
            const Icon = cap.icon;
            return (
              <div 
                key={index} 
                className="group p-8 rounded-2xl bg-muted/30 border border-border hover:border-primary/30 hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={24} strokeWidth={1.5} />
                </div>
                <h4 className="text-xl font-semibold text-secondary mb-3">{cap.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{cap.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
