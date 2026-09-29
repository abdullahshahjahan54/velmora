export type TourCategory =
  | 'all'
  | 'pakistan'
  | 'international'
  | 'family'
  | 'honeymoon'
  | 'adventure'
  | 'luxury'
  | 'budget';

export interface Destination {
  id: string;
  slug: string;
  name: string;
  region: string;
  country: string;
  isPakistan: boolean;
  startingPrice: number;
  priceFormatted: string;
  duration: string;
  rating: number;
  reviewsCount: number;
  shortDescription: string;
  longDescription: string;
  bestTimeToVisit: string;
  highlights: string[];
  topActivities: string[];
  heroImage: string;
  tagline: string;
  elevation?: string;
  idealFor: string[];
}

export interface ItineraryDay {
  day: string;
  title: string;
  description: string;
  meals: string;
  stay: string;
  highlights?: string[];
}

export interface TourPackage {
  id: string;
  slug: string;
  title: string;
  destinationId: string;
  location: string;
  country: string;
  duration: string;
  startingPrice: number;
  priceFormatted: string;
  rating: number;
  reviewCount: number;
  travelersCount: string;
  shortDescription: string;
  fullOverview: string;
  categories: TourCategory[];
  heroImage: string;
  galleryImages: string[];
  highlights: string[];
  itinerary: ItineraryDay[];
  included: string[];
  notIncluded: string[];
  accommodation: string;
  transportation: string;
  importantInfo: string[];
  reviews: {
    author: string;
    location: string;
    rating: number;
    date: string;
    comment: string;
    avatar?: string;
  }[];
}

export interface BlogArticle {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  excerpt: string;
  image: string;
  tags: string[];
  sections: {
    heading: string;
    content: string[];
    tips?: string[];
  }[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'pakistan' | 'international' | 'booking';
}

export interface GalleryItem {
  id: string;
  title: string;
  category:
    | 'Mountains'
    | 'Beaches'
    | 'Adventure'
    | 'Hotels'
    | 'Culture'
    | 'Food'
    | 'Cities'
    | 'Experiences';
  location: string;
  image: string;
  description: string;
}

export interface Testimonial {
  id: string;
  customerName: string;
  avatar: string;
  destination: string;
  rating: number;
  role: string;
  review: string;
  tourName: string;
  date: string;
}

export interface BookingInquiry {
  fullName: string;
  email: string;
  phone: string;
  whatsapp: string;
  destination: string;
  tourPackage: string;
  travelDate: string;
  adults: number;
  children: number;
  budget: string;
  specialRequirements: string;
  message: string;
}
