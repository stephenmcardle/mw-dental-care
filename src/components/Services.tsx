import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Section } from '@/components/layout/Section'
import { categories, getServicesForCategory } from '@/data/services'
import { buttonVariants } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

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

  // preview variant — centered intro with floating clickable service tags
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
        <ul
          role="list"
          aria-label="Service categories"
          className="mt-10 flex flex-wrap justify-center gap-2"
        >
          {categories.map((category) => (
            <li key={category.slug}>
              <Link
                to={category.href}
                className="inline-block rounded-full border border-border/60 bg-card px-4 py-2 text-sm font-normal text-foreground transition-colors hover:bg-primary/10 hover:border-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                {category.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-5">
          <Link to="/services" className={cn(buttonVariants({ size: 'lg' }))}>
            View All Services
          </Link>
        </div>
      </div>
    </Section>
  )
}
