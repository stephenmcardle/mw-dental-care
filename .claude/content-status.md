# Content Status

Quick reference for what is real vs placeholder. See `project-context.md` for full detail.

## Real / confirmed

- Practice name: MW Dental Care
- Founded: 2005
- Lead dentist: Dr. Monica Wisniewski
- Logo image: `src/assets/mw-logo-trans.png` (production asset)
- Service categories and treatment names in `src/data/services.ts`
- Contact details in `src/data/contact.ts`: address, phone, email, working hours, Maps link + embed
- Production domain: `mwdentalcare.net` (no `www`)

## Placeholder — must be replaced before launch

| Location | What is placeholder |
|---|---|
| `src/data/about.ts` | Dentist bio, all four credential chips, all three testimonials, community paragraphs, community highlights, philosophy card descriptions, technology card descriptions |
| `src/pages/AboutPage.tsx` | Portrait placeholder block (initials "MW") — replace with `<img>` when photo is available |

## Known structural gaps (not yet built)

- No booking form — Contact page is info-only
- No blog or news section
