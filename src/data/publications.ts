export interface Publication {
  title: string;
  journal: string;
  publishedDate: string;
  volume: string;
  issue: string;
  pages: string;
  doi: string;
  url: string;
  pdfUrl: string;
  authors: string[];
  summary: string;
  keywords: string[];
}

const sharedPublication = {
  title: 'The Influence of Social Media Recommendation Algorithms on Information-Seeking Behavior and Filter Bubble among Generation Z Users in Indonesia',
  journal: 'International Journal of Research and Innovation in Social Science (IJRISS)',
  volume: '10',
  issue: '6',
  pages: '5719–5728',
  doi: '10.47772/IJRISS.2026.100600400',
  url: 'https://rsisinternational.org/journals/ijriss/view/the-influence-of-social-media-recommendation-algorithms-on-information-seeking-behavior-and-filter-bubble-among-generation-z-users-in-indonesia/',
  pdfUrl: 'https://rsisinternational.org/journals/ijriss/uploads/vol10-iss6-pg5719-5728-202606_pdf.pdf',
  authors: ['Megawati, Syaifullah', 'Afif Alfarisi Hernas', 'Muhammad Habib Rafi', 'M. Farel', 'Al Fitto Rizki'],
  keywords: ['Recommendation algorithms', 'Social media', 'Information-seeking behavior', 'Filter bubble', 'Generation Z'],
};

export const publications: Publication[] = [
  {
    ...sharedPublication,
    publishedDate: 'June 25, 2026',
    summary: 'A peer-reviewed quantitative study examining relationships among recommendation algorithms, algorithmic awareness, filter bubbles, and information-seeking behavior among Generation Z social media users in Indonesia.',
  },
];

export const publicationsId: Publication[] = [
  {
    ...sharedPublication,
    publishedDate: '25 Juni 2026',
    summary: 'Studi kuantitatif peer-reviewed yang mengkaji hubungan algoritma rekomendasi, kesadaran algoritmik, filter bubble, dan perilaku pencarian informasi pada pengguna media sosial Generasi Z di Indonesia.',
    keywords: ['Algoritma rekomendasi', 'Media sosial', 'Perilaku pencarian informasi', 'Filter bubble', 'Generasi Z'],
  },
];
