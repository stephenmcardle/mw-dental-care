# MW Dental Care — Claude Instructions

Static marketing website for MW Dental Care (Dr. Margaret Williams, founded 2005). Deployed to Cloudflare Pages.

## Stack

- **React 19** + **TypeScript** + **Vite 7**
- **Tailwind CSS v4** — uses `@tailwindcss/vite` plugin, `@import "tailwindcss"` in CSS entry. **No `tailwind.config.ts`** — do not create one.
- **Shadcn UI v4** built on **`@base-ui/react`** — NOT Radix UI. See UI Constraints below.
- **react-router-dom v7** with `BrowserRouter` and clean URLs
- **react-helmet-async** — `<HelmetProvider>` wraps `<App>` in `src/main.tsx`; use `<Helmet>` in page components for per-route `<head>` tags
- **Cloudflare Pages** SPA fallback: `wrangler.jsonc` sets `not_found_handling: "single-page-application"`
- **Production URL**: `https://mwdentalcare.net` (no `www`)
- Path alias: `@/` → `./src/`

## Build Commands

```bash
npm run dev        # Vite dev server
npm run build      # tsc -b && vite build  ← run after every change
npm run lint       # ESLint
npm run preview    # Preview production build
```

**Always run `npm run build` after making changes.** It runs both `tsc -b` and `vite build`, catching TypeScript errors and Tailwind class issues together.

## Project Structure

```
src/
  assets/               # Static assets (logo: mw-logo-transparent.png)
  components/
    layout/             # Section.tsx, SectionHeader.tsx — page-level wrappers
    ui/                 # Shadcn components — do not edit manually
  data/                 # Single source of truth for all site content
    services.ts         # ServiceCategory[], ServiceDetail[], helper functions
    about.ts            # AboutData object
    contact.ts          # ContactData — address, phone, email, hours, Maps links
  hooks/
    usePageTitle.ts     # Sets document.title — call in every page component
  pages/                # One component per route
  components/           # Feature components (Hero, Navbar, Footer, etc.)
scripts/
  generate-sitemap.js   # ESM Node.js script — writes dist/sitemap.xml post-build
```

## Coding Standards

### TypeScript
- No `any` — ever
- Prefer explicit types on exported functions and data structures
- Use `type` imports where possible (`import type { Foo }`)

### Content
- **Never hardcode content text in components** — all text belongs in `src/data/`
- **Never use `<a href>` for internal navigation** — use React Router `<Link to>`

### Tailwind v4 Class Names
Use canonical v4 names — the linter warns on deprecated aliases:
- `shrink-0` not `flex-shrink-0`
- `grow` not `flex-grow`
- `aspect-4/5` not `aspect-[4/5]`

## UI Constraints

### Shadcn v4 / base-ui — critical differences from Radix

**No `asChild` prop.** Use `render` prop instead:
```tsx
// Wrong
<SheetTrigger asChild><Button>Open</Button></SheetTrigger>

// Correct
<SheetTrigger render={<Button aria-label="Open menu" />}>Menu</SheetTrigger>
```

**Never import from `@radix-ui`** — this project uses `@base-ui/react`.

**Style `<Link>` as a button** using `buttonVariants()`, not by wrapping in `<Button>`:
```tsx
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

<Link to="/contact" className={cn(buttonVariants({ size: 'lg' }))}>Book Appointment</Link>
```

### Layout pattern
Use `<Section>` from `@/components/layout/Section` for every full-width page band:
```tsx
<Section variant="muted" labelledBy="heading-id">
  <h2 id="heading-id">...</h2>
</Section>
```
Variants: `default` (white), `muted` (subtle tint), `accent` (sky gradient), `dark` (CTA).
Sizes: `sm` (py-16), `default` (py-24), `lg` (py-28).

Use `<SectionHeader>` for centred eyebrow + heading + description blocks:
```tsx
<SectionHeader id="section-id" eyebrow="..." title="..." description="..." align="center" />
```
The `id` on `<SectionHeader>` must match `labelledBy` on the parent `<Section>`.

### Page titles
Call `usePageTitle` from `@/hooks/usePageTitle` in every page component:
- No argument → home page default title
- With argument → `{title} | MW Dental Care`

### Head management (noindex, canonical, etc.)
Use `<Helmet>` from `react-helmet-async` for per-route `<head>` tags:
```tsx
import { Helmet } from 'react-helmet-async'

<Helmet>
  <meta name="robots" content="noindex, follow" />
</Helmet>
```
`<HelmetProvider>` is already in `src/main.tsx` — do not add it again.
Legal pages (`/privacy-policy`, `/terms-of-use`, `/accessibility`) all carry `noindex, follow`.

### Icons
- `aria-hidden="true"` on all decorative icons
- Store icon references (not JSX) in data files: `icon: LucideIcon`
- `Tooth` does not exist in this version of lucide-react

## Accessibility (WCAG 2.1 AA)

- Exactly one `<h1>` per page; heading levels must not skip
- `aria-labelledby` on `<section>` elements referencing the section heading id
- `aria-hidden="true"` on decorative icons and images
- `role="list"` on `<ul>` elements with list styling removed
- `focus-visible:ring-2 focus-visible:ring-ring` on all interactive elements
- Sufficient colour contrast — do not use muted text on muted backgrounds
- Touch targets ≥ 44px — use `py-3 px-3` minimum on interactive elements

## Workflow Rules

1. Read `architecture.md`, `coding-standards.md`, and `session.md` in `.claude/` before implementing changes
2. Analyse the relevant source files before proposing changes
3. Propose an implementation plan and wait for approval before coding
4. Prefer editing existing files over creating new ones
5. Keep dependencies minimal — check existing libraries before adding new ones
6. Run `npm run build` after every change to verify TypeScript and Vite both pass

## Sitemap

`scripts/generate-sitemap.js` runs automatically after every build via the `"postbuild"` npm hook.
- 26 routes indexed; `/privacy-policy`, `/terms-of-use`, `/accessibility` are excluded (noindex pages).
- Production URL hardcoded: `const PRODUCTION_URL = 'https://mwdentalcare.net'` — update here if the domain changes.
- Override at build time: `VITE_SITE_URL=https://staging.example.com npm run build`
- Note: Cloudflare Pages shows "Variables cannot be added to a Worker that only has static assets" — this is expected and normal for static-only deployments. `VITE_SITE_URL` is build-time only; it has no runtime effect.

## Known Issues (as of 2026-03-12)

- About page content in `src/data/about.ts` is mostly placeholder — do not treat as final
