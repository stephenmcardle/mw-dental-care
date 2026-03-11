import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Award, Users, CalendarDays, Star } from 'lucide-react'

const stats = [
  { icon: <CalendarDays className="h-5 w-5" />, value: '20+', label: 'Years of Experience' },
  { icon: <Users className="h-5 w-5" />, value: '8,000+', label: 'Happy Patients' },
  { icon: <Award className="h-5 w-5" />, value: '15+', label: 'Awards & Recognitions' },
  { icon: <Star className="h-5 w-5" />, value: '4.9', label: 'Average Rating' },
]

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          {/* Text */}
          <div>
            <Badge variant="outline" className="mb-4">
              About Us
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              A Practice Built on Trust & Excellence
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Founded in 2005 by Dr. Margaret Williams, MW Dental Care has been
              the go-to dental home for families across the region. Our team of
              board-certified dentists and hygienists is dedicated to providing
              gentle, high-quality care in a welcoming environment.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We invest in the latest dental technology — from digital X-rays to
              3D imaging — so that every diagnosis is precise and every treatment
              is as comfortable as possible. Your health and confidence are our
              top priorities.
            </p>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border bg-card p-6 text-center shadow-sm"
              >
                <div className="flex justify-center text-primary mb-2">
                  {stat.icon}
                </div>
                <p className="text-3xl font-bold">{stat.value}</p>
                <Separator className="my-2" />
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
