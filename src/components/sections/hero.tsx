import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { buttonVariants } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="home"
      // `-mt-16 pt-16` pulls the hero up behind the 16-tall sticky navbar so the
      // background photo also sits behind the (transparent) nav at the top,
      // while the padding keeps the copy clear of it.
      className="relative isolate -mt-16 flex min-h-[100vh] items-center overflow-hidden pt-16"
    >
      {/* Background image — SciKal's model organism, Drosophila melanogaster. */}
      <Image
        src="/photo-1611726468298-57bd09f42751_006.avif"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-30 object-cover object-center"
      />

      {/* Overlay: a light flat wash keeps the photo visible everywhere (incl.
          behind the navbar), and a vertical band concentrates contrast in the
          middle so the centred copy stays legible. Built from --background, so
          it inverts automatically between light and dark themes. */}
      <div className="absolute inset-0 -z-20 bg-background/45" />
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-transparent via-background/35 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-background to-transparent" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-[0.08] mask-radial" />

      <Container className="relative">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          {/* <Reveal>
            <Badge icon={<Sparkles />} className="mb-6">
              Behavioral neuroscience, accelerated
            </Badge>
          </Reveal> */}

          <Reveal delay={0.05}>
            <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl md:leading-[1.05]">
              Accelerating science for a{" "}
              <span className="text-gradient-animated animate-gradient">
                healthier tomorrow
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 max-w-3xl text-lg sm:text-xl leading-relaxed text-foreground/90">
              From idea to publication — we're with you every step of the way.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
              <Link
                href="#contact"
                className={buttonVariants({ variant: "brand", size: "lg" })}
              >
                Let&rsquo;s collaborate
                <ArrowRight />
              </Link>
              <Link
                href="#products"
                className={buttonVariants({ variant: "outline", size: "lg" })}
              >
                Explore our products
              </Link>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
