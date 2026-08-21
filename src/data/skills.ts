export interface SkillGroup {
  title: string;
  description: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    description: 'Responsive, accessible interfaces connected to real application workflows.',
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    title: 'Backend',
    description: 'Application logic, authentication, integrations, and maintainable service boundaries.',
    skills: ['PHP', 'Laravel', 'Node.js', 'REST API'],
  },
  {
    title: 'Data',
    description: 'Relational data modelling and dependable application-to-database integration.',
    skills: ['MySQL', 'PostgreSQL', 'Prisma ORM'],
  },
  {
    title: 'Infrastructure',
    description: 'Practical delivery and operation across local and server environments.',
    skills: ['Docker', 'Nginx', 'Ubuntu', 'Linux', 'Git', 'GitHub', 'GitHub Actions'],
  },
];

export const developmentCapabilities = [
  'Responsive Web Development',
  'Authentication',
  'API Integration',
  'Database Design',
  'Deployment',
  'Server Configuration',
  'System Maintenance',
  'Technical Documentation',
] as const;

export const skillGroupsId: SkillGroup[] = [
  {
    title: 'Frontend',
    description: 'Antarmuka responsif dan aksesibel yang terhubung dengan alur kerja aplikasi nyata.',
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    title: 'Backend',
    description: 'Logika aplikasi, autentikasi, integrasi, dan batas layanan yang mudah dipelihara.',
    skills: ['PHP', 'Laravel', 'Node.js', 'REST API'],
  },
  {
    title: 'Data',
    description: 'Pemodelan data relasional dan integrasi aplikasi dengan basis data yang andal.',
    skills: ['MySQL', 'PostgreSQL', 'Prisma ORM'],
  },
  {
    title: 'Infrastruktur',
    description: 'Pengiriman dan pengoperasian praktis pada lingkungan lokal maupun server.',
    skills: ['Docker', 'Nginx', 'Ubuntu', 'Linux', 'Git', 'GitHub', 'GitHub Actions'],
  },
];

export const developmentCapabilitiesId = [
  'Pengembangan Web Responsif',
  'Autentikasi',
  'Integrasi API',
  'Desain Basis Data',
  'Deployment',
  'Konfigurasi Server',
  'Pemeliharaan Sistem',
  'Dokumentasi Teknis',
] as const;
