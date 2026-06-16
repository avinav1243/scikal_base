"use client";

import * as React from "react";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { buttonVariants } from "@/components/ui/button";
import { mainNav, type NavItem } from "@/lib/site";
import { productCategories } from "@/lib/products";
import { cn } from "@/lib/utils";

// Section ids the scroll-spy observes (one per real <section> on the page).
const SPY_IDS = [
  "home",
  "about",
  "story",
  "mission",
  "products",
  "clients",
  "team",
  "contact",
];

const hashId = (href: string) => href.replace(/^#/, "");

// Shared nav-link styling.
const linkBase =
  "rounded-full px-3.5 py-2 text-sm font-medium transition-colors";
const linkActive = "bg-accent text-foreground";
const linkInactive =
  "text-muted-foreground hover:bg-accent/60 hover:text-foreground";

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState("");

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: highlight the nav item for the section nearest the top.
  React.useEffect(() => {
    const els = SPY_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    if (els.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.2, 0.5, 1] },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const isActive = (item: NavItem) => {
    if (item.href === "#") return active === "home" || active === "";
    if (item.children) return active === "products"; // Solutions group
    return hashId(item.href) === active;
  };

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background shadow-sm"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 w-full max-w-[96rem] items-center justify-between px-5 sm:px-6 lg:px-8"
      >
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            scrollTop();
          }}
          aria-label="SciKal Research — back to top"
          className="rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <Logo priority />
        </a>

        <ul className="hidden items-center gap-0.5 md:flex">
          {mainNav.map((item) =>
            item.children ? (
              <DesktopDropdown
                key={item.href}
                item={item}
                active={isActive(item)}
              />
            ) : (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={
                    item.href === "#"
                      ? (e) => {
                          e.preventDefault();
                          scrollTop();
                        }
                      : undefined
                  }
                  aria-current={isActive(item) ? "page" : undefined}
                  className={cn(
                    linkBase,
                    isActive(item) ? linkActive : linkInactive,
                  )}
                >
                  {item.label}
                </a>
              </li>
            ),
          )}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="#contact"
            className={buttonVariants({
              variant: "brand",
              size: "sm",
              className: "hidden sm:inline-flex",
            })}
          >
            Let&rsquo;s collaborate
            <ArrowRight />
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card/60 text-foreground md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={cn(
          "overflow-hidden border-border md:hidden",
          open ? "max-h-[32rem] border-b" : "max-h-0",
          "bg-background transition-[max-height] duration-300 ease-in-out",
        )}
      >
        <ul className="flex flex-col gap-1 px-5 py-4">
          {mainNav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                {item.label}
              </a>
              {item.children && (
                <ul className="ml-3 border-l border-border pl-3">
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <a
                        href={child.href}
                        onClick={() => setOpen(false)}
                        className="block rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                      >
                        {child.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <li className="pt-2">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className={buttonVariants({
                variant: "brand",
                size: "md",
                className: "w-full",
              })}
            >
              Let&rsquo;s collaborate
              <ArrowRight />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

/**
 * Desktop "Solutions" mega-menu. Opens on hover, and — crucially — closes the
 * moment an item is selected. Each row is enriched from the product catalogue
 * (icon + tagline) so the menu reads as a proper solutions overview.
 */
function DesktopDropdown({ item, active }: { item: NavItem; active: boolean }) {
  const [open, setOpen] = React.useState(false);
  const closeTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const openNow = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const closeSoon = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  React.useEffect(
    () => () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    },
    [],
  );

  return (
    <li className="relative" onMouseEnter={openNow} onMouseLeave={closeSoon}>
      <a
        href={item.href}
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen(false)}
        className={cn(
          "inline-flex items-center gap-1",
          linkBase,
          active ? linkActive : linkInactive,
        )}
      >
        {item.label}
        <ChevronDown
          className={cn(
            "size-4 transition-transform duration-200",
            open && "rotate-180",
          )}
        />
      </a>

      <div
        className={cn(
          "absolute left-1/2 top-full z-50 w-[22rem] -translate-x-1/2 pt-3 transition-all duration-200",
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-1 opacity-0",
        )}
      >
        <div className="overflow-hidden rounded-2xl border border-border bg-popover p-2 shadow-glow">
          {item.children?.map((child) => {
            const cat = productCategories.find(
              (c) => c.id === hashId(child.href),
            );
            const CatIcon = cat?.icon;
            return (
              <a
                key={child.href}
                href={child.href}
                onClick={() => setOpen(false)}
                className="flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-accent"
              >
                {CatIcon && (
                  <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand text-white">
                    <CatIcon className="size-4" />
                  </span>
                )}
                <span className="min-w-0">
                  <span className="block text-sm font-medium text-foreground">
                    {child.label}
                  </span>
                  {cat?.tagline && (
                    <span className="mt-0.5 block text-xs leading-snug text-muted-foreground">
                      {cat.tagline}
                    </span>
                  )}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </li>
  );
}
