export type LookCategory = 'all' | 'bridal' | 'party' | 'video';

export interface PortfolioLook {
  id: string;
  title: string;
  subtitle: string;
  category: LookCategory;
  categoryLabel: string;
  image: string;
  beforeImage?: string;
  videoUrl?: string;
  isVideo?: boolean;
  badge?: string;
  description: string;
  technique: string;
  productsUsed: string[];
  skinFinish: string;
  wearTime: string;
}

export interface ServiceItem {
  id: string;
  name: string;
  price: string;
  amountNumber?: number;
  period?: string;
  badge?: string;
  description: string;
  features?: string[];
  tags?: string[];
  popular?: boolean;
}

export interface BridalPackage {
  id: string;
  name: string;
  tierDots: number;
  featured?: boolean;
  features: string[];
  ctaText: string;
}

export interface WhyFeature {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TestimonialItem {
  id: string;
  author: string;
  role: string;
  quote: string;
  image: string;
  stars: number;
}

export interface BookingFormData {
  fullName: string;
  eventType: string;
  eventDate: string;
  location: string;
  partySize: string;
  phone?: string;
  serviceId?: string;
  notes?: string;
}

