import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Section } from '@/components/layout/Section'
import { SectionHeader } from '@/components/layout/SectionHeader'
import { aboutData } from '@/data/about'
import { usePageTitle } from '@/hooks/usePageTitle'
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
  usePageTitle('About Us')
  return (
    <div>
      <Helmet>
        <meta name="description" content="Get to know MW Dental Care — a patient-first dental practice in Easton, PA serving the Lehigh Valley since 2005. Modern technology, compassionate care." />
        <meta property="og:title" content="About Us | MW Dental Care" />
        <meta property="og:description" content="Get to know MW Dental Care — a patient-first dental practice in Easton, PA serving the Lehigh Valley since 2005. Modern technology, compassionate care." />
        <meta property="og:url" content="https://mwdentalcare.net/about" />
        <link rel="canonical" href="https://mwdentalcare.net/about" />
      </Helmet>

      {/* ── 1. INTRO / HERO ────────────────────────────────────── */}
      <Section variant="accent" labelledBy="about-intro-heading">
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
                className="rounded-2xl border bg-card px-6 py-8 text-center shadow-sm"
              >
                <p className="text-4xl font-bold tracking-tight">{stat.value}</p>
                <p className="mt-2 text-sm text-muted-foreground leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── 2. MEET THE DENTIST ────────────────────────────────── */}
      <Section variant="muted" labelledBy="dentist-heading">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
          {/* Left: portrait placeholder */}
          <div
            className="rounded-2xl bg-linear-to-br from-brand-peach-soft to-brand-peach border border-brand-peach/40 aspect-4/5 flex flex-col items-center justify-center gap-4"
            role="img"
            aria-label="Portrait photo of Dr. Monica Wisniewski — coming soon"
          >
            <div className="h-24 w-24 rounded-full bg-white shadow-sm flex items-center justify-center">
              <span className="text-2xl font-semibold text-foreground" aria-hidden="true">
                MW
              </span>
            </div>
            <span className="text-sm text-muted-foreground font-medium">
              Dr. Monica Wisniewski
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
            <p className="mt-1 font-medium text-muted-foreground">{aboutData.dentist.title}</p>
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
                    className="inline-flex items-center rounded-full bg-brand-peach/30 px-3 py-1 text-xs font-medium text-foreground ring-1 ring-inset ring-foreground/15"
                  >
                    {credential}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </Section>

      {/* ── 3. PHILOSOPHY ─────────────────────────────────────── */}
      <Section variant="default" labelledBy="philosophy-heading">
        <SectionHeader
          id="philosophy-heading"
          eyebrow="Our Values"
          title="Our Philosophy"
          description={aboutData.philosophyIntro}
          align="center"
        />

        <ul role="list" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {aboutData.philosophyCards.map((card, i) => {
            const Icon = philosophyIcons[i]
            return (
              <li key={card.title}>
                <Card className="h-full">
                  <CardContent className="p-7">
                    <div
                      className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10"
                      aria-hidden="true"
                    >
                      <Icon className="h-5 w-5 text-foreground" aria-hidden="true" />
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
      </Section>

      {/* ── 4. TECHNOLOGY ─────────────────────────────────────── */}
      <Section variant="muted" labelledBy="technology-heading">
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
              Comfortable Care
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
                  <div className="flex items-start gap-4 rounded-2xl border bg-card p-5 shadow-sm">
                    <div
                      className="shrink-0 rounded-lg bg-primary/10 p-2.5"
                      aria-hidden="true"
                    >
                      <Icon className="h-5 w-5 text-foreground" aria-hidden="true" />
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
      </Section>

      {/* ── 5. COMMUNITY ──────────────────────────────────────── */}
      <Section variant="default" labelledBy="community-heading">
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
          <Card className="border-brand-peach/40 bg-brand-peach/20">
            <CardContent className="p-8">
              <p className="text-lg font-semibold text-foreground">
                Serving local families since 2005
              </p>
              <Separator className="my-5" />
              <ul role="list" className="space-y-3">
                {aboutData.communityHighlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3">
                    <CheckCircle
                      className="mt-0.5 h-4 w-4 shrink-0 text-foreground"
                      aria-hidden="true"
                    />
                    <span className="text-sm text-foreground/80">{highlight}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* ── 6. TESTIMONIALS ───────────────────────────────────── */}
      <Section variant="muted" labelledBy="testimonials-heading">
        <SectionHeader
          id="testimonials-heading"
          eyebrow="Patient Stories"
          title="What Our Patients Say"
          align="center"
          className="max-w-xl"
        />

        <ul role="list" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {aboutData.testimonials.map((testimonial, i) => (
            <li key={i}>
              <Card className="h-full">
                <CardContent className="flex h-full flex-col p-7">
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
      </Section>

      {/* ── 7. CTA ────────────────────────────────────────────── */}
      <Section variant="dark" labelledBy="cta-heading" containerClassName="text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-brand-dark-fg/60 mb-4">
          Get Started Today
        </p>
        <h2
          id="cta-heading"
          className="text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Ready to Experience Comfortable Dentistry?
        </h2>
        <p className="mt-4 text-lg text-brand-dark-fg/75 max-w-xl mx-auto">
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
              'bg-transparent border border-brand-dark-fg/40 text-brand-dark-fg hover:bg-brand-dark-fg/10',
            )}
          >
            View Our Services
          </Link>
        </div>
      </Section>
    </div>
  )
}
