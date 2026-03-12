import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Button, buttonVariants } from '@/components/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'
import logo from '@/assets/mw-logo-transparent.png'
import { contactData } from '@/data/contact'

const links = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="MW Dental Care" className="h-9 w-auto" />
        </Link>

        {/* Desktop nav — unchanged */}
        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                cn(
                  'text-sm font-medium transition-colors',
                  isActive
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground',
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link to="/contact" className={cn(buttonVariants({ size: 'sm' }))}>
            Book Appointment
          </Link>
        </nav>

        {/* Mobile nav */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="md:hidden"
            render={<Button variant="ghost" size="icon" aria-label="Open menu" />}
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </SheetTrigger>

          <SheetContent
            side="right"
            className="w-72 gap-0 p-0"
            showCloseButton={false}
          >
            {/* ── Panel header ───────────────────────────────── */}
            <div className="flex items-center justify-between border-b px-5 py-4">
              <div>
                <SheetTitle className="text-sm font-semibold">
                  MW Dental Care
                </SheetTitle>
                <SheetDescription className="text-xs mt-0.5">
                  Family &amp; Cosmetic Dentistry
                </SheetDescription>
              </div>
              <SheetClose
                render={
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    aria-label="Close menu"
                    className="-mr-1 shrink-0"
                  />
                }
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </SheetClose>
            </div>

            {/* ── Nav links ──────────────────────────────────── */}
            <nav
              aria-label="Mobile navigation"
              className="flex-1 overflow-y-auto px-4 py-4"
            >
              <ul role="list" className="space-y-1">
                {links.map((link) => (
                  <li key={link.to}>
                    <NavLink
                      to={link.to}
                      end={link.to === '/'}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        cn(
                          'flex items-center rounded-lg px-3 py-3 text-base font-medium transition-colors',
                          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                          isActive
                            ? 'bg-primary/10 text-foreground'
                            : 'text-muted-foreground hover:bg-muted hover:text-foreground',
                        )
                      }
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            {/* ── CTA / action area ──────────────────────────── */}
            <SheetFooter className="border-t px-5 py-5 gap-3">
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className={cn(buttonVariants({ size: 'lg' }), 'w-full')}
              >
                Book Appointment
              </Link>
              <a
                href={contactData.phoneHref}
                className={cn(
                  'block text-center text-sm text-muted-foreground',
                  'hover:text-foreground transition-colors',
                  'rounded-md py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                )}
              >
                {contactData.phoneDisplay}
              </a>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
