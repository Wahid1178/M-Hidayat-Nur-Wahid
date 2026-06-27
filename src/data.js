export const PROFILE = {
  name: 'M. Hidayat Nur Wahid',
  nickname: 'Wahid',
  title: 'Full-Stack Developer & ML Enthusiast',
  university: 'Telkom University',
  prodi: 'Sistem Informasi Kota Cerdas',
  year: '2024',
  location: 'Bandung, Indonesia',
  bio1: 'Mahasiswa Sistem Informasi Kota Cerdas Telkom University angkatan 2024 dengan passion di bidang pengembangan web, mobile, dan kecerdasan buatan. Portofolio ini merupakan kumpulan karya nyata yang saya bangun untuk membuktikan kemampuan teknis saya.',
  bio2: 'Saya percaya bahwa kode yang baik bukan hanya soal fungsi, tetapi juga soal solusi. Setiap proyek yang saya kerjakan mencerminkan dedikasi saya dalam belajar, bereksperimen, dan menghasilkan produk digital yang berdampak nyata.',
  email: 'mhidayatnw123@gmail.com',
  linkedin: 'https://www.linkedin.com/in/m-hidayat-nur-wahid-570248181',
  github: 'https://github.com/Wahid1178',
  whatsapp: 'https://wa.me/6282315560835',
  phone: '082315560835',
}

export const STATS = [
  { num: '3+', label: 'Proyek', color: '#6366f1' },
  { num: '4', label: 'Sertifikat', color: '#10b981' },
  { num: '12+', label: 'Teknologi', color: '#f59e0b' },
  { num: '2024', label: 'Angkatan', color: '#ef4444' },
]

export const EDUCATION = [
  {
    icon: '🎓',
    title: 'Telkom University',
    sub: 'S.Tr.Kom — Sistem Informasi Kota Cerdas',
    year: '2024 – Sekarang',
  },
  {
    icon: '🏫',
    title: 'SMA Asal',
    sub: 'Jurusan IPA / IPS',
    year: '2021 – 2024',
  },
]

export const SKILLS = [
  {
    id: 'sk1',
    name: 'Bahasa Pemrograman',
    color: '#6366f1',
    tags: ['Python', 'JavaScript', 'PHP', 'Java', 'Kotlin', 'Dart', 'SQL', 'HTML', 'CSS'],
  },
  {
    id: 'sk2',
    name: 'Framework & Library',
    color: '#10b981',
    tags: ['React.js', 'Vue.js', 'Vite', 'Laravel', 'Streamlit', 'Android Studio'],
  },
  {
    id: 'sk3',
    name: 'Database & Tools',
    color: '#f59e0b',
    tags: ['MongoDB', 'MySQL', 'PostgreSQL', 'Tableau', 'VS Code'],
  },
  {
    id: 'sk4',
    name: 'Metodologi & Arsitektur',
    color: '#ef4444',
    tags: ['TOGAF', 'ArchiMate', 'Enterprise Architecture', 'Machine Learning'],
  },
]

export const PROFICIENCY = [
  { name: 'Python', pct: 82, color: '#6366f1' },
  { name: 'JavaScript', pct: 78, color: '#f59e0b' },
  { name: 'PHP / Laravel', pct: 75, color: '#8b5cf6' },
  { name: 'React.js', pct: 72, color: '#06b6d4' },
  { name: 'SQL / MongoDB', pct: 80, color: '#10b981' },
  { name: 'Machine Learning', pct: 68, color: '#ef4444' },
]

