export interface Experience {
  organization: string;
  role: string;
  type: string;
  location?: string;
  startDate?: string;
  endDate?: string;
  current?: boolean;
  description: string;
  responsibilities: string[];
  technologies: string[];
  credentials?: string[];
  url?: string;
  projectSlug?: string;
}

export const professionalExperiences: Experience[] = [
  {
    organization: 'Information Systems Study Program, UIN Sultan Syarif Kasim Riau',
    role: 'Web Developer',
    type: 'Internship',
    location: 'Pekanbaru, Riau, Indonesia',
    startDate: 'February 2026',
    current: true,
    description: 'Developing and maintaining the official Information Systems Study Program website for the Faculty of Science and Technology.',
    responsibilities: [
      'Develop and maintain the study program website and its application features.',
      'Improve website performance, system stability, and content integration.',
      'Collaborate with editors and content teams on accurate academic and non-academic information.',
      'Report development progress and technical improvements to study program management.',
    ],
    technologies: ['Web Development', 'Website Maintenance', 'Performance Optimization', 'Content Integration'],
  },
  {
    organization: 'RS Awal Bros Panam',
    role: 'Information Technology Intern',
    type: 'Internship / Kerja Praktik',
    location: 'Pekanbaru, Riau, Indonesia',
    startDate: 'June 2026',
    endDate: 'August 2026',
    description: 'Supported daily IT operations while developing ASCIT, an internal asset care and IT asset management system for the IT Support context.',
    responsibilities: [
      'Monitored IT work orders and supported user-service workflows.',
      'Assisted with hardware, software, network, and system troubleshooting.',
      'Observed IT service management processes in healthcare operations.',
      'Developed full-stack workflows and relational data integration for ASCIT.',
    ],
    technologies: ['IT Support', 'Troubleshooting', 'Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Docker'],
    projectSlug: 'ascit',
  },
];

export const leadershipExperiences: Experience[] = [
  {
    organization: 'HIMASI UIN Suska Riau',
    role: 'Head of Education, Research, and Technology Division',
    type: 'Student Organization Leadership',
    location: 'Pekanbaru, Riau, Indonesia',
    startDate: 'January 2026',
    current: true,
    description: 'Leading initiatives for academic development, research, and technology within the Information Systems Student Association.',
    responsibilities: [
      'Design and coordinate workshops, seminars, and technical learning activities.',
      'Support members in academic research and professional project development.',
      'Coordinate collaborative initiatives with other divisions.',
      'Encourage a practical culture of learning, research, and technology development.',
    ],
    technologies: ['Leadership', 'Research', 'Technology Programs', 'Mentoring', 'Teamwork'],
  },
  {
    organization: 'ISNC Research',
    role: 'Research and Technology Development Member',
    type: 'Research Organization',
    startDate: 'October 2025',
    current: true,
    description: 'Contributing to research and technology activities focused on software engineering, data, and system innovation.',
    responsibilities: [
      'Assist with research documentation and project development.',
      'Collaborate on ideas and technical work related to IT solutions.',
      'Analyze system prototypes and participate in research discussions.',
      'Support the team in strengthening its technical and research output.',
    ],
    technologies: ['Research', 'Web Development', 'Networking', 'Software Engineering', 'System Analysis'],
  },
  {
    organization: 'HIMASI UIN Suska Riau',
    role: 'Member of the Advocacy and Politics Division',
    type: 'Student Organization',
    location: 'Pekanbaru, Riau, Indonesia',
    startDate: 'January 2025',
    endDate: 'January 2026',
    description: 'Supported student advocacy initiatives and activities concerning academic, institutional, political, and social issues.',
    responsibilities: [
      'Helped organize campaigns and events for the student community.',
      'Collaborated with members and stakeholders on student-focused initiatives.',
      'Participated in discussions that strengthened student representation.',
    ],
    technologies: ['Advocacy', 'Communication', 'Interpersonal Skills', 'Teamwork'],
  },
];

