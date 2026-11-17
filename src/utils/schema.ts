import type { Product } from '../data/products';
import type { Article } from '../data/articles';

const SITE_URL = 'https://trailercommerce.demo';

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'TRAILER COMMERCE',
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.svg`,
    description: 'Premier automotive and commercial trailer engineering company.',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-555-234-5678',
      contactType: 'customer service',
      areaServed: 'US',
      availableLanguage: 'en'
    }
  };
}

export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'TRAILER COMMERCE',
    url: SITE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/trailers?search={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url.startsWith('/') ? '' : '/'}${item.url}`
    }))
  };
}

export function getProductSchema(product: Product) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    image: [product.mainImage, ...product.gallery],
    description: product.description,
    sku: product.id,
    brand: {
      '@type': 'Brand',
      name: 'TRAILER COMMERCE'
    },
    offers: {
      '@type': 'Offer',
      url: `${SITE_URL}/product/${product.slug}`,
      priceCurrency: 'USD',
      price: product.salePrice || product.price,
      priceValidUntil: '2027-12-31',
      itemCondition: 'https://schema.org/NewCondition',
      availability: product.specifications.availability === 'In Stock'
        ? 'https://schema.org/InStock'
        : 'https://schema.org/PreOrder',
      seller: {
        '@type': 'Organization',
        name: 'TRAILER COMMERCE'
      }
    },
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Dimensions',
        value: product.specifications.dimensions
      },
      {
        '@type': 'PropertyValue',
        name: 'Payload Capacity',
        value: product.specifications.capacity
      },
      {
        '@type': 'PropertyValue',
        name: 'Axles',
        value: product.specifications.axles
      }
    ]
  };
}

export function getArticleSchema(article: Article) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    image: [article.coverImage],
    datePublished: `${article.publishedAt}T08:00:00+00:00`,
    dateModified: `${article.publishedAt}T08:00:00+00:00`,
    author: {
      '@type': 'Person',
      name: article.author.name
    },
    publisher: {
      '@type': 'Organization',
      name: 'TRAILER COMMERCE',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/favicon.svg`
      }
    },
    description: article.excerpt
  };
}
