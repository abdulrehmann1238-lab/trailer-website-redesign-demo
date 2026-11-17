export interface MetaProps {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;
  type?: 'website' | 'article' | 'product';
  publishedTime?: string;
  author?: string;
}

const DEFAULT_TITLE = 'TRAILER COMMERCE | Premium Commercial & Utility Trailers';
const DEFAULT_DESCRIPTION = 'Engineered for every journey. Explore commercial enclosed, utility, flatbed, cargo, and horse trailers designed for dependable road performance.';
const SITE_URL = 'https://trailercommerce.demo';
const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80';

export function formatTitle(title?: string): string {
  if (!title) return DEFAULT_TITLE;
  if (title.includes('TRAILER COMMERCE')) return title;
  return `${title} | TRAILER COMMERCE`;
}

export function getMetaDefaults(props: MetaProps) {
  const title = formatTitle(props.title);
  const description = props.description || DEFAULT_DESCRIPTION;
  const canonical = props.canonical ? `${SITE_URL}${props.canonical.startsWith('/') ? '' : '/'}${props.canonical}` : SITE_URL;
  const image = props.image || DEFAULT_IMAGE;
  const type = props.type || 'website';

  return {
    title,
    description,
    canonical,
    image,
    type,
    siteName: 'TRAILER COMMERCE',
    publishedTime: props.publishedTime,
    author: props.author
  };
}
