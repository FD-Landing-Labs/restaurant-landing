// Site Configuration Types
export interface Logo {
  default: string;
  light?: string;
  alt: string;
}

export interface SEO {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
}

export interface Theme {
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
  accentColor: string;
  foregroundColor?: string;
  mutedColor?: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  logo: Logo;
  seo: SEO;
  theme: Theme;
}

// Navbar Types
export interface NavLink {
  name: string;
  href: string;
}

export interface CTAButton {
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon?: string;
}

export interface NavbarConfig {
  brandName: string;
  logo: Logo;
  links: NavLink[];
  cta: CTAButton;
  contact?: {
    phone: string;
    email: string;
  };
  socialLinks?: SocialLink[];
}

// Hero Types
export interface HeroConfig {
  headline: string;
  subheadline?: string;
  image: string;
  socialLinks?: SocialLink[];
}

// Navigation Cards (Homepage)
export interface NavigationCard {
  id: string;
  label: string;
  href: string;
  image: string;
}

// About Types
export interface Award {
  id: string;
  source: string;
  award: string;
  stars: number;
}

export interface TestimonialReview {
  id: string;
  quote: string;
  author: string;
  role: string;
}

export interface TestimonialsConfig {
  stats: {
    satisfactionRate: string;
    satisfactionLabel: string;
    statImage: string;
  };
  customerCount: {
    count: string;
    label: string;
    avatars: string[];
  };
  reviews: TestimonialReview[];
}

export interface AboutConfig {
  heroTitle: string;
  heroImage: string;
  headline: string;
  description: string;
  featuredImage: string;
  awards: Award[];
  chefImages: string[];
  story: {
    title: string;
    content: string;
  };
  testimonials: TestimonialsConfig;
  footer: {
    copyright: string;
    links: { name: string; href: string }[];
  };
}

// Menu Types
export interface MenuCategory {
  id: string;
  name: string;
  emoji: string;
  timeRange: string;
}

export interface MenuItem {
  id: string;
  category: string;
  name: string;
  emoji: string;
  description: string;
  price: string;
  image: string;
}

export interface MenuConfig {
  pageTitle: string;
  heroImage: string;
  categories: MenuCategory[];
  items: MenuItem[];
}

// Reservation Types
export interface FormField {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "date" | "time" | "select" | "textarea";
  placeholder?: string;
  options?: string[];
  required: boolean;
}

export interface ReservationConfig {
  heroTitle: string;
  heroImage: string;
  formTitle: string;
  formDescription: string;
  form: {
    fields: FormField[];
    submitButton: {
      label: string;
    };
  };
  footer: {
    copyright: string;
    links: { name: string; href: string }[];
  };
}

// Contact Types
export interface OpeningHour {
  day: string;
  time: string;
}

export interface ContactConfig {
  heroTitle: string;
  heroImage: string;
  opening: {
    title: string;
    hours: OpeningHour[];
  };
  googleReview: {
    title: string;
    qrCode: string;
    reviewUrl: string;
  };
  map: {
    coordinates: string;
    plusCode: string;
    embedUrl: string;
  };
  info: {
    title: string;
    address: {
      label: string;
      line1: string;
      line2: string;
    };
    phone: {
      label: string;
      value: string;
    };
    email: {
      label: string;
      value: string;
    };
    social: {
      label: string;
      links: { name: string; href: string; icon: string }[];
    };
  };
  footer: {
    copyright: string;
    links: { name: string; href: string }[];
  };
}

// Footer Types
export interface FooterLink {
  name: string;
  href: string;
}

export interface FooterLinkGroup {
  title: string;
  items: FooterLink[];
}

export interface FooterConfig {
  brand: {
    name: string;
    tagline: string;
  };
  description: string;
  links: {
    quickLinks: FooterLinkGroup;
    legal: FooterLinkGroup;
  };
  contact: {
    address: string;
    phone: string;
    email: string;
  };
  socialLinks: SocialLink[];
  newsletter?: {
    headline: string;
    description: string;
    placeholder: string;
    buttonText: string;
  };
  copyright: string;
  credits?: string;
}

// Main Placeholder Data Type
export interface PlaceholderData {
  site: SiteConfig;
  navbar: NavbarConfig;
  hero: HeroConfig;
  navigationCards: NavigationCard[];
  about: AboutConfig;
  menu: MenuConfig;
  reservation: ReservationConfig;
  contact: ContactConfig;
  footer: FooterConfig;
}
