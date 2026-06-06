# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at http://localhost:3000 (Turbopack)
npm run build    # Production build
npm run start    # Serve the production build
npm run lint     # ESLint (next/core-web-vitals + TypeScript rules)
```

There is no test suite in this project.

## Architecture

A single-page marketing site for Hanna Elizabeth Young, a London vocalist promoting her booking/performance services. Built with **Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS v4**. Deployed on Vercel at https://hanna-young-music.vercel.app.

The entire site is one scrolling page. `app/page.tsx` composes the section components in order (Hero → About → Marquee → Packages → Reviews → News → Gallery → Contact), and `app/layout.tsx` wraps them with the persistent `Navigation`, `Footer`, and `FloatingBook` (a scroll-triggered WhatsApp button). Navigation links are in-page anchors (`#about`, `#packages`, `#praise`, `#gallery`, `#contact`) that scroll to section IDs — there is no client-side routing.

Section components are mostly **server components**; only the ones needing browser APIs are `"use client"` (`Navigation`, `FloatingBook`, and `Reveal`). Prefer server components for new sections and use the `Reveal` wrapper for scroll-in animation rather than adding per-section client logic.

### Key shared modules
- `app/lib/site.ts` — single source of truth for contact details (`PHONE_RAW`, `EMAIL`) and the `whatsapp(message?)` / `mailto(subject?)` link builders. **All booking CTAs must use these**, never hard-code the number/email. Bookings currently go through WhatsApp; online payments are planned (see `STRIPE_PLAN.md`).
- `app/components/Reveal.tsx` — `"use client"` IntersectionObserver wrapper that fades/lifts children in once on scroll (toggles `.reveal.is-visible`). Wrap content blocks in `<Reveal delay={ms}>`.
- `app/components/icons.tsx` — inline SVG icons (`ArrowRight`, `WhatsAppIcon`).

### Styling system

Aesthetic direction is **high-contrast editorial / gallery-modern**: warm paper + near-black ink, a single bold crimson accent, oversized display serif. Tailwind v4 is configured via CSS, not a JS config file. The design system lives entirely in `app/globals.css`:
- **CSS variables** under `:root`: `--paper`, `--ink`, `--red` (accent), `--muted`, `--line`, etc. Use these rather than hard-coding hex values. The `.on-ink` class flips a section to the dark theme (ink background, paper text, red eyebrows).
- **Custom utility classes**: `.container-wide`, `.section`, `.display`, `.eyebrow`, `.lead`, `.btn` + variants (`.btn-red`, `.btn-ink`, `.btn-ghost`), `.link-underline`, `.reveal`, `.img-frame`, `.marquee`, `.grain`, `.index-num`. Reuse them instead of reinventing equivalents.
- Fonts load in `app/layout.tsx` via `next/font/google`: **Instrument Serif** (display headings, `--font-instrument`) and **Archivo** (body/UI, `--font-archivo`). Headings use the serif automatically via the global `h1–h4` rule; use `font-[family-name:var(--font-instrument)]` for one-off serif text.

### Images

`next.config.ts` sets `images.unoptimized: true` (and still whitelists `images.unsplash.com`). The two singer photos are local files in `public/`: **`hanna-1.jpg`** (portrait — hero + gallery) and **`hanna-2.jpg`** (landscape — about + gallery), referenced via `next/image` with `fill`. The committed versions may be placeholders; replace with the real photos at the same paths/aspect ratios. New external image hosts must be added to `remotePatterns`.

## Path alias

`@/*` maps to the repo root (see `tsconfig.json`), e.g. `@/app/components/Hero`.
