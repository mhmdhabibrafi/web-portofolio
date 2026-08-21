# Deployment Guide

This site is configured for static deployment to GitHub Pages using the custom domain `mhmdhabibrafi.me`.

## 1. Prepare the repository

Push the project to GitHub with `package-lock.json` committed. The deployment workflow runs on pushes to the `main` branch and can also be started manually from the Actions tab.

Before pushing, validate locally:

```bash
npm ci
npm run check
npm run build
npm run check:seo
```

## 2. Configure GitHub Pages

1. Open the repository on GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, select **GitHub Actions** as the source.
4. Push to `main` or run **Deploy to GitHub Pages** manually.
5. Confirm that both the build and deploy jobs complete successfully.

The workflow uses read-only repository access plus the `pages: write` and `id-token: write` permissions required for Pages deployment. It does not commit `dist`.

## 3. Configure the custom domain

The source already contains `public/CNAME` with:

```text
mhmdhabibrafi.me
```

Astro's `site` value is `https://mhmdhabibrafi.me` and no repository `base` is configured.

At the DNS provider, create the records GitHub currently documents for an apex domain. DNS endpoints can change, so copy the current values from the official [GitHub Pages custom-domain documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages) rather than relying on copied IP addresses in this repository.

After DNS resolves:

1. Return to **Settings → Pages**.
2. Confirm the custom domain is `mhmdhabibrafi.me`.
3. Wait for GitHub's DNS check to pass.
4. Enable **Enforce HTTPS** when the option becomes available.
5. Check both the apex domain and the HTTPS URL in a private browser window.

Avoid adding a `base` path for the repository name while the custom apex domain is in use.

## 4. Google Search Console

1. Deploy the public HTTPS site.
2. Add a Domain property for `mhmdhabibrafi.me` in Google Search Console.
3. Add the TXT record Google supplies to the DNS zone.
4. Complete verification after DNS propagation.
5. Submit `https://mhmdhabibrafi.me/sitemap-index.xml`.
6. Request indexing for the homepage and primary project case studies.
7. Monitor Page Indexing, Core Web Vitals, and Search Performance.

The optional `PUBLIC_GOOGLE_SITE_VERIFICATION` environment variable supports an HTML verification meta value, but the Domain property still uses DNS verification. Do not invent or commit a verification token.

## 5. Updating content and assets

- Project data: `src/content/projects/`
- Shared profile data: `src/data/profile.ts`
- Profile photo: `public/images/profile/`
- Resume: `public/Muhammad-Habib-Rafi-CV.pdf`
- Social image definitions: `scripts/generate-og.mjs`

Every push should retain the production validation steps in the workflow.

## Troubleshooting

### Build job fails

Run `npm ci`, `npm run check`, `npm run build`, and `npm run check:seo` locally using a supported Node.js version. Commit the lockfile whenever dependencies change.

### Custom domain returns a Pages error

Confirm the repository Pages source is GitHub Actions, the latest deploy job succeeded, `dist/CNAME` was produced, and DNS matches GitHub's current documentation. DNS propagation may take time.

### Styles or links point to a repository subpath

Remove any `base` configuration. This project is designed for the custom apex domain, where routes begin at `/`.

### Sitemap cannot be found

Confirm the build generated `dist/sitemap-index.xml`, deploy the newest artifact, and check that `robots.txt` references the HTTPS custom-domain URL.

### HTTPS is unavailable

Wait for DNS verification and certificate issuance to complete, then enable **Enforce HTTPS** in the Pages settings. Do not place an unrelated proxy in front of the domain while diagnosing certificate issuance.