export const learningExperiences: Experience[] = [
  {
    organization: 'Coding Camp powered by DBS Foundation',
    role: 'Fullstack Engineer Cohort — Frontend & Backend',
    type: 'Full-time Learning Cohort',
    startDate: 'February 2026',
    endDate: 'August 2026',
    description: 'Completed an intensive full-stack development cohort covering responsive frontend interfaces, backend services, APIs, databases, team delivery, and deployment.',
    responsibilities: [
      'Built responsive user interfaces and backend application services.',
      'Implemented API and database integration in project work.',
      'Worked in a team to design, develop, and deploy an end-to-end capstone application.',
      'Strengthened debugging, problem-solving, and maintainable development practices.',
    ],
    technologies: ['React', 'JavaScript', 'Node.js', 'REST API', 'PostgreSQL', 'Docker', 'Nginx'],
    credentials: ['Full-Stack Web Developer Certificate of Completion', 'Student Learning Achievement', 'Best Capstone Team', 'English for Business Communication'],
    projectSlug: 'sadar-finance',
  },
  {
    organization: 'IDCamp — Indosat Ooredoo Hutchison',
    role: 'AI Back-End Developer',
    type: 'Learning Program',
    startDate: 'September 2025',
    endDate: 'March 2026',
    description: 'Completed a back-end development program focused on JavaScript, API development, cloud concepts, and practical AI integration.',
    responsibilities: [
      'Completed modules in AI fundamentals, Cloud and Generative AI on AWS, JavaScript, and back-end development.',
      'Built server-side application foundations using JavaScript and Node.js.',
      'Applied system logic, data processing, and scalable backend concepts to practical work.',
    ],
    technologies: ['JavaScript', 'Node.js', 'Back-End Development', 'REST API', 'Cloud Fundamentals', 'Generative AI'],
  },
  {
    organization: 'Hacktiv8 Indonesia and IBM SkillsBuild',
    role: 'Student Developer Initiative Participant',
    type: 'Learning Program',
    startDate: 'November 2025',
    endDate: 'December 2025',
    description: 'Joined an AI-assisted software development initiative centered on practical code generation, optimization, and responsible use of generative AI.',
    responsibilities: [
      'Completed the Code Generations and Optimization course.',
      'Used IBM Granite to support code writing and optimization exercises.',
      'Identified and troubleshot common issues in AI-generated code.',
      'Applied AI tools in structured learning activities and a capstone project.',
    ],
    technologies: ['Software Development', 'Generative AI', 'IBM Granite', 'Code Optimization', 'Troubleshooting'],
  },
];

export const experiences = [...professionalExperiences, ...leadershipExperiences, ...learningExperiences];

export const professionalExperiencesId: Experience[] = [
  {
    organization: 'Program Studi Sistem Informasi, UIN Sultan Syarif Kasim Riau',
    role: 'Web Developer',
    type: 'Magang',
    location: 'Pekanbaru, Riau, Indonesia',
    startDate: 'Februari 2026',
    current: true,
    description: 'Mengembangkan dan memelihara website resmi Program Studi Sistem Informasi, Fakultas Sains dan Teknologi.',
    responsibilities: [
      'Mengembangkan dan memelihara website program studi beserta fitur aplikasinya.',
      'Meningkatkan performa website, stabilitas sistem, dan integrasi konten.',
      'Berkolaborasi dengan editor dan tim konten untuk informasi akademik serta nonakademik yang akurat.',
      'Melaporkan progres pengembangan dan perbaikan teknis kepada pengelola program studi.',
    ],
    technologies: ['Pengembangan Web', 'Pemeliharaan Website', 'Optimasi Performa', 'Integrasi Konten'],
  },
  {
    organization: 'RS Awal Bros Panam',
    role: 'Information Technology Intern',
    type: 'Magang / Kerja Praktik',
    location: 'Pekanbaru, Riau, Indonesia',
    startDate: 'Juni 2026',
    endDate: 'Agustus 2026',
    description: 'Mendukung operasional TI harian sekaligus mengembangkan ASCIT, sistem internal perawatan dan manajemen aset TI dalam konteks IT Support.',
    responsibilities: [
      'Memantau work order TI dan mendukung alur layanan pengguna.',
      'Membantu troubleshooting perangkat keras, perangkat lunak, jaringan, dan sistem.',
      'Mempelajari proses manajemen layanan TI dalam operasional layanan kesehatan.',
      'Mengembangkan alur full-stack dan integrasi data relasional untuk ASCIT.',
    ],
    technologies: ['IT Support', 'Troubleshooting', 'Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Docker'],
    projectSlug: 'ascit',
  },
];

