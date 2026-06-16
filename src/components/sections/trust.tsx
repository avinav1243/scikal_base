import { Container } from "@/components/ui/container";

const fields = [
  "Behavioral phenotyping",
  "Locomotion",
  "Courtship",
  "Feeding & circadian",
  "Learning & memory",
  "Gravitational biology",
  "Calcium imaging",
  "Drosophila genetics",
];

export function Trust() {
  return (
    <section className="border-y border-border bg-muted/60 py-8">
      <Container>
        <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Built for research across
        </p>
      </Container>
      <div className="relative mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]">
        <div className="flex w-max animate-marquee items-center gap-3 hover:[animation-play-state:paused]">
          {[...fields, ...fields].map((field, i) => (
            <span
              key={`${field}-${i}`}
              className="flex items-center gap-3 whitespace-nowrap text-lg font-medium text-foreground/70"
            >
              {field}
              <span className="text-primary/60">◆</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
