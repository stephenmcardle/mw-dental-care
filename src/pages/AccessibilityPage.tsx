import { Section } from '@/components/layout/Section'
import { contactData } from '@/data/contact'
import { Helmet } from 'react-helmet-async'
import { usePageTitle } from '@/hooks/usePageTitle'

export default function AccessibilityPage() {
  usePageTitle('Accessibility')

  return (
    <>
    <Helmet>
      <meta name="robots" content="noindex, follow" />
    </Helmet>
    <Section labelledBy="accessibility-heading">
      <div className="max-w-3xl mx-auto">
        {/* Page header */}
        <div className="mb-10">
          <h1
            id="accessibility-heading"
            className="text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Accessibility Statement
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Effective Date: January 1, 2026
          </p>
        </div>

        {/* Body */}
        <div className="space-y-10 text-muted-foreground leading-relaxed">
          {/* Intro */}
          <p>
            MW Dental Care is committed to making our website accessible to all
            visitors, including individuals with disabilities. We strive to
            ensure that our website is usable and accessible to the widest
            possible audience, regardless of technology or ability.
          </p>

          <hr className="border-border" />

          {/* Standards */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">
              Accessibility Standards
            </h2>
            <p>
              We aim to follow recognized accessibility best practices and
              standards, including the{' '}
              <strong className="font-semibold text-foreground">
                Web Content Accessibility Guidelines (WCAG) 2.1 Level AA
              </strong>
              , which provide guidance on making web content more accessible for
              people with disabilities.
            </p>
            <p>Our goal is to ensure that visitors can:</p>
            <ul role="list" className="list-disc list-inside space-y-1 pl-2">
              <li>
                Navigate the website using a keyboard or assistive technologies
              </li>
              <li>Read content using screen readers</li>
              <li>
                Access content with sufficient color contrast and readable text
              </li>
              <li>Use the website on a variety of devices and browsers</li>
            </ul>
          </div>

          <hr className="border-border" />

          {/* Ongoing improvements */}
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              Ongoing Improvements
            </h2>
            <p>
              We understand that accessibility is an ongoing effort. We
              continually review and improve our website to enhance
              accessibility and usability for all visitors.
            </p>
          </div>

          <hr className="border-border" />

          {/* Third-party content */}
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              Third-Party Content
            </h2>
            <p>
              Some pages on our website may include content provided by third
              parties, such as embedded maps or external services. While we
              strive to ensure accessibility wherever possible, we cannot
              guarantee the accessibility of third-party content.
            </p>
          </div>

          <hr className="border-border" />

          {/* Assistance */}
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              Accessibility Assistance
            </h2>
            <p>
              If you experience difficulty accessing any part of this website or
              need assistance obtaining information from our site, please
              contact our office. We will make every reasonable effort to
              provide the information you need in an accessible format.
            </p>
            <address className="not-italic space-y-1 text-sm">
              <p className="font-semibold text-foreground">
                {contactData.practiceName}
              </p>
              <p>{contactData.addressLines[0]}</p>
              <p>{contactData.addressLines[1]}</p>
              <p>
                Phone:{' '}
                <a
                  href={contactData.phoneHref}
                  className="text-foreground underline underline-offset-2 hover:text-foreground/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:rounded-sm"
                >
                  {contactData.phoneDisplay}
                </a>
              </p>
              <p>
                Email:{' '}
                <a
                  href={contactData.emailHref}
                  className="text-foreground underline underline-offset-2 hover:text-foreground/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:rounded-sm"
                >
                  {contactData.emailDisplay}
                </a>
              </p>
            </address>
          </div>

          <hr className="border-border" />

          {/* Feedback */}
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">Feedback</h2>
            <p>
              We welcome feedback on the accessibility of our website. If you
              encounter any barriers or accessibility issues, please let us know
              so we can work to improve the experience for all visitors.
            </p>
          </div>
        </div>
      </div>
    </Section>
    </>
  )
}
