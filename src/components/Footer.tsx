import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Separator } from '@/components/ui/separator'
import logo from '@/assets/mw-logo-transparent.png'

const navLinks = [
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

const legalLinks = [
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Terms of Use', to: '/terms-of-use' },
  { label: 'Accessibility', to: '/accessibility' },
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
          <nav className="flex items-center gap-2">
            {legalLinks.map((link, i) => (
              <Fragment key={link.label}>
                {i > 0 && (
                  <span aria-hidden="true" className="select-none text-muted-foreground/40">
                    &bull;
                  </span>
                )}
                <Link to={link.to} className="hover:text-foreground transition-colors">
                  {link.label}
                </Link>
              </Fragment>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
