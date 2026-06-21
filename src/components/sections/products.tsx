import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProductExplorer } from "@/components/products/product-explorer";

export function Products() {
  return (
    <section
      id="products"
      className="relative isolate scroll-mt-24 overflow-hidden border-y border-border py-24"
    >
      <Container className="relative">
        <SectionHeading
          title="Everything we build to accelerate your science"
          description="Three categories, one mission — precision instrumentation, the computational biology behind it, and tailored end-to-end solutions. Pick a category, then open any product for full details."
        />
      </Container>

      <Container className="relative mt-12">
        <ProductExplorer />
      </Container>
    </section>
  );
}
