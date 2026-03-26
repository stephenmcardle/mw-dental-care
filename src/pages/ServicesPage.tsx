import { Helmet } from 'react-helmet-async'
import Services from '@/components/Services'
import { usePageTitle } from '@/hooks/usePageTitle'

export default function ServicesPage() {
  usePageTitle('Our Services')
  return (
    <>
      <Helmet>
        <meta name="description" content="Full-service dental care in Easton, PA. Preventive, restorative, cosmetic, and emergency dentistry for patients of all ages at MW Dental Care." />
        <meta property="og:title" content="Our Services | MW Dental Care" />
        <meta property="og:description" content="Full-service dental care in Easton, PA. Preventive, restorative, cosmetic, and emergency dentistry for patients of all ages." />
        <meta property="og:url" content="https://mwdentalcare.net/services" />
        <link rel="canonical" href="https://mwdentalcare.net/services" />
      </Helmet>
      <Services variant="full" />
    </>
  )
}
