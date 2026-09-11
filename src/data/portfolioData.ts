import { PortfolioLook, ServiceItem, BridalPackage, WhyFeature, FAQItem, TestimonialItem } from '../types';

export const BUSINESS_INFO = {
  name: "Khushi Makeup Arts",
  artist: "Khushi Gupta",
  role: "Founder & Professional Makeup Artist",
  phone: "+919162143273",
  phoneDisplay: "9162143273",
  instagram: "@khushimakeuparts",
  instagramUrl: "https://instagram.com/khushimakeuparts",
  instagramDmUrl: "https://ig.me/m/khushimakeuparts",
  location: "Siwan, Bihar",
  areaServed: "Siwan & Nearby Areas (Home-Service Available)",
  experience: "2+ Years Experience",
  headline: "Beauty, Enhanced. Confidence, Unforgettable.",
  subhead: "Professional Makeup Artist in Siwan",
  tags: "Bridal · Engagement · Party · Mehendi · Haldi · Occasion Makeup",
  quote: "You are already beautiful. Makeup is simply a way to enhance that beauty."
};

export const ASSETS = {
  // Photos and videos from Khushi's portfolio extracted from uploaded media
  heroBride: "/assets/hero-bridal.jpg",
  artistPortrait: "/assets/about-khushi.jpg",
  bridal1: "/assets/hero-bridal.jpg",
  bridalReception: "/assets/reception-glam.jpg",
  party1: "/assets/cocktail-glam.jpg",
  editorialBold: "/assets/editorial-bold.jpg",
  naturalDewy: "/assets/natural-dewy.jpg",
  avantGarde: "/assets/avant-garde.jpg",
  goldenLight: "/assets/golden-light.jpg",
  transformationVideo: "/assets/bridal-transformation.webm",

  // Direct CDN hotlink fallbacks as requested
  hotlinkHeroBride: "https://khushi.makeup/_next/static/media/beautiful-bridal-makeup-soft-glam-indian-bride.156okofg9d_7m.jpg",
  hotlinkArtistPortrait: "https://khushi.makeup/_next/static/media/about-diya.0~.1u_sgu-t2q.jpg",
  hotlinkReceptionGlam: "https://khushi.makeup/_next/static/media/reception-glam-makeup-smokey-eyes-elegant.0jykmpc0~q4kx.jpg",
  hotlinkCocktailGlam: "https://khushi.makeup/_next/static/media/cocktail-party-glam-makeup-sophisticated-evening.0_wl0lf386wfq.jpg",
  hotlinkEditorialBold: "https://khushi.makeup/_next/static/media/editorial-high-fashion-makeup-bold-artistic.07d7-jtdyn0a~.jpg",
  hotlinkNaturalDewy: "https://khushi.makeup/_next/static/media/natural-dewy-makeup-glowing-skin-soft-pink.0p37y3x6phzao.jpg",
  hotlinkAvantGarde: "https://khushi.makeup/_next/static/media/avant-garde-artistic-makeup-creative-beauty.0~x30r~y0eg_1.jpg",
  hotlinkGoldenLight: "https://khushi.makeup/_next/static/media/warm-golden-light-makeup-beauty-aesthetic.0mniqh.21xo~x.jpg",
};

