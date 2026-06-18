// ─── Sanity Types ─────────────────────────────────────────────────────────────

export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  alt?: string;
  caption?: string;
}

export interface Slug {
  _type: "slug";
  current: string;
}

export interface PortableTextBlock {
  _type: "block";
  _key: string;
  style: string;
  children: Array<{
    _type: "span";
    _key: string;
    text: string;
    marks: string[];
  }>;
}

// ─── Blog ─────────────────────────────────────────────────────────────────────

export interface BlogPost {
  _id: string;
  _createdAt: string;
  title: string;
  slug: Slug;
  excerpt: string;
  featuredImage: SanityImage;
  author: Author;
  categories: Category[];
  publishedAt: string;
  readingTime: number;
  body: PortableTextBlock[];
  seo?: SEOMeta;
}

export interface Author {
  _id: string;
  name: string;
  slug: Slug;
  bio: string;
  avatar: SanityImage;
  role: string;
  social?: {
    twitter?: string;
    linkedin?: string;
  };
}

export interface Category {
  _id: string;
  title: string;
  slug: Slug;
  description?: string;
}

// ─── Case Studies ─────────────────────────────────────────────────────────────

export interface CaseStudy {
  _id: string;
  title: string;
  slug: Slug;
  client: string;
  industry: string;
  services: string[];
  challenge: string;
  solution: string;
  results: CaseStudyResult[];
  featuredImage: SanityImage;
  gallery?: SanityImage[];
  testimonial?: string;
  publishedAt: string;
  seo?: SEOMeta;
}

export interface CaseStudyResult {
  metric: string;
  value: string;
  description?: string;
}

// ─── Testimonials ─────────────────────────────────────────────────────────────

export interface Testimonial {
  _id: string;
  name: string;
  role: string;
  company: string;
  avatar?: SanityImage;
  content: string;
  rating: number;
  service: string;
  featured: boolean;
}

// ─── Services ─────────────────────────────────────────────────────────────────

export interface Service {
  _id: string;
  title: string;
  slug: Slug;
  shortDescription: string;
  description: PortableTextBlock[];
  icon: string;
  features: ServiceFeature[];
  process: ProcessStep[];
  pricing?: ServicePricing[];
  faqs: FAQ[];
  seo?: SEOMeta;
}

export interface ServiceFeature {
  title: string;
  description: string;
  icon?: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface ServicePricing {
  name: string;
  price: string;
  period?: string;
  features: string[];
  highlighted: boolean;
}

// ─── Team ─────────────────────────────────────────────────────────────────────

export interface TeamMember {
  _id: string;
  name: string;
  role: string;
  bio: string;
  avatar: SanityImage;
  department: string;
  order: number;
  social?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────

export interface FAQ {
  _id: string;
  question: string;
  answer: string;
  category?: string;
  order?: number;
}

// ─── Client Logo ──────────────────────────────────────────────────────────────

export interface ClientLogo {
  _id: string;
  name: string;
  logo: SanityImage;
  website?: string;
  featured: boolean;
}

// ─── SEO Meta ────────────────────────────────────────────────────────────────

export interface SEOMeta {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: SanityImage;
  noIndex?: boolean;
}

// ─── Navigation ──────────────────────────────────────────────────────────────

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
  isNew?: boolean;
}

// ─── Contact Form ────────────────────────────────────────────────────────────

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  budget?: string;
  message: string;
}

// ─── Stats ───────────────────────────────────────────────────────────────────

export interface Stat {
  value: string;
  suffix?: string;
  label: string;
  description?: string;
}

// ─── Process Step ────────────────────────────────────────────────────────────

export interface AgencyProcess {
  step: number;
  title: string;
  description: string;
  icon: string;
}
