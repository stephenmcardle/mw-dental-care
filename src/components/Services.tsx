import { useLayoutEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Section } from '@/components/layout/Section'
import { categories, getServicesForCategory } from '@/data/services'
import { buttonVariants } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

/** Renders category names separated by bullets, suppressing bullets at line breaks. */
function ServiceCategoryList() {
  const ref = useRef<HTMLParagraphElement>(null)
  const [lineFirstSlugs, setLineFirstSlugs] = useState<Set<string>>(new Set())

  useLayoutEffect(() => {
    const container = ref.current
    if (!container) return

    function update() {
      const el = ref.current
      if (!el) return
      const children = Array.from(el.children) as HTMLElement[]
      const firstOnLine = new Set<string>()
      let prevTop: number | null = null
      for (const child of children) {
        const top = Math.round(child.getBoundingClientRect().top)
        if (top !== prevTop) {
          const slug = child.dataset.slug
          if (slug) firstOnLine.add(slug)
          prevTop = top
        }
      }
      setLineFirstSlugs(firstOnLine)
    }

    update()
    const ro = new ResizeObserver(update)
    ro.observe(container)
    return () => ro.disconnect()
  }, [])

  return (
    <p ref={ref} className="mt-3 text-sm text-muted-foreground/70 flex flex-wrap justify-center gap-y-1">
      {categories.map((c, i) => (
        <span key={c.slug} data-slug={c.slug} className="whitespace-nowrap">
          {i > 0 && !lineFirstSlugs.has(c.slug) && (
            <span className="mx-1.5" aria-hidden="true">&bull;</span>
          )}
          {c.title}
        </span>
      ))}
    </p>
  )
}

type ServicesVariant = 'preview' | 'full'

type ServicesProps = {
  variant?: ServicesVariant
}

export default function Services({ variant = 'preview' }: ServicesProps) {
  if (variant === 'full') {
    return (
      <Section variant="muted" id="services" labelledBy="services-heading">
        <div className="mb-14 mx-auto max-w-2xl text-center">
          <h1
            id="services-heading"
            className="text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Our Services
          </h1>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            From preventive care to advanced smile restoration, we provide comprehensive
            dental services for patients of all ages.
          </p>
        </div>

        <ul role="list" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => {
            const Icon = category.icon
            const treatments = getServicesForCategory(category.slug)
            return (
              <li key={category.slug}>
                <Link
                  to={category.href}
                  className="group flex flex-col h-full rounded-lg border bg-card p-6 transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <Icon
                    className={`h-7 w-7 mb-3 ${category.iconClass}`}
                    aria-hidden="true"
                  />
                  <h2 className="font-semibold text-lg mb-2">{category.title}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {category.description}
                  </p>
                  {treatments.length > 0 && (
                    <ul
                      role="list"
                      aria-label={`Treatments in ${category.title}`}
                      className="space-y-1.5 mb-5"
                    >
                      {treatments.slice(0, 4).map((service) => (
                        <li
                          key={service.slug}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <span
                            className="h-1 w-1 rounded-full bg-muted-foreground/50 shrink-0"
                            aria-hidden="true"
                          />
                          {service.title}
                        </li>
                      ))}
                      {treatments.length > 4 && (
                        <li className="text-sm text-muted-foreground/70 pl-3">
                          + {treatments.length - 4} more
                        </li>
                      )}
                    </ul>
                  )}
                  <span
                    className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-foreground"
                    aria-hidden="true"
                  >
                    View treatments
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>
      </Section>
    )
  }

  // preview variant — text-only, no cards
  return (
    <Section variant="default" id="services" labelledBy="services-heading">
      <div className="max-w-2xl mx-auto text-center">
        <Badge variant="outline" className="mb-4">Our Services</Badge>
        <h2
          id="services-heading"
          className="text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Comprehensive Care for Healthy, Confident Smiles
        </h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          From preventive care to advanced smile restoration, we provide comprehensive
          dental services for patients of all ages.
        </p>
        <ServiceCategoryList />
        <div className="mt-8">
          <Link to="/services" className={cn(buttonVariants({ size: 'lg' }))}>
            View All Services
          </Link>
        </div>
      </div>
    </Section>
  )
}
