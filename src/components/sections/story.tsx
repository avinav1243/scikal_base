import Link from "next/link";
import { ArrowRight, GraduationCap } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { MediaFrame } from "@/components/ui/media-frame";
import { buttonVariants } from "@/components/ui/button";

export function Story() {
  return (
    <section
      id="story"
      className="scroll-mt-24 border-y border-border bg-muted/60 py-24"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div>
              <p className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-primary">
                <GraduationCap className="size-4" /> Our origin
              </p>
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                Why SciKal was born
              </h2>
              {/* <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                A lab problem, turned into a global solution
              </h2> */}
              <div className="mt-5 space-y-4 text-pretty text-base leading-relaxed text-muted-foreground">
                <p>
                  A lab problem, turned into a global solution. Founded to help
                  neuroscientists set up new behavioral assays and uncover the
                  neuronal mechanisms behind complex behaviors, SciKal
                  originated as a spin-off from{" "}
                  <span className="font-medium text-foreground">
                    NCBS-TIFR, Bengaluru, India
                  </span>
                  .
                </p>
                <p>
                  What began as a challenge in the lab evolved into a
                  mission-driven global company — connecting science,
                  engineering, and technology across Chicago and Bengaluru.
                </p>
              </div>

              <Link
                href="#mission"
                className={buttonVariants({
                  variant: "outline",
                  size: "md",
                  className: "mt-8",
                })}
              >
                What drives us
                <ArrowRight />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="relative">
            <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[2rem] bg-[radial-gradient(circle_at_30%_30%,var(--glow-violet),transparent_70%)] opacity-0 blur-2xl dark:opacity-40" />
            <MediaFrame
              src="/story.jpg"
              alt="3D render of SciKal's fly-VRL vertical locomotor assay platform"
              tone="figure"
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="aspect-[4/3]"
            >
              <figcaption className="absolute inset-x-4 bottom-4 rounded-2xl border border-border bg-card/85 p-4 backdrop-blur-md">
                <p className="text-sm font-semibold leading-tight">
                  Designed &amp; fabricated in-house
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  fly-VRL locomotor platform — concept to instrument
                </p>
              </figcaption>
            </MediaFrame>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
