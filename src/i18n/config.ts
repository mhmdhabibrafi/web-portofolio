export type Locale = 'en' | 'id';

export const defaultLocale: Locale = 'en';

export const localeMeta = {
  en: { lang: 'en', label: 'EN', name: 'English', ogLocale: 'en_US' },
  id: { lang: 'id', label: 'ID', name: 'Bahasa Indonesia', ogLocale: 'id_ID' },
} as const;

export const stripLocalePrefix = (pathname: string) => {
  if (pathname === '/id' || pathname === '/id/') return '/';
  return pathname.startsWith('/id/') ? pathname.slice(3) : pathname;
};

export const localizedPath = (pathname: string, locale: Locale) => {
  const basePath = stripLocalePrefix(pathname);
  if (basePath === '/404.html' || basePath === '/404/') return locale === 'en' ? '/' : '/id/';
  if (locale === 'en') return basePath;
  return basePath === '/' ? '/id/' : `/id${basePath}`;
};

export const alternateLocale = (locale: Locale): Locale => (locale === 'en' ? 'id' : 'en');

export const ui = {
  en: {
    navigation: { home: 'Home', about: 'About', projects: 'Projects', experience: 'Experience', contact: 'Contact' },
    header: { primaryNav: 'Primary navigation', mobileNav: 'Mobile navigation', openMenu: 'Open navigation menu', closeMenu: 'Close navigation menu' },
    footer: { built: 'Built with Astro and TypeScript.', backToTop: 'Back to top' },
    hero: {
      locationLine: 'Building reliable digital systems from Pekanbaru, Indonesia.',
      viewProjects: 'View Projects',
      viewExperience: 'View Experience',
      resume: 'Download Resume',
    },
    projectCard: { view: 'View case study', technologies: 'technologies', identity: 'project identity graphic' },
    timeline: { related: 'Read related case study', technologies: 'technologies' },
    project: {
      breadcrumbsHome: 'Home', breadcrumbsProjects: 'Projects', role: 'Role', period: 'Period', context: 'Context',
      visit: 'Visit project', source: 'View source', caseStudy: 'Case study', overview: 'Overview', problem: 'Problem', solution: 'Solution',
      myRole: 'My role', capabilities: 'Capabilities', architecture: 'Architecture', engineering: 'Engineering', outcome: 'Outcome',
      overviewEyebrow: 'Project overview', overviewTitle: 'Building the right system for the known problem', projectContext: 'Project context',
      problemTitle: 'The operational context', solutionTitle: 'A focused application response', capabilitiesEyebrow: 'Core capabilities', capabilitiesTitle: 'What the system supports',
      architectureEyebrow: 'Technical architecture', architectureTitle: 'How the application is structured', technologyStack: 'Technology stack',
      engineeringTitle: 'Implementation and decisions', challenges: 'Challenges', response: 'Response', outcomeTitle: 'What was delivered',
      galleryEyebrow: 'Project gallery', galleryTitle: 'Selected interface views', allProjects: 'All projects', conversation: 'Start a conversation',
    },
  },
  id: {
    navigation: { home: 'Beranda', about: 'Tentang', projects: 'Proyek', experience: 'Pengalaman', contact: 'Kontak' },
    header: { primaryNav: 'Navigasi utama', mobileNav: 'Navigasi seluler', openMenu: 'Buka menu navigasi', closeMenu: 'Tutup menu navigasi' },
    footer: { built: 'Dibangun dengan Astro dan TypeScript.', backToTop: 'Kembali ke atas' },
    hero: {
      locationLine: 'Membangun sistem digital yang andal dari Pekanbaru, Indonesia.',
      viewProjects: 'Lihat Proyek',
      viewExperience: 'Lihat Pengalaman',
      resume: 'Unduh Resume',
    },
    projectCard: { view: 'Lihat studi kasus', technologies: 'teknologi', identity: 'identitas visual proyek' },
    timeline: { related: 'Baca studi kasus terkait', technologies: 'teknologi' },
    project: {
      breadcrumbsHome: 'Beranda', breadcrumbsProjects: 'Proyek', role: 'Peran', period: 'Periode', context: 'Konteks',
      visit: 'Kunjungi proyek', source: 'Lihat kode sumber', caseStudy: 'Studi kasus', overview: 'Ringkasan', problem: 'Masalah', solution: 'Solusi',
      myRole: 'Peran saya', capabilities: 'Kapabilitas', architecture: 'Arsitektur', engineering: 'Rekayasa', outcome: 'Hasil',
      overviewEyebrow: 'Ringkasan proyek', overviewTitle: 'Membangun sistem yang tepat untuk masalah yang diketahui', projectContext: 'Konteks proyek',
      problemTitle: 'Konteks operasional', solutionTitle: 'Respons aplikasi yang terarah', capabilitiesEyebrow: 'Kapabilitas utama', capabilitiesTitle: 'Hal yang didukung sistem',
      architectureEyebrow: 'Arsitektur teknis', architectureTitle: 'Struktur aplikasi', technologyStack: 'Teknologi',
      engineeringTitle: 'Implementasi dan keputusan', challenges: 'Tantangan', response: 'Respons', outcomeTitle: 'Hasil yang diselesaikan',
      galleryEyebrow: 'Galeri proyek', galleryTitle: 'Tampilan antarmuka pilihan', allProjects: 'Semua proyek', conversation: 'Mulai percakapan',
    },
  },
} as const;
