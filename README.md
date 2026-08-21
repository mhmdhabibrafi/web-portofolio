# Muhammad Habib Rafi — Portfolio

A production-oriented bilingual personal portfolio for Muhammad Habib Rafi, Full Stack Web Developer in Pekanbaru, Indonesia. The site is static, content-driven, accessible, and deployed as a GitHub Pages project site at [mhmdhabibrafi.github.io/web-portofolio](https://mhmdhabibrafi.github.io/web-portofolio/).

## Tech stack

- Astro with strict TypeScript and static site generation
- Astro Content Collections using the Content Layer API
- Tailwind CSS through the Tailwind Vite plugin
- Local inline SVG interface and brand icons with no icon-font dependency
- Manrope and Sora typography loaded through Google Fonts
- Astro Sitemap and JSON-LD structured data
- Sharp-generated 1200 × 630 Open Graph images
- GitHub Actions and GitHub Pages

No backend, database, UI framework, analytics script, or client framework is included.

## Languages

- English is the default language at `/`.
- Bahasa Indonesia is generated as static HTML under `/id/`.
- Important pages and all five project case studies have equivalent localized routes.
- Every indexable page provides self-referencing canonical metadata plus `en`, `id`, and `x-default` hreflang links.
- The visible language switcher keeps visitors on the equivalent page when changing language.

## Local development

Requirements: Node.js 22.12 or newer and npm.

```bash
npm install
npm run dev
```

Useful commands:

```bash
npm run check
npm run build
npm run check:seo
npm run preview
```

`check:seo` expects an existing `dist` directory, so run it after the production build.

## Project structure

```text
src/
├── components/         Reusable Astro UI and SEO components
├── content/            English and Indonesian Markdown project case studies
├── assets/             Source images optimized by Astro (credentials and organization assets)
├── data/               Typed profile, skills, education, experience, and publication data
├── layouts/            Shared site and case-study layouts
├── pages/              Static routes and project route generation
└── styles/             Global design system and responsive styles
public/
├── images/             Profile and project assets
└── og/                 Generated social sharing images
scripts/                OG generation and production SEO audit
```

## Content management

Profile and shared information live in `src/data/`. Keep name, title, social links, location, education, grouped experience, publications, and skills there instead of duplicating them in components. Experience entries are separated into professional/internship, leadership/research, and selected learning programs so their context stays clear.

Source images that should pass through Astro's image optimization pipeline live in `src/assets/`. The interface uses Manrope and Sora through the Google Fonts CSS API. Interface icons are rendered as local inline SVGs so they remain reliable when external fonts are unavailable.

English project case studies live in `src/content/projects/`; Indonesian versions live in `src/content/projects-id/`. Both collections share the schema in `src/content.config.ts`. Optional fields remain hidden when they have no verified value.

### Add a project

1. Add matching Markdown files in `src/content/projects/` and `src/content/projects-id/`.
2. Provide the required schema fields and only confirmed optional information.
3. Add a project cover under `public/images/projects/<project-slug>/` and reference it with `coverImage`.
4. Add the page name to `scripts/generate-og.mjs` so it receives a social image.
5. Run the check, build, and SEO audit commands.

The route is generated from the frontmatter `slug` at `/projects/<slug>/`.

## Profile photo and resume

Add a profile image in AVIF, WebP, PNG, or JPEG format to `public/images/profile/`. The hero detects the first supported image during the static build. Use a square, appropriately compressed portrait for the best result. Without an image, the MHR identity graphic is rendered.

To enable the resume button, add the real document as:

```text
public/Muhammad-Habib-Rafi-CV.pdf
```

The button is omitted automatically while the file is absent. No placeholder CV is included, and the hero uses a `</>` coding symbol when no profile image is provided.

## SEO configuration

- The production site URL is set in `astro.config.mjs`.
- Shared metadata is rendered by `src/components/SEO.astro`.
- Page-specific Person, WebSite, ProfilePage, CollectionPage, ContactPage, project, and breadcrumb JSON-LD is generated statically.
- `@astrojs/sitemap` creates the sitemap index; `public/robots.txt` points to it.
- `scripts/generate-og.mjs` creates local 1200 × 630 PNG sharing images before every build.
- `scripts/verify-seo.mjs` audits every generated HTML file for essential metadata, a single H1, JSON-LD, and forbidden production placeholders.

Google site verification can be supplied at build time as `PUBLIC_GOOGLE_SITE_VERIFICATION`. Do not commit the real value if the deployment environment should own it.

## Production build

```bash
npm ci
npm run check
npm run build
npm run check:seo
```

The generated `dist/` directory is deployable as a static website and should not be committed.

## GitHub Pages deployment

The workflow in `.github/workflows/deploy.yml` validates, builds, audits, uploads, and deploys the site on pushes to `main` or manual dispatch. Set the repository Pages source to **GitHub Actions**.

Astro uses the `/web-portofolio` base path required by GitHub project sites. See [DEPLOYMENT.md](./DEPLOYMENT.md) for activation, verification, and troubleshooting steps.

## Google Search Console

After the GitHub Pages deployment is live:

1. Add a URL-prefix property for `https://mhmdhabibrafi.github.io/web-portofolio/`.
2. Complete the verification method supplied by Google.
3. Submit `https://mhmdhabibrafi.github.io/web-portofolio/sitemap-index.xml`.
4. Request indexing for the homepage and principal project pages.
5. Monitor Page Indexing, Core Web Vitals, and Search Performance.
