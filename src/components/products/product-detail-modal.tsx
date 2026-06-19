"use client";

import * as React from "react";
import Image from "next/image";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { X, Mail, ArrowLeft, Check, Sparkles } from "lucide-react";
import type { Offering } from "@/lib/products";
import { siteConfig } from "@/lib/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ProductDetailModal({
  offering,
  siblings,
  onSelect,
  onClose,
}: {
  offering: Offering;
  siblings: Offering[];
  onSelect: (o: Offering) => void;
  onClose: () => void;
}) {
  const [mounted, setMounted] = React.useState(false);
  const panelRef = React.useRef<HTMLDivElement>(null);
  const Icon = offering.icon;
  const titleId = "product-detail-title";

  // Portal target (document.body) is only available on the client; this
  // one-shot mount flag is the standard guard and does not cascade renders.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  React.useEffect(() => setMounted(true), []);

  // Esc to close + lock body scroll while open.
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  // Move focus into the dialog when the shown product changes.
  React.useEffect(() => {
    panelRef.current?.focus();
  }, [offering.id]);

  if (!mounted) return null;

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto p-0 sm:p-6">
      {/* Backdrop */}
      <motion.button
        type="button"
        aria-label="Close"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
        className="fixed inset-0 cursor-default bg-black/60 backdrop-blur-sm"
      />

      {/* Panel */}
      <motion.div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.98 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        className="relative my-0 w-full max-w-6xl overflow-hidden bg-card shadow-glow outline-none sm:my-4 sm:rounded-3xl sm:border sm:border-border"
      >
        {/* Banner — the product figure itself, with a scrim so the overlaid
            text stays legible (figures are lightened white-bg diagrams, so they
            get a heavier scrim than the darker photos). */}
        <div className="relative flex min-h-[16rem] flex-col items-center justify-center overflow-hidden p-8 text-center sm:min-h-[18rem] sm:p-10">
          <Image
            src={offering.image}
            alt=""
            fill
            priority
            sizes="(min-width: 640px) 768px, 100vw"
            className="object-cover"
          />
          <div
            className={cn(
              "pointer-events-none absolute inset-0",
              offering.imageTone === "figure" ? "bg-black/55" : "bg-black/35",
            )}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-black/5" />

          <button
            type="button"
            onClick={onClose}
            aria-label="Close product details"
            className="absolute right-4 top-4 z-10 inline-flex size-9 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition-colors hover:bg-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          >
            <X className="size-5" />
          </button>

          <div className="relative z-10 flex flex-col items-center">
            {offering.kicker && (
              <p className="mt-4 font-mono text-xs uppercase tracking-[0.18em] text-white/85">
                {offering.kicker}
              </p>
            )}
            <h2
              id={titleId}
              className="mt-1 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
            >
              {offering.name}
            </h2>
            <p className="mt-2 max-w-xl text-pretty text-white/90">
              {offering.subtitle}
            </p>
          </div>
        </div>

        {/* Sibling switcher */}
        {siblings.length > 1 && (
          <div className="flex gap-2 overflow-x-auto border-b border-border px-5 py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {siblings.map((s) => {
              const active = s.id === offering.id;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => onSelect(s)}
                  aria-current={active}
                  className={cn(
                    "whitespace-nowrap rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
                    active
                      ? "border-transparent bg-brand text-white"
                      : "border-border bg-card text-muted-foreground hover:border-foreground/20 hover:text-foreground",
                  )}
                >
                  {s.name}
                </button>
              );
            })}
          </div>
        )}

        {/* Content */}
        <div className="p-6 sm:p-10">
          {/* Overview */}
          <div className="rounded-2xl border border-l-4 border-border border-l-primary bg-muted/40 p-5">
            <p className="text-pretty leading-relaxed text-muted-foreground">
              {offering.overview}
            </p>
          </div>

          {/* Key features */}
          <h3 className="mt-8 text-xl font-semibold tracking-tight">
            Key Features
          </h3>
          <ul className="mt-5 grid gap-x-8 gap-y-5 sm:grid-cols-2">
            {offering.keyFeatures.map((f) => (
              <li key={f.title} className="flex gap-3">
                <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check className="size-3.5" />
                </span>
                <div>
                  <p className="text-sm font-semibold">{f.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {f.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="mt-9 rounded-2xl border border-border bg-muted/40 p-6 text-center">
            <p className="inline-flex items-center gap-2 text-sm font-semibold">
              <Sparkles className="size-4 text-primary" />
              Interested in this product?
            </p>
            <p className="mx-auto mt-1.5 max-w-md text-sm text-muted-foreground">
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
                className: "mt-4",
              })}
            >
              <Mail />
              Email us at {siteConfig.email}
            </a>
          </div>

          <div className="mt-6 flex justify-center">
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-foreground"
            >
              <ArrowLeft className="size-4" />
              Back to all products
            </button>
          </div>
        </div>
      </motion.div>
    </div>,
    document.body,
  );
}
