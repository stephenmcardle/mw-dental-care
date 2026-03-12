import { Section } from '@/components/layout/Section'
import { contactData } from '@/data/contact'
import { Helmet } from 'react-helmet-async'
import { usePageTitle } from '@/hooks/usePageTitle'

export default function TermsOfUsePage() {
  usePageTitle('Terms of Use')

  return (
    <>
    <Helmet>
      <meta name="robots" content="noindex, follow" />
    </Helmet>
    <Section labelledBy="terms-heading">
      <div className="max-w-3xl mx-auto">
        {/* Page header */}
        <div className="mb-10">
          <h1
            id="terms-heading"
            className="text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Terms of Use
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Effective Date: January 1, 2026
          </p>
        </div>

        {/* Body */}
        <div className="space-y-10 text-muted-foreground leading-relaxed">
          {/* Intro */}
          <p>
            Welcome to the MW Dental Care website. By accessing or using this
            website, you agree to the following terms and conditions. If you do
            not agree with these Terms of Use, please do not use this website.
          </p>

          <hr className="border-border" />

          {/* Website Purpose */}
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              Website Purpose
            </h2>
            <p>
              The content provided on this website is intended for general
              informational purposes only. It is designed to provide information
              about our dental practice, services, and general oral health
              topics.
            </p>
            <p>
              Information on this website should not be considered medical or
              dental advice and should not replace consultation with a qualified
              dental professional.
            </p>
          </div>

          <hr className="border-border" />

          {/* No Doctor–Patient Relationship */}
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              No Doctor&ndash;Patient Relationship
            </h2>
            <p>
              Use of this website, including sending emails or contacting the
              office through information provided on the site, does not
              establish a dentist&ndash;patient relationship.
            </p>
            <p>
              A dentist&ndash;patient relationship is only established after an
              appointment has been scheduled and you have been seen by a member
              of our dental team.
            </p>
          </div>

          <hr className="border-border" />

          {/* Accuracy */}
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              Accuracy of Information
            </h2>
            <p>
              We strive to ensure that the information on this website is
              accurate and up to date. However, we make no guarantees regarding
              the completeness, accuracy, or reliability of any information
              presented on this site.
            </p>
            <p>
              Dental recommendations and treatments may vary depending on
              individual circumstances. You should always consult directly with
              a dental professional regarding your specific needs.
            </p>
          </div>

          <hr className="border-border" />

          {/* Limitation of Liability */}
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              Limitation of Liability
            </h2>
            <p>
              MW Dental Care is not responsible for any damages or losses that
              may arise from the use of this website or reliance on any
              information provided on the website.
            </p>
            <p>All use of the website is at your own risk.</p>
          </div>

          <hr className="border-border" />

          {/* External Links */}
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              External Links
            </h2>
            <p>
              This website may include links to external websites or third-party
              services, such as Google Maps. These websites are not controlled
              by MW Dental Care, and we are not responsible for their content,
              privacy practices, or policies.
            </p>
          </div>

          <hr className="border-border" />

          {/* Intellectual Property */}
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              Intellectual Property
            </h2>
            <p>
              All content on this website, including text, images, logos,
              graphics, and design elements, is the property of MW Dental Care
              unless otherwise noted.
            </p>
            <p>
              Content may not be copied, reproduced, distributed, or used
              without prior written permission from MW Dental Care.
            </p>
          </div>

          <hr className="border-border" />

          {/* Website Availability */}
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              Website Availability
            </h2>
            <p>
              We make reasonable efforts to keep this website available and
              functioning properly. However, we do not guarantee uninterrupted
              access and may update, modify, or remove content at any time
              without notice.
            </p>
          </div>

          <hr className="border-border" />

          {/* Changes */}
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              Changes to These Terms
            </h2>
            <p>
              MW Dental Care may update these Terms of Use from time to time.
              Any updates will be posted on this page with an updated effective
              date.
            </p>
          </div>

          <hr className="border-border" />

          {/* Contact */}
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              Contact Information
            </h2>
            <p>
              If you have any questions about these Terms of Use, please contact
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
