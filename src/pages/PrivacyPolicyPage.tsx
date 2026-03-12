import { Section } from '@/components/layout/Section'
import { contactData } from '@/data/contact'
import { Helmet } from 'react-helmet-async'
import { usePageTitle } from '@/hooks/usePageTitle'

export default function PrivacyPolicyPage() {
  usePageTitle('Privacy Policy')

  return (
    <>
    <Helmet>
      <meta name="robots" content="noindex, follow" />
    </Helmet>
    <Section labelledBy="privacy-heading">
      <div className="max-w-3xl mx-auto">
        {/* Page header */}
        <div className="mb-10">
          <h1
            id="privacy-heading"
            className="text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Effective Date: January 1, 2026
          </p>
        </div>

        {/* Body */}
        <div className="space-y-10 text-muted-foreground leading-relaxed">
          {/* Intro */}
          <p>
            MW Dental Care (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or
            &ldquo;us&rdquo;) respects your privacy and is committed to
            protecting any information that may be collected through this
            website. This Privacy Policy explains what information may be
            collected when you visit our website and how it may be used. This
            Privacy Policy applies only to information collected through this
            website and not to information collected offline by our dental
            practice.
          </p>

          <hr className="border-border" />

          {/* Information We Collect */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-foreground">
              Information We Collect
            </h2>

            <div className="space-y-3">
              <h3 className="text-base font-semibold text-foreground">
                Information You Provide
              </h3>
              <p>
                At this time, this website does not include forms or appointment
                scheduling tools that collect personal information directly
                through the website. If you choose to contact our office by
                phone or email, any information you provide will be used solely
                for the purpose of responding to your inquiry or scheduling
                dental services.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-base font-semibold text-foreground">
                Automatically Collected Information
              </h3>
              <p>
                Like most websites, certain technical information may be
                automatically collected when you visit the site. This may
                include:
              </p>
              <ul
                role="list"
                className="list-disc list-inside space-y-1 pl-2"
              >
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Device type</li>
                <li>Pages visited</li>
                <li>Date and time of visit</li>
              </ul>
              <p>
                This information is typically collected through standard web
                server logs or services provided by our hosting platform
                (Cloudflare Pages). This data is used to maintain website
                security, monitor performance, and ensure the site functions
                properly.
              </p>
            </div>
          </div>

          <hr className="border-border" />

          {/* Embedded Content */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-foreground">
              Embedded Content and Third-Party Services
            </h2>

            <div className="space-y-3">
              <h3 className="text-base font-semibold text-foreground">
                Google Maps
              </h3>
              <p>
                Our website may include embedded Google Maps to help visitors
                find our office location. Google may collect information through
                this embedded content, including usage data and cookies, in
                accordance with Google&rsquo;s own privacy policies.
              </p>
              <p>
                You can review Google&rsquo;s privacy practices at:{' '}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground underline underline-offset-2 hover:text-foreground/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:rounded-sm"
                >
                  https://policies.google.com/privacy
                </a>
              </p>
              <p>
                We do not control how Google collects or processes this
                information.
              </p>
            </div>
          </div>

          <hr className="border-border" />

          {/* Cookies */}
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              Cookies and Tracking Technologies
            </h2>
            <p>
              This website currently does not use analytics or advertising
              cookies.
            </p>
            <p>
              However, some third-party services such as embedded maps may use
              cookies to function properly.
            </p>
            <p>
              In the future, we may implement website analytics tools to better
              understand how visitors use the website and improve the user
              experience. If analytics tools are added, this Privacy Policy will
              be updated to describe what information is collected and how it is
              used.
            </p>
          </div>

          <hr className="border-border" />

          {/* How We Use */}
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              How We Use Information
            </h2>
            <p>
              Any information collected through this website may be used to:
            </p>
            <ul role="list" className="list-disc list-inside space-y-1 pl-2">
              <li>Operate and maintain the website</li>
              <li>Improve website performance and usability</li>
              <li>Monitor security and prevent misuse</li>
              <li>Respond to inquiries if you contact our office</li>
            </ul>
            <p>
              We do not sell, rent, or share personal information with third
              parties for marketing purposes.
            </p>
          </div>

          <hr className="border-border" />

          {/* Security */}
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              Data Security
            </h2>
            <p>
              We take reasonable steps to protect the information associated
              with our website. However, no internet transmission or electronic
              storage method can be guaranteed to be completely secure.
            </p>
          </div>

          <hr className="border-border" />

          {/* Children */}
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              Children&rsquo;s Information
            </h2>
            <p>
              This website is not directed toward children under the age of 13.
              We do not knowingly collect personal information from children
              through this website.
            </p>
          </div>

          <hr className="border-border" />

          {/* External links */}
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              Links to Other Websites
            </h2>
            <p>
              Our website may contain links to third-party websites. We are not
              responsible for the privacy practices or content of those external
              sites.
            </p>
          </div>

          <hr className="border-border" />

          {/* Changes */}
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              Changes to This Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time to reflect
              changes in technology, legal requirements, or website
              functionality. Any updates will be posted on this page with an
              updated effective date.
            </p>
          </div>

          <hr className="border-border" />

          {/* Contact */}
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              Contact Us
            </h2>
            <p>
              If you have questions about this Privacy Policy, please contact
              our office:
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
        </div>
      </div>
    </Section>
    </>
  )
}
