import { INITIAL_PRODUCTS, type Product } from '../data/products';
import { CATEGORIES, type Category } from '../data/categories';
import { INITIAL_ARTICLES, type Article } from '../data/articles';
import { INITIAL_SITE_CONTENT, type SiteContent } from '../data/site-content';

export type { Product } from '../data/products';
export type { Category } from '../data/categories';
export type { Article } from '../data/articles';
export type { SiteContent } from '../data/site-content';

export interface MediaItem {
  id: string;
  url: string;
  title: string;
  altText: string;
  category: string;
  fileSize: string;
  dimensions: string;
  createdAt: string;
}

export const INITIAL_MEDIA: MediaItem[] = [
  {
    id: 'media-1',
    url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    title: 'Enclosed Cargo Trailer Front Angle',
    altText: 'Enclosed cargo trailer parked at outdoor commercial staging yard',
    category: 'Enclosed Trailers',
    fileSize: '420 KB',
    dimensions: '1200 × 800',
    createdAt: '2026-11-10'
  },
  {
    id: 'media-2',
    url: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80',
    title: 'Utility Trailer with Expanded Steel Ramp',
    altText: 'Open utility trailer with rear ramp gate on asphalt',
    category: 'Utility Trailers',
    fileSize: '380 KB',
    dimensions: '1200 × 800',
    createdAt: '2026-11-10'
  },
  {
    id: 'media-3',
    url: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=80',
    title: 'Heavy Duty Flatbed Equipment Deck',
    altText: 'Dual axle heavy-duty flatbed trailer with rub rail and ramps',
    category: 'Flatbed Trailers',
    fileSize: '460 KB',
    dimensions: '1200 × 800',
    createdAt: '2026-11-10'
  },
  {
    id: 'media-4',
    url: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80',
    title: 'Aerodynamic V-Nose Cargo Trailer',
    altText: 'Commercial cargo trailer with aerodynamic V-nose design',
    category: 'Cargo Trailers',
    fileSize: '510 KB',
    dimensions: '1200 × 800',
    createdAt: '2026-11-10'
  },
  {
    id: 'media-5',
    url: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80',
    title: 'Equestrian Deluxe Horse Trailer',
    altText: 'Luxury horse trailer parked in a green pasture setting',
    category: 'Horse Trailers',
    fileSize: '490 KB',
    dimensions: '1200 × 800',
    createdAt: '2026-11-10'
  }
];

export interface DemoState {
  products: Product[];
  categories: Category[];
  articles: Article[];
  siteContent: SiteContent;
  media: MediaItem[];
  auth: {
    isAuthenticated: boolean;
    user: { email: string; name: string; role: string } | null;
  };
  comparedProductIds: string[];
  recentViewIds: string[];
}

const STORAGE_KEY = 'trailer_commerce_demo_state_v2';
const EVENT_NAME = 'tc-demo-state-updated';

export function getInitialDemoState(): DemoState {
  return {
    products: INITIAL_PRODUCTS,
    categories: CATEGORIES,
    articles: INITIAL_ARTICLES,
    siteContent: INITIAL_SITE_CONTENT,
    media: INITIAL_MEDIA,
    auth: {
      isAuthenticated: false,
      user: null
    },
    comparedProductIds: [],
    recentViewIds: []
  };
}

export function loadDemoState(): DemoState {
  if (typeof window === 'undefined') {
    return getInitialDemoState();
  }

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      const initial = getInitialDemoState();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(initial));
      return initial;
    }
    const parsed = JSON.parse(raw);
    // Merge defensively with defaults in case schema changed
    return {
      products: parsed.products?.length ? parsed.products : INITIAL_PRODUCTS,
      categories: parsed.categories?.length ? parsed.categories : CATEGORIES,
      articles: parsed.articles?.length ? parsed.articles : INITIAL_ARTICLES,
      siteContent: parsed.siteContent || INITIAL_SITE_CONTENT,
      media: parsed.media?.length ? parsed.media : INITIAL_MEDIA,
      auth: parsed.auth || { isAuthenticated: false, user: null },
      comparedProductIds: parsed.comparedProductIds || [],
      recentViewIds: parsed.recentViewIds || []
    };
  } catch (e) {
    console.error('Error loading demo state from localStorage:', e);
    return getInitialDemoState();
  }
}

export function saveDemoState(state: DemoState): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: state }));
  } catch (e) {
    console.error('Error saving demo state to localStorage:', e);
  }
}

// Client helper APIs
export function getStoredProducts(): Product[] {
  return loadDemoState().products;
}

export function getStoredProductBySlug(slug: string): Product | undefined {
  return loadDemoState().products.find((p) => p.slug === slug);
}

export function getStoredProductById(id: string): Product | undefined {
  return loadDemoState().products.find((p) => p.id === id);
}

export function upsertStoredProduct(product: Product): void {
  const state = loadDemoState();
  const index = state.products.findIndex((p) => p.id === product.id);
  if (index >= 0) {
    state.products[index] = { ...product, updatedAt: new Date().toISOString().split('T')[0] };
  } else {
    state.products.unshift({ ...product, updatedAt: new Date().toISOString().split('T')[0] });
  }
  saveDemoState(state);
}

export function deleteStoredProduct(id: string): void {
  const state = loadDemoState();
  state.products = state.products.filter((p) => p.id !== id);
  state.comparedProductIds = state.comparedProductIds.filter((cid) => cid !== id);
  saveDemoState(state);
}

export function getStoredArticles(): Article[] {
  return loadDemoState().articles;
}

export function upsertStoredArticle(article: Article): void {
  const state = loadDemoState();
  const index = state.articles.findIndex((a) => a.id === article.id);
  if (index >= 0) {
    state.articles[index] = article;
  } else {
    state.articles.unshift(article);
  }
  saveDemoState(state);
}

export function getStoredSiteContent(): SiteContent {
  return loadDemoState().siteContent;
}

export function updateStoredSiteContent(updater: (current: SiteContent) => SiteContent): void {
  const state = loadDemoState();
  state.siteContent = updater(state.siteContent);
  saveDemoState(state);
}

export function resetDemoState(): void {
  if (typeof window === 'undefined') return;
  const initial = getInitialDemoState();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(initial));
  window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: initial }));
}
