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
  description: string;
  image: string;
  cta: {
    primary: CTAButton;
    secondary?: CTAButton;
  };
}

// Navigation Links Section (Homepage)
export interface NavigationLinkItem {
  name: string;
  href: string;
  description?: string;
}

export interface NavigationLinksConfig {
  items: NavigationLinkItem[];
}

// About Types
export interface Award {
  id: string;
  source: string;
  award: string;
  icon: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface Stat {
  value: string;
  suffix: string;
  label: string;
}

export interface AboutConfig {
  sectionLabel: string;
  headline: string;
  tagline: string;
  description: string;
  story?: {
    title: string;
    content: string;
  };
  image: string;
  awards: Award[];
  features: Feature[];
  stats: Stat[];
}

// Menu Types
export interface MenuCategory {
  id: string;
  name: string;
  description?: string;
}

export interface MenuItem {
  id: string;
  category: string;
  name: string;
  description: string;
  price: string;
  image: string;
}

export interface MenuConfig {
  pageTitle: string;
  description: string;
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

export interface ReservationHours {
  day: string;
  time: string;
}

export interface ReservationConfig {
  pageTitle: string;
  headline: string;
  description: string;
  image: string;
  form: {
    fields: FormField[];
    submitButton: {
      label: string;
    };
  };
  info: {
    hours: ReservationHours[];
    note: string;
  };
}

// Contact Types
export interface ContactInfo {
  label: string;
  value: string;
}

export interface ContactConfig {
  pageTitle: string;
  headline: string;
  description: string;
  info: {
    address: ContactInfo;
    phone: ContactInfo;
    email: ContactInfo;
    hours: ContactInfo;
  };
  form: {
    fields: FormField[];
    submitButton: {
      label: string;
    };
  };
  map?: {
    embedUrl: string;
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
  navigationLinks: NavigationLinksConfig;
  about: AboutConfig;
  menu: MenuConfig;
  reservation: ReservationConfig;
  contact: ContactConfig;
  footer: FooterConfig;
}
