import { MapPin, Quote } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/lib/site";

export function About() {
  return (
    <section id="about" className=" py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div>
              <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                Scientists building for scientists
              </h2>
              <div className="mt-5 space-y-4 text-pretty leading-relaxed text-muted-foreground">
                <p>
                  SciKal Research is a team of scientists, engineers and data
                  experts driving innovation in behavioral neuroscience. We
                  design tailored research solutions that bridge the gap between
                  biology and technology.
                </p>
                <p>
                  With a global presence in{" "}
                  <span className="font-medium text-foreground">
                    Chicago (USA)
                  </span>{" "}
                  and{" "}
                  <span className="font-medium text-foreground">
                    Bengaluru (India)
                  </span>
                  , we empower labs worldwide to discover, innovate and scale.
                </p>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                {siteConfig.locations.map((loc) => (
                  <span
                    key={loc.city}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-foreground"
                  >
                    <MapPin className="size-4 text-primary" />
                    {loc.city}, {loc.country}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <figure className="border-gradient relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-glow sm:p-10">
              <div className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-[radial-gradient(circle,var(--glow-violet),transparent_70%)] blur-2xl dark:opacity-0" />
              <Quote className="size-9 text-primary/40" />
              <blockquote className="mt-4 text-pretty text-2xl font-medium leading-snug tracking-tight">
                &ldquo;We&rsquo;re scientists building for scientists — creating
                the tools that uncover the brain&rsquo;s secrets.&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="inline-flex size-10 items-center justify-center rounded-full bg-brand font-semibold text-white">
                  SK
                </span>
                <span className="text-sm">
                  <span className="block font-semibold">SciKal Research</span>
                  <span className="block text-muted-foreground">
                    {siteConfig.tagline}
                  </span>
                </span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
