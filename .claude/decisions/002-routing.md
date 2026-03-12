# Decision 002: Routing

Decision: React Router v7 with BrowserRouter and clean URLs, with Cloudflare SPA fallback

Reason:
- Clean URLs (`/about`, `/services/preventive-dentistry`) rather than hash routing (`/#/about`)
- Cloudflare Pages handles unknown paths: `not_found_handling: "single-page-application"` in `wrangler.jsonc` serves `index.html` for all routes, React Router resolves client-side
- No need for server-side rendering or static pre-rendering per route — the whole site builds to a single `index.html`

## Slug collision fix

`/services/:slug` matches both category slugs and individual service slugs. The router checks categories first; if no match, it checks services. This created a collision: a service was originally also named `dental-implants` (same as the category). The service was renamed to `implant-placement` to resolve this — the category `/services/dental-implants` always resolves to the category view.

## Route → component map

```
/                     → HomePage (Hero, Services, About preview, Contact)
/services             → ServicesPage
/services/:slug       → ServiceDetailPage
  slug = category     → CategoryView (list of treatments)
  slug = service      → ServiceView (treatment detail)
  slug = unknown      → NotFound
/about                → AboutPage
/contact              → ContactPage
```
