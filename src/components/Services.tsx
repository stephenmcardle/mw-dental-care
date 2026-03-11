import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Sparkles,
  ShieldCheck,
  Scan,
  Smile,
  Syringe,
  AlignCenter,
} from 'lucide-react'

const services = [
  {
    icon: <ShieldCheck className="h-8 w-8 text-sky-500" />,
    title: 'General Dentistry',
    description:
      'Routine check-ups, cleanings, fillings, and preventive care to keep your teeth healthy long-term.',
  },
  {
    icon: <Sparkles className="h-8 w-8 text-yellow-400" />,
    title: 'Teeth Whitening',
    description:
      'Professional in-office whitening treatments that brighten your smile safely and effectively.',
  },
  {
    icon: <AlignCenter className="h-8 w-8 text-violet-500" />,
    title: 'Orthodontics',
    description:
      'Traditional braces and clear aligner options to straighten teeth for children and adults.',
  },
  {
    icon: <Syringe className="h-8 w-8 text-rose-500" />,
    title: 'Dental Implants',
    description:
      'Permanent, natural-looking tooth replacement solutions that restore function and appearance.',
  },
  {
    icon: <Smile className="h-8 w-8 text-emerald-500" />,
    title: 'Cosmetic Dentistry',
    description:
      'Veneers, bonding, and smile makeovers designed to help you love what you see in the mirror.',
  },
  {
    icon: <Scan className="h-8 w-8 text-blue-500" />,
    title: 'Digital X-Rays',
    description:
      'Low-radiation digital imaging for precise diagnosis with faster results and better comfort.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            From routine check-ups to complete smile transformations, we offer
            comprehensive dental care under one roof.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.title}
              className="hover:shadow-md transition-shadow"
            >
              <CardHeader>
                <div className="mb-2">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
