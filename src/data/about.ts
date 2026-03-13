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

export type AboutFaq = {
  question: string
  answer: string
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
  faqs: AboutFaq[]
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

  faqs: [
    {
      question: 'Are you accepting new patients?',
      answer:
        'Yes — we warmly welcome new patients of all ages. Simply call our front desk or send us an email to schedule your first visit. Same-day emergency appointments are also available.',
    },
    {
      question: 'What should I bring to my first appointment?',
      answer:
        'Please bring a valid photo ID, your insurance card, and a list of any current medications or supplements. Arriving 10 minutes early gives us time to complete your intake paperwork.',
    },
    {
      question: 'Do you treat children?',
      answer:
        'Absolutely. We provide family dentistry for patients of all ages, from toddlers to seniors. We take extra care to ensure younger patients feel comfortable and at ease from the very first visit.',
    },
    {
      question: 'What if I have dental anxiety?',
      answer:
        'You are not alone — dental anxiety is very common, and our team is trained to work at your pace. We explain every step before it happens and never rush you. Please mention any concerns when you book and we will plan your visit accordingly.',
    },
    {
      question: 'How often should I come in for a cleaning?',
      answer:
        'Most patients benefit from a professional cleaning and check-up every six months. Depending on your oral health, we may recommend more frequent visits. We will discuss the right schedule for you at your first appointment.',
    },
    {
      question: 'What should I do in a dental emergency?',
      answer:
        'Call our office as soon as possible. We reserve time each day for same-day emergency appointments. If you are experiencing severe pain, significant swelling, or a knocked-out tooth, please call immediately — do not wait.',
    },
  ],
}
