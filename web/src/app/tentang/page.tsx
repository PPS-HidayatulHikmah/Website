import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tentang Ponpes",
  description:
    "Sejarah, visi misi, dan pengasuh Pondok Pesantren Salafiyah Hidayatul Hikmah.",
};

const TIMELINE = [
  {
    yr: "1983",
    text: "Pondok Pesantren Salafiyah Hidayatul Hikmah didirikan di Kp. Sukajami Pasanggrahan, Ds. Sukatani, Kec. Cisoka, Kab. Tangerang oleh Buya KH. Mukhtar Kamal.",
  },
  {
    yr: "1990-an",
    text: "Pesantren berkembang dengan bertambahnya santri dari berbagai daerah; madrasah diniyah dan kajian kitab kuning menjadi tulang punggung pendidikan.",
  },
  {
    yr: "2000-an",
    text: "Tradisi Haul dan Manaqib Akbar menjadi agenda tahunan yang dihadiri ribuan jamaah, memperkuat peran pesantren di tengah masyarakat.",
  },
  {
    yr: "2026",
    text: "Memasuki usia ke-43, pesantren terus berkhidmat dengan program tahfidz, kitab kuning, dan pembinaan thoriqoh — serta merambah dakwah digital.",
  },
];

export default function TentangPage() {
  return (
    <>
      <div className="page-hero">
        <div className="wrap">
          <div className="crumb">
            <Link href="/">Beranda</Link> / Tentang
          </div>
          <h1>
            Tentang <span className="gold-text">Pondok Kami</span>
          </h1>
          <p>
            Mengenal lebih dekat Pondok Pesantren Salafiyah Hidayatul Hikmah —
            sejarah, visi, dan para pengasuhnya.
          </p>
        </div>
      </div>

      <section className="block">
        <div className="wrap">
          <div className="tentang-grid">
            <div className="card">
              <div className="kicker">Sejarah Singkat</div>
              <h3>Berdiri Sejak 1983</h3>
              <p>
                Pondok Pesantren Salafiyah Hidayatul Hikmah didirikan pada
                tahun 1983 oleh <strong>Buya KH. Mukhtar Kamal</strong> di
                Kampung Sukajami Pasanggrahan, Desa Sukatani, Kecamatan
                Cisoka, Kabupaten Tangerang, Banten.
              </p>
              <p>
                Selama lebih dari empat dekade, pesantren ini konsisten menjaga
                tradisi keilmuan salaf: kajian kitab kuning, tahfidzul
                Qur&apos;an, dan pembinaan spiritual melalui thoriqoh
                mu&apos;tabaroh — Qodiriyah, Naqsyabandiyah, dan Syadziliyah.
              </p>
              <div className="arabic" dir="rtl" style={{ marginTop: 20 }}>
                المعهد الإسلامي السلفي هداية الحكمة
              </div>
            </div>
            <div className="card">
              <div className="kicker">Pengasuh</div>
              <h3>Buya KH. Mukhtar Kamal</h3>
              <p>
                Pendiri sekaligus pengasuh Pondok Pesantren Salafiyah
                Hidayatul Hikmah. Beliau memimpin pesantren dengan penuh
                keikhlasan, menekankan adab sebelum ilmu dan keberkahan dalam
                setiap langkah santri.
              </p>
              <p>
                Di bawah asuhan beliau, ribuan alumni telah tersebar di
                berbagai daerah — menjadi guru, dai, dan penggerak masyarakat.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="block" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="card">
            <div className="kicker">Visi &amp; Misi</div>
            <h3>Visi</h3>
            <p>
              &ldquo;Mencetak generasi Qur&apos;ani yang berilmu, berakhlak
              mulia, dan bermanfaat bagi agama, bangsa, dan masyarakat.&rdquo;
            </p>
            <h3 style={{ marginTop: 28 }}>Misi</h3>
            <p>
              1. Menyelenggarakan pendidikan Al-Qur&apos;an dan kitab kuning
              yang berkualitas.
              <br />
              2. Membina akhlak dan spiritualitas santri melalui dzikir,
              istighosah, dan thoriqoh.
              <br />
              3. Membangun kemandirian santri agar siap mengabdi di tengah
              masyarakat.
              <br />
              4. Menjalin ukhuwah dengan alumni, wali santri, dan masyarakat
              luas.
            </p>
          </div>
        </div>
      </section>

      <section className="block" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="kicker">Jejak Waktu</div>
          <h2>
            Perjalanan <span className="gold-text">43 Tahun</span>
          </h2>
          <div className="timeline" style={{ marginTop: 40 }}>
            {TIMELINE.map((t) => (
              <div className="tl-item" key={t.yr}>
                <div className="yr">{t.yr}</div>
                <p>{t.text}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 48 }}>
            <Link className="btn" href="/kontak">
              Kunjungi / Hubungi Kami →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
