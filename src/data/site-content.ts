export interface SiteContent {
  homepage: {
    heroEyebrow: string;
    heroHeadline: string;
    heroDescription: string;
    primaryCtaText: string;
    primaryCtaLink: string;
    secondaryCtaText: string;
    secondaryCtaLink: string;
    trustItems: { title: string; description: string; icon: string }[];
    editorialEyebrow: string;
    editorialHeadline: string;
    editorialSubtitle: string;
    editorialParagraph: string;
    editorialCtaText: string;
    whyChooseHeadline: string;
    whyChooseCards: { title: string; description: string }[];
    finalCtaHeadline: string;
    finalCtaDescription: string;
  };
  about: {
    heroHeadline: string;
    introParagraph: string;
    philosophyTitle: string;
    philosophyText: string;
    craftsmanshipTitle: string;
    craftsmanshipText: string;
    buyingSteps: { step: string; title: string; description: string }[];
  };
  contact: {
    heroHeadline: string;
    introText: string;
    phone: string;
    email: string;
    hours: string;
    locationNote: string;
  };
  settings: {
    siteName: string;
    tagline: string;
    defaultSeoTitle: string;
    defaultSeoDescription: string;
    contactEmail: string;
    contactPhone: string;
    operatingHours: string;
    socialLinks: { platform: string; url: string }[];
  };
}

export const INITIAL_SITE_CONTENT: SiteContent = {
  homepage: {
    heroEyebrow: 'ENGINEERED FOR EVERY JOURNEY',
    heroHeadline: 'THE RIGHT TRAILER. FOR EVERY JOURNEY.',
    heroDescription: 'Explore a considered collection of dependable trailers, designed to make hauling, transporting and moving forward simpler.',
    primaryCtaText: 'EXPLORE TRAILERS',
    primaryCtaLink: '/trailers',
    secondaryCtaText: 'TALK TO OUR TEAM',
    secondaryCtaLink: '/contact',
    trustItems: [
      {
        title: 'Quality-led Selection',
        description: 'Vetted tubular steel and extruded aluminum architectures built to commercial standards.',
        icon: 'shield-check'
      },
      {
        title: 'Practical Design',
        description: 'Optimized ramp angles, accessible tie-downs, and real-world weight distribution.',
        icon: 'tool'
      },
      {
        title: 'Reliable Support',
        description: 'Direct consultation from specialists who understand hauling physics and payload safety.',
        icon: 'headphones'
      },
      {
        title: 'Simple Product Discovery',
        description: 'Clear specifications, transparent demo pricing, and comprehensive comparison tools.',
        icon: 'compass'
      }
    ],
    editorialEyebrow: 'MADE FOR REAL-WORLD USE',
    editorialHeadline: 'MORE THAN A TRAILER. A BETTER WAY TO GET THINGS DONE.',
    editorialSubtitle: 'The difference between struggling with cargo and moving forward smoothly lies in thoughtful engineering.',
    editorialParagraph: 'Whether you run a landscaping enterprise, transport heavy excavation machinery, or move valuable equipment across state borders, dependability is non-negotiable. Our catalog is curated with strict structural requirements: heavy-duty Dexter axles, weather-sealed electrical harnesses, and precision-engineered ramp gates.',
    editorialCtaText: 'DISCOVER OUR RANGE',
    whyChooseHeadline: 'WHY WORK WITH TRAILER COMMERCE',
    whyChooseCards: [
      {
        title: 'Practical Product Selection',
        description: 'No filler inventory. Every model is engineered for genuine utility, durable towing, and long service life.'
      },
      {
        title: 'Clear Product Information',
        description: 'Accurate dimensions, payload ratings, axle capacities, and hitch configurations presented without confusing jargon.'
      },
      {
        title: 'Dependable Construction',
        description: 'Tubular structural framing, continuous welds, weather-sealed wiring, and premium brand components throughout.'
      },
      {
        title: 'Helpful Customer Support',
        description: 'Personalized guidance helping you pair the exact trailer size and brake configuration to your tow vehicle.'
      }
    ],
    finalCtaHeadline: "LET'S FIND THE RIGHT TRAILER FOR YOU.",
    finalCtaDescription: 'Have a specific payload requirement or custom trade setup? Get in touch and let our trailer specialists review the right option.',
  },
  about: {
    heroHeadline: 'PRACTICAL SOLUTIONS. BUILT AROUND THE JOURNEY.',
    introParagraph: 'At Trailer Commerce, we believe that trailers are not merely metal boxes on wheels—they are the critical backbone of independent tradespeople, mobile businesses, and transport professionals. We bridge the gap between heavy industrial engineering and an effortless modern purchasing experience.',
    philosophyTitle: 'Our Product Philosophy',
    philosophyText: 'We reject disposable, lightweight utility trailers that flex under moderate loads or rust through after two seasons. Every trailer showcased in our collection is evaluated on four strict benchmarks: structural frame rigidity, suspension longevity, weather-sealing integrity, and road safety under maximum legal payload.',
    craftsmanshipTitle: 'Commercial Usability in Every Detail',
    craftsmanshipText: 'From spring-assisted ramps that can be lowered with one hand to flush RV locks that keep equipment safe on unattended job sites, we focus on the practical nuances that make daily operation smoother.',
    buyingSteps: [
      {
        step: '01',
        title: 'Consultation & Sizing',
        description: 'We review your cargo types, tow vehicle GVWR ratings, and hitch class to recommend the optimal configuration.'
      },
      {
        step: '02',
        title: 'Inspection & Setup',
        description: 'Every unit undergoes a comprehensive 24-point pre-delivery inspection covering wheel bearing torque, lighting, and brakes.'
      },
      {
        step: '03',
        title: 'Handover & Road Ready',
        description: 'Complete walk-through of coupler locking, safety breakaway cables, and maintenance tips before you take to the highway.'
      }
    ]
  },
  contact: {
    heroHeadline: 'GET IN TOUCH WITH OUR SPECIALISTS.',
    introText: 'Whether you need assistance matching axle capacity, checking current inventory, or discussing fleet options, we are here to provide clear, practical guidance.',
    phone: '(555) 234-5678',
    email: 'specialists@trailercommerce.demo',
    hours: 'Monday – Friday: 8:00 AM – 5:30 PM | Saturday: 9:00 AM – 2:00 PM',
    locationNote: 'Demo Demonstration Showroom & Distribution Center'
  },
  settings: {
    siteName: 'TRAILER COMMERCE',
    tagline: 'BUILT FOR THE JOURNEY',
    defaultSeoTitle: 'TRAILER COMMERCE | Premium Commercial & Utility Trailers',
    defaultSeoDescription: 'Discover commercial enclosed, utility, flatbed, cargo, and horse trailers. Engineered for durability, high payload, and dependable road travel.',
    contactEmail: 'contact@trailercommerce.demo',
    contactPhone: '(555) 234-5678',
    operatingHours: 'Mon - Fri: 8am - 5:30pm',
    socialLinks: [
      { platform: 'LinkedIn', url: 'https://linkedin.com' },
      { platform: 'YouTube', url: 'https://youtube.com' },
      { platform: 'Instagram', url: 'https://instagram.com' }
    ]
  }
};
