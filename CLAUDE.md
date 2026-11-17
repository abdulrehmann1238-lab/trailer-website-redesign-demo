# CLAUDE.md — TRAILER COMMERCE Engineering & Architecture Guidelines

This file provides project conventions, architecture instructions, and prompt commands for **Claude Code** when managing and extending the **TRAILER COMMERCE** application built for client **Serkan**.

---

## 1. Project Overview & Technology Stack

- **Framework:** Astro v5.x (Static Site Generation / Hybrid Edge Ready)
- **Language:** TypeScript (Strict mode enabled)
- **Styling:** Pure Modern CSS with custom properties (`src/styles/variables.css` & `src/styles/global.css`)
- **State Management:** Reactive local storage demo state (`src/utils/demo-state.ts`) with cross-tab and cross-component event broadcasting
- **Target CMS:** Payload CMS (Collections modeled for Products, Categories, Media, Articles, and Site Settings)
- **Deployment Platform:** Cloudflare Pages / Workers (`wrangler.toml`)

---

## 2. Essential Commands

```bash
# Start local development server (with network host)
npm run dev

# Check TypeScript types and compile production build
npm run build

# Preview static distribution output locally
npm run preview
```

---

## 3. Brand Identity & Art Direction

- **Brand Name:** TRAILER COMMERCE
- **Tagline:** BUILT FOR THE JOURNEY
- **Dominant Background (Warm Ivory):** `#F5F3ED`
- **Primary CTAs & Active Accents (Forest Green):** `#26372F`
- **Typography & Dark Elements (Deep Charcoal):** `#252724`
- **Accent Highlight (Muted Copper):** `#A66E4D` (use sparingly)
- **Typography:**
  - Headings: `Manrope`, `DM Sans`, sans-serif
  - Body Copy: `Inter`, `DM Sans`, sans-serif
  - Technical Labels / SKUs / GVWR: `IBM Plex Mono`, monospace

---

## 4. Key Workflows & Content Editing Prompts for Claude Code

When Serkan requests content or layout modifications, use the following patterns:

### A. Updating Homepage Copy or Hero Text
Edit `src/data/site-content.ts` under the `homepage` key.
*Example Prompt:*
> "In `src/data/site-content.ts`, update `homepage.heroHeadline` to 'COMMERCIAL-GRADE HAULING FOR EVERY INDUSTRY.' and change `heroDescription` to highlight our new heavy-duty tandem axle warranty."

### B. Modifying Existing Product Specifications or Prices
Edit `src/data/products.ts` or use the browser CMS interface at `/admin/products`.
*Example Prompt:*
> "In `src/data/products.ts`, update the price of 'Enclosed Cargo 6×12' to $4,950 and change its availability status to 'In Stock'."

### C. Adding a New Trailer Model
Add a new object adhering to the `Product` interface in `src/data/products.ts` with required fields: `id`, `name`, `slug`, `price`, `category`, `specifications` (dimensions, axles, capacity, material, colour, gvwr, emptyWeight, hitchType, brakes), `mainImage`, `gallery`, and SEO properties.

### D. Adjusting Contact Details or Company Bio
Update `src/data/site-content.ts` under `contact` and `about` keys.

---

## 5. Architectural Invariants & Rules

1. **No External Network Blocking in Components:** Do not add third-party tracker scripts or external APIs that break offline or sandbox rendering.
2. **Graceful Fallbacks for Images:** Always include an `onerror` handler pointing to a reliable high-res asset to prevent broken image icons if remote URLs change.
3. **Responsive Testing:** Verify interfaces at 360px, 768px, 1024px, and 1440px. Ensure tables use horizontal scrolling wrappers and filter drawers collapse smoothly on touch screens.
4. **Accessible Semantics:** Ensure proper `<nav>`, `<main>`, `<article>`, `<aside>`, and `<h1>` through `<h3>` heading hierarchies for optimal on-page SEO.
5. **No Lorem Ipsum:** All article text, FAQs, and product descriptions must remain realistic, professional, and commercially grounded.
