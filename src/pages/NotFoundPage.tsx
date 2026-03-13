import { Link } from 'react-router-dom'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Section } from '@/components/layout/Section'
import { usePageTitle } from '@/hooks/usePageTitle'

export default function NotFoundPage() {
  usePageTitle('Page Not Found')
  return (
    <Section variant="default" containerClassName="text-center">
      <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-4">
        404
      </p>
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
        Page not found
      </h1>
      <p className="mt-5 text-lg text-muted-foreground max-w-md mx-auto">
        Sorry, we couldn&apos;t find the page you were looking for. It may have
        moved or the link may be incorrect.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Link to="/" className={cn(buttonVariants({ size: 'lg' }))}>
          Go to Homepage
        </Link>
        <Link
          to="/contact"
          className={cn(buttonVariants({ size: 'lg', variant: 'outline' }))}
        >
          Contact Us
        </Link>
      </div>
    </Section>
  )
}
