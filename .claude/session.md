# Current Development Session

## Status

All main pages are built and functional. All known structural issues resolved. Legal/policy pages added with proper SEO treatment. Sitemap generation automated.

## What is complete

- HomePage: Hero (two-column with illustration), Services preview, About preview, Contact info preview; LocalBusiness JSON-LD schema injected via `<Helmet>`
- ServicesPage: category card grid with treatment list previews
- ServiceDetailPage: category view + individual service detail view
- AboutPage: full redesign with 7 sections using Section wrapper pattern
- ContactPage: contact cards, CTA, Google Maps embed, mobile sticky call bar
- Navbar: logo, desktop nav, polished mobile sheet nav — uses real `contactData` phone
- Footer: React Router `<Link to>` nav, logo image brand mark, dot-separated legal links
- PrivacyPolicyPage (`/privacy-policy`): noindex, contactData address block
- TermsOfUsePage (`/terms-of-use`): noindex, contactData address block
- AccessibilityPage (`/accessibility`): noindex, WCAG 2.1 AA commitment statement
- Sitemap: auto-generated to `dist/sitemap.xml` via `postbuild` npm hook
- Brand palette applied across all pages — WCAG 2.1 AA compliant throughout
- Card surfaces refined: `--card` shifted from pure white to warm sage-tinted surface (~#f7f9f2); `<Card>` component gains `shadow-sm`; floating panels converted from `bg-background` to `bg-card` for consistency

## Head management

`react-helmet-async` is installed and `<HelmetProvider>` wraps `<App>` in `src/main.tsx`.
Use `<Helmet>` in page components for per-route head tags (robots, canonical, etc.).
Legal pages use `<Helmet><meta name="robots" content="noindex, follow" /></Helmet>`.

### LocalBusiness JSON-LD schema

Injected in `HomePage.tsx` via `<Helmet><script type="application/ld+json">`. Uses `@type: "Dentist"` (Schema.org subtype of LocalBusiness). Data sourced from `contactData` where possible; address fields hardcoded as structured data (display format in `contactData.addressLines` is not machine-parseable). Includes `areaServed` for both Easton and Lehigh Valley. Verify post-deploy with Google's Rich Results Test.

## Sitemap

`scripts/generate-sitemap.js` runs after every build via `"postbuild"` in `package.json`.
- 26 routes indexed. Excludes `/privacy-policy`, `/terms-of-use`, `/accessibility`.
- Production URL hardcoded: `const PRODUCTION_URL = 'https://mwdentalcare.net'`
- Override at build time: `VITE_SITE_URL=https://staging.example.com npm run build`

## Brand palette

See `CLAUDE.md § Brand palette & colour rules` for the full token reference. Key rules:
- **Never use `text-primary` (mint) on any light surface** — contrast fails (~1.5:1 on sage)
- Use `bg-primary` (mint) for button backgrounds and `bg-primary/10–15` for icon containers, with `text-foreground` (dark navy) inside
- Dark CTA sections / bands: `Section variant="dark"` or `bg-brand-dark text-brand-dark-fg`
- Peach accents (`brand-peach`, `brand-peach-soft`): for gradients, portrait placeholders, credential chips — always use dark text on peach
- Cards: use `bg-card` (not `bg-background`) for all elevated surfaces — `--card` is a warm sage-tinted light surface, not stark white

## Next Tasks

- About page: replace all placeholder content (bio, credentials, testimonials, community, philosophy, tech cards) when client provides real copy
- About page: replace initials portrait placeholder with real photo when available (placeholder now uses peach gradient)
- Consider adding a booking form to Contact page
- ~~Consider applying `Section` wrapper pattern to remaining homepage components for consistency~~ — done: `Services` and `About` converted; `Hero` left as-is (bespoke gradient + overflow-hidden)
- Verify LocalBusiness JSON-LD schema with Google's Rich Results Test after first deploy

## Known Issues

- About page content in `src/data/about.ts` is mostly placeholder — must be replaced before launch
- Contact page has no booking form — info cards + CTA only
