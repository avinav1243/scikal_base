import { Button } from "@/components/ui/button";
import { ArrowRight, Activity, Cpu } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-secondary">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Modern research facility" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-transparent mix-blend-multiply" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-medium mb-6 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
            Precision Engineering & Computational Biology
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
            Accelerating the Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-sky-300">Scientific Discovery</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl leading-relaxed">
            From custom high-tolerance instruments to advanced AI-driven bioinformatics pipelines. We turn complex biological data into actionable value.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-14 text-base font-semibold group"
            >
              Partner With Us
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => document.getElementById('instrumentation')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-transparent border-white/30 text-white hover:bg-white/10 rounded-full px-8 h-14 text-base font-medium"
            >
              Explore Capabilities
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute right-0 bottom-0 translate-y-1/3 translate-x-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
}
