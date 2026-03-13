import type { LucideIcon } from 'lucide-react'
import { Gem, Pin, Scan, ShieldCheck, Smile, Sparkles } from 'lucide-react'

// ─── Types ────────────────────────────────────────────────────────────────────

export type ServiceCategory = {
  slug: string
  title: string
  /** One to two sentences for the category detail/overview page. */
  description: string
  /** Brief label used on homepage and overview cards. */
  shortDescription: string
  href: string
  icon: LucideIcon
  iconClass: string
  serviceSlugs: string[]
}

export type Faq = {
  question: string
  answer: string
}

export type ServiceDetail = {
  slug: string
  categorySlug: string
  title: string
  shortDescription: string
  intro: string
  benefits?: string[]
  steps?: string[]
  faqs?: Faq[]
  relatedServiceSlugs?: string[]
}

// ─── Categories ───────────────────────────────────────────────────────────────

export const categories: ServiceCategory[] = [
  {
    slug: 'preventive-dentistry',
    title: 'Preventive Care',
    description:
      'Prevention is the most effective form of dental care. Our preventive services are designed to catch problems early, protect your teeth and gums, and reduce the need for more complex treatment down the line.',
    shortDescription:
      'Routine cleanings, exams, and preventive treatments to keep your teeth and gums healthy.',
    href: '/services/preventive-dentistry',
    icon: ShieldCheck,
    iconClass: 'text-sky-600',
    serviceSlugs: ['cleanings', 'periodontal-exams', 'night-guards'],
  },
  {
    slug: 'cosmetic-dentistry',
    title: 'Cosmetic Dentistry',
    description:
      'A confident smile can change everything. Our cosmetic treatments are tailored to your goals — whether you want subtle improvement or a complete smile transformation.',
    shortDescription:
      'Enhance the appearance of your smile with professional whitening and cosmetic treatments.',
    href: '/services/cosmetic-dentistry',
    icon: Sparkles,
    iconClass: 'text-amber-500',
    serviceSlugs: ['veneers', 'teeth-whitening'],
  },
  {
    slug: 'restorative-dentistry',
    title: 'Restorative Dentistry',
    description:
      'Whether you need a simple filling or a full-mouth restoration, our restorative services rebuild function, comfort, and appearance using the latest materials and techniques.',
    shortDescription:
      'Repair damaged or missing teeth with crowns, bridges, dentures, and other restorative solutions.',
    href: '/services/restorative-dentistry',
    icon: Gem,
    iconClass: 'text-orange-600',
    serviceSlugs: ['crowns', 'bridges', 'dentures', 'fillings', 'root-canals', 'extractions'],
  },
  {
    slug: 'orthodontics',
    title: 'Orthodontics',
    description:
      'Straightening your teeth is about more than aesthetics. Proper alignment improves bite function, makes cleaning easier, and contributes to long-term oral health.',
    shortDescription:
      'Straighten teeth and improve bite alignment with modern clear aligner treatment.',
    href: '/services/orthodontics',
    icon: Smile,
    iconClass: 'text-violet-600',
    serviceSlugs: ['clear-aligners'],
  },
  {
    slug: 'dental-implants',
    title: 'Dental Implants',
    description:
      'Dental implants are the most durable and natural-feeling solution for missing teeth. Anchored directly into the jawbone, they restore full function without affecting surrounding teeth.',
    shortDescription:
      'Replace missing teeth with permanent, natural-looking dental implants designed to restore function and confidence.',
    href: '/services/dental-implants',
    icon: Pin,
    iconClass: 'text-teal-600',
    // Note: "implant-placement" is used instead of "dental-implants" to avoid
    // a slug collision with this category. The route /services/dental-implants
    // resolves to this category; /services/implant-placement is the procedure.
    serviceSlugs: ['implant-placement', 'implant-restoration'],
  },
  {
    slug: 'dental-technology',
    title: 'Digital Imaging',
    description:
      'Our practice uses the latest digital imaging technology to provide faster, more accurate diagnoses with minimal patient discomfort and significantly reduced radiation exposure.',
    shortDescription:
      'Advanced imaging technology helps us diagnose problems accurately and plan treatments effectively.',
    href: '/services/dental-technology',
    icon: Scan,
    iconClass: 'text-blue-600',
    serviceSlugs: ['digital-x-rays', 'panoramic-imaging', 'intraoral-cameras'],
  },
]

