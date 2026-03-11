import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const info = [
  {
    icon: <MapPin className="h-5 w-5 text-primary" />,
    label: 'Address',
    lines: ['123 Smile Street', 'Brighton, BN1 4AB'],
  },
  {
    icon: <Phone className="h-5 w-5 text-primary" />,
    label: 'Phone',
    lines: ['01273 456 789'],
  },
  {
    icon: <Mail className="h-5 w-5 text-primary" />,
    label: 'Email',
    lines: ['hello@mwdentalcare.co.uk'],
  },
  {
    icon: <Clock className="h-5 w-5 text-primary" />,
    label: 'Opening Hours',
    lines: [
      'Mon – Fri: 8:30am – 6:00pm',
      'Saturday: 9:00am – 2:00pm',
      'Sunday: Closed',
    ],
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            Get in Touch
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Contact & Opening Hours
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Ready to book? Give us a call, drop us an email, or pop in — we
            would love to welcome you to our practice.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
          {info.map((item) => (
            <Card key={item.label} className="text-center">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-3">{item.icon}</div>
                <p className="font-semibold mb-1">{item.label}</p>
                {item.lines.map((line) => (
                  <p key={line} className="text-sm text-muted-foreground">
                    {line}
                  </p>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA banner */}
        <div className="mt-12 rounded-2xl bg-primary text-primary-foreground text-center py-10 px-6 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold">Ready to Book?</h3>
          <p className="mt-2 text-primary-foreground/80">
            Call us on <span className="font-semibold">01273 456 789</span> or
            email us and we'll confirm your appointment within 24 hours.
          </p>
          <a
            href="tel:01273456789"
            className="mt-6 inline-block rounded-md bg-background text-foreground font-semibold px-6 py-3 hover:bg-background/90 transition-colors"
          >
            Call Now
          </a>
        </div>
      </div>
    </section>
  )
}
