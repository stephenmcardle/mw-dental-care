# Decision 001: Framework Choice

Decision: React + Vite (not Next.js or Remix)

Reason:
- The site is a fully static marketing site with no server-side rendering requirements
- No dynamic data fetching, no authentication, no API routes
- Vite produces a simple `dist/` folder that deploys directly to Cloudflare Pages
- Next.js would add unnecessary complexity (SSR, file-based routing, edge functions) for a site that has no need for any of it
- Cloudflare Pages handles SPA routing via `wrangler.jsonc` — no server needed

CSS: Tailwind CSS v4 (not v3). Using `@tailwindcss/vite` plugin. No config file.
UI: Shadcn v4 with `@base-ui/react` (not Radix UI). Initialised with `npx shadcn@latest init`.
