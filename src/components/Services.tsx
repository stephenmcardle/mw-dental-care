import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Section } from '@/components/layout/Section'
import { SectionHeader } from '@/components/layout/SectionHeader'
import { categories } from '@/data/services'

export default function Services() {
  return (
    <Section variant="muted" id="services" labelledBy="services-heading">
      <SectionHeader
        id="services-heading"
        title="Our Services"
        description="From preventive care to advanced smile restoration, we provide comprehensive dental services for patients of all ages."
        align="center"
      />

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
    </Section>
  )
}
