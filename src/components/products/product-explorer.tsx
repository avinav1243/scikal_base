"use client";

import * as React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { productCategories, type Offering } from "@/lib/products";
import { ProductDetailModal } from "@/components/products/product-detail-modal";
import { cn } from "@/lib/utils";

type Selection = { offering: Offering; siblings: Offering[] } | null;

const categoryIds = productCategories.map((c) => c.id);

export function ProductExplorer() {
  const [selected, setSelected] = React.useState<Selection>(null);
  const [activeId, setActiveId] = React.useState(productCategories[0].id);

  // Let the navbar "Solutions" menu and in-page links (#instrumentation, …)
  // drive the active tab and bring the section into view.
  React.useEffect(() => {
    const syncFromHash = () => {
      const id = window.location.hash.replace(/^#/, "");
      if (categoryIds.includes(id)) {
        setActiveId(id);
        document
          .getElementById("products")
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  const activeCat =
    productCategories.find((c) => c.id === activeId) ?? productCategories[0];
  const ActiveIcon = activeCat.icon;

  return (
    <>
      {/* Tabs */}
      <div
        role="tablist"
        aria-label="Product categories"
        className="flex flex-wrap justify-center gap-2"
      >
        {productCategories.map((cat) => {
          const Icon = cat.icon;
          const isActive = cat.id === activeId;
          return (
            <button
              key={cat.id}
              type="button"
              role="tab"
              id={`tab-${cat.id}`}
              aria-selected={isActive}
              aria-controls="product-panel"
              onClick={() => setActiveId(cat.id)}
              className={cn(
                "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200",
                isActive
                  ? "border-transparent bg-brand text-white shadow-glow"
                  : "border-border bg-card text-muted-foreground hover:-translate-y-0.5 hover:border-foreground/20 hover:text-foreground",
              )}
            >
              <Icon className="size-4" />
              {cat.name}
            </button>
          );
        })}
      </div>

      {/* Active category panel */}
      <div
        id="product-panel"
        role="tabpanel"
        aria-labelledby={`tab-${activeCat.id}`}
        className="mt-10 min-h-[28rem]"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCat.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mx-auto max-w-2xl text-center">
              {/* <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-primary">
                <ActiveIcon className="size-3.5" />
                {activeCat.name}
              </span> */}
              <h3 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                {activeCat.tagline}
              </h3>
              <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                {activeCat.description}
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {activeCat.items.map((item) => (
                <ProductCard
                  key={item.id}
                  item={item}
                  onOpen={() =>
                    setSelected({ offering: item, siblings: activeCat.items })
                  }
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {selected && (
          <ProductDetailModal
            offering={selected.offering}
            siblings={selected.siblings}
            onSelect={(o) =>
              setSelected((s) => (s ? { ...s, offering: o } : s))
            }
            onClose={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

function ProductCard({
  item,
  onOpen,
}: {
  item: Offering;
  onOpen: () => void;
}) {
  const Icon = item.icon;
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`View details for ${item.name}`}
      className="group relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-border bg-card text-left transition-all duration-300 hover:-translate-y-1 hover:border-foreground/15 hover:shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      {/* Figure — white mat for diagrams (legible on dark), cover for photos. */}
      <div
        className={cn(
          "relative aspect-[16/10] w-full overflow-hidden border-b border-border",
          item.imageTone === "figure" ? "bg-white" : "bg-muted",
        )}
      >
        <Image
          src={item.image}
          alt={`${item.name} — ${item.tagline}`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className={cn(
            "transition-transform duration-500 group-hover:scale-[1.04]",
            item.imageTone === "figure" ? "object-contain p-3" : "object-cover",
          )}
        />
        <span
          className={cn(
            "absolute left-4 top-4 inline-flex size-10 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-lg ring-1 ring-white/20",
            item.accent,
          )}
        >
          <Icon className="size-5" />
        </span>
      </div>

      {/* Body */}
      <div className="relative flex flex-1 flex-col p-6">
        <div
          className={cn(
            "pointer-events-none absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-[0.06]",
            item.accent,
          )}
        />
        {item.kicker && (
          <p className="relative font-mono text-xs uppercase tracking-wider text-muted-foreground">
            {item.kicker}
          </p>
        )}
        <h4 className="relative mt-1 text-lg font-semibold tracking-tight">
          {item.name}
        </h4>
        <p className="relative mt-0.5 text-sm font-medium text-gradient">
          {item.tagline}
        </p>
        <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">
          {item.description}
        </p>

        <ul className="relative mt-4 flex flex-col gap-2 border-t border-border pt-4">
          {item.keyFeatures.slice(0, 3).map((f) => (
            <li
              key={f.title}
              className="flex items-start gap-2 text-sm text-muted-foreground"
            >
              <Check className="mt-0.5 size-4 shrink-0 text-primary" />
              {f.title}
            </li>
          ))}
        </ul>

        <span className="relative mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary">
          View details
          <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </div>
    </button>
  );
}
