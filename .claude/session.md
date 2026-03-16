# Current Development Session

## Status

All main pages are built and functional. All known structural issues resolved. Legal/policy pages added with proper SEO treatment. Sitemap generation automated. Contact page restructured for desktop balance.

## What is complete

- **HomePage**: Hero (two-column with illustration + `width`/`height` attrs for CLS), Services preview, About preview, Contact info preview; LocalBusiness JSON-LD schema injected via `<Helmet>`; full meta description + OG tags + canonical
- **ServicesPage**: category card grid with treatment list previews; meta/OG/canonical
- **ServiceDetailPage**: category view + individual service detail view; dynamic meta/OG/canonical per category and service slug
- **AboutPage**: 8 sections using Section wrapper pattern — intro/stats, dentist bio, philosophy cards, technology cards, community, testimonials, **FAQ** (`id="faq"`, anchored via `/about#faq`), CTA; meta/OG/canonical
- **ContactPage**: two-column desktop layout (left: 4 contact cards + insurance/payment as plain sections + FAQ pointer; right: CTA dark block + map, sticky on desktop); mobile: fully stacked with sticky call bar at bottom; all content in single `<Section>`
- **Navbar**: logo, desktop nav, polished mobile sheet nav — uses real `contactData` phone
- **Footer**: React Router `<Link to>` nav, logo image brand mark, dot-separated legal links
- **PrivacyPolicyPage** (`/privacy-policy`): noindex, contactData address block
- **TermsOfUsePage** (`/terms-of-use`): noindex, contactData address block
- **AccessibilityPage** (`/accessibility`): noindex, WCAG 2.1 AA commitment statement
- **NotFoundPage** (`/*`): 404 catch-all via React Router wildcard; `usePageTitle('Page Not Found')`; two CTAs (Homepage + Contact)
- **Sitemap**: auto-generated to `dist/sitemap.xml` via `postbuild` npm hook — **27 URLs** (legal/noindex pages excluded)
- **Brand palette** applied across all pages — WCAG 2.1 AA compliant throughout
- **OG image**: copied to `public/og-image.png` for stable absolute URL (bypasses Vite hashing); static fallback defaults in `index.html` for social crawlers; per-page Helmet overrides for Google
- **Preconnect hints**: `maps.googleapis.com` + `maps.gstatic.com` in `index.html`

## Head management

`react-helmet-async` is installed and `<HelmetProvider>` wraps `<App>` in `src/main.tsx`.
Use `<Helmet>` in page components for per-route head tags (robots, canonical, etc.).
Legal pages use `<Helmet><meta name="robots" content="noindex, follow" /></Helmet>`.

### LocalBusiness JSON-LD schema

Injected in `HomePage.tsx` via `<Helmet><script type="application/ld+json">`. Uses `@type: "Dentist"` (Schema.org subtype of LocalBusiness). Data sourced from `contactData` where possible; address fields hardcoded as structured data (display format in `contactData.addressLines` is not machine-parseable). Includes `areaServed` for both Easton and Lehigh Valley. Verify post-deploy with Google's Rich Results Test.

## ScrollToTop — hash navigation

`ScrollToTop` in `App.tsx` watches `{ pathname, hash }` from `useLocation()`.
- **No hash**: `window.scrollTo(0, 0)` — standard scroll-to-top on route change
- **Has hash**: `setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 0)` — defers until React has committed the new route DOM; required because SPA navigation (`history.pushState`) does not trigger the browser's native hash scroll

## Data shape additions

`src/data/contact.ts` — `ContactData` type extended with:
- `insurance: { note: string; carriers: string[] }`
- `payment: { methods: string[]; financingNote: string }`

`src/data/about.ts` — `AboutData` type extended with:
- `faqs: AboutFaq[]` (type: `{ question: string; answer: string }`)

## Sitemap

`scripts/generate-sitemap.js` runs after every build via `"postbuild"` in `package.json`.
- 27 routes indexed. Excludes `/privacy-policy`, `/terms-of-use`, `/accessibility`.
- Production URL hardcoded: `const PRODUCTION_URL = 'https://mwdentalcare.net'`
- Override at build time: `VITE_SITE_URL=https://staging.example.com npm run build`

## Brand palette

See `CLAUDE.md § Brand palette & colour rules` for the full token reference. Key rules:
- **Never use `text-primary` (mint) on any light surface** — contrast fails (~1.5:1 on sage)
- Use `bg-primary` (mint) for button backgrounds and `bg-primary/10–15` for icon containers, with `text-foreground` (dark navy) inside
- Dark CTA sections / bands: `Section variant="dark"` or `bg-brand-dark text-brand-dark-fg`
- Peach accents (`brand-peach`, `brand-peach-soft`): for gradients, portrait placeholders, credential chips — always use dark text on peach
- Cards: use `bg-card` (not `bg-background`) for all elevated surfaces

## Next Tasks

- About page: replace all placeholder content (bio, credentials, testimonials, community, philosophy, tech cards, FAQs) when client provides real copy
- About page: replace initials portrait placeholder with real photo when available
- Contact page: confirm insurance carriers and payment methods with client
- Verify LocalBusiness JSON-LD schema with Google's Rich Results Test after first deploy

## Known Issues

- About page content in `src/data/about.ts` is mostly placeholder — must be replaced before launch
- Contact page insurance/payment data in `src/data/contact.ts` is placeholder — confirm with client