export const SERVICES: ServiceItem[] = [
  {
    id: "bridal",
    name: "Bridal Makeup",
    price: "₹10,000",
    amountNumber: 10000,
    badge: "Most Requested",
    popular: true,
    description: "For brides who want a polished, long-lasting and photography-ready bridal look.",
    features: [
      "Custom skin prep & personalized foundation match",
      "HD / Waterproof bridal finish for long wedding ceremonies",
      "Hairstyling, jewelry setting & traditional dupatta draping",
      "False eyelashes, lens assistance & touch-up kit"
    ],
    tags: ["Long-lasting", "Photography-ready", "Dupatta Draping Included"]
  },
  {
    id: "engagement",
    name: "Engagement Makeup",
    price: "₹8,000",
    amountNumber: 8000,
    description: "Elegant and camera-ready makeup for engagement and ring ceremonies.",
    features: [
      "Soft glam radiance suited to ring ceremony lighting",
      "Coordinated eye enhancement with outfit tones",
      "Hairstyling and saree/lehenga draping included"
    ],
    tags: ["Camera-ready", "Ring Ceremony", "Elegant Glow"]
  },
  {
    id: "party",
    name: "Party Makeup",
    price: "₹5,000",
    amountNumber: 5000,
    description: "Glamorous yet personalized looks for parties, celebrations and special occasions.",
    features: [
      "Flawless evening base adapted to your skin type",
      "Shimmer, matte or smoked eye looks",
      "Hairstyling and draping assistance"
    ],
    tags: ["Glamorous", "Custom Eye Look", "Evening Seal"]
  },
  {
    id: "haldi",
    name: "Haldi Makeup",
    price: "₹5,000",
    amountNumber: 5000,
    description: "Fresh, radiant and celebration-ready looks for Haldi ceremonies.",
    features: [
      "Dewy, sweat-resistant lightweight base",
      "Floral jewelry styling & complementary hair adornment",
      "Fresh floral or soft glow finish"
    ],
    tags: ["Fresh Glow", "Celebration-ready", "Lightweight"]
  },
  {
    id: "mehendi",
    name: "Mehendi Makeup",
    price: "₹5,000",
    amountNumber: 5000,
    description: "Beautiful occasion makeup designed to complement Mehendi celebrations.",
    features: [
      "Vibrant or natural aesthetic matching green/colorful outfits",
      "Braided or open textured hairstyling",
      "Long-lasting comfortable wear"
    ],
    tags: ["Vibrant & Natural", "Textured Hair", "Comfort Wear"]
  },
  {
    id: "occasion",
    name: "Special Occasion Makeup",
    price: "₹5,000",
    amountNumber: 5000,
    description: "Customized makeup for other important family celebrations, anniversaries and festive events.",
    features: [
      "Tailored to suit your personal style and event theme",
      "Professional product application for day/night events"
    ],
    tags: ["Customized", "Festive Events", "Day & Night"]
  }
];

export const BRIDAL_PACKAGES: BridalPackage[] = [
  {
    id: "pkg-basic",
    name: "Basic Bridal",
    tierDots: 1,
    features: [
      "Traditional Bridal Makeup",
      "Bridal Hairstyling",
      "Saree / Lehenga Draping"
    ],
    ctaText: "Ask About Basic Bridal"
  },
  {
    id: "pkg-premium",
    name: "Premium Bridal",
    tierDots: 2,
    featured: true,
    features: [
      "HD Makeup Finish",
      "Designer Hairstyling",
      "Dupatta & Saree Draping",
      "Luxury Lashes Placement",
      "On-Location Touch-up Support"
    ],
    ctaText: "Ask About Premium Bridal"
  },
  {
    id: "pkg-luxury",
    name: "Luxury Bridal",
    tierDots: 3,
    features: [
      "Airbrush Flawless Makeup",
      "Couture Bridal Hairstyling",
      "Full Dupatta, Saree & Jewelry Setting",
      "Premium Mink Lashes",
      "Additional Luxury Inclusions & Pre-bridal Prep"
    ],
    ctaText: "Ask About Luxury Bridal"
  }
];

export const WHY_KHUSHI_FEATURES: WhyFeature[] = [
  {
    id: "personalized",
    title: "Personalized Makeup",
    description: "Every look is adapted to your skin type, face shape, outfit, and personal preferences.",
    iconName: "brush"
  },
  {
    id: "products",
    title: "Professional Products",
    description: "Khushi works with professional and high-end products, including Nykaa Professional, ensuring safe, long-lasting wear.",
    iconName: "sanitizer"
  },
  {
    id: "occasion-specific",
    title: "Occasion-Specific Looks",
    description: "From bridal glam to fresh Haldi looks, makeup is adapted specifically to the event theme, lighting, and outfit.",
    iconName: "event"
  },
  {
    id: "home-service",
    title: "Convenient Home Service",
    description: "Relax at your home or venue. Convenient makeup services delivered directly to your location, primarily across Siwan.",
    iconName: "home"
  },
  {
    id: "expertise",
    title: "Growing Expertise & Recognition",
    description: "2+ years of dedicated professional experience with continuous learning, recognized with trophies at beauty events.",
    iconName: "workspace_premium"
  }
];

