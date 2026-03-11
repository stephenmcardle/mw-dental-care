import { Link } from 'react-router-dom'
import { buttonVariants } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { CheckCircle } from 'lucide-react'

const highlights = [
  'Accepting new patients',
  'Same-day emergency appointments',
  'Family-friendly practice',
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-sky-50 to-background py-24 md:py-36">
      <div className="container mx-auto px-4 text-center">
        <Badge variant="secondary" className="mb-4">
          Trusted Dental Care Since 2005
        </Badge>

        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Healthy Smiles for the{' '}
          <span className="text-primary">Whole Family</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          At MW Dental Care we combine modern technology with compassionate
          treatment to give you and your family the confident smile you deserve.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link to="/contact" className={cn(buttonVariants({ size: 'lg' }))}>
            Book an Appointment
          </Link>
          <Link to="/services" className={cn(buttonVariants({ size: 'lg', variant: 'outline' }))}>
            Our Services
          </Link>
        </div>

        <ul className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-muted-foreground">
          {highlights.map((h) => (
            <li key={h} className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              {h}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
