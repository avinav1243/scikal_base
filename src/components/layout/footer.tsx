import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { LinkedinIcon } from "@/components/brand/social-icons";
import { Container } from "@/components/ui/container";
import { siteConfig, footerNav } from "@/lib/site";

export function Footer() {
  const year = "2026"; // build-time constant

  return (
    <footer className="relative mt-24 border-t border-border bg-muted/40">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-brand opacity-40" />
      <Container className="py-14">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="flex flex-col gap-4">
            <Logo />
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              {siteConfig.tagline}. {siteConfig.mission}
            </p>

            <div className="mt-1 flex flex-col gap-1.5 text-sm text-muted-foreground">
              {siteConfig.locations.map((loc) => (
                <span key={loc.city} className="inline-flex items-center gap-2">
                  <MapPin className="size-4 text-primary" />
                  {loc.city}, {loc.country}
                </span>
              ))}
            </div>

            <div className="mt-2 flex items-center gap-2">
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card/60 text-muted-foreground transition-colors hover:border-foreground/20 hover:text-foreground"
              >
                <LinkedinIcon className="size-4" />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                aria-label="Email"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card/60 text-muted-foreground transition-colors hover:border-foreground/20 hover:text-foreground"
              >
                <Mail className="size-4" />
              </a>
            </div>
          </div>

          {footerNav.map((group) => (
            <div key={group.title} className="flex flex-col gap-3">
              <h3 className="text-sm font-semibold">{group.title}</h3>
              <ul className="flex flex-col gap-2.5">
                {group.links.map((link) => (
                  <li key={`${group.title}-${link.label}`}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="font-mono text-xs">Chicago • Bengaluru</p>
        </div>
      </Container>
    </footer>
  );
}
