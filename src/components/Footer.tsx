import { Link } from 'react-router-dom'
import { Separator } from '@/components/ui/separator'
import logo from '@/assets/mw-logo-transparent.png'

const navLinks = [
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

const legalLinks = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Use', href: '#' },
  { label: 'Cookie Policy', href: '#' },
]

export default function Footer() {
  return (
    <footer className="border-t bg-background py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Brand */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="MW Dental Care" className="h-8 w-auto" />
          </Link>

          {/* Nav links */}
          <nav className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <Separator className="my-6" />

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} MW Dental Care. All rights reserved.</p>
          <nav className="flex gap-4">
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
