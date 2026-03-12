import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { categories, getServicesForCategory } from '@/data/services'
import { usePageTitle } from '@/hooks/usePageTitle'

export default function ServicesPage() {
  usePageTitle('Our Services')
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight">Our Services</h1>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Comprehensive dental care for every stage of life.
          </p>
        </header>

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
      </div>
    </div>
  )
}
