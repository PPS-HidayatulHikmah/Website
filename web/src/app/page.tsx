import Link from "next/link";

const PROGRAMS = [
  {
    title: "Tahfidzul Qur'an",
    desc: "Program menghafal Al-Qur'an dengan bimbingan talaqqi dan tasmi' rutin setiap hari.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.8">
        <path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2V5z" />
        <path d="M4 19a2 2 0 0 1 2-2h13" />
      </svg>
    ),
  },
  {
    title: "Kitab Kuning",
    desc: "Kajian kitab kuning: nahwu, shorof, fiqih, tauhid, dan tasawuf ala pesantren salaf.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.8">
        <path d="M12 3 2 8l10 5 10-5-10-5z" />
        <path d="M2 13l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "Madrasah Diniyah",
    desc: "Pendidikan diniyah berjenjang untuk santri putra dan putri segala usia.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.8">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c0-4 3.6-6.5 8-6.5s8 2.5 8 6.5" />
      </svg>
    ),
  },
  {
    title: "Thoriqoh",
    desc: "Pembinaan spiritual: dzikir, istighosah, dan manaqib dalam tradisi thoriqoh mu'tabaroh.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.8">
        <path d="M12 2v20M2 12h20" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
  },
];

const POSTS = [
  {
    cat: "KEGIATAN",
    thumb: "t1",
    date: "8 Oktober 2026",
    title: "Persiapan Haul Agung 3 Thoriqoh Tahun 2026",
    excerpt:
      "Panitia mulai mematangkan persiapan acara tahunan terbesar pondok yang akan digelar akhir Oktober...",
    href: "/blog/persiapan-haul-2026",
  },
  {
    cat: "KAJIAN",
    thumb: "t2",
    date: "2 Oktober 2026",
    title: "Jadwal Manaqib & Istighosah Rutin Bulanan",
    excerpt:
      "Kegiatan manaqib bulanan kembali digelar dengan khidmat, dihadiri ratusan jamaah dari berbagai daerah...",
    href: "/blog/manaqib-istighosah-rutin",
  },
  {
    cat: "PENGUMUMAN",
    thumb: "t3",
    date: "28 September 2026",
    title: "Penerimaan Santri Baru Tahun Ajaran 2026/2027",
    excerpt:
      "Pendaftaran santri baru telah dibuka. Simak syarat, jadwal, dan tata cara pendaftarannya di sini...",
    href: "/blog/psb-2026",
  },
];

function MosqueArt() {
  return (
    <svg viewBox="0 0 400 460" preserveAspectRatio="xMidYMax slice">
      <g
        fill="#0a1428"
        stroke="#d4af37"
        strokeOpacity=".55"
        strokeWidth="1.6"
      >
        <rect x="120" y="300" width="160" height="110" />
        <path d="M200 210 C 200 250, 150 260, 150 300 L 250 300 C 250 260, 200 250, 200 210 Z" />
        <rect x="196" y="170" width="8" height="50" />
        <circle cx="200" cy="162" r="7" fill="#d4af37" fillOpacity=".8" stroke="none" />
        <rect x="40" y="340" width="60" height="70" />
        <path d="M70 300 C 70 320, 50 325, 50 340 L 90 340 C 90 325, 70 320, 70 300 Z" />
        <rect x="300" y="340" width="60" height="70" />
        <path d="M330 300 C 330 320, 310 325, 310 340 L 350 340 C 350 325, 330 320, 330 300 Z" />
        <rect x="188" y="330" width="24" height="80" fill="#0a1428" />
      </g>
      <g fill="#f0d878" opacity=".9">
        <rect x="140" y="320" width="18" height="26" rx="9" />
        <rect x="170" y="320" width="18" height="26" rx="9" />
        <rect x="212" y="320" width="18" height="26" rx="9" />
        <rect x="242" y="320" width="18" height="26" rx="9" />
        <rect x="55" y="360" width="12" height="18" rx="6" />
        <rect x="315" y="360" width="12" height="18" rx="6" />
      </g>
      <g fill="#fff">
        <circle cx="60" cy="80" r="2" />
        <circle cx="140" cy="50" r="1.6" />
        <circle cx="250" cy="70" r="2" />
        <circle cx="330" cy="120" r="1.6" />
        <circle cx="200" cy="100" r="1.4" />
        <circle cx="300" cy="40" r="1.8" />
      </g>
    </svg>
  );
}

