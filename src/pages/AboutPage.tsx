import { Link } from 'react-router-dom'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { aboutData } from '@/data/about'
import {
  Heart,
  UserCheck,
  BookOpen,
  Scan,
  ScanLine,
  Camera,
  CheckCircle,
} from 'lucide-react'

const philosophyIcons = [Heart, UserCheck, BookOpen]
const technologyIcons = [Scan, ScanLine, Camera]

export default function AboutPage() {
  return (
    <div>
      {/* ── 1. INTRO / HERO ────────────────────────────────────── */}
      <section
        aria-labelledby="about-intro-heading"
        className="bg-linear-to-b from-sky-50 to-background py-24"
      >
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
            {/* Left: badge + heading + paragraphs */}
            <div>
              <Badge variant="secondary" className="mb-4">
                About Us
              </Badge>
              <h1
                id="about-intro-heading"
                className="text-4xl font-bold tracking-tight sm:text-5xl"
              >
                {aboutData.introTitle}
              </h1>
              {aboutData.introText.map((paragraph, i) => (
                <p key={i} className="mt-5 text-lg text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Right: 2×2 stat cards */}
            <div className="grid grid-cols-2 gap-4">
              {aboutData.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border bg-background px-6 py-8 text-center shadow-sm"
                >
                  <p className="text-4xl font-bold tracking-tight">{stat.value}</p>
                  <p className="mt-2 text-sm text-muted-foreground leading-snug">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. MEET THE DENTIST ────────────────────────────────── */}
      <section
        aria-labelledby="dentist-heading"
        className="bg-muted/40 py-24"
      >
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
            {/* Left: portrait placeholder */}
            <div
              className="rounded-2xl bg-linear-to-br from-sky-50 to-sky-100 border border-sky-200 aspect-4/5 flex flex-col items-center justify-center gap-4"
              role="img"
              aria-label="Portrait photo of Dr. Margaret Williams — coming soon"
            >
              <div className="h-24 w-24 rounded-full bg-white shadow-sm flex items-center justify-center">
                <span className="text-2xl font-semibold text-sky-600" aria-hidden="true">
                  MW
                </span>
              </div>
              <span className="text-sm text-sky-700/60 font-medium">
                Dr. Margaret Williams
              </span>
            </div>

            {/* Right: info */}
            <div>
              <Badge variant="secondary" className="mb-4">
                Meet the Team
              </Badge>
              <h2
                id="dentist-heading"
                className="text-3xl font-bold tracking-tight sm:text-4xl"
              >
                {aboutData.dentist.name}
              </h2>
              <p className="mt-1 text-primary font-medium">{aboutData.dentist.title}</p>
              <Separator className="my-5" />
              <p className="text-muted-foreground leading-relaxed">{aboutData.dentist.bio}</p>

              {/* Credential chips */}
              {aboutData.dentist.credentials && (
                <ul
                  role="list"
                  aria-label="Professional credentials"
                  className="mt-6 flex flex-wrap gap-2"
                >
                  {aboutData.dentist.credentials.map((credential) => (
                    <li
                      key={credential}
                      className="inline-flex items-center rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700 ring-1 ring-inset ring-sky-700/20"
                    >
                      {credential}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. PHILOSOPHY ─────────────────────────────────────── */}
      <section
        aria-labelledby="philosophy-heading"
        className="bg-background py-24"
      >
        <div className="container mx-auto px-4">
          {/* Section intro */}
          <div className="mx-auto max-w-2xl text-center mb-14">
            <Badge variant="secondary" className="mb-4">
              Our Values
            </Badge>
            <h2
              id="philosophy-heading"
              className="text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Our Philosophy
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              {aboutData.philosophyIntro}
            </p>
          </div>

          {/* Value cards */}
          <ul
            role="list"
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {aboutData.philosophyCards.map((card, i) => {
              const Icon = philosophyIcons[i]
              return (
                <li key={card.title}>
                  <Card className="h-full">
                    <CardContent className="p-7">
                      <div
                        className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50"
                        aria-hidden="true"
                      >
                        <Icon className="h-5 w-5 text-sky-600" aria-hidden="true" />
                      </div>
                      <h3 className="text-base font-semibold">{card.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                        {card.description}
                      </p>
                    </CardContent>
                  </Card>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      {/* ── 4. TECHNOLOGY ─────────────────────────────────────── */}
      <section
        aria-labelledby="technology-heading"
        className="bg-muted/40 py-24"
      >
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-start">
            {/* Left: heading + intro */}
            <div className="md:sticky md:top-28">
              <Badge variant="secondary" className="mb-4">
                How We Work
              </Badge>
              <h2
                id="technology-heading"
                className="text-3xl font-bold tracking-tight sm:text-4xl"
              >
                Modern Technology,{' '}
                <span className="text-primary">Comfortable Care</span>
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                {aboutData.technologyIntro}
              </p>
            </div>

            {/* Right: feature rows */}
            <ul role="list" className="space-y-4">
              {aboutData.technologyCards.map((card, i) => {
                const Icon = technologyIcons[i]
                return (
                  <li key={card.title}>
                    <div className="flex items-start gap-4 rounded-2xl border bg-background p-5 shadow-sm">
                      <div
                        className="shrink-0 rounded-lg bg-sky-50 p-2.5"
                        aria-hidden="true"
                      >
                        <Icon className="h-5 w-5 text-sky-600" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{card.title}</h3>
                        <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* ── 5. COMMUNITY ──────────────────────────────────────── */}
      <section
        aria-labelledby="community-heading"
        className="bg-background py-24"
      >
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
            {/* Left: text */}
            <div>
              <Badge variant="secondary" className="mb-4">
                Community
              </Badge>
              <h2
                id="community-heading"
                className="text-3xl font-bold tracking-tight sm:text-4xl"
              >
                Rooted in Our Community
              </h2>
              {aboutData.community.map((paragraph, i) => (
                <p key={i} className="mt-5 text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Right: callout card */}
            <Card className="border-sky-200 bg-sky-50/60">
              <CardContent className="p-8">
                <p className="text-lg font-semibold text-sky-900">
                  Serving local families since 2005
                </p>
                <Separator className="my-5 bg-sky-200" />
                <ul role="list" className="space-y-3">
                  {aboutData.communityHighlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3">
                      <CheckCircle
                        className="mt-0.5 h-4 w-4 shrink-0 text-sky-600"
                        aria-hidden="true"
                      />
                      <span className="text-sm text-sky-900/80">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ── 6. TESTIMONIALS ───────────────────────────────────── */}
      <section
        aria-labelledby="testimonials-heading"
        className="bg-muted/40 py-24"
      >
        <div className="container mx-auto px-4">
          {/* Section intro */}
          <div className="mx-auto max-w-xl text-center mb-14">
            <Badge variant="secondary" className="mb-4">
              Patient Stories
            </Badge>
            <h2
              id="testimonials-heading"
              className="text-3xl font-bold tracking-tight sm:text-4xl"
            >
              What Our Patients Say
            </h2>
          </div>

          <ul
            role="list"
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {aboutData.testimonials.map((testimonial, i) => (
              <li key={i}>
                <Card className="h-full">
                  <CardContent className="flex h-full flex-col p-7">
                    {/* Decorative quote mark */}
                    <span
                      className="mb-4 block text-5xl leading-none text-primary/20 font-serif select-none"
                      aria-hidden="true"
                    >
                      &ldquo;
                    </span>
                    <blockquote className="flex-1 text-muted-foreground leading-relaxed">
                      {testimonial.quote}
                    </blockquote>
                    {(testimonial.author || testimonial.role) && (
                      <footer className="mt-6 border-t pt-5">
                        {testimonial.author && (
                          <p className="text-sm font-semibold">{testimonial.author}</p>
                        )}
                        {testimonial.role && (
                          <p className="text-xs text-muted-foreground mt-0.5">
                            {testimonial.role}
                          </p>
                        )}
                      </footer>
                    )}
                  </CardContent>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 7. CTA ────────────────────────────────────────────── */}
      <section
        aria-labelledby="cta-heading"
        className="bg-primary text-primary-foreground py-24"
      >
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary-foreground/60 mb-4">
            Get Started Today
          </p>
          <h2
            id="cta-heading"
            className="text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Ready to Experience Comfortable Dentistry?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/75 max-w-xl mx-auto">
            Schedule your visit with MW Dental Care today. New patients welcome — same-day
            emergency appointments available.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className={cn(buttonVariants({ variant: 'secondary', size: 'lg' }))}
            >
              Book Appointment
            </Link>
            <Link
              to="/services"
              className={cn(
                buttonVariants({ size: 'lg' }),
                'bg-transparent border border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10',
              )}
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
