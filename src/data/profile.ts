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
  positions: ['Full Stack Web Developer', 'Information Systems Student'],
  location: 'Pekanbaru, Riau, Indonesia',
  city: 'Pekanbaru',
  region: 'Riau',
  country: 'Indonesia',
  university: 'Universitas Islam Negeri Sultan Syarif Kasim Riau',
  major: 'Information Systems',
  domain: 'https://mhmdhabibrafi.me',
  summary:
    'I am a Full Stack Web Developer and Information Systems student building reliable web applications, backend services, APIs, and databases with a focus on clean architecture and practical usability.',
  email: 'mhmdhabibrafi@gmail.com',
};

export const profileId: Profile = {
  ...profile,
  positions: ['Full Stack Web Developer', 'Mahasiswa Sistem Informasi'],
  summary:
    'Saya adalah seorang Full Stack Web Developer dan mahasiswa Sistem Informasi yang membangun aplikasi web, layanan backend, API, dan basis data dengan fokus pada keandalan dan implementasi yang rapi.',
};