export default function Home() {
  return (
    <>
      {/* hero */}
      <header className="hero">
        <div className="wrap hero-grid">
          <div>
            <span className="eyebrow">
              <span className="dot" />
              Pondok Pesantren Salafiyah • Sejak 1983
            </span>
            <h1>
              Membentuk Generasi <span className="gold">Qur&apos;ani</span>{" "}
              Berakhlak Mulia
            </h1>
            <div className="arabic" dir="rtl">
              المعهد الإسلامي السلفي هداية الحكمة
            </div>
            <p className="lede">
              Pondok Pesantren Salafiyah Hidayatul Hikmah di Cisoka, Tangerang
              — memadukan kajian kitab kuning, tahfidz Al-Qur&apos;an, dan
              pendidikan thoriqoh di bawah asuhan Buya KH. Mukhtar Kamal.
            </p>
            <div className="hero-cta">
              <Link className="btn" href="/acara">
                Lihat Acara Mendatang →
              </Link>
              <Link className="btn btn-ghost" href="/tentang">
                Tentang Ponpes
              </Link>
            </div>
            <div className="hero-note">
              ✦ &nbsp;Dekat dengan masyarakat • Terbuka untuk umum
            </div>
          </div>
          <div className="hero-visual">
            <div className="mosque-card">
              <div className="moon" />
              <MosqueArt />
            </div>
            <div className="float-card fc1">
              <span className="num">43</span>
              <span className="lbl">
                Tahun
                <br />
                Mengabdi
              </span>
            </div>
            <div className="float-card fc2">
              <span className="num">500+</span>
              <span className="lbl">
                Santri
                <br />
                Aktif
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* stats */}
      <div className="stats">
        <div className="wrap stats-grid">
          <div className="stat">
            <div className="n">1983</div>
            <div className="t">Tahun Berdiri</div>
          </div>
          <div className="stat">
            <div className="n">500+</div>
            <div className="t">Santri Aktif</div>
          </div>
          <div className="stat">
            <div className="n">40+</div>
            <div className="t">Ustadz &amp; Ustadzah</div>
          </div>
          <div className="stat">
            <div className="n">2000+</div>
            <div className="t">Alumni Tersebar</div>
          </div>
        </div>
      </div>

      {/* programs */}
      <section className="block">
        <div className="wrap">
          <div className="center">
            <div className="kicker">Program Unggulan</div>
            <h2>
              Pendidikan <span className="gold-text">Salaf</span> yang Membumi
            </h2>
            <p className="sub">
              Kurikulum kepesantrenan klasik yang dipadukan dengan pembinaan
              akhlak dan spiritualitas thoriqoh.
            </p>
          </div>
          <div className="prog-grid">
            {PROGRAMS.map((p) => (
              <div className="prog" key={p.title}>
                <div className="ic">{p.icon}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* event */}
      <section className="block event">
        <div className="wrap">
          <div className="kicker">Acara Mendatang</div>
          <h2>
            Haul Agung <span className="gold-text">3 Thoriqoh</span>
          </h2>
          <p className="sub">
            Acara tahunan terbesar pondok — terbuka untuk umum. Tonton video
            undangannya di halaman acara.
          </p>
          <div className="event-card">
            <Link
              className="event-media"
              href="/acara"
              aria-label="Tonton video undangan"
            >
              <span className="event-tag">▶ VIDEO UNDANGAN</span>
              <span className="play">
                <svg width="34" height="34" viewBox="0 0 24 24" fill="#1a1206">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </Link>
            <div className="event-body">
              <div className="date-badge">
                <span className="d">25</span>
                <span className="m">
                  <b>Oktober 2026</b>
                  <br />
                  Ahad • 07.30 WIB s/d Selesai
                </span>
              </div>
              <h3>Haul 3 Thoriqoh Agung &amp; Milad Ponpes ke-43</h3>
              <div className="event-meta">
                <span>
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2">
                    <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                  Komplek Ponpes Hidayatul Hikmah, Kp. Sukajami Pasanggrahan,
                  Ds. Sukatani, Kec. Cisoka, Kab. Tangerang
                </span>
                <span>
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2">
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 21c0-4 3.6-6.5 8-6.5s8 2.5 8 6.5" />
                  </svg>
                  Qori Internasional, Qori&apos;ah Duet, Qori Cilik &amp;
                  Tausiyah KH. E. Supriatna Mubarok
                </span>
              </div>
              <div className="hero-cta">
                <Link className="btn" href="/acara">
                  Lihat Semua Acara
                </Link>
                <a
                  className="btn btn-ghost"
                  href="https://maps.app.goo.gl/4NV3JTQPSjt6ADwX9"
                  target="_blank"
                  rel="noreferrer"
                >
                  Rute Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* blog */}
      <section className="block">
        <div className="wrap">
          <div className="kicker">Kabar Pesantren</div>
          <h2>
            Cerita &amp; <span className="gold-text">Kegiatan</span> Terkini
          </h2>
          <p className="sub">
            Dokumentasi kegiatan, kajian, dan kabar dari lingkungan pondok.
          </p>
          <div className="blog-grid">
            {POSTS.map((p) => (
              <article className="post" key={p.href}>
                <div className={`thumb ${p.thumb}`}>
                  <span className="cat">{p.cat}</span>
                </div>
                <div className="pbody">
                  <div className="date">{p.date}</div>
                  <h3>{p.title}</h3>
                  <p>{p.excerpt}</p>
                  <Link className="more" href={p.href}>
                    Baca selengkapnya →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* quotes */}
      <section className="block" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="center">
            <div className="kicker">Kata Alumni</div>
            <h2>
              Mereka yang Pernah <span className="gold-text">Nyantri</span> di
              Sini
            </h2>
          </div>
          <div className="quotes" style={{ marginTop: 44 }}>
            <div className="quote">
              <span className="qm">&quot;</span>
              <p>
                Ilmu yang saya dapat di Hidayatul Hikmah menjadi bekal hidup
                sampai hari ini. Barokah para kiai dan guru-guru tidak ternilai
                harganya.
              </p>
              <div className="who">
                <span className="avatar">H</span>
                <div>
                  <b>H. Ahmad Fauzi</b>
                  <span>Alumni 2005 • Wiraswasta, Jakarta</span>
                </div>
              </div>
            </div>
            <div className="quote">
              <span className="qm">&quot;</span>
              <p>
                Suasana kekeluargaannya luar biasa. Saya yang jauh dari orang
                tua merasa seperti di rumah sendiri selama mondok di sini.
              </p>
              <div className="who">
                <span className="avatar">S</span>
                <div>
                  <b>Siti Maryam</b>
                  <span>Alumni 2012 • Guru, Serang</span>
                </div>
              </div>
            </div>
          </div>
          <div className="center" style={{ marginTop: 36 }}>
            <Link className="btn btn-ghost" href="/alumni">
              Lihat Data Alumni
            </Link>
          </div>
        </div>
      </section>

      {/* cta */}
      <section className="block" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-box">
            <h2>
              Ingin <span className="gold-text">Mondok</span> di Hidayatul
              Hikmah?
            </h2>
            <p>
              Pendaftaran santri baru tahun ajaran 2026/2027 telah dibuka.
              Hubungi kantor pondok untuk informasi biaya, syarat, dan jadwal
              pendaftaran.
            </p>
            <div className="cta-btns">
              <Link className="btn" href="/kontak">
                Hubungi Kantor Ponpes
              </Link>
              <Link className="btn btn-ghost" href="/alumni">
                Lihat Data Alumni
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