// ─── Individual services ───────────────────────────────────────────────────────

export const services: ServiceDetail[] = [
  // ── Preventive Care ──────────────────────────────────────────────────────────
  {
    slug: 'cleanings',
    categorySlug: 'preventive-dentistry',
    title: 'Dental Cleanings',
    shortDescription: 'Professional cleaning to remove plaque, tartar, and surface stains.',
    intro:
      'Even with excellent at-home brushing and flossing, plaque accumulates in areas that are difficult to reach. Professional cleanings remove tartar deposits that cannot be removed at home, leaving your teeth clean, smooth, and polished.',
    benefits: [
      'Removes plaque and tartar not reachable by brushing',
      'Reduces risk of gum disease and tooth decay',
      'Freshens breath by eliminating bacterial buildup',
      'Allows early detection of oral health issues',
    ],
    steps: [
      'Examination of teeth and gums',
      'Scaling to remove tartar deposits',
      'Polishing to remove surface stains',
      'Flossing and fluoride treatment if recommended',
    ],
    faqs: [
      {
        question: 'How often should I get a professional cleaning?',
        answer:
          'Most patients benefit from a cleaning every six months. Patients with gum disease or a higher-risk profile may need more frequent visits.',
      },
      {
        question: 'Does a cleaning hurt?',
        answer:
          'Most patients experience little to no discomfort. Some sensitivity is normal and typically passes within a day.',
      },
    ],
    relatedServiceSlugs: ['periodontal-exams', 'digital-x-rays'],
  },
  {
    slug: 'periodontal-exams',
    categorySlug: 'preventive-dentistry',
    title: 'Periodontal Exams',
    shortDescription: 'Comprehensive gum health evaluations to detect and manage gum disease.',
    intro:
      'Gum disease is one of the most common chronic conditions and a leading cause of adult tooth loss. Periodontal exams measure pocket depths, assess bone levels, and identify signs of inflammation — giving us an accurate picture of your gum health.',
    benefits: [
      'Early detection of gingivitis and periodontitis',
      'Prevents progression to more serious gum disease',
      'Informs personalised treatment and maintenance plans',
      'Connects oral health monitoring to broader systemic health',
    ],
    steps: [
      'Probing to measure gum pocket depths at each tooth',
      'Assessment of gum tissue colour, texture, and bleeding',
      'Review of X-rays to evaluate bone levels',
      'Discussion of findings and recommended next steps',
    ],
    faqs: [
      {
        question: 'What is the difference between gingivitis and periodontitis?',
        answer:
          'Gingivitis is early-stage gum inflammation that is reversible with treatment. Periodontitis is a more advanced infection that damages the bone and tissue supporting your teeth.',
      },
      {
        question: 'How is gum disease treated?',
        answer:
          'Mild cases are managed with a deep cleaning (scaling and root planing). Advanced cases may require referral to a periodontist.',
      },
    ],
    relatedServiceSlugs: ['cleanings', 'digital-x-rays'],
  },
  {
    slug: 'night-guards',
    categorySlug: 'preventive-dentistry',
    title: 'Night Guards',
    shortDescription:
      'Custom-fitted guards to protect teeth from grinding and clenching during sleep.',
    intro:
      'Bruxism — the habit of grinding or clenching teeth during sleep — can cause significant enamel wear, jaw pain, and headaches over time. A custom night guard provides a protective barrier between your upper and lower teeth, absorbing force before it damages your enamel.',
    benefits: [
      'Prevents enamel erosion caused by grinding',
      'Reduces jaw pain, tension, and morning headaches',
      'Protects existing dental work such as crowns and veneers',
      'Improves sleep quality by relieving jaw tension',
    ],
    steps: [
      'Assessment of wear patterns and bite',
      'Impressions or digital scan taken of your teeth',
      'Custom guard fabricated by a dental laboratory',
      'Fitting appointment to adjust for comfort',
    ],
    faqs: [
      {
        question: 'How do I know if I grind my teeth at night?',
        answer:
          'Common signs include worn or flattened tooth surfaces, jaw soreness in the morning, frequent headaches, and a partner reporting grinding sounds during sleep.',
      },
      {
        question: 'Is a custom guard better than a store-bought one?',
        answer:
          'Yes. Custom guards fit precisely to your teeth, stay in place comfortably, and distribute pressure evenly. Over-the-counter guards are bulky and often provide inadequate protection.',
      },
    ],
    relatedServiceSlugs: ['cleanings', 'crowns'],
  },

  // ── Cosmetic Dentistry ────────────────────────────────────────────────────────
  {
    slug: 'veneers',
    categorySlug: 'cosmetic-dentistry',
    title: 'Dental Veneers',
    shortDescription:
      'Thin porcelain shells bonded to the front of teeth to transform their appearance.',
    intro:
      'Veneers are ultra-thin, custom-made porcelain shells bonded permanently to the front surface of your teeth. They are one of the most versatile cosmetic treatments available, correcting colour, shape, size, and minor alignment issues in a single course of treatment.',
    benefits: [
      'Covers discolouration, chips, cracks, and gaps',
      'Natural-looking, stain-resistant porcelain material',
      'Minimal tooth preparation compared to crowns',
      'Long-lasting results with proper care',
    ],
    steps: [
      'Consultation and smile design planning',
      'Removal of a thin layer of enamel from the tooth surface',
      'Impressions taken and sent to a dental laboratory',
      'Temporary veneers placed while permanents are made',
      'Permanent veneers bonded and adjusted at fit appointment',
    ],
    faqs: [
      {
        question: 'How long do veneers last?',
        answer:
          'With proper care, porcelain veneers typically last 10–20 years. Avoiding hard foods and wearing a night guard if you grind your teeth will extend their lifespan.',
      },
      {
        question: 'Are veneers reversible?',
        answer:
          'No. Because a small amount of enamel is removed during preparation, the procedure is permanent. Veneers will need to be replaced at the end of their lifespan.',
      },
    ],
    relatedServiceSlugs: ['teeth-whitening', 'crowns'],
  },
  {
    slug: 'teeth-whitening',
    categorySlug: 'cosmetic-dentistry',
    title: 'Teeth Whitening',
    shortDescription: 'Professional-strength whitening treatments for a noticeably brighter smile.',
    intro:
      'Professional whitening uses clinically proven bleaching agents at concentrations not available in over-the-counter products. We offer in-office treatment for immediate results and take-home kits for gradual whitening at your convenience.',
    benefits: [
      'Noticeably whiter teeth in one visit or a few weeks at home',
      'Safe and supervised by dental professionals',
      'Custom-fitted trays for even, consistent results',
      'More effective and longer-lasting than shop-bought products',
    ],
    steps: [
      'Shade assessment to establish your starting point',
      'Gum and tooth sensitivity screening',
      'Application of whitening gel and activation (in-office)',
      'Take-home tray provision with gel and usage instructions',
    ],
    faqs: [
      {
        question: 'How white can my teeth get?',
        answer:
          'Results vary by individual. Most patients achieve several shades lighter. Crowns, veneers, and fillings do not respond to whitening gel.',
      },
      {
        question: 'Is teeth whitening safe?',
        answer:
          'Yes. When administered professionally, whitening is safe. Some patients experience temporary sensitivity, which resolves within a few days.',
      },
    ],
    relatedServiceSlugs: ['veneers', 'cleanings'],
  },

  // ── Restorative Dentistry ─────────────────────────────────────────────────────
  {
    slug: 'crowns',
    categorySlug: 'restorative-dentistry',
    title: 'Dental Crowns',
    shortDescription:
      'Full-coverage caps that restore strength, shape, and appearance to damaged teeth.',
    intro:
      'A dental crown is a tooth-shaped cap placed over a damaged or weakened tooth to restore its original shape, strength, and function. Modern crowns are made from high-strength porcelain or ceramic materials that closely match the colour and appearance of natural teeth.',
    benefits: [
      'Fully restores a cracked, broken, or heavily decayed tooth',
      'Protects a tooth after root canal treatment',
      'Natural-looking, durable porcelain or ceramic material',
      'Supports a dental bridge or implant restoration',
    ],
    steps: [
      'Examination and X-rays to assess the tooth',
      'Tooth preparation and shaping under local anaesthetic',
      'Impressions taken and sent to the laboratory',
      'Temporary crown fitted while permanent crown is made',
      'Permanent crown cemented and bite adjusted',
    ],
    faqs: [
      {
        question: 'How long does a crown last?',
        answer:
          'Crowns typically last 10–15 years with good oral hygiene. Some last considerably longer with proper care.',
      },
      {
        question: 'Does getting a crown hurt?',
        answer:
          'The tooth and surrounding area are numbed with local anaesthetic before preparation. Some soreness after the appointment is normal and resolves within a few days.',
      },
    ],
    relatedServiceSlugs: ['root-canals', 'implant-placement', 'veneers'],
  },
  {
    slug: 'bridges',
    categorySlug: 'restorative-dentistry',
    title: 'Dental Bridges',
    shortDescription: 'Fixed prosthetics that bridge the gap left by one or more missing teeth.',
    intro:
      'A dental bridge is a fixed restoration that replaces one or more missing teeth by spanning the gap between two healthy teeth. The adjacent teeth (abutments) are shaped to support crowns, which anchor the artificial tooth (pontic) in position.',
    benefits: [
      'Restores chewing function and speech clarity',
      'Prevents remaining teeth from drifting into the gap',
      'Fixed solution — no removal required for cleaning',
      'Colour-matched to natural teeth for a seamless result',
    ],
    steps: [
      'Assessment and X-rays of the gap and surrounding teeth',
      'Preparation of abutment teeth',
      'Impressions taken for laboratory fabrication',
      'Temporary bridge placed while permanent is made',
      'Permanent bridge cemented and adjusted',
    ],
    faqs: [
      {
        question: 'How long does a dental bridge last?',
        answer:
          'With proper care, dental bridges typically last 10–15 years or longer.',
      },
      {
        question: 'Is a bridge or implant better for a missing tooth?',
        answer:
          'Implants are generally preferred for long-term outcomes as they preserve bone and do not require reshaping healthy teeth. Bridges may be recommended when implants are not suitable.',
      },
    ],
    relatedServiceSlugs: ['crowns', 'implant-placement'],
  },
  {
    slug: 'dentures',
    categorySlug: 'restorative-dentistry',
    title: 'Dentures',
    shortDescription: 'Removable prosthetics that replace multiple or all missing teeth.',
    intro:
      'Dentures are custom-made removable appliances designed to replace multiple or all missing teeth. Modern dentures are natural-looking and more comfortable than ever. We offer full dentures for patients who have lost all teeth in an arch, and partial dentures when some natural teeth remain.',
    benefits: [
      'Restores the ability to eat and speak comfortably',
      'Improves facial appearance and supports lip and cheek structure',
      'Custom-fitted for individual comfort and aesthetics',
      'Can be upgraded to implant-supported dentures for greater stability',
    ],
    steps: [
      'Comprehensive assessment and impressions',
      'Bite registration and shade selection',
      'Trial denture fitting to assess fit and appearance',
      'Final denture delivery and adjustments',
    ],
    faqs: [
      {
        question: 'Will dentures affect how I eat?',
        answer:
          'There is an adjustment period, but most patients adapt within a few weeks. Starting with softer foods and cutting food into smaller pieces helps the transition.',
      },
      {
        question: 'How do I care for my dentures?',
        answer:
          'Remove and rinse dentures after eating. Brush with a soft denture brush and soak overnight in a denture solution. Handle carefully to avoid dropping.',
      },
    ],
    relatedServiceSlugs: ['implant-restoration', 'extractions'],
  },
  {
    slug: 'fillings',
    categorySlug: 'restorative-dentistry',
    title: 'Tooth-Coloured Fillings',
    shortDescription:
      'Composite resin fillings that restore decayed teeth while matching natural tooth colour.',
    intro:
      'We use tooth-coloured composite resin to fill cavities, replacing worn amalgam fillings and repairing minor chips and cracks. Composite bonds directly to the tooth structure, requires less removal of healthy tooth material, and blends seamlessly with surrounding enamel.',
    benefits: [
      'Matches the natural colour of your teeth for a discreet finish',
      'Bonds directly to tooth, preserving more healthy structure',
      'Completed in a single appointment',
      'Durable and suitable for front and back teeth',
    ],
    steps: [
      'Local anaesthetic applied to the tooth and surrounding area',
      'Decay removed and cavity cleaned',
      'Composite resin applied in layers and shaped',
      'Filling hardened with a curing light and bite adjusted',
    ],
    faqs: [
      {
        question: 'Can old amalgam fillings be replaced with composite?',
        answer:
          'Yes. Many patients choose to replace silver amalgam fillings with tooth-coloured composite. We assess each case individually.',
      },
      {
        question: 'How long do composite fillings last?',
        answer:
          'Typically 7–10 years, though this varies with location, size, and oral hygiene habits.',
      },
    ],
    relatedServiceSlugs: ['crowns', 'cleanings'],
  },
  {
    slug: 'root-canals',
    categorySlug: 'restorative-dentistry',
    title: 'Root Canal Treatment',
    shortDescription:
      'Treatment to save an infected or severely damaged tooth by removing the affected pulp.',
    intro:
      'Root canal treatment removes infected or inflamed pulp tissue from inside the tooth, cleans and seals the root canals, and restores the tooth with a crown. The procedure saves the natural tooth and relieves the pain caused by infection.',
    benefits: [
      'Eliminates tooth pain caused by infection or deep decay',
      'Saves the natural tooth, avoiding extraction',
      'Prevents spread of infection to surrounding tissue',
      'Restored tooth functions normally after treatment',
    ],
    steps: [
      'X-rays to assess the extent of infection',
      'Local anaesthetic applied for a comfortable procedure',
      'Infected pulp removed and canals cleaned and shaped',
      'Canals sealed with biocompatible filling material',
      'Crown placed to protect the treated tooth',
    ],
    faqs: [
      {
        question: 'Is root canal treatment painful?',
        answer:
          'Modern root canal treatment is performed under local anaesthetic and is no more uncomfortable than having a filling. The procedure relieves the pain caused by the infection.',
      },
      {
        question: 'How long does the procedure take?',
        answer:
          'Most root canals are completed in one or two appointments of one to two hours each, depending on the complexity of the tooth.',
      },
    ],
    relatedServiceSlugs: ['crowns', 'fillings'],
  },
  {
    slug: 'extractions',
    categorySlug: 'restorative-dentistry',
    title: 'Tooth Extractions',
    shortDescription:
      'Safe removal of teeth that cannot be saved through other restorative treatment.',
    intro:
      'When a tooth is too damaged, decayed, or impacted to be saved, extraction may be the most appropriate course of action. We perform simple extractions under local anaesthetic and can discuss replacement options — such as implants or bridges — at the same appointment.',
    benefits: [
      'Relieves pain caused by a severely damaged or infected tooth',
      'Prevents infection from spreading to adjacent teeth or bone',
      'Creates space in cases of overcrowding',
      'Can be followed by an implant or bridge for tooth replacement',
    ],
    steps: [
      'X-ray to assess root structure and surrounding bone',
      'Local anaesthetic administered for comfort',
      'Tooth loosened and gently extracted',
      'Gauze placed and aftercare instructions provided',
    ],
    faqs: [
      {
        question: 'What should I do after an extraction?',
        answer:
          'Bite on gauze for the first hour, avoid rinsing or spitting for 24 hours, eat soft foods, and avoid smoking or alcohol. Full healing typically takes one to two weeks.',
      },
      {
        question: 'How soon can I replace a missing tooth?',
        answer:
          'The timeline depends on healing. Implants are typically placed after 8–12 weeks. We will discuss the best timing for your situation.',
      },
    ],
    relatedServiceSlugs: ['implant-placement', 'bridges', 'dentures'],
  },

  // ── Orthodontics ──────────────────────────────────────────────────────────────
  {
    slug: 'clear-aligners',
    categorySlug: 'orthodontics',
    title: 'Clear Aligners',
    shortDescription:
      'Removable transparent aligners that gradually straighten teeth without fixed braces.',
    intro:
      'Clear aligner therapy uses a series of custom-fitted, removable transparent trays to gradually move teeth into alignment. Treatment is discreet, comfortable, and does not restrict your diet or oral hygiene routine the way traditional braces do.',
    benefits: [
      'Nearly invisible — suitable for professional and social settings',
      'Removable for eating, drinking, brushing, and flossing',
      'No metal brackets or wires to cause irritation',
      'Predictable results with digital 3D treatment planning',
    ],
    steps: [
      'Digital scan or impressions to map your teeth in 3D',
      'Treatment plan generated showing tooth movement at each stage',
      'Series of custom aligners fabricated',
      'Aligners worn for 20–22 hours per day, changed every one to two weeks',
      'Progress review appointments every six to eight weeks',
    ],
    faqs: [
      {
        question: 'How long does clear aligner treatment take?',
        answer:
          'Treatment typically takes 6–18 months depending on the complexity of the case. Simple corrections may be completed in fewer aligners.',
      },
      {
        question: 'Can I eat normally with clear aligners?',
        answer:
          'Yes. Aligners are removed before eating and drinking anything other than water, so there are no dietary restrictions.',
      },
    ],
    relatedServiceSlugs: ['veneers', 'teeth-whitening'],
  },

  // ── Dental Implants ───────────────────────────────────────────────────────────
  {
    // Slug intentionally differs from the "dental-implants" category slug to
    // avoid a routing collision. /services/dental-implants resolves to the
    // category page; /services/implant-placement is the procedure detail.
    slug: 'implant-placement',
    categorySlug: 'dental-implants',
    title: 'Dental Implant Placement',
    shortDescription:
      'Surgical placement of a titanium implant post to replace a missing tooth root.',
    intro:
      'A dental implant is a small titanium post surgically placed into the jawbone to act as an artificial tooth root. Once integrated with the bone (osseointegration), it provides a stable foundation for a crown, bridge, or implant-retained denture.',
    benefits: [
      'Preserves jawbone and prevents bone loss after extraction',
      'Does not require reshaping of adjacent healthy teeth',
      'Functions, feels, and looks like a natural tooth',
      'Can last a lifetime with proper care',
    ],
    steps: [
      'Comprehensive examination including 3D imaging',
      'Treatment planning and discussion of anaesthetic options',
      'Implant placed into the jawbone in a minor surgical procedure',
      'Healing period of three to six months for osseointegration',
      'Abutment and crown placed once implant is fully integrated',
    ],
    faqs: [
      {
        question: 'Am I a suitable candidate for implants?',
        answer:
          'Most healthy adults with sufficient bone volume are suitable candidates. We assess bone density, gum health, and general health before recommending implants. Bone grafting may be needed in some cases.',
      },
      {
        question: 'How long do dental implants last?',
        answer:
          'With proper care, implants can last 20–30 years or a lifetime. The crown on top typically needs replacing after 10–15 years.',
      },
    ],
    relatedServiceSlugs: ['implant-restoration', 'panoramic-imaging', 'crowns'],
  },
  {
    slug: 'implant-restoration',
    categorySlug: 'dental-implants',
    title: 'Implant Restoration',
    shortDescription:
      'Custom crowns, bridges, or dentures fitted onto existing implant posts.',
    intro:
      'Implant restoration is the final stage of the implant process — attaching the visible tooth component (crown, bridge, or denture) onto a fully integrated implant post. We can also provide restoration onto implants placed by other providers.',
    benefits: [
      'Natural-looking result matched to surrounding teeth',
      'Stable and secure — no movement or slipping',
      'Durable ceramic or porcelain materials',
      'Can restore a single tooth, multiple teeth, or a full arch',
    ],
    steps: [
      'Impressions or digital scan of the implant site',
      'Custom abutment and restoration designed and fabricated',
      'Abutment attached to implant post',
      'Crown, bridge, or denture secured and bite adjusted',
    ],
    faqs: [
      {
        question: 'Can I have restoration done on implants placed elsewhere?',
        answer:
          'Yes. We can restore most implant systems as long as we have details of the implant type and can take accurate impressions.',
      },
      {
        question: 'What is the difference between a crown on a tooth and a crown on an implant?',
        answer:
          'An implant crown attaches to an abutment connected to the implant post rather than being cemented over a prepared natural tooth. The final appearance and function are similar.',
      },
    ],
    relatedServiceSlugs: ['implant-placement', 'crowns', 'bridges'],
  },

  // ── Dental Technology ─────────────────────────────────────────────────────────
  {
    slug: 'digital-x-rays',
    categorySlug: 'dental-technology',
    title: 'Digital X-Rays',
    shortDescription: 'Low-radiation digital radiographs for faster, more accurate diagnosis.',
    intro:
      'Digital X-rays produce high-resolution images of your teeth and bone structure using sensors rather than traditional film. Images are available instantly on screen, can be enlarged and enhanced, and use up to 80% less radiation than conventional dental X-rays.',
    benefits: [
      'Up to 80% less radiation than traditional film X-rays',
      'Images available immediately for real-time diagnosis',
      'Can be digitally enhanced to improve clarity',
      'Stored securely and easily shared with specialists',
    ],
    steps: [
      'Sensor or phosphor plate positioned in the mouth',
      'Short exposure taken — typically less than one second',
      'Image displayed on screen for immediate review',
      'Findings discussed with the patient during the appointment',
    ],
    faqs: [
      {
        question: 'How often will I need X-rays?',
        answer:
          'Frequency depends on your oral health history and risk profile. Most patients have bitewing X-rays annually and a full series every three to five years.',
      },
      {
        question: 'Are dental X-rays safe?',
        answer:
          'Yes. Digital X-rays emit very low levels of radiation. We follow ALARA principles — using the minimum exposure necessary to obtain a diagnostic image.',
      },
    ],
    relatedServiceSlugs: ['panoramic-imaging', 'cleanings'],
  },
  {
    slug: 'panoramic-imaging',
    categorySlug: 'dental-technology',
    title: 'Panoramic Imaging',
    shortDescription:
      'Single wide-view X-ray capturing all teeth, jaws, and surrounding structures.',
    intro:
      'A panoramic X-ray (OPG) provides a single wide-format image of the entire mouth — upper and lower jaws, all teeth, temporomandibular joints, and sinus cavities. It is particularly useful for implant planning, wisdom tooth assessment, and detecting pathology not visible on routine X-rays.',
    benefits: [
      'Captures the full dental arch in one image',
      'Essential for implant placement planning',
      'Detects impacted wisdom teeth, cysts, and other pathology',
      'Quick and comfortable — no films placed inside the mouth',
    ],
    steps: [
      'Patient positioned with chin on rest and bite on guide',
      'Machine rotates around the head over approximately 15 seconds',
      'Image reviewed immediately on screen',
      'Findings discussed and integrated into treatment planning',
    ],
    faqs: [
      {
        question: 'When is a panoramic X-ray needed?',
        answer:
          "Common indications include implant planning, wisdom tooth assessment, monitoring jaw bone health, and evaluating children's developing dentition.",
      },
      {
        question: 'Is a panoramic X-ray uncomfortable?',
        answer:
          'No. Nothing is placed inside the mouth. You stand still and bite gently on a small guide while the machine rotates around your head.',
      },
    ],
    relatedServiceSlugs: ['digital-x-rays', 'implant-placement'],
  },
  {
    slug: 'intraoral-cameras',
    categorySlug: 'dental-technology',
    title: 'Intraoral Cameras',
    shortDescription:
      'Small camera that captures detailed images inside the mouth for patient education and diagnosis.',
    intro:
      'An intraoral camera is a small, pen-sized device that captures high-definition images of the inside of your mouth. It allows you to see exactly what we see — cracks, decay, worn restorations, and gum tissue — making it easier to understand your diagnosis and treatment options.',
    benefits: [
      'See real-time images of your own teeth and gums',
      'Improves understanding of dental conditions and treatment needs',
      'Helps detect cracks and wear not visible to the naked eye',
      'Images stored in records for monitoring changes over time',
    ],
    steps: [
      'Small camera wand gently guided along teeth and gums',
      'High-definition images captured and displayed on screen',
      'Clinician reviews findings with patient in real time',
      'Images saved to patient record for future reference',
    ],
    faqs: [
      {
        question: 'Does the intraoral camera hurt?',
        answer:
          'No. The camera is small, smooth, and gentle. Most patients find it comfortable and informative.',
      },
      {
        question: 'Is the camera used at every appointment?',
        answer:
          'Not necessarily, but it is often used during comprehensive exams, when a specific concern needs closer evaluation, or to show a patient the area being discussed.',
      },
    ],
    relatedServiceSlugs: ['digital-x-rays', 'panoramic-imaging'],
  },
]

// ─── Helpers ──────────────────────────────────────────────────────────────────

export function getCategoryBySlug(slug: string): ServiceCategory | undefined {
  return categories.find((c) => c.slug === slug)
}

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return services.find((s) => s.slug === slug)
}

export function getServicesForCategory(categorySlug: string): ServiceDetail[] {
  return services.filter((s) => s.categorySlug === categorySlug)
}

export function getRelatedServices(slugs: string[]): ServiceDetail[] {
  return slugs.flatMap((slug) => {
    const match = services.find((s) => s.slug === slug)
    return match ? [match] : []
  })
}
