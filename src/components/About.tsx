import { Link } from 'react-router-dom'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Section } from '@/components/layout/Section'
import { aboutData } from '@/data/about'

export default function About() {
  return (
    <Section variant="muted" id="about" labelledBy="about-heading">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          {/* Left: intro text + CTA */}
          <div>
            <Badge variant="outline" className="mb-4">
              About Us
            </Badge>
            <h2 id="about-heading" className="text-3xl font-bold tracking-tight sm:text-4xl">
              {aboutData.introTitle}
            </h2>
            {aboutData.introText.map((paragraph, i) => (
              <p key={i} className="mt-4 text-muted-foreground leading-relaxed">
                {paragraph}
              </p>
            ))}
            <Link
              to="/about"
              className={cn(buttonVariants({ variant: 'outline' }), 'mt-8')}
            >
              Learn More About Our Practice
            </Link>
          </div>

          {/* Right: stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {aboutData.stats.map((stat) => (
              <Card key={stat.label}>
                <CardContent className="p-6 text-center">
                  <p className="text-3xl font-bold">{stat.value}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
    </Section>
  )
}
