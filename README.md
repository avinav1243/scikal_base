# SciKal — Marketing Site

A modern, production-ready marketing site for **SciKal Research** — a team of
scientists, engineers and data experts driving innovation in behavioral
neuroscience (_"We help your science fly."_). A spin-off from NCBS-TIFR with
offices in Chicago and Bengaluru.

A rebuild of the legacy Vite SPA as a server-rendered, SEO-optimized Next.js app
with full light/dark theming. The offering is organised into three product
categories — **Instrumentation**, **Design & Computational Biology**, and
**Solutions**.

## Stack

| Concern    | Choice                                            |
| ---------- | ------------------------------------------------- |
| Framework  | Next.js 16 (App Router) + React 19                |
| Language   | TypeScript (strict)                               |
| Styling    | Tailwind CSS v4 (CSS-first `@theme`)              |
| Theming    | `next-themes` — class-based light/dark + system   |
| Motion     | framer-motion (scroll reveals, respects reduced-motion) |
| Icons      | lucide-react + custom brand SVGs                  |
| SEO        | Metadata API, sitemap, robots, JSON-LD, dynamic OG image |

## Theming

- **Light theme** is derived from the SciKal logo — a **cyan → navy** gradient
  (the infinity ribbon `#15b6e5` → the wordmark `#004890`).
- **Dark theme** is **matte black** (`#0a0a0a`) with luminous cyan accents.

All colors are CSS variables in [`src/app/globals.css`](src/app/globals.css)
mapped into Tailwind via `@theme inline`, so utilities like `bg-card`,
`text-muted-foreground`, and `border-border` follow the active theme
automatically. The theme toggle lives in the navbar; system preference is
respected and a fresh visitor sees the dark theme by default.

## Getting started

```bash
npm install
cp .env.example .env.local   # set NEXT_PUBLIC_SITE_URL
npm run dev                  # http://localhost:3000
```

### Scripts

```bash
npm run dev     # start the dev server
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Project structure

```
src/
  app/
    layout.tsx            # root layout: fonts, theme provider, metadata, JSON-LD
    page.tsx              # homepage (composed of sections/)
    page.tsx              # single-page site: composes all sections in order
    api/contact/route.ts  # contact form handler (validation + integration point)
    globals.css           # design tokens + Tailwind theme + utilities
    sitemap.ts robots.ts manifest.ts opengraph-image.tsx icon.png apple-icon.png
  components/
    layout/   navbar.tsx (anchor nav + scroll-spy, Products dropdown), footer.tsx
    sections/ hero, trust, about, story, mission, products, clients, team, contact
    products/ product-explorer.tsx (clickable cards), product-detail-modal.tsx
    ui/       button, badge, container, section-heading, aurora, reveal
    brand/    logo, social-icons
    theme-provider.tsx, theme-toggle.tsx, structured-data.tsx
  lib/
    site.ts       # central site config + anchor navigation (edit to rebrand)
    products.ts   # 3 product categories + offerings + custom-service tags
    team.ts       # team members + founder bio
    clients.ts    # collaborators (+ logo paths)
    utils.ts      # cn() class merge helper
public/
  brand/    scikal-logo.png, scikal-logo-dark.png
  icons/    icon-192.png, icon-512.png (PWA)
  clients/  placeholder logo SVGs (swap for real brand logos)
```

## Customizing

- **Brand / copy / nav / locations:** [`src/lib/site.ts`](src/lib/site.ts)
- **Product categories & items:** [`src/lib/products.ts`](src/lib/products.ts)
- **Team & founder bio:** [`src/lib/team.ts`](src/lib/team.ts)
- **Clients & collaborators:** [`src/lib/clients.ts`](src/lib/clients.ts)
- **Colors / theme tokens:** [`src/app/globals.css`](src/app/globals.css)
- **Logo:** swap `public/scikal-logo.png` / `public/scikal-logo-dark.png` (used by [`logo.tsx`](src/components/brand/logo.tsx))

## Single-page architecture

The whole site is one page ([`src/app/page.tsx`](src/app/page.tsx)) composed of
sections (Hero, About, Story, Mission, Products, Clients, Team, Contact). The
navbar uses in-page anchor links (`#about`, `#products`, …) with smooth scroll
and an IntersectionObserver scroll-spy that highlights the active section. There
are no content routes — only `/` plus the contact API and generated SEO routes.

## Product details (no routing)

In the **Products** section, clicking any product opens a rich detail view
**in place** — an accessible modal (`ProductDetailModal`) rendered via a portal,
with no per-product route or URL change. The modal shows the full overview,
detailed **Key Features**, an email CTA, and a sibling switcher to flip between
products in the same category. All detail copy lives in
[`src/lib/products.ts`](src/lib/products.ts) (`overview` + `keyFeatures`).

## Contact form

The form posts to `/api/contact`, which validates input and includes a spam
honeypot. To actually deliver messages, wire up an email/CRM provider (Resend,
SendGrid, Postmark, Slack webhook…) at the marked integration point in
[`src/app/api/contact/route.ts`](src/app/api/contact/route.ts).

## Deployment

Deploy on any Node host or Vercel. Set `NEXT_PUBLIC_SITE_URL` to the production
domain so canonical URLs, the sitemap, and Open Graph tags resolve correctly.
