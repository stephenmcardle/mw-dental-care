import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { categories } from '@/data/services'

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 bg-muted/40"
      aria-labelledby="services-heading"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2
            id="services-heading"
            className="text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Our Services
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            From preventive care to advanced smile restoration, we provide
            comprehensive dental services for patients of all ages.
          </p>
        </div>

        <ul
          role="list"
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <li key={category.slug}>
                <Link
                  to={category.href}
                  className="group flex flex-col h-full rounded-lg border bg-card p-6 transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <Icon
                    className={`h-8 w-8 mb-3 ${category.iconClass}`}
                    aria-hidden="true"
                  />
                  <h3 className="font-semibold text-base mb-2">
                    {category.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {category.shortDescription}
                  </p>
                  <span
                    className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-foreground"
                    aria-hidden="true"
                  >
                    Learn more
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
