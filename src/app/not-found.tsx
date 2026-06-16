import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Aurora } from "@/components/ui/aurora";
import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden">
      <Aurora />
      <Container className="relative text-center">
        <p className="font-mono text-7xl font-bold text-gradient sm:text-8xl">
          404
        </p>
        <h1 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
          This experiment didn&rsquo;t replicate
        </h1>
        <p className="mx-auto mt-3 max-w-md text-muted-foreground">
          The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.
          Let&rsquo;s get you back to solid ground.
        </p>
        <Link
          href="/"
          className={buttonVariants({
            variant: "brand",
            size: "lg",
            className: "mt-8",
          })}
        >
          <ArrowLeft />
          Back home
        </Link>
      </Container>
    </section>
  );
}
