import Contact from '@/components/Contact'
import { contactData } from '@/data/contact'
import { usePageTitle } from '@/hooks/usePageTitle'

export default function ContactPage() {
  usePageTitle('Contact Us')
  return (
    <>
      <Contact headingAs="h1" showMap />

      {/* Spacer so sticky bar doesn't overlap the last section content */}
      <div className="h-24 sm:hidden" aria-hidden="true" />

      {/* Mobile-only sticky call bar */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 border-t bg-background px-4 pt-3 pb-[max(12px,env(safe-area-inset-bottom))]">
        <p className="mb-2 text-center text-xs text-muted-foreground">
          Tap to call and schedule your visit.
        </p>
        <a
          href={contactData.phoneHref}
          aria-label="Call MW Dental Care"
          className="block w-full rounded-lg bg-primary py-3 text-center font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          Call {contactData.phoneDisplay}
        </a>
      </div>
    </>
  )
}
