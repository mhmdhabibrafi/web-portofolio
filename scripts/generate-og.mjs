import { mkdir } from 'node:fs/promises';
import { join } from 'node:path';
import sharp from 'sharp';

const outputDirectory = join(process.cwd(), 'public', 'og');
const pages = [
  { file: 'default.png', eyebrow: 'FULL STACK WEB DEVELOPER', title: 'Muhammad Habib Rafi', subtitle: 'Web applications · Backend services · APIs' },
  { file: 'about.png', eyebrow: 'ABOUT', title: 'Building across the full stack', subtitle: 'Muhammad Habib Rafi · Full Stack Web Developer' },
  { file: 'projects.png', eyebrow: 'PROJECTS', title: 'Software built for real workflows', subtitle: 'Muhammad Habib Rafi · Full Stack Web Developer' },
  { file: 'experience.png', eyebrow: 'EXPERIENCE', title: 'Development, leadership & research', subtitle: 'Muhammad Habib Rafi · Pekanbaru, Indonesia' },
  { file: 'contact.png', eyebrow: 'CONTACT', title: "Let's build something useful", subtitle: 'Muhammad Habib Rafi · GitHub Pages' },
  { file: 'sadar-finance.png', eyebrow: 'CAPSTONE PROJECT', title: 'SADAR Finance', subtitle: 'Muhammad Habib Rafi · Full Stack Web Developer' },
  { file: 'bungsu-gym-management-system.png', eyebrow: 'CLIENT PROJECT', title: 'Bungsu Gym Management System', subtitle: 'Muhammad Habib Rafi · Full Stack Web Developer' },
  { file: 'ascit.png', eyebrow: 'INTERNSHIP PROJECT', title: 'ASCIT', subtitle: 'Asset Care Information Technology' },
  { file: 'rai.png', eyebrow: 'SOFTWARE PROJECT', title: 'RAI', subtitle: 'Resilience Artificial Intelligence' },
  { file: 'rentak.png', eyebrow: 'INFORMATION SYSTEM', title: 'RENTAK', subtitle: 'Muhammad Habib Rafi · Full Stack Web Developer' },
  { file: 'id-default.png', eyebrow: 'FULL STACK WEB DEVELOPER', title: 'Muhammad Habib Rafi', subtitle: 'Aplikasi web · Layanan backend · API' },
  { file: 'id-about.png', eyebrow: 'TENTANG', title: 'Membangun di seluruh stack', subtitle: 'Muhammad Habib Rafi · Full Stack Web Developer' },
  { file: 'id-projects.png', eyebrow: 'PROYEK', title: 'Perangkat lunak untuk alur nyata', subtitle: 'Muhammad Habib Rafi · Full Stack Web Developer' },
  { file: 'id-experience.png', eyebrow: 'PENGALAMAN', title: 'Pengembangan, kepemimpinan & riset', subtitle: 'Muhammad Habib Rafi · Pekanbaru, Indonesia' },
  { file: 'id-contact.png', eyebrow: 'KONTAK', title: 'Mari membangun sesuatu yang berguna', subtitle: 'Muhammad Habib Rafi · GitHub Pages' },
  { file: 'id-sadar-finance.png', eyebrow: 'PROYEK CAPSTONE', title: 'SADAR Finance', subtitle: 'Muhammad Habib Rafi · Full Stack Web Developer' },
  { file: 'id-bungsu-gym-management-system.png', eyebrow: 'PROYEK CLIENT', title: 'Bungsu Gym Management System', subtitle: 'Muhammad Habib Rafi · Full Stack Web Developer' },
  { file: 'id-ascit.png', eyebrow: 'PROYEK MAGANG', title: 'ASCIT', subtitle: 'Asset Care Information Technology' },
  { file: 'id-rai.png', eyebrow: 'PROYEK PERANGKAT LUNAK', title: 'RAI', subtitle: 'Resilience Artificial Intelligence' },
  { file: 'id-rentak.png', eyebrow: 'SISTEM INFORMASI', title: 'RENTAK', subtitle: 'Muhammad Habib Rafi · Full Stack Web Developer' },
];

const escapeXml = (value) => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&apos;');

const createSvg = ({ eyebrow, title, subtitle }) => `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="background" x1="0" y1="0" x2="1" y2="1">
      <stop stop-color="#111827"/>
      <stop offset="1" stop-color="#070a11"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#background)"/>
  <circle cx="1090" cy="70" r="310" fill="#759bff" opacity="0.10"/>
  <rect x="64" y="64" width="1072" height="502" rx="28" fill="none" stroke="#2b3547" stroke-width="2"/>
  <text x="108" y="166" fill="#9db7ff" font-family="Arial, sans-serif" font-size="23" font-weight="700" letter-spacing="5">${escapeXml(eyebrow)}</text>
  <text x="108" y="315" fill="#f4f7fb" font-family="Arial, sans-serif" font-size="66" font-weight="700" letter-spacing="-2">${escapeXml(title)}</text>
  <text x="108" y="380" fill="#aab5c6" font-family="Arial, sans-serif" font-size="27">${escapeXml(subtitle)}</text>
  <rect x="108" y="446" width="112" height="5" rx="2.5" fill="#5fd5dd"/>
  <text x="108" y="518" fill="#7f8a9b" font-family="Arial, sans-serif" font-size="20" letter-spacing="2">GITHUB.IO / WEB-PORTOFOLIO</text>
  <text x="1015" y="518" fill="#9db7ff" font-family="monospace" font-size="25" font-weight="700">&lt;/&gt;</text>
</svg>`;

await mkdir(outputDirectory, { recursive: true });
await Promise.all(
  pages.map((page) =>
    sharp(Buffer.from(createSvg(page)))
      .png({ compressionLevel: 9, palette: true })
      .toFile(join(outputDirectory, page.file)),
  ),
);

console.log(`Generated ${pages.length} Open Graph images at 1200×630.`);
