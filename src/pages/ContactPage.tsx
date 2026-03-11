import Contact from '@/components/Contact'
import { usePageTitle } from '@/hooks/usePageTitle'

export default function ContactPage() {
  usePageTitle('Contact Us')
  return (
    <div className="py-8">
      <Contact />
    </div>
  )
}
