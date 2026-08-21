export interface Profile {
  name: string;
  shortName: string;
  title: string;
  positions: string[];
  location: string;
  city: string;
  region: string;
  country: string;
  university: string;
  major: string;
  domain: string;
  summary: string;
  email: string | null;
}

export const profile: Profile = {
  name: 'Muhammad Habib Rafi',
  shortName: '</>',
  title: 'Full Stack Web Developer',
  positions: ['Information Systems Student', 'Full Stack Web Developer', 'Tech Writer'],
  location: 'Pekanbaru, Riau, Indonesia',
  city: 'Pekanbaru',
  region: 'Riau',
  country: 'Indonesia',
  university: 'Universitas Islam Negeri Sultan Syarif Kasim Riau',
  major: 'Information Systems',
  domain: 'https://mhmdhabibrafi.me',
  summary:
    'I build web applications, backend services, APIs, and operational systems with a focus on reliability, usability, and maintainable implementation.',
  email: 'mhmdhabibrafi@gmail.com',
};

export const profileId: Profile = {
  ...profile,
  positions: ['Mahasiswa Sistem Informasi', 'Full Stack Web Developer', 'Penulis Teknologi'],
  summary:
    'Saya membangun aplikasi web, layanan backend, API, dan sistem operasional dengan fokus pada keandalan, kemudahan penggunaan, dan implementasi yang mudah dipelihara.',
};
