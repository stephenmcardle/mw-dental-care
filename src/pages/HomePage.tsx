import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import Contact from '@/components/Contact'
import { usePageTitle } from '@/hooks/usePageTitle'

export default function HomePage() {
  usePageTitle()
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Contact />
    </>
  )
}
