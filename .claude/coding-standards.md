# Coding Standards

## TypeScript

- No `any` — ever
- Prefer explicit types on exported functions and data structures
- Use `type` imports where possible (`import type { Foo }`)

## Tailwind v4 specifics

This project uses Tailwind CSS v4, which differs from v3:

- CSS entry point uses `@import "tailwindcss"` — there is no `tailwind.config.ts`
- Use canonical class names — the linter will warn on deprecated aliases:
  - `shrink-0` not `flex-shrink-0`
  - `aspect-4/5` not `aspect-[4/5]`
  - `grow` not `flex-grow`
- Opacity modifiers work as expected: `bg-primary/10`, `text-muted-foreground/70`
- Arbitrary values still work: `max-w-[42rem]`

## Shadcn v4 / base-ui specifics

This project uses Shadcn UI v4 built on `@base-ui/react`, NOT Radix UI. This is a critical difference:

**There is no `asChild` prop.** Use the `render` prop instead:

```tsx
// ❌ Wrong — asChild does not exist
<SheetTrigger asChild>
  <Button>Open</Button>
</SheetTrigger>

// ✅ Correct — use render prop
<SheetTrigger render={<Button aria-label="Open menu" />}>
  Menu
</SheetTrigger>
```

**Styling links as buttons**: use `buttonVariants()` helper, not `asChild`:

```tsx
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

// ✅ Correct
<Link to="/contact" className={cn(buttonVariants({ size: 'lg' }))}>
  Book Appointment
</Link>
```

## Lucide icons

- `Cross` is the medical cross icon (used in Footer currently)
- `Tooth` does not exist in this version of lucide-react
- Always add `aria-hidden="true"` to decorative icons
- Store icon component references (not JSX) in data files: `icon: LucideIcon`

## Component patterns

- **Never hardcode content text in components** — all text goes in `src/data/` files
- **Never use `<a href>` for internal navigation** — use React Router `<Link to>`
- Use `Section` wrapper for every page-level band (see architecture.md)
- Use `usePageTitle` in every page component

## Accessibility (WCAG 2.1 AA)

Every page must have:
- Single `<h1>`, then `<h2>` / `<h3>` in order — never skip levels
- `aria-labelledby` on `<section>` elements referencing the section's heading id
- `aria-hidden="true"` on decorative icons and images
- `role="list"` on `<ul>` elements that have list styling removed
- `focus-visible:ring-2 focus-visible:ring-ring` on all interactive elements
- Sufficient colour contrast — do not use muted text on muted backgrounds
- Touch targets ≥ 44px — use `py-3 px-3` minimum on interactive elements

## File organisation

- Feature components in `src/components/`
- Layout primitives in `src/components/layout/`
- Shadcn UI components in `src/components/ui/` — do not edit these manually
- All data/content in `src/data/`
- Custom hooks in `src/hooks/`
- One page component per route in `src/pages/`

## Build verification

Always run `npm run build` after changes. It runs both `tsc -b` and `vite build`, catching TypeScript errors and Tailwind class issues together.
