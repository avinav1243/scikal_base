import { Workflow, Wrench, HeartHandshake, Compass } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

const pillars = [
  {
    title: "Bridge Biology & Technology",
    body: "Connecting scientific discovery with cutting-edge engineering.",
  },
  {
    title: "Build Tools That Accelerate Science",
    body: "Creating innovative solutions for modern research challenges.",
  },
  {
    title: "Collaborate to Solve Problems",
    body: "Working together on real-world scientific breakthroughs.",
  },
];

export function Mission() {
  return (
    <section id="mission" className="relative overflow-hidden py-24">
      <Container className="relative">
        <SectionHeading
          eyebrow="What drives us"
          eyebrowIcon={<Compass />}
          title={
            <>
              We understand biology, and we{" "}
              <span className="text-gradient">build the technology</span>
            </>
          }
          description="A team of scientists, engineers and data experts driving innovation in behavioral neuroscience — designing tailored research solutions that bridge the gap between biology and technology."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {pillars.map((p, i) => {
            return (
              <Reveal key={p.title} delay={i * 0.07}>
                <article className="group relative flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/15 hover:shadow-glow">
                  <h3 className="mt-5 text-lg font-semibold tracking-tight">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {p.body}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
