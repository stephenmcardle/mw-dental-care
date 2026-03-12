/**
 * Generates dist/sitemap.xml after the Vite build.
 * Runs automatically as the npm "postbuild" hook.
 *
 * The production domain is hardcoded below as PRODUCTION_URL.
 * Update it here if the domain ever changes.
 *
 * Override at build time via environment variable if needed:
 *   VITE_SITE_URL=https://staging.example.com npm run build
 */

import { writeFileSync, mkdirSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

// ── Domain ───────────────────────────────────────────────────────────────────

// Update this when the production domain is confirmed/changes.
const PRODUCTION_URL = 'https://mwdentalcare.net'

// VITE_SITE_URL overrides the hardcoded value (useful for staging builds).
const siteUrl = process.env.VITE_SITE_URL ?? PRODUCTION_URL

if (process.env.VITE_SITE_URL) {
  console.log(`[sitemap] Using VITE_SITE_URL override: ${siteUrl}`)
} else {
  console.log(`[sitemap] Using hardcoded production URL: ${siteUrl}`)
}

// Strip trailing slash so paths like "/about" don't produce "//about"
const base = siteUrl.replace(/\/$/, '')

// ── Routes to index ──────────────────────────────────────────────────────────
//
// Excluded intentionally (noindex pages):
//   /privacy-policy
//   /terms-of-use
//   /accessibility

const routes = [
  '/',
  '/services',
  '/about',
  '/contact',

  // Service categories
  '/services/preventive-dentistry',
  '/services/cosmetic-dentistry',
  '/services/restorative-dentistry',
  '/services/orthodontics',
  '/services/dental-implants',
  '/services/dental-technology',

  // Individual services
  '/services/cleanings',
  '/services/periodontal-exams',
  '/services/night-guards',
  '/services/veneers',
  '/services/teeth-whitening',
  '/services/crowns',
  '/services/bridges',
  '/services/dentures',
  '/services/fillings',
  '/services/root-canals',
  '/services/extractions',
  '/services/clear-aligners',
  '/services/implant-restoration',
  '/services/digital-x-rays',
  '/services/panoramic-imaging',
  '/services/intraoral-cameras',
]

// ── XML generation ───────────────────────────────────────────────────────────

const urlEntries = routes
  .map((route) => `  <url>\n    <loc>${base}${route}</loc>\n  </url>`)
  .join('\n')

const xml =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  urlEntries + '\n' +
  `</urlset>\n`

// ── Write output ─────────────────────────────────────────────────────────────

const __dirname = dirname(fileURLToPath(import.meta.url))
const outDir = resolve(__dirname, '../dist')
const outFile = resolve(outDir, 'sitemap.xml')

mkdirSync(outDir, { recursive: true })
writeFileSync(outFile, xml, 'utf-8')

console.log(`[sitemap] Written ${routes.length} URLs → dist/sitemap.xml`)
