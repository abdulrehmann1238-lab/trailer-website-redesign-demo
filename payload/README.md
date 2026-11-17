# Payload CMS Production Integration Blueprint

This document specifies the exact Payload CMS collection definitions, server architecture, and migration path from this frontend prototype to a live production database.

---

## 1. Nico's "Adding Payload CMS to Your Astro Site" Context

The client Serkan specifically referenced the workflow popularized by Nico | AI Ranking for combining Astro with Payload CMS.

### Authentic Architecture Note:
In production, Payload CMS runs as a Node.js / Express or Next.js serverless application backed by a database (PostgreSQL, MongoDB, or SQLite/Cloudflare D1 via LibSQL). Payload is **not** a purely static browser bundle. 

In this demonstration prototype:
- We have implemented a realistic, fully interactive CMS interface modeled after Payload's design tokens and collection workflows.
- Edits persist locally in browser storage and dynamically update the storefront without requiring a live database server.
- The schemas below provide the exact code required to transition this prototype into a full production Payload backend.

---

## 2. Proposed Payload Collection Schemas

### A. Products Collection (`src/collections/Products.ts`)
```typescript
import { CollectionConfig } from 'payload/types';

export const Products: CollectionConfig = {
  slug: 'products',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'category', 'price', 'availability', 'updatedAt']
  },
  access: {
    read: () => true // Public read access
  },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true },
    { name: 'price', type: 'number', required: true },
    { name: 'salePrice', type: 'number' },
    { name: 'category', type: 'relationship', relationTo: 'categories', required: true },
    { name: 'shortDescription', type: 'textarea', required: true },
    { name: 'description', type: 'richText', required: true },
    { name: 'mainImage', type: 'upload', relationTo: 'media', required: true },
    { name: 'gallery', type: 'array', fields: [{ name: 'image', type: 'upload', relationTo: 'media' }] },
    {
      name: 'specifications',
      type: 'group',
      fields: [
        { name: 'dimensions', type: 'text', required: true },
        { name: 'axles', type: 'text', required: true },
        { name: 'material', type: 'text', required: true },
        { name: 'capacity', type: 'text', required: true },
        { name: 'colour', type: 'text' },
        { name: 'gvwr', type: 'text' },
        { name: 'emptyWeight', type: 'text' },
        { name: 'hitchType', type: 'text' },
        { name: 'brakes', type: 'text' },
        {
          name: 'availability',
          type: 'select',
          options: ['In Stock', 'Built to Order', 'Available Soon'],
          defaultValue: 'In Stock'
        }
      ]
    },
    {
      name: 'seo',
      type: 'group',
      fields: [
        { name: 'title', type: 'text' },
        { name: 'description', type: 'textarea' }
      ]
    }
  ]
};
```

---

## 3. Production Migration Steps

1. Install Payload CMS dependencies:
   ```bash
   npm install payload @payloadcms/db-postgres @payloadcms/richtext-lexical
   ```
2. Initialize Payload configuration in `payload.config.ts`.
3. Configure environment variables for database connection (`DATABASE_URI`).
4. Set up webhook notifications from Payload to trigger Astro on-demand cache revalidation when products are created, edited, or archived.
