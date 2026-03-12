export type AboutStats = {
  label: string
  value: string
}

export type TeamMember = {
  name: string
  role: string
  bio: string
  image?: string
}

export type AboutTestimonial = {
  quote: string
  author?: string
  role?: string
}

export type PhilosophyCard = {
  title: string
  description: string
}

export type TechnologyCard = {
  title: string
  description: string
}

export type AboutData = {
  introTitle: string
  introText: string[]
  stats: AboutStats[]
  dentist: {
    name: string
    title: string
    bio: string
    education?: string
    credentials?: string[]
  }
  philosophyIntro: string
  philosophyCards: PhilosophyCard[]
  technologyIntro: string
  technologyCards: TechnologyCard[]
  community: string[]
  communityHighlights: string[]
  testimonials: AboutTestimonial[]
}

export const aboutData: AboutData = {
  introTitle: 'A Practice Built on Trust & Excellence',

  introText: [
    'Founded in 2005 by Dr. Monica Wisniewski, MW Dental Care has been the go-to dental home for families across the region. Our team of board-certified dentists and hygienists is dedicated to providing gentle, high-quality care in a welcoming environment.',
    'We invest in the latest dental technology — from digital X-rays to 3D imaging — so that every diagnosis is precise and every treatment is as comfortable as possible. Your health and confidence are our top priorities.',
  ],

  stats: [
    { value: '20+', label: 'Years Serving Our Community' },
    { value: '8,000+', label: 'Patients Treated' },
    { value: '15+', label: 'Professional Recognitions' },
    { value: '4.9 ★', label: 'Average Patient Rating' },
  ],

  dentist: {
    name: 'Dr. Monica Wisniewski',
    title: 'Founder & Lead Dentist',
    bio: "Dr. Wisniewski founded MW Dental Care with the goal of creating a dental practice where patients feel heard, comfortable, and confident in their care. With decades of experience in family, cosmetic, and restorative dentistry, she focuses on personalised treatment plans designed around each patient's needs and long-term oral health.",
    credentials: [
      'Board-Certified General Dentist',
      'Fellow, Academy of General Dentistry',
      'CEREC Certified Provider',
      'Invisalign Preferred Provider',
    ],
  },

  philosophyIntro:
    'Everything we do starts with listening — understanding your concerns, your goals, and your comfort level before we ever recommend a treatment.',

  philosophyCards: [
    {
      title: 'Compassionate Care',
      description:
        'We create a calm, judgment-free environment where every patient feels heard, respected, and genuinely cared for — from the first phone call to the final appointment.',
    },
    {
      title: 'Personalised Treatment',
      description:
        "No two smiles are the same. We design treatment plans around each patient's individual needs, preferences, and long-term goals — never a one-size-fits-all approach.",
    },
    {
      title: 'Evidence-Based Dentistry',
      description:
        'Our clinical decisions are grounded in the latest research and best practices, ensuring safe, predictable outcomes for patients of all ages.',
    },
  ],

  technologyIntro:
    'Modern tools allow us to diagnose more accurately, treat more comfortably, and share findings with you in real time — so you always know exactly what is happening with your oral health.',

  technologyCards: [
    {
      title: 'Digital X-Rays',
      description:
        'Low-radiation digital imaging delivers instant, high-resolution diagnostic images — up to 90% less radiation than traditional film, with significantly better clarity.',
    },
    {
      title: 'Panoramic Imaging',
      description:
        'A single panoramic scan captures your full jaw, teeth, and bone structure, giving us a complete picture that guides more accurate diagnosis and treatment planning.',
    },
    {
      title: 'Intraoral Cameras',
      description:
        'Small, comfortable camera wands let you see exactly what we see on screen — making treatment decisions transparent, informed, and collaborative.',
    },
  ],

  community: [
    'MW Dental Care is proud to serve families throughout the region. Beyond the clinic, we are actively involved in local schools, community health initiatives, and educational outreach programmes.',
    'We believe access to good dental care is a community issue, not just a personal one — and we work to make that a reality for the families we serve.',
  ],

  communityHighlights: [
    'School dental health education visits',
    'Community health fairs and free screening events',
    'Partnerships with regional nonprofits',
    'Flexible scheduling for working families',
    'Accepting most major insurance plans',
  ],

  testimonials: [
    {
      quote:
        'The team made me feel completely at ease. I used to dread the dentist and now I actually look forward to my visits.',
      author: 'Sarah M.',
      role: 'Patient since 2018',
    },
    {
      quote:
        'Dr. Wisniewski explained every step of my treatment clearly and never rushed. My kids love coming here too.',
      author: 'James L.',
      role: 'Family Dentistry Patient',
    },
    {
      quote:
        'Genuinely the best dental experience I have had. The technology is impressive and the staff is incredibly warm.',
      author: 'Priya K.',
      role: 'Cosmetic Dentistry Patient',
    },
  ],
}