export const PORTFOLIO_LOOKS: PortfolioLook[] = [
  {
    id: "look-bridal-1",
    title: "Signature Soft Glam Bride",
    subtitle: "High-definition bridal makeup with maroon lehenga & traditional jewelry setting.",
    category: "bridal",
    categoryLabel: "Bridal • Siwan",
    image: ASSETS.heroBride,
    beforeImage: ASSETS.naturalDewy,
    badge: "Real Bride Look",
    description: "Designed for classical Indian wedding ceremonies. Featuring polished waterproof skin, defined winged eyes, and warm champagne highlights that photograph flawlessly under ceremonial lights.",
    technique: "Skin prep facial hydration, long-wear HD foundation blend, precision eyeliner, and traditional dupatta draping.",
    productsUsed: [
      "Nykaa Professional HD Palette",
      "Waterproof Eye Artistry pigments",
      "24hr Tear & Sweat-Proof Setting Seal",
      "Custom Crimson & Rose Lip Harmony"
    ],
    skinFinish: "Polished HD Demi-Matte",
    wearTime: "16+ Hours Ceremony-Proof"
  },
  {
    id: "look-video-1",
    title: "Bridal Artistry Transformation",
    subtitle: "Watch the step-by-step transformation from bare skin to radiant bride.",
    category: "video",
    categoryLabel: "Live Video Demonstration",
    image: ASSETS.heroBride,
    videoUrl: ASSETS.transformationVideo,
    isVideo: true,
    badge: "Video Demonstration",
    description: "See how Khushi crafts a bridal masterpiece, balancing facial topography with customized skin prep, sculpting, and jewelry coordination.",
    technique: "Live video demonstration of HD foundation buffing, lash application, and maang tikka alignment.",
    productsUsed: [
      "Nykaa Professional Foundation",
      "HD Setting Powder",
      "Silk Lashes",
      "Rose Gold Highlighter"
    ],
    skinFinish: "Camera-Ready HD",
    wearTime: "16 Hours"
  },
  {
    id: "look-reception-1",
    title: "Romantic Reception Glam",
    subtitle: "Elegant reception makeup with smokey eyes and sculpted features.",
    category: "bridal",
    categoryLabel: "Bridal • Reception",
    image: ASSETS.bridalReception,
    badge: "Reception Favorite",
    description: "Sophisticated glam engineered for evening wedding receptions, cocktail dinners, and flash photography.",
    technique: "Smokey eye shading with transition pigments, luminous cheek highlight, and satin mauve lips.",
    productsUsed: [
      "Nykaa Pro Smokey Palette",
      "Waterproof Gel Liner",
      "Radiance Cheek Drape",
      "Satin Liquid Lipstick"
    ],
    skinFinish: "Luminous Velvet",
    wearTime: "14 Hours Lightweight"
  },
  {
    id: "look-editorial-1",
    title: "Editorial Bold Artistry",
    subtitle: "High-fashion statement makeup with crisp graphic definition.",
    category: "party",
    categoryLabel: "Editorial & Fashion",
    image: ASSETS.editorialBold,
    badge: "High Fashion",
    description: "Bold, modern artistry showcasing Khushi's precision technique, sharp lines, and dramatic structural elegance.",
    technique: "Graphic eye architecture, precision contouring, and defined ombre lip shading.",
    productsUsed: [
      "Precision Pigment Paints",
      "Sculpting Bronzer Duo",
      "Matte Lip Lacquer"
    ],
    skinFinish: "Ultra-HD Satin",
    wearTime: "12 Hours Transfer-Proof"
  },
  {
    id: "look-cocktail-1",
    title: "Cocktail Party Glam",
    subtitle: "Sophisticated evening glam designed for pre-wedding parties & celebrations.",
    category: "party",
    categoryLabel: "Cocktail & Party",
    image: ASSETS.party1,
    badge: "Party Favorite",
    description: "Glamorous yet personalized makeup look tailored for engagement parties, sangeet nights, and celebratory evenings.",
    technique: "Warm bronze eyeshadow with soft cut-crease, natural wispy lashes, and plumping nude lip.",
    productsUsed: [
      "Warm Sunset Eye Quad",
      "Waterproof Mascara",
      "Golden Shimmer Strobing Balm"
    ],
    skinFinish: "Dewy Silk Finish",
    wearTime: "12 Hours Party-Proof"
  },
  {
    id: "look-natural-1",
    title: "Natural Dewy Glow",
    subtitle: "Fresh, glass-skin radiant finish with delicate pink accents.",
    category: "party",
    categoryLabel: "Daytime & Minimal",
    image: ASSETS.naturalDewy,
    badge: "Glass Skin",
    description: "Breathable, radiant formulation created for daytime celebrations, roka rituals, and minimalists who love skin-first beauty.",
    technique: "Hydrating serum base, cream blush dabbing, and feathered brow sculpting.",
    productsUsed: [
      "Hyaluronic Acid Primer",
      "Nykaa Pro Skin Tint",
      "Peachy Cream Blush"
    ],
    skinFinish: "Dewy Glass Sheen",
    wearTime: "10 Hours Breathable"
  },
  {
    id: "look-avant-garde-1",
    title: "Avant-Garde Creative Beauty",
    subtitle: "Artistic concept look exploring creative beauty textures.",
    category: "party",
    categoryLabel: "Artistic Creative",
    image: ASSETS.avantGarde,
    badge: "Trophy-Style Creative",
    description: "Creative styling demonstrating the diverse range and versatility of Khushi's professional skill set.",
    technique: "Experimental pigment layering, dimensional highlights, and geometric accenting.",
    productsUsed: [
      "Vibrant Artist Pigments",
      "Glow Setting Mist"
    ],
    skinFinish: "High-Fashion Velvet",
    wearTime: "10 Hours"
  },
  {
    id: "look-golden-1",
    title: "Warm Golden Hour Radiance",
    subtitle: "Luminous warm tones tailored for Haldi and Mehendi ceremonies.",
    category: "party",
    categoryLabel: "Haldi & Mehendi",
    image: ASSETS.goldenLight,
    badge: "Haldi Special",
    description: "Warm golden glow specifically formulated to stay fresh through turmeric ceremonies and outdoor celebrations.",
    technique: "Sweat-resistant skin tint, warm golden shimmer, and fresh flushed cheeks.",
    productsUsed: [
      "Sweat-resistant hydrating tint",
      "Golden glow bronzer",
      "Coral-pink lip tint"
    ],
    skinFinish: "Fresh Golden Glow",
    wearTime: "10 Hours Humidity-Proof"
  }
];

