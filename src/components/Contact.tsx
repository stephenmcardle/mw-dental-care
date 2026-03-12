import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { Section } from '@/components/layout/Section'
import { contactData } from '@/data/contact'
import { cn } from '@/lib/utils'

type ContactProps = {
  /** Render the section heading as h1 (contact page) or h2 (homepage). Default: h2 */
  headingAs?: 'h1' | 'h2'
  /** Show the Google Maps embed. Default: false */
  showMap?: boolean
}

const iconContainer =
  'flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10'

const cardBase = 'rounded-xl border bg-card p-6 shadow-sm'

const clickableCard = cn(
  cardBase,
  'block cursor-pointer transition-all',
  'hover:shadow-md hover:bg-muted/40',
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
)

export default function Contact({ headingAs = 'h2', showMap = false }: ContactProps) {
  const Heading = headingAs
  const {
    addressLines,
    phoneDisplay,
    phoneHref,
    emailDisplay,
    emailHref,
    workingHours,
    mapsHref,
    mapsEmbedSrc,
    ctaHeading,
    ctaPrimaryLabel,
  } = contactData

  return (
    <Section variant="muted" id="contact" labelledBy="contact-heading">
      {/* Section header */}
      <div className="mb-12 text-center">
        <span className="inline-flex items-center rounded-full border bg-background px-3 py-1 text-xs font-medium text-muted-foreground mb-4">
          Get in Touch
        </span>
        <Heading
          id="contact-heading"
          className="text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Contact &amp; Working Hours
        </Heading>
        <p className="mt-3 text-muted-foreground max-w-xl mx-auto leading-relaxed">
          Ready to book? Give us a call, drop us an email, or pop in — we
          would love to welcome you to our practice.
        </p>
      </div>

      {/* Cards — 1 col mobile, 2 col tablet+. Order: Phone, Address, Email, Hours */}
      <div className="grid gap-5 sm:grid-cols-2 max-w-3xl mx-auto">

        {/* Phone — tel link */}
        <a
          href={phoneHref}
          aria-label="Call MW Dental Care"
          className={clickableCard}
        >
          <div className={iconContainer}>
            <Phone className="h-5 w-5 text-primary" aria-hidden="true" />
          </div>
          <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Phone
          </p>
          <p className="mt-1 font-medium">{phoneDisplay}</p>
          <p className="text-sm text-muted-foreground">Tap to call</p>
        </a>

        {/* Address — links to Google Maps */}
        <a
          href={mapsHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Get directions to MW Dental Care (opens in Google Maps)"
          className={clickableCard}
        >
          <div className={iconContainer}>
            <MapPin className="h-5 w-5 text-primary" aria-hidden="true" />
          </div>
          <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Address
          </p>
          <p className="mt-1 font-medium leading-snug">{addressLines[0]}</p>
          <p className="text-sm text-muted-foreground">{addressLines[1]}</p>
        </a>

        {/* Email — mailto link */}
        <a
          href={emailHref}
          aria-label="Email MW Dental Care"
          className={clickableCard}
        >
          <div className={iconContainer}>
            <Mail className="h-5 w-5 text-primary" aria-hidden="true" />
          </div>
          <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Email
          </p>
          <p className="mt-1 font-medium wrap-break-word">{emailDisplay}</p>
          <p className="text-sm text-muted-foreground">We reply promptly</p>
        </a>

        {/* Working Hours — static, non-clickable */}
        <div className={cardBase}>
          <div className={iconContainer}>
            <Clock className="h-5 w-5 text-primary" aria-hidden="true" />
          </div>
          <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Working Hours
          </p>
          <dl className="mt-2 space-y-1.5 text-sm">
            {workingHours.map(({ label, value }) => (
              <div key={label} className="flex justify-between gap-3">
                <dt className="text-muted-foreground">{label}</dt>
                <dd
                  className={cn(
                    'tabular-nums',
                    value === 'Closed'
                      ? 'text-muted-foreground/60'
                      : 'font-medium',
                  )}
                >
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* CTA banner */}
      <div className="mt-12 rounded-2xl bg-primary text-primary-foreground text-center py-10 px-6 max-w-2xl mx-auto">
        <h3 className="text-2xl font-bold">{ctaHeading}</h3>
        <p className="mt-3 text-primary-foreground/80 leading-relaxed">
          Call us at{' '}
          <a
            href={phoneHref}
            className="font-semibold text-primary-foreground underline underline-offset-2 hover:text-primary-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:rounded-sm"
          >
            {phoneDisplay}
          </a>{' '}
          or email us and we&apos;ll confirm your appointment as soon as possible.
        </p>
        <p className="mt-1.5 text-sm text-primary-foreground/60">
          Most appointment requests are confirmed within one working day.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={phoneHref}
            className="inline-block rounded-md bg-background text-foreground font-semibold px-6 py-3 hover:bg-background/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
          >
            {ctaPrimaryLabel}
          </a>
          <a
            href={mapsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-primary-foreground/80 underline underline-offset-2 hover:text-primary-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:rounded-sm"
          >
            Get directions &rarr;
          </a>
        </div>
      </div>

      {/* Map embed — below CTA, contact page only */}
      {showMap && (
        <div className="mt-10 max-w-3xl mx-auto overflow-hidden rounded-2xl border shadow-sm">
          <iframe
            src={mapsEmbedSrc}
            title="Map showing the location of MW Dental Care"
            className="w-full h-64 sm:h-80 block"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      )}
    </Section>
  )
}
