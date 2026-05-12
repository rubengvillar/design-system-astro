// SEO Component Types

export interface Person {
  '@type': 'Person';
  name: string;
  url?: string;
}

export interface Organization {
  '@type': 'Organization';
  name: string;
  url?: string;
  logo?: string;
  sameAs?: string[];
}

export interface ArticleSchema {
  '@context': 'https://schema.org';
  '@type': 'Article';
  headline: string;
  description: string;
  image?: string | string[];
  author?: Person;
  publisher?: Organization;
  datePublished?: string;
  dateModified?: string;
  mainEntityOfPage?: {
    '@type': 'WebPage';
    '@id': string;
  };
}

export interface ProductSchema {
  '@context': 'https://schema.org';
  '@type': 'Product';
  name: string;
  image?: string | string[];
  description?: string;
  brand?: {
    '@type': 'Brand';
    name: string;
  };
  offers?: {
    '@type': 'Offer';
    price: string;
    priceCurrency: string;
    availability?: 'https://schema.org/InStock' | 'https://schema.org/OutOfStock';
    url?: string;
  };
  aggregateRating?: {
    '@type': 'AggregateRating';
    ratingValue: string;
    reviewCount: string;
  };
}

export interface FAQPageSchema {
  '@context': 'https://schema.org';
  '@type': 'FAQPage';
  mainEntity: {
    '@type': 'Question';
    name: string;
    acceptedAnswer: {
      '@type': 'Answer';
      text: string;
    };
  }[];
}

export interface BreadcrumbItem {
  '@type': 'ListItem';
  position: number;
  name: string;
  item: string;
}

export interface BreadcrumbListSchema {
  '@context': 'https://schema.org';
  '@type': 'BreadcrumbList';
  itemListElement: BreadcrumbItem[];
}

export interface OrganizationSchema {
  '@context': 'https://schema.org';
  '@type': 'Organization';
  name: string;
  url?: string;
  logo?: string;
  sameAs?: string[];
  contactPoint?: {
    '@type': 'ContactPoint';
    telephone?: string;
    contactType?: string;
  };
}

export type JsonLdSchema =
  | ArticleSchema
  | ProductSchema
  | FAQPageSchema
  | BreadcrumbListSchema
  | OrganizationSchema
  | Record<string, unknown>;

export interface MetaTagsProps {
  title: string;
  description: string;
  canonicalURL: string;
  charset?: string;
  viewport?: string;
}

export interface OpenGraphProps {
  title: string;
  description: string;
  image?: string | URL;
  url?: string | URL;
  type?: 'website' | 'article' | 'profile' | 'book';
  locale?: string;
  siteName?: string;
}

export interface TwitterCardProps {
  title: string;
  description: string;
  image?: string | URL;
  cardType?: 'summary' | 'summary_large_image' | 'app' | 'player';
  creator?: string;
  site?: string;
}

export interface MetaRobotsProps {
  index?: boolean;
  follow?: boolean;
  noarchive?: boolean;
  nosnippet?: boolean;
  maxSnippet?: number;
  maxImagePreview?: 'none' | 'standard' | 'large';
  maxVideoPreview?: number;
}

export interface FaviconItem {
  rel: string;
  type?: string;
  href: string;
  color?: string;
  sizes?: string;
}

export interface FaviconsProps {
  items: FaviconItem[];
  themeColor?: string;
}

export interface SEOProps {
  title: string;
  description: string;
  image?: string;
  canonicalURL?: string;
  type?: 'website' | 'article' | 'profile' | 'book';
  twitterCardType?: 'summary' | 'summary_large_image' | 'app' | 'player';
  locale?: string;
  siteName?: string;
}