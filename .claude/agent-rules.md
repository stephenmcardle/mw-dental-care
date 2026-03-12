# Agent Rules

## General

1. Prefer editing existing files over creating new ones
2. Avoid unnecessary dependencies — check if existing libraries cover the need first
3. Follow Tailwind utility-first approach
4. Run `npm run build` after every change

## Content

5. Never hardcode content text in components — add to the relevant `src/data/` file first
6. Never use `<a href>` for internal navigation — use React Router `<Link to>`

## Shadcn / base-ui

7. Never use `asChild` — it does not exist in this project's version of Shadcn (v4 / base-ui). Use the `render` prop instead
8. Never import from `@radix-ui` — this project uses `@base-ui/react`
9. To style a `<Link>` as a button, use `className={cn(buttonVariants({ ... }))}` — never wrap in a Button component

## Layout

10. Use `<Section>` from `@/components/layout/Section` for every new page-level band
11. Match `labelledBy` on `<Section>` to the `id` on the section's heading
12. Use `<SectionHeader>` for centred eyebrow + heading + description blocks — do not duplicate that pattern inline

## Accessibility

13. Every page must have exactly one `<h1>`
14. Add `aria-hidden="true"` to every decorative icon
15. Add `role="list"` to `<ul>` elements with list styling removed
16. Every interactive element needs a visible `focus-visible:ring-2 focus-visible:ring-ring` state

## Tailwind

17. Use canonical Tailwind v4 class names — `shrink-0` not `flex-shrink-0`, `aspect-4/5` not `aspect-[4/5]`
18. There is no `tailwind.config.ts` in this project — do not create one
