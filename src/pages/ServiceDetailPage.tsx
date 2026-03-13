import { Helmet } from 'react-helmet-async'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, CheckCircle, ChevronRight } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'
import {
  getCategoryBySlug,
  getServiceBySlug,
  getServicesForCategory,
  getRelatedServices,
  type ServiceCategory,
  type ServiceDetail,
} from '@/data/services'
import { usePageTitle } from '@/hooks/usePageTitle'

// ─── Breadcrumb ───────────────────────────────────────────────────────────────

function Breadcrumb({ crumbs }: { crumbs: { label: string; to?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
        {crumbs.map((crumb, i) => {
          const isLast = i === crumbs.length - 1
          return (
            <li key={crumb.label} className="flex items-center gap-1.5">
              {i > 0 && (
                <ChevronRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              )}
              {crumb.to && !isLast ? (
                <Link
                  to={crumb.to}
                  className="hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span
                  className={isLast ? 'text-foreground font-medium' : undefined}
                  aria-current={isLast ? 'page' : undefined}
                >
                  {crumb.label}
                </span>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

// ─── Category view ────────────────────────────────────────────────────────────

function CategoryView({ category }: { category: ServiceCategory }) {
  usePageTitle(category.title)
  const Icon = category.icon
  const treatments = getServicesForCategory(category.slug)

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <Helmet>
        <meta name="description" content={`${category.description} — MW Dental Care, Easton PA.`} />
        <meta property="og:title" content={`${category.title} | MW Dental Care`} />
        <meta property="og:description" content={`${category.description} — MW Dental Care, Easton PA.`} />
        <meta property="og:url" content={`https://mwdentalcare.net/services/${category.slug}`} />
        <link rel="canonical" href={`https://mwdentalcare.net/services/${category.slug}`} />
      </Helmet>
      <Breadcrumb
        crumbs={[
          { label: 'All Services', to: '/services' },
          { label: category.title },
        ]}
      />

      <div className="flex items-center gap-4 mb-4">
        <Icon
          className={`h-10 w-10 shrink-0 ${category.iconClass}`}
          aria-hidden="true"
        />
        <h1 className="text-4xl font-bold tracking-tight">{category.title}</h1>
      </div>

      <p className="mt-2 text-lg text-muted-foreground leading-relaxed max-w-2xl mb-12">
        {category.description}
      </p>

      {treatments.length > 0 && (
        <section aria-labelledby="treatments-heading">
          <h2 id="treatments-heading" className="text-xl font-semibold mb-4">
            Treatments
          </h2>
          <ul role="list" className="grid gap-4 sm:grid-cols-2">
            {treatments.map((service) => (
              <li key={service.slug}>
                <Link
                  to={`/services/${service.slug}`}
                  className="flex flex-col h-full rounded-lg border bg-card p-5 transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <h3 className="font-semibold mb-1">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.shortDescription}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  )
}

// ─── Service detail view ──────────────────────────────────────────────────────

function ServiceView({ service }: { service: ServiceDetail }) {
  usePageTitle(service.title)
  const category = getCategoryBySlug(service.categorySlug)
  const related = service.relatedServiceSlugs
    ? getRelatedServices(service.relatedServiceSlugs)
    : []

  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <Helmet>
        <meta name="description" content={`${service.shortDescription} — MW Dental Care, Easton PA.`} />
        <meta property="og:title" content={`${service.title} | MW Dental Care`} />
        <meta property="og:description" content={`${service.shortDescription} — MW Dental Care, Easton PA.`} />
        <meta property="og:url" content={`https://mwdentalcare.net/services/${service.slug}`} />
        <link rel="canonical" href={`https://mwdentalcare.net/services/${service.slug}`} />
      </Helmet>
      <Breadcrumb
        crumbs={[
          { label: 'All Services', to: '/services' },
          ...(category
            ? [{ label: category.title, to: category.href }]
            : []),
          { label: service.title },
        ]}
      />

      <h1 className="text-4xl font-bold tracking-tight">{service.title}</h1>
      <p className="mt-2 text-lg text-muted-foreground">{service.shortDescription}</p>

      <Separator className="my-8" />

      <p className="text-base leading-relaxed">{service.intro}</p>

      {service.benefits && service.benefits.length > 0 && (
        <section className="mt-10" aria-labelledby="benefits-heading">
          <h2 id="benefits-heading" className="text-xl font-semibold mb-4">
            Benefits
          </h2>
          <ul role="list" className="space-y-3">
            {service.benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3">
                <CheckCircle
                  className="h-5 w-5 text-green-600 mt-0.5 shrink-0"
                  aria-hidden="true"
                />
                <span className="text-sm leading-relaxed">{benefit}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {service.steps && service.steps.length > 0 && (
        <section className="mt-10" aria-labelledby="steps-heading">
          <h2 id="steps-heading" className="text-xl font-semibold mb-4">
            What to Expect
          </h2>
          <ol className="space-y-3">
            {service.steps.map((step, i) => (
              <li key={step} className="flex items-start gap-3">
                <span
                  className="shrink-0 h-6 w-6 rounded-full bg-primary/15 text-foreground text-xs font-bold flex items-center justify-center mt-0.5"
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <span className="text-sm leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
        </section>
      )}

      {service.faqs && service.faqs.length > 0 && (
        <section className="mt-10" aria-labelledby="faq-heading">
          <h2 id="faq-heading" className="text-xl font-semibold mb-4">
            Common Questions
          </h2>
          <dl className="space-y-6">
            {service.faqs.map((faq) => (
              <div key={faq.question}>
                <dt className="font-medium mb-1">{faq.question}</dt>
                <dd className="text-sm text-muted-foreground leading-relaxed">
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      )}

      {related.length > 0 && (
        <section className="mt-12" aria-labelledby="related-heading">
          <Separator className="mb-8" />
          <h2 id="related-heading" className="text-xl font-semibold mb-4">
            Related Treatments
          </h2>
          <ul role="list" className="grid gap-4 sm:grid-cols-2">
            {related.map((rel) => (
              <li key={rel.slug}>
                <Link
                  to={`/services/${rel.slug}`}
                  className="flex flex-col rounded-lg border bg-card p-4 transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <span className="font-medium text-sm">{rel.title}</span>
                  <span className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    {rel.shortDescription}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <Separator className="my-10" />

      <div className="text-center">
        <p className="text-muted-foreground mb-4">
          Ready to book or have more questions?
        </p>
        <Link to="/#contact" className={cn(buttonVariants({ size: 'lg' }))}>
          Contact Us
        </Link>
      </div>
    </div>
  )
}

// ─── Not found ────────────────────────────────────────────────────────────────

function NotFound() {
  usePageTitle('Service Not Found')
  return (
    <div className="container mx-auto px-4 py-24 text-center">
      <h1 className="text-3xl font-bold mb-3">Page not found</h1>
      <p className="text-muted-foreground mb-8">
        The service or treatment you are looking for could not be found.
      </p>
      <Link
        to="/services"
        className={cn(buttonVariants({ variant: 'outline' }))}
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Back to Services
      </Link>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>()

  if (!slug) return <NotFound />

  const category = getCategoryBySlug(slug)
  if (category) return <CategoryView category={category} />

  const service = getServiceBySlug(slug)
  if (service) return <ServiceView service={service} />

  return <NotFound />
}
