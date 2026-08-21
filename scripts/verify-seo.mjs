import { access, readFile, readdir } from 'node:fs/promises';
import { extname, join, relative } from 'node:path';

const distDirectory = join(process.cwd(), 'dist');
const failures = [];
const seenTitles = new Map();
const seenCanonicals = new Map();

const collectHtmlFiles = async (directory) => {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(entries.map((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? collectHtmlFiles(path) : extname(entry.name) === '.html' ? [path] : [];
  }));
  return files.flat();
};

const has = (html, pattern) => pattern.test(html);
const forbiddenPatterns = [
  [/localhost/iu, 'localhost'],
  [/example\.com/iu, 'example.com'],
  [/Lorem Ipsum/iu, 'Lorem Ipsum'],
  [/John Doe/iu, 'John Doe'],
  [/your@email/iu, 'your@email'],
  [/\bTODO\b/iu, 'TODO'],
];

try {
  await access(distDirectory);
} catch {
  console.error('SEO verification requires a production build. Run npm run build first.');
  process.exit(1);
}

const htmlFiles = await collectHtmlFiles(distDirectory);
const routeForFile = (file) => {
  const outputPath = relative(distDirectory, file).replaceAll('\\', '/');
  if (outputPath === 'index.html') return '/';
  if (outputPath.endsWith('/index.html')) return `/${outputPath.slice(0, -'index.html'.length)}`;
  return `/${outputPath}`;
};
const publicRoutes = new Set(htmlFiles.map(routeForFile));

for (const file of htmlFiles) {
  const html = await readFile(file, 'utf8');
  const page = relative(distDirectory, file).replaceAll('\\', '/');
  const checks = [
    [/<title>[^<]+<\/title>/iu, 'title'],
    [/<meta\s+name="description"\s+content="[^"]+"/iu, 'meta description'],
    [/<link\s+rel="canonical"\s+href="https:\/\/mhmdhabibrafi\.me\/[^"]*"/iu, 'absolute canonical'],
    [/<h1(?:\s[^>]*)?>[\s\S]*?<\/h1>/iu, 'H1'],
    [/<meta\s+property="og:title"\s+content="[^"]+"/iu, 'Open Graph title'],
    [/<meta\s+property="og:description"\s+content="[^"]+"/iu, 'Open Graph description'],
    [/<meta\s+property="og:image"\s+content="https:\/\/mhmdhabibrafi\.me\/og\/[^"]+\.png"/iu, 'Open Graph image'],
    [/<meta\s+name="robots"\s+content="[^"]+"/iu, 'robots metadata'],
    [/<script\s+type="application\/ld\+json">[\s\S]*?<\/script>/iu, 'JSON-LD'],
    [/<html\s+lang="(?:en|id)"/iu, 'supported HTML language'],
  ];

  for (const [pattern, label] of checks) {
    if (!has(html, pattern)) failures.push(`${page}: missing ${label}`);
  }

  const h1Count = (html.match(/<h1(?:\s[^>]*)?>/giu) ?? []).length;
  if (h1Count !== 1) failures.push(`${page}: expected exactly one H1, found ${h1Count}`);

  if (page !== '404.html') {
    for (const language of ['en', 'id', 'x-default']) {
      const alternatePattern = new RegExp(`<link\\s+rel="alternate"\\s+hreflang="${language}"\\s+href="https:\\/\\/mhmdhabibrafi\\.me\\/[^"]*"`, 'iu');
      if (!alternatePattern.test(html)) failures.push(`${page}: missing ${language} hreflang alternate`);
    }
  }

  for (const [pattern, label] of forbiddenPatterns) {
    if (has(html, pattern)) failures.push(`${page}: contains forbidden production text: ${label}`);
  }

  const title = html.match(/<title>([^<]+)<\/title>/iu)?.[1];
  const canonical = html.match(/<link\s+rel="canonical"\s+href="([^"]+)"/iu)?.[1];
  if (title) {
    if (seenTitles.has(title)) failures.push(`${page}: duplicate title also used by ${seenTitles.get(title)}`);
    seenTitles.set(title, page);
  }
  if (canonical) {
    if (seenCanonicals.has(canonical)) failures.push(`${page}: duplicate canonical also used by ${seenCanonicals.get(canonical)}`);
    seenCanonicals.set(canonical, page);
  }

  for (const imageTag of html.match(/<img\s[^>]*>/giu) ?? []) {
    if (!/\salt="[^"]+"/iu.test(imageTag)) failures.push(`${page}: image is missing descriptive alt text`);
    if (!/\swidth="\d+"/iu.test(imageTag) || !/\sheight="\d+"/iu.test(imageTag)) {
      failures.push(`${page}: image is missing explicit width or height`);
    }
  }

  for (const anchorTag of html.match(/<a\s[^>]*>/giu) ?? []) {
    if (/\starget="_blank"/iu.test(anchorTag) && !/\srel="[^"]*noopener[^"]*noreferrer[^"]*"/iu.test(anchorTag)) {
      failures.push(`${page}: external new-tab link is missing noopener and noreferrer`);
    }
  }

  const internalLinks = [...html.matchAll(/\shref="(\/[^"#?]*)/giu)].map((match) => match[1]);
  for (const href of internalLinks) {
    if (!href || href.startsWith('/_astro/')) continue;
    const isPageLink = href === '/' || href.endsWith('/') || href.endsWith('.html');
    if (isPageLink && !publicRoutes.has(href)) failures.push(`${page}: broken internal page link ${href}`);
  }

  const ogImage = html.match(/<meta\s+property="og:image"\s+content="https:\/\/mhmdhabibrafi\.me(\/og\/[^"]+\.png)"/iu)?.[1];
  if (ogImage) {
    try {
      await access(join(distDirectory, ogImage.slice(1)));
    } catch {
      failures.push(`${page}: referenced Open Graph image does not exist: ${ogImage}`);
    }
  }
}

for (const requiredFile of ['CNAME', 'robots.txt', 'sitemap-index.xml']) {
  try {
    await access(join(distDirectory, requiredFile));
  } catch {
    failures.push(`dist/${requiredFile}: missing required deployment or crawl asset`);
  }
}

if (failures.length > 0) {
  console.error(`SEO verification failed with ${failures.length} issue(s):`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(`SEO verification passed for ${htmlFiles.length} HTML pages.`);
