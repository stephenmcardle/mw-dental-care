import { Helmet } from 'react-helmet-async'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import Contact from '@/components/Contact'
import { usePageTitle } from '@/hooks/usePageTitle'
import { contactData } from '@/data/contact'

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: contactData.practiceName,
  url: 'https://mwdentalcare.net',
  telephone: contactData.phoneHref.replace('tel:', ''),
  email: contactData.emailHref.replace('mailto:', ''),
  address: {
    '@type': 'PostalAddress',
    streetAddress: '3413 Sullivan Trail',
    addressLocality: 'Easton',
    addressRegion: 'PA',
    postalCode: '18040',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 40.7388,
    longitude: -75.2397,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      opens: '08:30',
      closes: '17:00',
    },
  ],
  areaServed: [
    { '@type': 'City', name: 'Easton', containedInPlace: { '@type': 'State', name: 'Pennsylvania' } },
    { '@type': 'City', name: 'Lehigh Valley', containedInPlace: { '@type': 'State', name: 'Pennsylvania' } },
  ],
}

export default function HomePage() {
  usePageTitle()
  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>
      <Hero />
      <Services />
      <About />
      <Contact variant="preview" />
    </>
  )
}
