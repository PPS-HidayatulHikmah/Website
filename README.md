# Website Pondok Pesantren Salafiyah Hidayatul Hikmah

Website resmi Pondok Pesantren Salafiyah Hidayatul Hikmah (Cisoka, Tangerang — berdiri 1983).
Next.js 16 + React 19 + Tailwind v4 + MDX. Desain modern (navy + emas, bottom navbar mobile ala Agentika),
bukan gaya website pondok yang kuno.

## Struktur

```
pps-hidhik-web/
├── mockup/                 # Mockup desain landing (mobile + desktop) yang disetujui
└── web/                    # Aplikasi Next.js
    ├── src/app/
    │   ├── page.tsx        # Landing page
    │   ├── tentang/        # Profil & sejarah pondok
    │   ├── blog/           # Blog berbasis MDX
    │   ├── alumni/         # Tabel alumni (search + filter angkatan)
    │   ├── acara/          # Info acara + embed video Remotion (@remotion/player)
    │   └── kontak/         # Kontak kantor + form pesan via WhatsApp
    ├── content/blog/       # Artikel blog (tambah file .mdx di sini)
    └── src/remotion/       # Komposisi video HaulAgung v2 (di-port dari proyek remotion)
```

## Menjalankan lokal

```bash
cd web
npm install
npm run dev      # http://localhost:3000
npm run build    # verifikasi build
```

## Mengelola konten

- **Blog**: tambah file `.mdx` di `web/content/blog/`, pakai frontmatter `title`, `date`, `description`.
- **Alumni**: edit data di `web/src/app/alumni/` (saat ini data contoh — ganti dengan data resmi).
- **Acara**: halaman `acara` memutar komposisi Remotion langsung via `<Player>`.
  Ganti props komposisi untuk acara baru tanpa render ulang MP4; file MP4 di `public/` jadi fallback unduhan.
- **Video baru**: komposisi ada di `web/src/remotion/`. Library **remotion-ui**
  (komponen motion siap pakai) ditunda karena registry mereka sedang error
  ("Invalid registry index") — coba lagi nanti dengan `npx remotion-ui add <nama>`.

## Deploy

Rekomendasi: Vercel (import repo → deploy otomatis). Alternatif: Netlify atau GitHub Pages.

Catatan: domain lama pesantren sudah bukan milik mereka lagi — rencanakan domain baru
saat deploy, jangan mengandalkan domain lama.
