export interface Category {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  longDescription: string;
  heroImage: string;
  productCount: number;
  features: string[];
  seoTitle: string;
  seoDescription: string;
  faqs: { question: string; answer: string }[];
}

export const CATEGORIES: Category[] = [
  {
    id: 'cat-enclosed',
    name: 'Enclosed Trailers',
    slug: 'enclosed-trailers',
    shortDescription: 'Weather-tight, secure enclosed haulers built for equipment, tools, and precious cargo.',
    longDescription: 'Engineered with aerodynamic profiles, heavy-duty tubular steel framing, and weather-sealed interlocking panels, our enclosed cargo trailers protect valuable tools, commercial cargo, and recreational equipment from harsh road conditions and environmental elements.',
    heroImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80',
    productCount: 4,
    features: [
      'Galvanized or powder-coated tubular steel framework',
      'Weather-sealed ramp doors with spring-assisted lift',
      'Screwless aluminum exterior skin for seamless branding',
      'Interior 3/4-inch marine-grade treated plywood floor'
    ],
    seoTitle: 'Enclosed Cargo Trailers | Weather-Sealed Haulers | Trailer Commerce',
    seoDescription: 'Explore commercial-grade enclosed cargo trailers. Precision built with tubular steel frames, heavy payload axles, and lockable security for equipment and transport.',
    faqs: [
      {
        question: 'What axle configurations are available on enclosed trailers?',
        answer: 'Our enclosed models range from single 3,500 lb idler axles on 6-foot lengths up to dual tandem 5,200 lb torsion axles on 24-foot commercial editions, complete with electric breakaway brakes.'
      },
      {
        question: 'Are enclosed trailer walls reinforced for interior shelving?',
        answer: 'Yes, wall studs are spaced on 16-inch centers with integrated horizontal perimeter hat-posts, allowing secure mounting of E-track systems, storage bins, and custom tool racks.'
      },
      {
        question: 'How do the side doors and rear ramps lock?',
        answer: 'Every enclosed unit includes a dual-locking RV flush lock alongside a zinc-plated commercial bar lock on side entry doors, and dual cam-action latches on rear ramp doors.'
      }
    ]
  },
  {
    id: 'cat-utility',
    name: 'Utility Trailers',
    slug: 'utility-trailers',
    shortDescription: 'Open-deck workhorses for landscaping, DIY tasks, and agricultural hauling.',
    longDescription: 'Designed for rapid loading and versatile everyday utility. Featuring heavy-duty tubular top rails, integrated tie-down stake pockets, and fold-flat mesh ramp gates, our utility trailers are the backbone of lawn care professionals and active homeowners.',
    heroImage: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1600&q=80',
    productCount: 3,
    features: [
      'Heavy-gauge expanded steel rear ramp with bi-fold storage',
      'Integrated perimeter tie-down stake pockets and D-rings',
      'Treated southern yellow pine pressure-impregnated decking',
      'Protected recessed LED lighting with sealed wiring harness'
    ],
    seoTitle: 'Utility Trailers & Landscaping Haulers | Trailer Commerce',
    seoDescription: 'Durable open-deck utility trailers built for landscaping equipment, lawn tractors, and everyday hauling with heavy-duty ramp gates.',
    faqs: [
      {
        question: 'What is the ramp gate weight rating on utility models?',
        answer: 'Our reinforced expanded steel ramp gates support dynamic roll-on loads up to 2,500 lbs, ideal for riding mowers, zero-turn equipment, and ATVs.'
      },
      {
        question: 'Can the side rails be removed for side-loading pallets?',
        answer: 'Specific models feature fold-down or slide-out removable landscape sides, while our standard models offer fixed 14-inch tubular side rails for maximum structural rigidity.'
      }
    ]
  },
  {
    id: 'cat-flatbed',
    name: 'Flatbed Trailers',
    slug: 'flatbed-trailers',
    shortDescription: 'Heavy-payload flat decks engineered for vehicles, machinery, and palletized freight.',
    longDescription: 'When high cargo volume and unrestricted perimeter access are essential, our heavy-duty flatbed and deckover trailers deliver. Built on I-beam frames with rub-rails and dual tandem axles for construction equipment and vehicle transport.',
    heroImage: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1600&q=80',
    productCount: 3,
    features: [
      'Structural steel channel and I-beam chassis construction',
      'Dual heavy-duty 7,000 lb Dexter axles with forward self-adjusting brakes',
      'Slide-in or flip-over spring-assist rear loading ramps',
      'Perimeter rub rails with standard 2x4 stake pocket spacing'
    ],
    seoTitle: 'Heavy-Duty Flatbed Trailers & Equipment Decks | Trailer Commerce',
    seoDescription: 'High-capacity flatbed trailers and car haulers built for equipment transport, pallet freight, and heavy construction loads.',
    faqs: [
      {
        question: 'What is the difference between deckover and standard flatbed trailers?',
        answer: 'Standard flatbeds feature wheel wells embedded inside the deck to maintain a lower center of gravity for vehicles, whereas deckover models position the deck above the wheels for an unobstructed 102-inch deck width.'
      },
      {
        question: 'Do your flatbeds include winch mounting plates?',
        answer: 'Yes, heavy-duty flatbeds include pre-drilled front tongue receiver gussets and reinforced winch plates capable of mounting up to 12,000 lb recovery winches.'
      }
    ]
  },
  {
    id: 'cat-cargo',
    name: 'Cargo Trailers',
    slug: 'cargo-trailers',
    shortDescription: 'High-cube commercial transporters with aerodynamic V-nose profiles and payload durability.',
    longDescription: 'Purpose-engineered for logistics, moving services, and regional freight. Our dedicated cargo trailers feature high interior ceilings, reinforced wall ribbing, and balanced load distribution for long-distance highway hauling.',
    heroImage: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1600&q=80',
    productCount: 3,
    features: [
      'Aerodynamic V-Nose design improving highway towing fuel economy',
      'One-piece seamless aluminum roof membrane',
      'Heavy-duty commercial tongue jack with drop-leg footpad',
      'Dual electric brake axles with emergency breakaway battery system'
    ],
    seoTitle: 'Commercial Cargo Trailers | High-Capacity Freight | Trailer Commerce',
    seoDescription: 'High-cube commercial cargo haulers designed for dependable freight distribution, moving contractors, and long-distance transport.',
    faqs: [
      {
        question: 'Does the V-nose design provide additional usable cargo space?',
        answer: 'Yes, the V-nose adds approximately 24 to 30 inches of usable wedge space at the front of the trailer, ideal for workbenches, tool chests, or cargo staging.'
      },
      {
        question: 'Are cargo trailers pre-wired for solar or auxiliary battery systems?',
        answer: 'All dual-axle cargo trailers include a sealed front junction box and dedicated battery compartment ready for solar charging panels and interior LED power banks.'
      }
    ]
  },
  {
    id: 'cat-horse',
    name: 'Horse Trailers',
    slug: 'horse-trailers',
    shortDescription: 'Refined equestrian transport featuring insulated roofs, padded dividers, and smooth torsion ride.',
    longDescription: 'Prioritizing animal safety, stress reduction, and effortless trailering. Built with insulated composite walls, rubber torsion axles for a smooth ride, anti-fatigue floor mats, and fully ventilated tack rooms.',
    heroImage: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1600&q=80',
    productCount: 2,
    features: [
      'Independent rubber torsion axles dampening road vibration',
      'Thermal-insulated roof lining keeping cabin temperature controlled',
      'Padded quick-release aluminum dividers with slam latches',
      'Sealed front dressing room and lockable saddle tack storage'
    ],
    seoTitle: 'Equestrian & Horse Trailers | Safe & Comfortable Transport | Trailer Commerce',
    seoDescription: 'Premium 2-horse and 3-horse trailers designed for livestock safety, featuring torsion ride suspension, padded dividers, and climate insulation.',
    faqs: [
      {
        question: 'What type of flooring is used in the horse stalls?',
        answer: 'We use high-density interlocking 3/4-inch vulcanized anti-slip rubber floor mats resting over marine-grade treated lumber or aluminum planking for sanitation and joint comfort.'
      },
      {
        question: 'How is ventilation controlled in transit?',
        answer: 'Each stall includes drop-down feed doors with aluminum face bars, pop-up two-way directional roof vents, and sliding tinted hip windows with protective mesh screens.'
      }
    ]
  }
];
