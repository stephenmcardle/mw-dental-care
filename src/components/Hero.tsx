import { Link } from 'react-router-dom'
import { buttonVariants } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { CheckCircle } from 'lucide-react'
import heroImage from '@/assets/hero-image.png'

const highlights = [
  'Accepting new patients',
  'Same-day emergency appointments',
  'Family-friendly practice',
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-brand-peach-soft to-background py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">

          {/* Left: text content */}
          <div>
            <Badge variant="secondary" className="mb-4">
              Serving Easton &amp; the Lehigh Valley Since 2005
            </Badge>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Healthy Smiles for the Whole Family
            </h1>

            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              At MW Dental Care we combine modern technology with compassionate
              treatment to give you and your family the confident smile you deserve.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact" className={cn(buttonVariants({ size: 'lg' }))}>
                Book an Appointment
              </Link>
              <Link to="/services" className={cn(buttonVariants({ size: 'lg', variant: 'outline' }))}>
                Our Services
              </Link>
            </div>

            <ul
              role="list"
              className="mt-10 flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-2"
            >
              {highlights.map((h) => (
                <li key={h} className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 shrink-0 text-foreground" aria-hidden="true" />
                  {h}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: illustration */}
          <div className="flex items-center justify-center">
            <img
              src={heroImage}
              alt="A dentist reviews treatment options with a patient using a digital screen"
              width={1536}
              height={1024}
              className="w-full rounded-2xl shadow-md"
            />
          </div>

        </div>
      </div>
    </section>
  )
}
