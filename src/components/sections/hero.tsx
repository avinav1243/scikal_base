"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { buttonVariants } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate -mt-16 flex min-h-[100vh] items-center pt-16"
    >
      {/* Background image — SciKal's model organism, Drosophila melanogaster. */}
      {/* Light-mode background image */}
      <Image
        src="/Hero2.jpeg"
        alt="Hero background"
        fill
        priority
        sizes="100vw"
        className="-z-30 object-cover object-center dark:hidden"
      />
      {/* Dark-mode background: same image with a darker filter to improve contrast */}
      <Image
        src="/Hero2.jpeg"
        alt="Hero background (dark)"
        fill
        priority
        sizes="100vw"
        className="-z-30 hidden dark:block object-cover object-center"
        style={{
          filter: "invert(1) brightness(1.05) contrast(1.05) saturate(0.9)",
        }}
      />

      <div className="absolute inset-0 bg-background/45" />
      <div
        aria-hidden
        className="absolute inset-0 dark:hidden pointer-events-none"
        style={{
          zIndex: -15,
          backgroundImage:
            "linear-gradient(110deg, var(--brand-from) 0%, var(--brand-via) 45%, var(--brand-to) 100%)",
          opacity: 0.18,
          mixBlendMode: "overlay",
        }}
      />
      <div className="absolute inset-0 bg-grid opacity-[0.05]" />
      <Container className="relative">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <Reveal delay={0.05}>
            <h1 className="text-balance text-5xl font-semibold tracking-tight sm:text-5xl md:text-6xl md:leading-[1.05]">
              Accelerating science for a{" "}
              <span className="text-gradient-animated animate-gradient">
                healthier tomorrow
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 max-w-3xl text-2xl sm:text-3xl leading-relaxed text-foreground/90">
              With You: From Your{" "}
              <Typewriter
                items={["Idea to Publication", "Raw Data to Insights"]}
              />
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
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function Typewriter({ items }: { items: string[] }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const current = items[index % items.length];

    if (!deleting) {
      if (text !== current) {
        timer = setTimeout(
          () => setText(current.slice(0, text.length + 1)),
          100,
        );
      } else {
        timer = setTimeout(() => setDeleting(true), 900);
      }
    } else {
      if (text !== "") {
        timer = setTimeout(
          () => setText(current.slice(0, text.length - 1)),
          100,
        );
      } else {
        setDeleting(false);
        setIndex((i) => i + 1);
      }
    }

    return () => clearTimeout(timer);
  }, [text, deleting, index, items]);

  return (
    <span className="font-semibold text-foreground">
      {text}
      <span className="inline-block ml-1 w-1 animate-pulse">|</span>
    </span>
  );
}
