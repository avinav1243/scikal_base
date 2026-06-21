import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, Mail, Sparkles } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { allOfferings, getOffering } from "@/lib/products";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function generateStaticParams() {
  return allOfferings.map((offering) => ({ id: offering.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const offering = getOffering(id);

  if (!offering) return {};

  return {
    title: `${offering.name} | ${siteConfig.name}`,
    description: offering.description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const offering = getOffering(id);

  if (!offering) notFound();

  return (
    <main>
      <section className="relative isolate overflow-hidden border-b border-border">
        <div className="absolute inset-0 -z-20 flex items-center justify-center">
          <Image
            src={offering.image}
            alt={offering.name}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div
            className={cn(
              "absolute inset-0",
              offering.imageTone === "figure" ? "bg-black/10" : "bg-black/8",
            )}
          />
          {/* <div className="absolute inset-0 bg-gradient-to-t from-background via-black/10 to-black/8" /> */}
        </div>

        <Container className="py-24 sm:py-32">
          <Link
            href="/#products"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/80 transition-colors hover:text-white"
          >
            <ArrowLeft className="size-4" />
            Back to products
          </Link>

          <div className="mt-12 max-w-3xl text-white">
            {offering.kicker && (
              <p className="mt-6 font-mono text-xs uppercase tracking-[0.18em] text-white/75">
                {offering.kicker}
              </p>
            )}
            <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-6xl">
              {offering.name}
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/85">
              {offering.subtitle}
            </p>
          </div>
        </Container>
      </section>

      <Container className="py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_22rem]">
          <div>
            <div className="rounded-2xl border border-l-4 border-border border-l-primary bg-muted/40 p-6">
              <p className="text-pretty leading-relaxed text-muted-foreground">
                {offering.overview}
              </p>
            </div>

            <h2 className="mt-10 text-2xl font-semibold tracking-tight">
              Key Features
            </h2>
            <ul className="mt-6 grid gap-x-8 gap-y-5 sm:grid-cols-2">
              {offering.keyFeatures.map((feature) => (
                <li key={feature.title} className="flex gap-3">
                  <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="size-3.5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold">{feature.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {feature.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <aside className="h-fit rounded-2xl border border-border bg-card p-6 shadow-sm">
            <p className="inline-flex items-center gap-2 text-sm font-semibold">
              <Sparkles className="size-4 text-primary" />
              Interested in this product?
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Contact us to learn more or request a custom configuration for
              your lab.
            </p>
            <a
              href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(
                `Enquiry: ${offering.name}`,
              )}`}
              className={buttonVariants({
                variant: "brand",
                size: "md",
                className: "mt-5 w-full",
              })}
            >
              <Mail />
              Email us
            </a>
          </aside>
        </div>
      </Container>
    </main>
  );
}
