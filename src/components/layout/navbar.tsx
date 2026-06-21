"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { buttonVariants } from "@/components/ui/button";
import { mainNav, type NavItem } from "@/lib/site";
import { productCategories } from "@/lib/products";
import { cn } from "@/lib/utils";

const hashId = (href: string) => href.split("#")[1] ?? "";

// Shared nav-link styling.
const linkBase =
  "rounded-full px-3.5 py-2 text-sm font-medium transition-colors";
const linkStyle =
  "text-muted-foreground hover:bg-accent/60 hover:text-foreground";

function scrollToHash(id: string) {
  const target =
    document.getElementById(id) ?? document.getElementById("products");

  if (!target) return;

  const navOffset = 88;
  const top = target.getBoundingClientRect().top + window.scrollY - navOffset;
  window.scrollTo({ top, behavior: "smooth" });
}

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    const hash = window.location.hash.replace(/^#/, "");
    if (!hash) return;

    const timer = window.setTimeout(() => scrollToHash(hash), 100);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  const handleNavClick = (href: string) => (event: React.MouseEvent) => {
    const hash = hashId(href);

    setOpen(false);

    if (!hash) return;
    if (href.startsWith("/#") && pathname !== "/") return;

    event.preventDefault();

    const nextUrl = href.startsWith("/#") ? href : `#${hash}`;
    window.history.pushState(null, "", nextUrl);
    window.dispatchEvent(new HashChangeEvent("hashchange"));
    scrollToHash(hash);
  };

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
        <Link
          href="/"
          aria-label="SciKal Research - back to top"
          className="rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <Logo priority />
        </Link>

        <ul className="hidden items-center gap-0.5 md:flex">
          {mainNav.map((item) =>
            item.children ? (
              <DesktopDropdown
                key={item.href}
                item={item}
                onNavigate={handleNavClick}
              />
            ) : (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={handleNavClick(item.href)}
                  className={cn(linkBase, linkStyle)}
                >
                  {item.label}
                </Link>
              </li>
            ),
          )}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            href="/#contact"
            onClick={handleNavClick("/#contact")}
            className={buttonVariants({
              variant: "brand",
              size: "sm",
              className: "hidden sm:inline-flex",
            })}
          >
            Let&rsquo;s collaborate
            <ArrowRight />
          </Link>
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
              <Link
                href={item.href}
                onClick={handleNavClick(item.href)}
                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                {item.label}
              </Link>
              {item.children && (
                <ul className="ml-3 border-l border-border pl-3">
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        onClick={handleNavClick(child.href)}
                        className="block rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <li className="pt-2">
            <Link
              href="/#contact"
              onClick={handleNavClick("/#contact")}
              className={buttonVariants({
                variant: "brand",
                size: "md",
                className: "w-full",
              })}
            >
              Let&rsquo;s collaborate
              <ArrowRight />
            </Link>
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
function DesktopDropdown({
  item,
  onNavigate,
}: {
  item: NavItem;
  onNavigate: (href: string) => (event: React.MouseEvent) => void;
}) {
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
      <Link
        href={item.href}
        aria-haspopup="true"
        aria-expanded={open}
        onClick={(event) => {
          setOpen(false);
          onNavigate(item.href)(event);
        }}
        className={cn("inline-flex items-center gap-1", linkBase, linkStyle)}
      >
        {item.label}
        <ChevronDown
          className={cn(
            "size-4 transition-transform duration-200",
            open && "rotate-180",
          )}
        />
      </Link>

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
            // const CatIcon = cat?.icon;
            return (
              <Link
                key={child.href}
                href={child.href}
                onClick={(event) => {
                  setOpen(false);
                  onNavigate(child.href)(event);
                }}
                className="flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-accent"
              >
                {/* {CatIcon && (
                  <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand text-white">
                    <CatIcon className="size-4" />
                  </span>
                )} */}
                <span className="min-w-0">
                  <span className="block text-sm font-medium text-foreground">
                    {child.label}
                  </span>
                  {/* {cat?.tagline && (
                    <span className="mt-0.5 block text-xs leading-snug text-muted-foreground">
                      {cat.tagline}
                    </span>
                  )} */}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </li>
  );
}