export const PROJECTS = [
  {
    id: 1,
    name: 'Insurance ML Dashboard',
    emoji: '🤖',
    category: 'ML',
    color: '#6366f1',
    bg: 'linear-gradient(135deg, #1e1b4b, #0f172a)',
    tag: 'Machine Learning',
    desc: 'Dashboard ML berbasis Streamlit untuk prediksi biaya asuransi (regresi) dan deteksi status perokok (klasifikasi) dengan 6 model pre-trained.',
    bullets: [
      'Regresi: prediksi biaya asuransi',
      'Klasifikasi: deteksi status perokok',
      'Evaluasi model: R², Accuracy, F1',
      'Prediksi massal + export CSV',
    ],
    tech: ['Python', 'Streamlit', 'scikit-learn', 'Plotly', 'Pandas'],
    github: 'https://github.com/Wahid1178',
  },
  {
    id: 2,
    name: 'CityCare Pro',
    emoji: '🏙️',
    category: 'Web',
    color: '#10b981',
    bg: 'linear-gradient(135deg, #022c22, #0f172a)',
    tag: 'Web Development',
    desc: 'Aplikasi web pengaduan fasilitas umum multi-role berbasis PHP Native + MongoDB dengan dashboard analitik dan tracking petugas real-time.',
    bullets: [
      '5 role pengguna (Admin, Petugas, Kepala Bidang, dll)',
      'CRUD laporan fasilitas umum',
      'Dashboard analytics & rekap data',
      'Tracking petugas real-time',
    ],
    tech: ['PHP', 'MongoDB', 'JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/Wahid1178',
  },
  {
    id: 3,
    name: 'Smart City Platform',
    emoji: '🌆',
    category: 'Web',
    color: '#f59e0b',
    bg: 'linear-gradient(135deg, #2d1a00, #0f172a)',
    tag: 'Web Development',
    desc: 'Platform layanan publik kota cerdas berbasis PHP + MySQL dengan admin dashboard lengkap, manajemen berita, dan reporting terintegrasi.',
    bullets: [
      'Admin dashboard lengkap',
      'Sistem layanan publik multi-fitur',
      'Analytics & reporting',
      'News management system',
    ],
    tech: ['PHP', 'MySQL', 'JavaScript', 'CSS', 'Python'],
    github: 'https://github.com/Wahid1178',
  },
]

export const CERTIFICATES = [
  {
    id: 1,
    title: 'AI Engineer For Milenial',
    icon: '🤖',
    org: 'Digital Talent Scholarship 2026 · Komdigi',
    type: 'Micro Skill',
    hours: '1 Jam',
    year: '2026',
    color: '#6366f1',
    topics: [
      'Dasar Prompt Engineering: Cara Bicara dengan AI',
      'Bekerja dengan AI: Meningkatkan Produktivitas',
      'Menghindari Kesalahan Umum: Optimasi Prompt',
    ],
  },
  {
    id: 2,
    title: 'Fundamental of Associate Network Administrator',
    icon: '🌐',
    org: 'Digital Talent Academy · Komdigi',
    type: 'Nasional',
    hours: '12 Jam',
    year: '2026',
    color: '#0ea5e9',
    topics: [
      'Merancang Pengalamatan Jaringan',
      'Memasang Jaringan Nirkabel',
      'Konfigurasi Switch & Routing AS',
    ],
  },
  {
    id: 3,
    title: 'Intermediate Associate Network Administrator',
    icon: '🔒',
    org: 'Digital Talent Academy · Komdigi',
    type: 'Nasional',
    hours: '12 Jam',
    year: '2026',
    color: '#14b8a6',
    topics: [
      'Merancang Keamanan Jaringan',
      'Merancang Pemulihan Jaringan',
      'Routing Antar Autonomous System',
      'Monitor Keamanan & Akun Pengguna',
    ],
  },
  {
    id: 4,
    title: 'Ethical Hacker For Dummies',
    icon: '🛡️',
    org: 'Digital Talent Scholarship 2026 · Komdigi',
    type: 'Micro Skill',
    hours: '1 Jam',
    year: '2026',
    color: '#ef4444',
    topics: [
      'Pengantar Keamanan Siber',
      'Mengenal Ethical Hacking',
    ],
  },
]

export const CONTACT_LINKS = [
  {
    label: 'Email',
    val: 'mhidayatnw123@gmail.com',
    href: 'mailto:mhidayatnw123@gmail.com',
    icon: '/gmail.png',
    color: '#ea4335',
  },
  {
    label: 'LinkedIn',
    val: 'm-hidayat-nur-wahid',
    href: 'https://www.linkedin.com/in/m-hidayat-nur-wahid-570248181',
    icon: '/linkedin.png',
    color: '#0a66c2',
  },
  {
    label: 'GitHub',
    val: 'Wahid1178',
    href: 'https://github.com/Wahid1178',
    icon: '/github.png',
    color: '#94a3b8',
  },
  {
    label: 'WhatsApp',
    val: '082315560835',
    href: 'https://wa.me/6282315560835',
    icon: '/wa.png',
    color: '#25d366',
  },
]
