# Project Instructions

Before implementing any changes:

1. Read `architecture.md` — directory structure, routing, data patterns, layout system
2. Read `coding-standards.md` — Tailwind v4 and Shadcn v4 gotchas, accessibility requirements
3. Read `session.md` — current state and known issues
4. Analyse the relevant source files
5. Propose an implementation plan
6. Wait for approval before coding

## Constraints

- Keep dependencies minimal — no new libraries unless clearly necessary
- Prefer editing existing files over creating new ones
- All content text belongs in `src/data/` — never hardcoded in components
- Internal links must use React Router `<Link to>` — never `<a href>`
- Run `npm run build` after every change to verify TypeScript and Vite both pass