export const FAQ_LIST: FAQItem[] = [
  {
    question: "Do you provide home-service makeup?",
    answer: "Yes. Home-service makeup is available, with Siwan as the primary service area. Khushi comes directly to your home or venue for complete convenience on your special day."
  },
  {
    question: "Do you travel outside Siwan?",
    answer: "Yes. Travel outside Siwan can be arranged depending on the booking and location. Travel charges are additional based on distance."
  },
  {
    question: "What types of makeup do you offer?",
    answer: "Khushi offers Bridal makeup, Engagement makeup, Party makeup, Haldi, Mehendi, and all other special occasion makeup."
  },
  {
    question: "Are hairstyling and draping available?",
    answer: "Yes, bridal hairstyling, dupatta draping, and saree/lehenga pleating are included in the applicable bridal packages."
  },
  {
    question: "Do you provide makeup trials?",
    answer: "Makeup trials are not currently included, but you can view numerous client photos and transformation videos to see the work before booking."
  },
  {
    question: "Can I book through Instagram?",
    answer: "Yes! Send Khushi a direct message on Instagram (@khushimakeuparts) or call 9162143273 to check date availability and confirm your booking."
  },
  {
    question: "How should I book?",
    answer: "Simply send Khushi a DM on Instagram or use the enquiry form here with your event date, makeup requirement (e.g. Bridal, Party, Haldi), and location. She will promptly reply with availability and booking details."
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "t1",
    author: "Pooja Sharma",
    role: "Siwan • Bridal Client",
    image: ASSETS.naturalDewy,
    quote: "Khushi did my bridal makeup for my wedding in Siwan. The makeup lasted all night through tears and rituals without needing a single touch-up. Everyone praised my look!",
    stars: 5
  },
  {
    id: "t2",
    author: "Anjali Kumari",
    role: "Siwan • Engagement & Party",
    image: ASSETS.bridalReception,
    quote: "She truly understands what looks good on your face. It wasn't overly heavy or cakey, just very natural, radiant, and elegant. Highly recommended in Siwan!",
    stars: 5
  }
];
