export interface Education {
  institution: string;
  program: string;
  status: string;
  location?: string;
}

export const education: Education = {
  institution: 'Universitas Islam Negeri Sultan Syarif Kasim Riau',
  program: 'Information Systems',
  status: 'Student',
  location: 'Pekanbaru, Riau, Indonesia',
};

export const educationId: Education = {
  ...education,
  program: 'Sistem Informasi',
  status: 'Mahasiswa',
};
