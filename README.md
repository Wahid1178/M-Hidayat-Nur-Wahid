# Portfolio – M. Hidayat Nur Wahid

React + Vite portfolio website.

## 🚀 Cara Deploy ke Vercel

### 1. Push ke GitHub
```bash
git init
git add .
git commit -m "init: wahid portfolio"
git remote add origin https://github.com/Wahid1178/portfolio.git
git push -u origin main
```

### 2. Deploy di Vercel
1. Buka https://vercel.com → Sign in dengan GitHub
2. Klik **Add New Project** → Import repo portfolio
3. Framework: **Vite** (auto-detect)
4. Klik **Deploy** → selesai!

### 3. Custom Domain (opsional)
Di dashboard Vercel → Settings → Domains → tambah domain kamu.

## 🛠 Local Development
```bash
npm install
npm run dev
```

## 📁 Struktur Folder
```
src/
  components/
    Navbar.jsx       - Navigation fixed dengan active tracking
    Hero.jsx         - Landing section dengan parallax & typewriter
    About.jsx        - Tentang diri + upload foto
    Skills.jsx       - Skill tags + animated proficiency bars
    Projects.jsx     - Project cards dengan filter
    Certificates.jsx - Sertifikat dengan expand detail
    Contact.jsx      - Link kontak
    CustomCursor.jsx - Custom cursor animasi
    SectionHeader.jsx
  hooks/
    useReveal.js     - Scroll reveal animation hook
  data.js            - Semua data portofolio (edit di sini!)
  App.jsx
  index.css
```

## ✏️ Cara Edit Konten
Edit file `src/data.js` untuk mengubah:
- Profil & bio
- Skill
- Proyek
- Sertifikat
- Link kontak

## 📸 Tambah Foto
Klik area avatar di section "Tentang Saya" atau tekan tombol "Upload Foto".
