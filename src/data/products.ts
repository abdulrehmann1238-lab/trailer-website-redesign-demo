export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  salePrice?: number;
  category: string; // matches category slug
  categoryName: string;
  shortDescription: string;
  description: string;
  mainImage: string;
  gallery: string[];
  specifications: {
    dimensions: string;
    axles: string;
    material: string;
    capacity: string;
    colour: string;
    availability: 'In Stock' | 'Built to Order' | 'Available Soon';
    gvwr: string;
    emptyWeight: string;
    hitchType: string;
    brakes: string;
  };
  isFeatured?: boolean;
  seoTitle: string;
  seoDescription: string;
  updatedAt: string;
}

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'prod-enclosed-6x12',
    name: 'Enclosed Cargo 6×12',
    slug: 'enclosed-cargo-6x12',
    price: 4850,
    category: 'enclosed-trailers',
    categoryName: 'Enclosed Trailers',
    shortDescription: 'Versatile enclosed cargo trailer designed for practical tool storage, secure trades, and dependable transport.',
    description: 'The Enclosed Cargo 6×12 is engineered for craftsmen, mobile contractors, and weekend adventurers who demand weather-tight security. Built around a precision-welded tubular steel perimeter frame with 16-inch on-center wall and roof framing. Features screwless .030 aluminum exterior sheet metal, 3/4-inch engineered floor planking, LED illumination, and a heavy-duty spring-assisted rear ramp door rated for hand trucks and heavy rolling bins.',
    mainImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=80'
    ],
    specifications: {
      dimensions: '6 × 12 ft',
      axles: 'Tandem 3,500 lb Dexter',
      material: 'Tubular Steel Frame / .030 Aluminum Skin',
      capacity: '4,450 lbs payload',
      colour: 'Deep Charcoal Metallic',
      availability: 'In Stock',
      gvwr: '7,000 lbs',
      emptyWeight: '2,550 lbs',
      hitchType: '2-5/16" A-Frame Coupler',
      brakes: 'Electric Brakes on Both Axles'
    },
    isFeatured: true,
    seoTitle: 'Enclosed Cargo 6x12 | Weatherproof Work Trailer | Trailer Commerce',
    seoDescription: 'Discover the Enclosed Cargo 6x12 trailer. Heavy-duty tandem axles, lockable ramp door, 4,450 lbs payload capacity, and rugged steel construction.',
    updatedAt: '2026-11-15'
  },
  {
    id: 'prod-utility-5x8',
    name: 'Utility Trailer 5×8',
    slug: 'utility-trailer-5x8',
    price: 1650,
    category: 'utility-trailers',
    categoryName: 'Utility Trailers',
    shortDescription: 'Compact open-deck utility trailer built for lawn care, DIY home hauling, and light agricultural equipment.',
    description: 'Engineered for simplicity, strength, and ease of maneuvering. The Utility Trailer 5×8 features a rigid angle-iron frame with a top tubular rail, fold-down expanded steel ramp gate, and pressure-treated pine decking. Its balanced weight profile makes it effortless to hitch to any standard pickup truck or SUV.',
    mainImage: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=80'
    ],
    specifications: {
      dimensions: '5 × 8 ft',
      axles: 'Single 3,500 lb Idler Axle with EZ-Lube Hubs',
      material: 'Powder-Coated Angle Steel',
      capacity: '2,100 lbs payload',
      colour: 'Forest Green Gloss',
      availability: 'In Stock',
      gvwr: '2,990 lbs',
      emptyWeight: '890 lbs',
      hitchType: '2" Ball Coupler',
      brakes: 'Optional Electric Brakes'
    },
    isFeatured: true,
    seoTitle: 'Utility Trailer 5x8 | Compact Open Deck Hauler | Trailer Commerce',
    seoDescription: 'Compact 5x8 utility trailer with heavy-duty fold-flat ramp gate and pressure-treated lumber deck. Ideal for lawn tractors and yard projects.',
    updatedAt: '2026-11-14'
  },
  {
    id: 'prod-flatbed-7x16',
    name: 'Heavy-Duty Flatbed 7×16',
    slug: 'heavy-duty-flatbed-7x16',
    price: 5950,
    category: 'flatbed-trailers',
    categoryName: 'Flatbed Trailers',
    shortDescription: 'Industrial-grade car and equipment hauler with slide-in ramps, stake pockets, and dual braking axles.',
    description: 'Designed for commercial contractors, automotive enthusiasts, and machinery transport. The Heavy-Duty Flatbed 7×16 is constructed with structural steel channel runners, slide-out under-deck loading ramps, and heavy-gauge tear-drop fenders. Fully integrated rub-rails and stake pockets ensure secure rigging for irregular loads.',
    mainImage: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80'
    ],
    specifications: {
      dimensions: '7 × 16 ft',
      axles: 'Dual 5,200 lb Dexter Axles',
      material: 'Structural Channel Steel Frame',
      capacity: '7,400 lbs payload',
      colour: 'Satin Black Epoxy',
      availability: 'In Stock',
      gvwr: '9,990 lbs',
      emptyWeight: '2,590 lbs',
      hitchType: '2-5/16" Adjustable Coupler',
      brakes: 'Electric Brakes on 4 Wheels'
    },
    isFeatured: true,
    seoTitle: 'Heavy-Duty Flatbed 7x16 | Equipment & Car Hauler | Trailer Commerce',
    seoDescription: 'Heavy-duty 7x16 flatbed equipment trailer. 9,990 GVWR, slide-in ramps, dual 5.2k Dexter axles, and perimeter rub rails for reliable hauling.',
    updatedAt: '2026-11-12'
  },
  {
    id: 'prod-cargo-7x14',
    name: 'Dual Axle Cargo 7×14',
    slug: 'dual-axle-cargo-7x14',
    price: 6750,
    salePrice: 6450,
    category: 'cargo-trailers',
    categoryName: 'Cargo Trailers',
    shortDescription: 'High-cube aerodynamic V-nose commercial hauler engineered for cross-state freight and mobile workshops.',
    description: 'Providing extraordinary payload volume and low wind drag. The Dual Axle Cargo 7×14 features an aggressive aerodynamic V-nose that cuts fuel consumption while granting additional interior workstation room. Fitted with seamless aluminum roofing, 12V LED ceiling fixtures, floor-mounted D-rings, and heavy torsion suspension.',
    mainImage: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80'
    ],
    specifications: {
      dimensions: '7 × 14 ft (+30" V-Nose)',
      axles: 'Tandem 3,500 lb Torsion Axles',
      material: 'Interlocking Welded Aluminum Ribbing',
      capacity: '5,100 lbs payload',
      colour: 'Warm Ivory / Charcoal Accents',
      availability: 'In Stock',
      gvwr: '7,000 lbs',
      emptyWeight: '1,900 lbs',
      hitchType: '2-5/16" Heavy-Duty Coupler',
      brakes: 'Forward Self-Adjusting Electric Brakes'
    },
    isFeatured: true,
    seoTitle: 'Dual Axle Cargo 7x14 | Commercial V-Nose Trailer | Trailer Commerce',
    seoDescription: 'Dual Axle Cargo 7x14 commercial trailer with aerodynamic V-nose, torsion axles, 5,100 lbs payload, and weather-sealed construction.',
    updatedAt: '2026-11-13'
  },
  {
    id: 'prod-utility-compact-4x6',
    name: 'Compact Yard Utility 4×6',
    slug: 'compact-yard-utility-4x6',
    price: 1280,
    category: 'utility-trailers',
    categoryName: 'Utility Trailers',
    shortDescription: 'Ultra-lightweight trailer ideal for compact cars, small SUVs, and backyard gardening projects.',
    description: 'Small in footprint but built with full commercial standards. The Compact Yard Utility 4×6 features a tilt-deck mechanism for easy unloading, powder-coated frame, safety chains, and puncture-resistant 12-inch radial tires.',
    mainImage: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80'
    ],
    specifications: {
      dimensions: '4 × 6 ft',
      axles: 'Single 2,000 lb Spring Axle',
      material: 'Welded Angle Steel',
      capacity: '1,450 lbs payload',
      colour: 'Deep Charcoal Satin',
      availability: 'In Stock',
      gvwr: '2,000 lbs',
      emptyWeight: '550 lbs',
      hitchType: '2" Standard Coupler',
      brakes: 'None (Under 3,000 lb GVWR)'
    },
    isFeatured: false,
    seoTitle: 'Compact Yard Utility 4x6 | Lightweight Hauler | Trailer Commerce',
    seoDescription: 'Compact 4x6 yard trailer with tilt bed and welded steel frame. Easy towing with light SUVs and pickup trucks.',
    updatedAt: '2026-11-10'
  },
  {
    id: 'prod-utility-landscaper-6x12',
    name: 'Landscaper Pro Utility 6.4×12',
    slug: 'landscaper-pro-utility-6x12',
    price: 2950,
    category: 'utility-trailers',
    categoryName: 'Utility Trailers',
    shortDescription: 'Dedicated landscaping hauler with mesh sides, weed eater racks, and reinforced bi-fold ramp.',
    description: 'Equipped with the needs of lawn service crews in mind. Features 24-inch mesh sides, multi-tool trimmer locking racks, front lockable tool basket, and a heavy-duty reinforced bi-fold tailgate ramp that minimizes aerodynamic drag when running empty.',
    mainImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80'
    ],
    specifications: {
      dimensions: '6.4 × 12 ft',
      axles: 'Single 3,500 lb Dexter Axle',
      material: 'Formed Tubular Steel with Expanded Metal Sides',
      capacity: '2,350 lbs payload',
      colour: 'Forest Green Matte',
      availability: 'In Stock',
      gvwr: '3,500 lbs',
      emptyWeight: '1,150 lbs',
      hitchType: '2" Coupler with Safety Chains',
      brakes: 'Optional Brake Kit'
    },
    isFeatured: false,
    seoTitle: 'Landscaper Pro Utility 6.4x12 | Lawn Crew Trailer | Trailer Commerce',
    seoDescription: 'Professional 6.4x12 utility trailer with 24" mesh walls, equipment racks, and bi-fold heavy ramp gate.',
    updatedAt: '2026-11-09'
  },
  {
    id: 'prod-enclosed-workpro-7x16',
    name: 'Pro Workman Enclosed 7×16',
    slug: 'pro-workman-enclosed-7x16',
    price: 7200,
    category: 'enclosed-trailers',
    categoryName: 'Enclosed Trailers',
    shortDescription: 'Heavy contractor series with walk-in 6.5ft ceiling height, side RV door, and integrated E-track.',
    description: 'Built for construction teams requiring mobile workshop capacity. Features an extended 6-foot 6-inch interior ceiling height, side entry door with deadbolt, dual horizontal rows of welded E-track on side walls, and an insulated ceiling to keep summer heat out.',
    mainImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80'
    ],
    specifications: {
      dimensions: '7 × 16 ft',
      axles: 'Tandem 3,500 lb Electric Brake Axles',
      material: '16" On-Center Tubular Steel Frame',
      capacity: '4,200 lbs payload',
      colour: 'Warm Ivory with Anodized Trim',
      availability: 'In Stock',
      gvwr: '7,000 lbs',
      emptyWeight: '2,800 lbs',
      hitchType: '2-5/16" Heavy-Duty Coupler',
      brakes: 'Dual Electric Axle Brakes'
    },
    isFeatured: false,
    seoTitle: 'Pro Workman Enclosed 7x16 | Mobile Contractor Trailer | Trailer Commerce',
    seoDescription: 'Contractor-grade 7x16 enclosed trailer. 6.5ft ceiling, tandem axles, E-track wall anchors, and weather-sealed ramp.',
    updatedAt: '2026-11-11'
  },
  {
    id: 'prod-enclosed-apex-8x20',
    name: 'Apex Auto Hauler 8.5×20',
    slug: 'apex-auto-hauler-8x20',
    price: 10400,
    category: 'enclosed-trailers',
    categoryName: 'Enclosed Trailers',
    shortDescription: 'Extra-wide premium enclosed car hauler with beavertail rear deck and escape door.',
    description: 'The pinnacle of enclosed vehicle transportation. Designed specifically for low-clearance race cars, vintage collector automobiles, and heavy machinery. Includes a 4-foot beavertail ramp transition, driver-side escape door with removable fender, heavy-duty recessed D-rings, and LED interior lighting strips.',
    mainImage: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80'
    ],
    specifications: {
      dimensions: '8.5 × 20 ft',
      axles: 'Dual 5,200 lb Torsion Axles',
      material: 'Heavy Tubular Steel with .040 Aluminum Sheeting',
      capacity: '6,200 lbs payload',
      colour: 'Deep Charcoal Metallic',
      availability: 'Built to Order',
      gvwr: '9,990 lbs',
      emptyWeight: '3,790 lbs',
      hitchType: '2-5/16" Cast Iron Coupler',
      brakes: 'All-Wheel Electric Brakes'
    },
    isFeatured: false,
    seoTitle: 'Apex Auto Hauler 8.5x20 | Enclosed Car Hauler | Trailer Commerce',
    seoDescription: 'Extra-wide 8.5x20 enclosed car hauler with escape door, beavertail deck, dual torsion axles, and premium finish.',
    updatedAt: '2026-11-08'
  },
  {
    id: 'prod-flatbed-deckover-8x22',
    name: 'Heavy Equipment Deckover 8.5×22',
    slug: 'heavy-equipment-deckover-8x22',
    price: 9150,
    category: 'flatbed-trailers',
    categoryName: 'Flatbed Trailers',
    shortDescription: 'Wide-deck industrial transport with no wheel well obstructions for skid steers and pallet freight.',
    description: 'When maximum deck width is critical, the Deckover 8.5×22 delivers a completely flat, unobstructed 102-inch deck above the tires. Built on a massive 8-inch I-beam backbone, complete with spring-assist fold-over mega ramps and dual 7,000 lb Dexter axles.',
    mainImage: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80'
    ],
    specifications: {
      dimensions: '8.5 × 22 ft',
      axles: 'Dual 7,000 lb Oil-Bath Dexter Axles',
      material: 'Structural Steel I-Beam Frame & Oak Decking',
      capacity: '10,200 lbs payload',
      colour: 'Industrial Black Gloss',
      availability: 'Available Soon',
      gvwr: '14,000 lbs',
      emptyWeight: '3,800 lbs',
      hitchType: 'Pintle Ring or 2-5/16" Ball Coupler',
      brakes: 'Electric Drum Brakes with Breakaway'
    },
    isFeatured: false,
    seoTitle: 'Deckover Flatbed 8.5x22 | Heavy Equipment Trailer | Trailer Commerce',
    seoDescription: 'Commercial 8.5x22 deckover flatbed trailer with 14,000 GVWR, heavy I-beam frame, and flip-over industrial loading ramps.',
    updatedAt: '2026-11-05'
  },
  {
    id: 'prod-cargo-express-6x10',
    name: 'Aluminum Cargo Express 6×10',
    slug: 'aluminum-cargo-express-6x10',
    price: 5350,
    category: 'cargo-trailers',
    categoryName: 'Cargo Trailers',
    shortDescription: 'All-aluminum lightweight cargo trailer impervious to rust and road salt, built for longevity.',
    description: 'Crafted with 100% aircraft-grade structural aluminum extrusions. Half the weight of comparable steel trailers, resulting in superior fuel efficiency, zero rust corrosion, and exceptional resale value. Ideal for coastal environments and winter road conditions.',
    mainImage: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80'
    ],
    specifications: {
      dimensions: '6 × 10 ft',
      axles: 'Single 3,500 lb Torsion Axle',
      material: '100% Extruded Structural Aluminum',
      capacity: '2,600 lbs payload',
      colour: 'Bright Polished Aluminum',
      availability: 'In Stock',
      gvwr: '3,500 lbs',
      emptyWeight: '900 lbs',
      hitchType: '2" Cast Aluminum Coupler',
      brakes: 'Electric Brakes'
    },
    isFeatured: false,
    seoTitle: 'Aluminum Cargo Express 6x10 | Rust-Free Hauler | Trailer Commerce',
    seoDescription: 'All-aluminum 6x10 enclosed cargo trailer. Lightweight, rust-proof, with torsion axle and ramp door.',
    updatedAt: '2026-11-07'
  },
  {
    id: 'prod-horse-deluxe-2',
    name: 'Equestrian Deluxe 2-Horse Slant',
    slug: 'equestrian-deluxe-2-horse-slant',
    price: 13800,
    category: 'horse-trailers',
    categoryName: 'Horse Trailers',
    shortDescription: 'Bumper-pull 2-horse slant load trailer with insulated ceiling, padded dividers, and front dressing room.',
    description: 'Designed with animal wellness and rider convenience at the forefront. Features an insulated double-wall aluminum construction, rubber torsion suspension dampening road shocks, slam-latch padded divider gates, and a lockable front tack room with swing-out saddle racks.',
    mainImage: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80'
    ],
    specifications: {
      dimensions: '7 × 14 ft (7ft Interior Height)',
      axles: 'Dual 3,500 lb Rubber Torsion Axles',
      material: 'Double-Walled Aluminum with Insulated Composite Roof',
      capacity: '4,100 lbs payload',
      colour: 'Warm Ivory with Forest Green Graphics',
      availability: 'In Stock',
      gvwr: '7,000 lbs',
      emptyWeight: '2,900 lbs',
      hitchType: '2-5/16" Heavy Bumper-Pull Coupler',
      brakes: '4-Wheel Electric Brakes'
    },
    isFeatured: false,
    seoTitle: 'Equestrian Deluxe 2-Horse Trailer | Safe Slant Load | Trailer Commerce',
    seoDescription: 'Premium 2-horse slant load trailer with insulated roof, rubber floor mats, and secure front tack room.',
    updatedAt: '2026-11-06'
  },
  {
    id: 'prod-horse-gooseneck-3',
    name: 'Thoroughbred Gooseneck 3-Horse',
    slug: 'thoroughbred-gooseneck-3-horse',
    price: 21500,
    category: 'horse-trailers',
    categoryName: 'Horse Trailers',
    shortDescription: 'Heavy-duty gooseneck 3-horse trailer with master tack room, drop-down feed windows, and rear ramp.',
    description: 'The premier choice for equestrian competitions, breeding farms, and long-distance equine transit. The gooseneck hitch design distributes weight directly over the tow vehicle rear axle for unmatched highway stability. Includes generous sleeping quarters in the nose, 3-stall slant arrangement, and exterior wash-down ports.',
    mainImage: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80'
    ],
    specifications: {
      dimensions: '7.5 × 22 ft (7.5ft Interior Height)',
      axles: 'Dual 6,000 lb Dexter Torsion Axles',
      material: 'Aerospace Grade Aluminum Chassis and Enclosure',
      capacity: '6,800 lbs payload',
      colour: 'Deep Charcoal Metallic',
      availability: 'Built to Order',
      gvwr: '12,000 lbs',
      emptyWeight: '5,200 lbs',
      hitchType: 'Gooseneck 2-5/16" Ball Coupler',
      brakes: 'Hydraulic-Over-Electric Disc Brakes'
    },
    isFeatured: false,
    seoTitle: 'Thoroughbred Gooseneck 3-Horse Trailer | Long Distance Transport | Trailer Commerce',
    seoDescription: 'Commercial-spec 3-horse gooseneck trailer. Torsion axles, living quarter nose, disc brakes, and insulated stalls.',
    updatedAt: '2026-11-04'
  }
];
