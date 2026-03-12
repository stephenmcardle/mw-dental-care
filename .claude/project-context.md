# Project Context

## What this is

A static marketing website for **MW Dental Care**, a dental practice. Founded in 2005 by Dr. Margaret Williams.

**Deployment**: Cloudflare Pages (static, no server-side rendering, no backend).

## Goals

- Professional, premium marketing presence
- Fast loading static site
- Fully responsive, mobile-first
- WCAG 2.1 AA compliant

## Pages

| Route | Status | Notes |
|---|---|---|
| `/` | Complete | Hero, Services preview, About preview, Contact info |
| `/services` | Complete | Category card grid |
| `/services/:slug` | Complete | Category view + individual service view |
| `/about` | Complete | Fully designed with Section wrapper pattern |
| `/contact` | Minimal | Wraps Contact component — no booking form yet |

## Brand

- **Practice name**: MW Dental Care
- **Lead dentist**: Dr. Margaret Williams
- **Founded**: 2005
- **Tone**: calm, professional, modern, family-friendly, premium but understated
- **Accent palette**: sky-50 / sky-100 / sky-600 (used for highlights, cards, chips)
- **Primary colour**: defined in CSS variables via Shadcn theme

## Components known to need attention

- **Footer** (`src/components/Footer.tsx`): nav links still use `<a href="#...">` anchor targets instead of React Router `<Link to>`. Also uses the `Cross` lucide icon as branding instead of the logo image. Needs updating to match Navbar.
- **Contact** (`src/components/Contact.tsx`): functional but all contact details are placeholder (see Placeholder Content section below). No booking form — currently info cards + CTA only.
- **Mobile nav phone number**: `(555) 555-0100` in Navbar — US format placeholder, inconsistent with Contact component which shows a UK number.

## Placeholder content

The following content is **placeholder and must be replaced** before launch. Do not treat it as final or build on top of it assuming accuracy:

### Contact details (in `src/components/Contact.tsx`)
- Address: `123 Smile Street, Brighton, BN1 4AB`
- Phone: `01273 456 789`
- Email: `hello@mwdentalcare.co.uk`
- Opening hours: Mon–Fri 8:30am–6:00pm, Sat 9:00am–2:00pm, Sun Closed

### About page (in `src/data/about.ts`)
- All of `dentist.bio`
- All of `dentist.credentials` (the four chip labels)
- All three testimonials (quotes, author names, roles)
- `community` paragraphs and `communityHighlights` list
- `philosophyCards` descriptions
- `technologyCards` descriptions

### Dentist portrait
- `src/pages/AboutPage.tsx` renders an initials placeholder block ("MW") with text "Dr. Margaret Williams"
- Replace with `<img>` when a real photo is available; the placeholder div has `role="img"` and `aria-label` already set

### Mobile nav
- Phone link `(555) 555-0100` (`href="tel:+15555550100"`) in Navbar footer — replace with real number

### Footer
- Legal links (Privacy Policy, Terms of Use, Cookie Policy) all point to `href="#"` — placeholder targets
