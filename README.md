# TRAILER COMMERCE — Premium Commercial Trailer E-Commerce Demonstration

> **Built for Client Serkan** as a high-performance, modern replacement for an outdated WordPress trailer e-commerce site.

TRAILER COMMERCE demonstrates a top-tier automotive and outdoor equipment digital storefront coupled with a realistic **Payload CMS** administration experience and **Cloudflare** edge deployment architecture.

---

## 🌟 Executive Summary & Key Highlights

- **Visual Design:** Automotive editorial aesthetic built with Warm Ivory (`#F5F3ED`), Forest Green (`#26372F`), Deep Charcoal (`#252724`), and Muted Copper (`#A66E4D`).
- **Cinematic Homepage:** Full-width hero with responsive media, trust commitments strip, 5 interactive category cards, featured collection, editorial split section, and journal previews.
- **Full E-Commerce Catalogue (`/trailers`):** Live instant search, category filters, price ranges, axle setup toggles, availability filtering, and dynamic sorting.
- **Product Detail Experience (`/product/[slug]`):** High-definition gallery with thumbnail switching, full-screen interactive lightbox, comprehensive technical specifications, related models, and quotation modal.
- **Side-by-Side Product Comparison:** Select up to 3 trailers to inspect dimensions, axles, payload capacities, materials, and prices in a responsive side-by-side matrix.
- **Payload CMS Administration (`/admin`):**
  - **Login:** `/admin/login` (Simulated authentication: `admin@trailercommerce.demo` / `TrailerDemo123!`).
  - **Interactive Inventory Management:** Add, edit, duplicate, and delete trailer products.
  - **Live Storefront Synchronization:** Edits made to prices, descriptions, or photographs instantly reflect across the storefront using shared demo state!
  - **Real-Time Google SEO Preview:** Interactive SERP snippet with live title/description character counters and health scoring.
  - **Media Library (`/admin/media`):** Drag-and-drop browser-side image upload with metadata editing.
  - **Static Pages Editor (`/admin/pages`):** Modify hero copy, About text, and contact information.
- **SEO & Performance Architecture:** Comprehensive JSON-LD structured schemas (`Organization`, `WebSite`, `Product`, `BreadcrumbList`, `Article`), clean URLs, canonical links, Open Graph sharing cards, and responsive image loading.

---

## 📂 Required Routes Implemented

### Storefront Routes
- `/` — Homepage (Cinematic hero, trust strip, categories, featured products, editorial split, why choose us, journal preview, footer)
- `/trailers` — Full e-commerce catalogue with live search, filters, drawer, and sorting
- `/trailers/enclosed-trailers` — Enclosed cargo trailers category page with unique hero, specs & FAQs
- `/trailers/utility-trailers` — Open utility & landscaping category page
- `/trailers/flatbed-trailers` — Heavy-duty flatbed & car hauler category page
- `/trailers/cargo-trailers` — High-cube aerodynamic cargo category page
- `/trailers/horse-trailers` — Equestrian & horse transport category page
- `/product/[slug]` — High-fidelity product detail pages with gallery lightbox & enquiry trigger
- `/about` — Editorial company page, craftsmanship philosophy, and 3-step buying experience
- `/blog` — Journal listing with featured guide and topic filter
- `/blog/[slug]` — Complete technical guides with sticky Table of Contents & author metadata
- `/contact` — Commercial enquiry page with telephone, email, and interactive quote form

### Admin Routes (Payload CMS Architecture)
- `/admin/login` — Authentication portal with 1-click credential auto-fill
- `/admin` — Metrics overview dashboard, recent inventory table, activity stream, and quick tasks
- `/admin/products` — Complete inventory table with search, category filtering, duplicate & delete
- `/admin/products/new` — New product builder with live SEO snippet preview
- `/admin/products/[id]` — Product editor with photo replacer, price adjuster & instant sync
- `/admin/categories` — Category manager with inline modal editor
- `/admin/media` — Media library with drag-and-drop upload & alt-text editor
- `/admin/posts` — Journal articles manager
- `/admin/posts/new` — Article composer with rich text formatting controls (Bold, Italic, H2, H3, Lists, Links)
- `/admin/pages` — Homepage, About, and Contact live text editor
- `/admin/settings` — Global brand tokens and demonstration factory reset

### Documentation & Handover
- `/handover` — Comprehensive client architectural handover and deployment guide

---

## 🛠️ Technology Stack

| Layer | Technology | Purpose |
|---|---|---|
| **Framework** | [Astro v5](https://astro.build/) | Static Site Generation & Hybrid Edge Performance |
| **Language** | TypeScript (v5.7) | Type-safe data contracts for products & articles |
| **Styling** | Modern CSS | CSS custom properties, zero runtime overhead |
| **Demo State** | HTML5 `localStorage` + Events | Seamless synchronization between Admin & Storefront |
| **Hosting** | Cloudflare Pages / Workers | Global CDN with sub-100ms TTFB |
| **Target CMS** | Payload CMS | Documented headless architecture for future production |

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js (v18.0 or newer recommended; v24 verified)
- npm or pnpm

### 2. Development
```bash
# Install dependencies
npm install

# Start local dev server
npm run dev
```
Navigate to `http://localhost:4321` in your browser.

### 3. Production Build
```bash
npm run build
```
Generates a verified, pre-rendered static build in `dist/`.

---

## 🔄 The Live Demonstration Workflow

To demonstrate the power of the headless architecture to client Serkan:
1. Open the storefront homepage at `/`.
2. Scroll to the footer or click **CMS ADMIN DEMO** in the header drawer.
3. Sign in at `/admin/login` using `admin@trailercommerce.demo` / `TrailerDemo123!`.
4. Go to **Products** (`/admin/products`) and click **Edit** on `Enclosed Cargo 6×12`.
5. Change the price from `$4,850` to `$5,250`.
6. Select a different preset photograph or upload a local image file.
7. Click **Save Changes**.
8. Return to the storefront (`/` or `/trailers` or `/product/enclosed-cargo-6x12`).
9. **Notice:** The price and photo update across every card, comparison tray, and detail page immediately!
