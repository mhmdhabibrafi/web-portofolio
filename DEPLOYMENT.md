# Deployment Guide

This site is configured for static deployment at `https://mhmdhabibrafi.github.io/web-portofolio/`.

## GitHub Pages

1. Open the repository **Settings → Pages**.
2. Set **Build and deployment → Source** to **GitHub Actions**.
3. Push to `main` or run **Deploy to GitHub Pages** from the Actions tab.
4. Wait until both the build and deploy jobs are successful.

The workflow validates, builds, audits, uploads, and deploys the static Astro output. It uses read-only repository access plus the `pages: write` and `id-token: write` permissions required by GitHub Pages.

## Project-site path

Astro uses:

- Site origin: `https://mhmdhabibrafi.github.io`
- Base path: `/web-portofolio`

Keep the base path while the website is hosted at the repository URL. It ensures styles, images, scripts, localized routes, canonical links, and social images resolve from the correct location. This deployment does not use a `CNAME` file.

## Local validation

```bash
npm ci
npm run check
npm run build
npm run check:seo
```

The generated `dist/` directory is deployment output and must not be committed.

## Google Search Console

After deployment:

1. Add the URL-prefix property `https://mhmdhabibrafi.github.io/web-portofolio/`.
2. Complete the verification method supplied by Google.
3. Submit `https://mhmdhabibrafi.github.io/web-portofolio/sitemap-index.xml`.

## Troubleshooting

### GitHub Pages displays README

The Pages source is still **Deploy from a branch**. Change it to **GitHub Actions** and rerun the deployment workflow.

### The HTML appears without styles

Keep Astro's `base` set to `/web-portofolio`, rebuild, and redeploy. Missing base-path prefixes make the browser request assets from the account root.

### Build fails

Run all local validation commands and commit `package-lock.json` whenever dependencies change.
