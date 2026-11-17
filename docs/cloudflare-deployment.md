# Cloudflare Deployment & Edge Infrastructure Guide

This guide details how to configure and deploy the TRAILER COMMERCE project onto Cloudflare Pages and Workers.

---

## 1. Cloudflare Pages Configuration

The repository includes a production-ready `wrangler.toml` file configured for Cloudflare edge routing:

```toml
name = "trailer-commerce"
compatibility_date = "2024-09-23"
compatibility_flags = ["nodejs_compat"]
pages_build_output_dir = "dist"

[env.production]
vars = { ENVIRONMENT = "production", SITE_URL = "https://trailercommerce.demo" }
```

### Dashboard Setup Steps:
1. Log into your Cloudflare Dashboard and navigate to **Workers & Pages**.
2. Select **Create application** > **Pages** > **Connect to Git**.
3. Choose your repository (e.g. `serkan/trailer-commerce`).
4. Set the build configuration:
   - **Framework preset:** `Astro`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
5. Click **Save and Deploy**.

---

## 2. Continuous Deployment Pipeline

Any commit pushed to the `main` branch automatically triggers Cloudflare's edge build pipeline:
1. Cloudflare clones the repository.
2. Runs `npm install` and `npm run build`.
3. Verifies strict TypeScript contracts and pre-renders static HTML.
4. Distributes compiled assets across Cloudflare's global edge network (300+ PoPs).
5. Provides a unique, immutable preview URL for every pull request (Deploy Previews).

---

## 3. Custom Domain & SSL

1. In Cloudflare Pages, go to **Custom Domains**.
2. Enter your commercial domain (e.g., `trailercommerce.com`).
3. Cloudflare automatically issues and manages free Universal SSL/TLS certificates with HTTP/3 support and automatic HSTS enforcement.
