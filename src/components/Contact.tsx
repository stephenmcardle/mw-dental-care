import { useState } from 'react'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Badge } from '@/components/ui/badge'
import { Section } from '@/components/layout/Section'
import { contactData } from '@/data/contact'
import { cn } from '@/lib/utils'

export type ContactVariant = 'preview' | 'full'

type ContactProps = {
  variant?: ContactVariant
}

const iconContainer =
  'flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15'

const cardBase = 'rounded-xl border bg-card shadow-sm'

const clickableCardBase = cn(
  cardBase,
  'block cursor-pointer transition-all',
  'hover:shadow-md hover:bg-muted/40',
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
)

export default function Contact({ variant = 'preview' }: ContactProps) {
  const isFull = variant === 'full'
  const HeadingTag: 'h1' | 'h2' = isFull ? 'h1' : 'h2'
  const [isMapLoaded, setIsMapLoaded] = useState(false)

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
    insurance,
    payment,
  } = contactData

  const cardPad = isFull ? 'p-6' : 'p-5'
  const clickableCard = cn(clickableCardBase, cardPad)
  const staticCard = cn(cardBase, cardPad)

  const cards = (
    <div
      className={cn(
        'grid gap-5',
        isFull ? 'sm:grid-cols-2' : 'sm:grid-cols-2 lg:grid-cols-4',
      )}
    >
      {/* Phone */}
      <a
        href={phoneHref}
        aria-label="Call MW Dental Care"
        className={clickableCard}
      >
        <div className={iconContainer}>
          <Phone className="h-5 w-5 text-foreground" aria-hidden="true" />
        </div>
        <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          Phone
        </p>
        <p className="mt-1 font-medium">{phoneDisplay}</p>
        <p className="text-sm text-muted-foreground">Tap to call</p>
      </a>

      {/* Address */}
      <a
        href={mapsHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Get directions to MW Dental Care (opens in Google Maps)"
        className={clickableCard}
      >
        <div className={iconContainer}>
          <MapPin className="h-5 w-5 text-foreground" aria-hidden="true" />
        </div>
        <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          Address
        </p>
        <p className="mt-1 font-medium leading-snug">{addressLines[0]}</p>
        <p className="text-sm text-muted-foreground">{addressLines[1]}</p>
      </a>

      {/* Email */}
      <a
        href={emailHref}
        aria-label="Email MW Dental Care"
        className={clickableCard}
      >
        <div className={iconContainer}>
          <Mail className="h-5 w-5 text-foreground" aria-hidden="true" />
        </div>
        <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          Email
        </p>
        <p className="mt-1 font-medium wrap-break-word">{emailDisplay}</p>
        <p className="text-sm text-muted-foreground">We reply promptly</p>
      </a>

      {/* Working Hours — static, non-clickable */}
      <div className={staticCard}>
        <div className={iconContainer}>
          <Clock className="h-5 w-5 text-foreground" aria-hidden="true" />
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
                  value === 'Closed' ? 'text-muted-foreground/60' : 'font-medium',
                )}
              >
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )

  const sectionIntro = (
    <div className="mb-10 text-center">
      <Badge variant="outline" className="mb-4">Get in Touch</Badge>
      <HeadingTag
        id="contact-heading"
        className="text-3xl font-bold tracking-tight sm:text-4xl"
      >
        Contact &amp; Working Hours
      </HeadingTag>
      <p className="mt-3 text-muted-foreground max-w-xl mx-auto leading-relaxed">
        Ready to book? Give us a call, drop us an email, or pop in — we would
        love to welcome you to our practice.
      </p>
    </div>
  )

  // ── Full variant ────────────────────────────────────────────────────────────
  if (isFull) {
    return (
      <>
        <Section variant="muted" id="contact" labelledBy="contact-heading">
          {sectionIntro}

          <div className="grid gap-8 lg:grid-cols-2 lg:items-start">

            {/* ── Left column: contact info + insurance + payment ── */}
            <div className="flex flex-col gap-6">
              {cards}

              {/* Insurance + Payment — reference info, no card treatment */}
              <div className="border-t pt-6 flex flex-col gap-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-3">
                    Insurance Accepted
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {insurance.note}
                  </p>
                  <ul role="list" aria-label="Accepted insurance plans" className="flex flex-wrap gap-2">
                    {insurance.carriers.map((carrier) => (
                      <li
                        key={carrier}
                        className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-medium text-foreground ring-1 ring-inset ring-foreground/10"
                      >
                        {carrier}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-3">
                    Payment Methods
                  </p>
                  <ul role="list" aria-label="Accepted payment methods" className="flex flex-wrap gap-2 mb-4">
                    {payment.methods.map((method) => (
                      <li
                        key={method}
                        className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-medium text-foreground ring-1 ring-inset ring-foreground/10"
                      >
                        {method}
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {payment.financingNote}
                  </p>
                </div>
              </div>

              {/* FAQ pointer */}
              <p className="text-sm text-muted-foreground">
                Have a question about your first visit?{' '}
                <Link
                  to="/about#faq"
                  className="font-medium text-foreground underline underline-offset-2 hover:text-foreground/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:rounded-sm"
                >
                  See our FAQ
                </Link>{' '}
                or call us at{' '}
                <a
                  href={phoneHref}
                  className="font-medium text-foreground underline underline-offset-2 hover:text-foreground/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:rounded-sm"
                >
                  {phoneDisplay}
                </a>.
              </p>
            </div>

            {/* ── Right column: CTA + map (sticky on desktop) ── */}
            <div className="flex flex-col gap-6 lg:sticky lg:top-24">

              {/* CTA block */}
              <div className="rounded-2xl bg-brand-dark text-brand-dark-fg text-center py-10 px-6">
                <h2 className="text-2xl font-bold">{ctaHeading}</h2>
                <p className="mt-3 text-brand-dark-fg/80 leading-relaxed">
                  Call us at{' '}
                  <a
                    href={phoneHref}
                    className="font-semibold text-brand-dark-fg underline underline-offset-2 hover:text-brand-dark-fg/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-dark-fg focus-visible:rounded-sm"
                  >
                    {phoneDisplay}
                  </a>{' '}
                  or email us and we&apos;ll confirm your appointment as soon as
                  possible.
                </p>
                <p className="mt-1.5 text-sm text-brand-dark-fg/60">
                  Most appointment requests are confirmed within one working day.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={phoneHref}
                    className="inline-block rounded-md bg-background text-foreground font-semibold px-6 py-3 hover:bg-background/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark"
                  >
                    {ctaPrimaryLabel}
                  </a>
                  <a
                    href={mapsHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-brand-dark-fg/80 underline underline-offset-2 hover:text-brand-dark-fg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-dark-fg focus-visible:rounded-sm"
                  >
                    Get directions &rarr;
                  </a>
                </div>
              </div>

              {/* Map embed */}
              <div className="relative overflow-hidden rounded-2xl border h-64 sm:h-80">
                <div
                  className={cn(
                    'absolute inset-0 flex flex-col items-center justify-center gap-2 bg-muted',
                    'transition-opacity duration-500 pointer-events-none',
                    isMapLoaded ? 'opacity-0' : 'opacity-100',
                  )}
                  aria-hidden="true"
                >
                  <MapPin className="h-6 w-6 text-muted-foreground/40" aria-hidden="true" />
                  <p className="text-xs text-muted-foreground/60">Loading map…</p>
                </div>
                <iframe
                  src={mapsEmbedSrc}
                  title="Map showing the location of MW Dental Care"
                  className={cn(
                    'absolute inset-0 w-full h-full block transition-opacity duration-500',
                    isMapLoaded ? 'opacity-100' : 'opacity-0',
                  )}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  onLoad={() => setIsMapLoaded(true)}
                />
              </div>
            </div>
          </div>

          {/* Spacer so sticky bar does not overlap the last content on mobile */}
          <div className="h-24 sm:hidden" aria-hidden="true" />
        </Section>

        {/* Mobile-only sticky call bar */}
        <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 border-t bg-background px-4 pt-3 pb-[max(12px,env(safe-area-inset-bottom))]">
          <p className="mb-2 text-center text-xs text-muted-foreground">
            Tap to call and schedule your visit.
          </p>
          <a
            href={phoneHref}
            aria-label="Call MW Dental Care"
            className="block w-full rounded-lg bg-primary py-3 text-center font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            Call {phoneDisplay}
          </a>
        </div>
      </>
    )
  }

  // ── Preview variant ─────────────────────────────────────────────────────────
  return (
    <Section variant="muted" id="contact" labelledBy="contact-heading">
      {sectionIntro}
      {cards}

      {/* Compact CTA strip */}
      <div className="mt-8 rounded-xl border bg-card px-6 py-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">
          Ready to book or have a question?
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={phoneHref}
            className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            {ctaPrimaryLabel}
          </a>
          <a
            href={mapsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium underline underline-offset-2 hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:rounded-sm"
          >
            Get Directions
          </a>
          <Link
            to="/contact"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:rounded-sm"
          >
            View Full Contact Details &rarr;
          </Link>
        </div>
      </div>
    </Section>
  )
}
