import { Boxes } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProductExplorer } from "@/components/products/product-explorer";

export function Products() {
  return (
    <section
      id="products"
      className="relative isolate scroll-mt-24 overflow-hidden border-y border-border py-24"
    >
      {/* GIF background: active. Separate light/dark filters keep the same GIF usable in both themes. */}
      {/* <div className="absolute inset-0 -z-10 bg-[url('/products/kPV8C2.gif')] bg-cover bg-center bg-fixed [filter:invert(1)_hue-rotate(180deg)_contrast(0.92)_saturate(0.72)_brightness(1.18)] dark:hidden" />
      <div className="absolute inset-0 -z-10 hidden bg-[url('/products/kPV8C2.gif')] bg-cover bg-center bg-fixed [filter:contrast(0.95)_saturate(0.86)_brightness(0.82)] dark:block" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,color-mix(in_oklab,var(--background)_72%,transparent),color-mix(in_oklab,var(--background)_46%,transparent)_48%,color-mix(in_oklab,var(--background)_76%,transparent))]" /> */}

      {/* Minimal theme-aware background: uncomment these two lines and comment the GIF background above to compare. */}
      {/* <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_12%,color-mix(in_oklab,var(--primary)_12%,transparent),transparent_32%),radial-gradient(circle_at_80%_8%,color-mix(in_oklab,var(--brand-to)_10%,transparent),transparent_30%),linear-gradient(180deg,var(--background),var(--muted)_48%,var(--background))]" /> */}
      {/* <div className="absolute inset-0 -z-10 bg-grid opacity-[0.16] mask-radial dark:opacity-[0.08]" /> */}

      {/* Custom generated background: uncomment these two lines and comment the GIF background above to compare. */}
      {/* <div className="absolute inset-0 -z-10 bg-[url('/products/scikal-products-bg.png')] bg-cover bg-center bg-fixed [filter:invert(1)_hue-rotate(180deg)_contrast(1.05)_saturate(1.05)] dark:hidden" /> */}
      {/* <div className="absolute inset-0 -z-10 hidden bg-[url('/products/scikal-products-bg.png')] bg-cover bg-center bg-fixed [filter:contrast(1.08)_saturate(1.08)] dark:block" /> */}

      <Container className="relative">
        <SectionHeading
          // eyebrow="Products & solutions"
          eyebrowIcon={<Boxes />}
          title="Everything we build to accelerate your science"
          description="Three categories, one mission — precision instrumentation, the computational biology behind it, and tailored end-to-end solutions. Pick a category, then open any product for full details."
        />
      </Container>

      <Container className="relative mt-12">
        <ProductExplorer />
      </Container>

      {/* Custom services callout */}
      {/* <Container className="mt-8">
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
                  lab&rsquo;s needs — from custom assay development to
                  specialised data-analysis pipelines.
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
      </Container> */}
    </section>
  );
}
