import { Helmet } from 'react-helmet-async'
import Contact from '@/components/Contact'
import { usePageTitle } from '@/hooks/usePageTitle'

export default function ContactPage() {
  usePageTitle('Contact Us')
  return (
    <>
      <Helmet>
        <meta name="description" content="Contact MW Dental Care in Easton, PA. Call (610) 258-6116, view our hours, or get directions. Accepting new patients with same-day emergency appointments." />
        <meta property="og:title" content="Contact Us | MW Dental Care" />
        <meta property="og:description" content="Contact MW Dental Care in Easton, PA. Call (610) 258-6116, view our hours, or get directions. Accepting new patients with same-day emergency appointments." />
        <meta property="og:url" content="https://mwdentalcare.net/contact" />
        <link rel="canonical" href="https://mwdentalcare.net/contact" />
      </Helmet>
      <Contact variant="full" />
    </>
  )
}
