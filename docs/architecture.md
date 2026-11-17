# Architecture Specification — TRAILER COMMERCE

## 1. High-Level Architecture

The TRAILER COMMERCE platform is architected around a modern decoupled decoupled frontend/headless backend model designed to replace client Serkan's legacy WordPress installation:

```
+-------------------------------------------------------------+
|                       STOREFRONT (Astro)                    |
|   - High-Speed Pre-rendered Static Pages                    |
|   - Lightweight Island Hydration for Interactive Modals     |
|   - Real-time DOM Sync with Shared Demo State / CMS         |
+-------------------------------------------------------------+
                               |
              [Edge CDN Routing / Cache Layers]
                               |
+-------------------------------------------------------------+
|                    CLOUDFLARE INFRASTRUCTURE                |
|   - Global Pages Distribution (300+ Edge Nodes)             |
|   - R2 Bucket (Zero-Egress Object Storage for Media)        |
|   - D1 / Managed PostgreSQL Database                        |
+-------------------------------------------------------------+
                               |
              [REST / GraphQL Authenticated APIs]
                               |
+-------------------------------------------------------------+
|                     PAYLOAD CMS BACKEND                     |
|   - TypeScript Data Collections (Products, Categories)      |
|   - Role-Based Access Control (Admins, Editors)             |
|   - Real-time Webhook Triggers on Publish/Update            |
+-------------------------------------------------------------+
```

## 2. Storefront Rendering Strategy

- **Static Generation (SSG):** All routes (`/`, `/trailers`, `/trailers/[category]`, `/product/[slug]`, `/about`, `/blog`, `/blog/[slug]`, `/contact`) are statically pre-compiled into static HTML and CSS.
- **Incremental Rehydration:** Client-side components (comparison tray, live search overlay, quick-view modal, enquiry submission) load only when needed without blocking initial page paint.
- **JSON-LD Schema Hierarchy:** Every page programmatically injects valid Google-compliant structured data for rich snippets (`Organization`, `WebSite`, `Product`, `BreadcrumbList`, `Article`).

## 3. State Management & Frontend Simulation

In this prototype demonstration, persistence is powered by `src/utils/demo-state.ts`:
- Reads and writes to HTML5 `localStorage` under `trailer_commerce_demo_state_v2`.
- Custom window event `tc-demo-state-updated` broadcasts state mutations across all active browser windows and components.
- When an editor changes a price in `/admin/products/[id]`, storefront cards dynamically update their text nodes immediately.