export const leadershipExperiencesId: Experience[] = [
  {
    organization: 'HIMASI UIN Suska Riau',
    role: 'Kepala Divisi Pendidikan, Riset, dan Teknologi',
    type: 'Kepemimpinan Organisasi Mahasiswa',
    location: 'Pekanbaru, Riau, Indonesia',
    startDate: 'Januari 2026',
    current: true,
    description: 'Memimpin inisiatif pengembangan akademik, riset, dan teknologi di Himpunan Mahasiswa Sistem Informasi.',
    responsibilities: [
      'Merancang dan mengoordinasikan workshop, seminar, serta kegiatan pembelajaran teknis.',
      'Mendukung anggota dalam riset akademik dan pengembangan proyek profesional.',
      'Mengoordinasikan inisiatif kolaboratif dengan divisi lain.',
      'Mendorong budaya pembelajaran, riset, dan pengembangan teknologi yang praktis.',
    ],
    technologies: ['Kepemimpinan', 'Riset', 'Program Teknologi', 'Mentoring', 'Kerja Tim'],
  },
  {
    organization: 'ISNC Research',
    role: 'Anggota Pengembangan Riset dan Teknologi',
    type: 'Organisasi Riset',
    startDate: 'Oktober 2025',
    current: true,
    description: 'Berkontribusi pada kegiatan riset dan pengembangan teknologi yang berfokus pada software engineering, data, serta inovasi sistem.',
    responsibilities: [
      'Membantu dokumentasi riset dan pengembangan proyek.',
      'Berkolaborasi dalam gagasan dan pekerjaan teknis terkait solusi TI.',
      'Menganalisis prototipe sistem dan berpartisipasi dalam diskusi riset.',
      'Mendukung peningkatan keluaran teknis dan riset tim.',
    ],
    technologies: ['Riset', 'Pengembangan Web', 'Jaringan', 'Software Engineering', 'Analisis Sistem'],
  },
  {
    organization: 'HIMASI UIN Suska Riau',
    role: 'Anggota Divisi Advokasi dan Politik',
    type: 'Organisasi Mahasiswa',
    location: 'Pekanbaru, Riau, Indonesia',
    startDate: 'Januari 2025',
    endDate: 'Januari 2026',
    description: 'Mendukung inisiatif advokasi mahasiswa dan kegiatan terkait persoalan akademik, kelembagaan, politik, serta sosial.',
    responsibilities: [
      'Membantu penyelenggaraan kampanye dan kegiatan untuk komunitas mahasiswa.',
      'Berkolaborasi dengan anggota dan stakeholder pada inisiatif yang berfokus pada mahasiswa.',
      'Berpartisipasi dalam diskusi yang memperkuat representasi mahasiswa.',
    ],
    technologies: ['Advokasi', 'Komunikasi', 'Kemampuan Interpersonal', 'Kerja Tim'],
  },
];

export const learningExperiencesId: Experience[] = [
  {
    organization: 'Coding Camp powered by DBS Foundation',
    role: 'Fullstack Engineer Cohort — Frontend & Backend',
    type: 'Learning Cohort Penuh Waktu',
    startDate: 'Februari 2026',
    endDate: 'Agustus 2026',
    description: 'Menyelesaikan cohort pengembangan full-stack intensif yang mencakup frontend responsif, layanan backend, API, basis data, kerja tim, dan deployment.',
    responsibilities: [
      'Membangun antarmuka responsif dan layanan aplikasi backend.',
      'Mengimplementasikan integrasi API dan basis data dalam proyek.',
      'Bekerja dalam tim untuk merancang, mengembangkan, dan melakukan deployment aplikasi capstone end-to-end.',
      'Memperkuat praktik debugging, pemecahan masalah, dan pengembangan yang mudah dipelihara.',
    ],
    technologies: ['React', 'JavaScript', 'Node.js', 'REST API', 'PostgreSQL', 'Docker', 'Nginx'],
    credentials: ['Sertifikat Kelulusan Full-Stack Web Developer', 'Student Learning Achievement', 'Best Capstone Team', 'English for Business Communication'],
    projectSlug: 'sadar-finance',
  },
  {
    organization: 'IDCamp — Indosat Ooredoo Hutchison',
    role: 'AI Back-End Developer',
    type: 'Program Pembelajaran',
    startDate: 'September 2025',
    endDate: 'Maret 2026',
    description: 'Menyelesaikan program backend yang berfokus pada JavaScript, pengembangan API, konsep cloud, dan integrasi AI secara praktis.',
    responsibilities: [
      'Menyelesaikan modul fundamental AI, Cloud dan Generative AI on AWS, JavaScript, serta pengembangan backend.',
      'Membangun fondasi aplikasi server-side menggunakan JavaScript dan Node.js.',
      'Menerapkan logika sistem, pemrosesan data, dan konsep arsitektur backend yang scalable pada pekerjaan praktis.',
    ],
    technologies: ['JavaScript', 'Node.js', 'Pengembangan Backend', 'REST API', 'Fundamental Cloud', 'Generative AI'],
  },
  {
    organization: 'Hacktiv8 Indonesia dan IBM SkillsBuild',
    role: 'Peserta Student Developer Initiative',
    type: 'Program Pembelajaran',
    startDate: 'November 2025',
    endDate: 'Desember 2025',
    description: 'Mengikuti inisiatif pengembangan perangkat lunak berbantuan AI dengan fokus pada pembuatan kode, optimasi, dan penggunaan generative AI yang bertanggung jawab.',
    responsibilities: [
      'Menyelesaikan course Code Generations and Optimization.',
      'Menggunakan IBM Granite dalam latihan penulisan dan optimasi kode.',
      'Mengidentifikasi serta memperbaiki masalah umum pada kode yang dihasilkan AI.',
      'Menerapkan alat AI pada aktivitas pembelajaran terstruktur dan proyek capstone.',
    ],
    technologies: ['Pengembangan Perangkat Lunak', 'Generative AI', 'IBM Granite', 'Optimasi Kode', 'Troubleshooting'],
  },
];

export const experiencesId = [...professionalExperiencesId, ...leadershipExperiencesId, ...learningExperiencesId];
