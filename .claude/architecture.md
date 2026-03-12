# Architecture

## Stack

- React 19 + TypeScript + Vite 7
- Tailwind CSS v4 (NOT v3 — see coding-standards.md for differences)
- Shadcn UI v4 using `@base-ui/react` (NOT Radix UI — see coding-standards.md for differences)
- react-router-dom v7 with BrowserRouter
- Deployed to Cloudflare Pages via `wrangler.jsonc`
- Path alias: `@/` maps to `./src/`

## Directory structure

```
src/
  assets/               # Static assets (logo images etc.)
  components/
    layout/             # Page-level structural wrappers
      Section.tsx       # Section wrapper — use for every page-level band
      SectionHeader.tsx # Eyebrow + h2 + description block
    ui/                 # Shadcn components (button, card, badge, separator, sheet)
  data/                 # Single source of truth for all site content
    services.ts         # ServiceCategory[] + ServiceDetail[] + helper functions
    about.ts            # AboutData object for the about page
  hooks/
    usePageTitle.ts     # Sets document.title — call in every page component
  pages/
    HomePage.tsx
    ServicesPage.tsx
    ServiceDetailPage.tsx
    AboutPage.tsx
    ContactPage.tsx
  components/           # Feature components (Hero, Navbar, Footer, Services, About, Contact)
```

## Routing

All routes defined in `App.tsx` inside a single `BrowserRouter`:

| Path | Component | Notes |
|---|---|---|
| `/` | HomePage | Hero + Services + About preview + Contact |
| `/services` | ServicesPage | Category overview grid |
| `/services/:slug` | ServiceDetailPage | Resolves category slugs first, then service slugs |
| `/about` | AboutPage | Full about page |
| `/contact` | ContactPage | Contact info component |

**SPA fallback**: `wrangler.jsonc` sets `not_found_handling: "single-page-application"` — all unknown paths serve `index.html` and React Router handles resolution client-side.

**Slug collision note**: the `dental-implants` category and a same-named service would conflict at `/services/:slug` — the service was renamed to `implant-placement` to fix this. Category slugs always win if there is a match.

## Data architecture

All content text lives in `src/data/` — never hardcoded in components.

- `services.ts` exports `categories`, `services`, and helpers: `getCategoryBySlug`, `getServiceBySlug`, `getServicesForCategory`, `getRelatedServices`
- `about.ts` exports a single `aboutData` object

Components import from data files and render. Adding or editing content = edit the data file only.

## Layout pattern

Use `<Section>` from `@/components/layout/Section` for every full-width page band:

```tsx
<Section variant="muted" labelledBy="heading-id">
  <h2 id="heading-id">...</h2>
</Section>
```

Variants: `default` (white), `muted` (subtle tint), `accent` (sky gradient, for hero/intro sections), `dark` (primary colour, for CTA sections).
Sizes: `sm` (py-16), `default` (py-24), `lg` (py-28).

Use `<SectionHeader>` for centred badge + heading + description blocks:

```tsx
<SectionHeader id="..." eyebrow="..." title="..." description="..." align="center" />
```

The `id` on `SectionHeader` should match `labelledBy` on the parent `Section`.

## Page titles

Every page component must call `usePageTitle` from `@/hooks/usePageTitle`:

- No argument → `MW Dental Care | Professional Dental Services` (home page)
- With argument → `{title} | MW Dental Care`

Dynamic pages (`ServiceDetailPage`) call `usePageTitle` inside each resolved sub-component (`CategoryView`, `ServiceView`, `NotFound`).

## Design principles

- Mobile-first layout throughout
- WCAG 2.1 AA compliance on every page
- Alternating section backgrounds for rhythm: default → muted → default → muted → dark
- Restrained, premium aesthetic: sky-50/100/600 accent palette, no flashy effects
