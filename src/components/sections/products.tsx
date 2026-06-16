import { ArrowRight, Boxes, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { buttonVariants } from "@/components/ui/button";
import { ProductExplorer } from "@/components/products/product-explorer";
import { customServiceTags } from "@/lib/products";

export function Products() {
  return (
    <section
      id="products"
      className="scroll-mt-24 border-y border-border bg-muted/60 py-24"
    >
      <Container>
        <SectionHeading
          eyebrow="Products & solutions"
          eyebrowIcon={<Boxes />}
          title="Everything we build to accelerate your science"
          description="Three categories, one mission — precision instrumentation, the computational biology behind it, and tailored end-to-end solutions. Pick a category, then open any product for full details."
        />
      </Container>

      <Container className="mt-12">
        <ProductExplorer />
      </Container>

      {/* Custom services callout */}
      <Container className="mt-8">
        <Reveal>
          <div className="border-gradient relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-glow sm:p-12">
            <div className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-40 mask-radial" />
            <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
              <div>
                <span className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-primary">
                  <Sparkles className="size-4" /> Custom services
                </span>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                  Every research challenge is unique
                </h3>
                <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                  We provide tailored solutions designed specifically for your
                  lab&rsquo;s needs — from custom assay development to specialised
                  data-analysis pipelines.
                </p>
                <a
                  href="#contact"
                  className={buttonVariants({
                    variant: "brand",
                    size: "md",
                    className: "mt-7",
                  })}
                >
                  Discuss your project
                  <ArrowRight />
                </a>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {customServiceTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-background/60 px-3.5 py-1.5 text-sm text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
