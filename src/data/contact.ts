export type WorkingHoursItem = {
  label: string
  value: string
}

export type ContactData = {
  practiceName: string
  addressLines: string[]
  phoneDisplay: string
  phoneHref: string
  emailDisplay: string
  emailHref: string
  workingHours: WorkingHoursItem[]
  mapsHref: string
  mapsEmbedSrc: string
  ctaHeading: string
  ctaPrimaryLabel: string
}

export const contactData: ContactData = {
  practiceName: 'MW Dental Care',
  addressLines: ['3413 Sullivan Trail', 'Easton, PA 18040'],
  phoneDisplay: '(610) 258-6116',
  phoneHref: 'tel:+16102586116',
  emailDisplay: 'frontdesk@mwdentalcare.net',
  emailHref: 'mailto:frontdesk@mwdentalcare.net',
  workingHours: [
    { label: 'Mon – Thu', value: '8:30am – 5:00pm' },
    { label: 'Fri – Sun', value: 'Closed' },
  ],
  mapsHref: 'https://maps.app.goo.gl/SFhajFkLiuX9KkfY7',
  mapsEmbedSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.056209195576!2d-75.23974882397302!3d40.73878867138957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c46fa59e427bf1%3A0x37c5dfba5890521f!2sMW%20Dental%20Care!5e0!3m2!1sen!2sus!4v1773283457835!5m2!1sen!2sus',
  ctaHeading: 'Ready to Book?',
  ctaPrimaryLabel: 'Call Now',
}
