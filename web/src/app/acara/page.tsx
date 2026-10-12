import type { Metadata } from "next";
import Link from "next/link";
import { EventPlayer } from "@/components/EventPlayer";

export const metadata: Metadata = {
  title: "Acara & Pengumuman",
  description:
    "Info acara dan pengumuman Pondok Pesantren Salafiyah Hidayatul Hikmah.",
};

const LAINNYA = [
  {
    t: "Manaqib & Istighosah Rutin Bulanan",
    d: "Setiap malam Jumat Kliwon • Ba'da Maghrib",
    desc: "Dzikir, istighosah, dan pembacaan manaqib bersama jamaah.",
  },
  {
    t: "Pengajian Kitab Kuning Rutin",
    d: "Setiap hari • Ba'da Subuh & Ba'da Maghrib",
    desc: "Kajian kitab kuning untuk santri dan masyarakat umum.",
  },
  {
    t: "Haul Almarhum Abah KH. Dulhadi",
    d: "Tahunan • Menyatu dengan Haul Akbar",
    desc: "Haul pendiri dan sesepuh pesantren dalam rangkaian Haul Akbar.",
  },
];

export default function AcaraPage() {
  return (
    <>
      <div className="page-hero">
        <div className="wrap">
          <div className="crumb">
            <Link href="/">Beranda</Link> / Acara
          </div>
          <h1>
            Acara &amp; <span className="gold-text">Pengumuman</span>
          </h1>
          <p>
            Informasi acara, pengajian rutin, dan pengumuman resmi dari
            Pondok Pesantren Salafiyah Hidayatul Hikmah.
          </p>
        </div>
      </div>

      <section className="block">
        <div className="wrap">
          <div className="tentang-grid" style={{ alignItems: "start" }}>
            <div>
              <EventPlayer />
              <div
                style={{
                  display: "flex",
                  gap: 12,
                  justifyContent: "center",
                  marginTop: 22,
                  flexWrap: "wrap",
                }}
              >
                <a className="btn" href="/video/haul-agung-v2.mp4" download>
                  Unduh Video (MP4)
                </a>
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
            <div>
              <div className="kicker">Acara Utama</div>
              <h2 style={{ marginBottom: 12 }}>
                Haul Agung <span className="gold-text">3 Thoriqoh</span>
              </h2>
              <div className="date-badge" style={{ marginBottom: 24 }}>
                <span className="d">25</span>
                <span className="m">
                  <b>Oktober 2026</b>
                  <br />
                  Ahad • 07.30 WIB s/d Selesai
                </span>
              </div>
              <div className="card" style={{ marginBottom: 20 }}>
                <h3>Rangkaian Acara</h3>
                <p>
                  • Haul Almarhum Abah KH. Dulhadi
                  <br />
                  • Haul Akbar ke-27
                  <br />• Milad Pondok Pesantren ke-43
                </p>
              </div>
              <div className="card" style={{ marginBottom: 20 }}>
                <h3>Pengisi Acara</h3>
                <p>
                  <strong style={{ color: "var(--gold2)" }}>
                    Qori Internasional
                  </strong>{" "}
                  — Ust. Bongsang As&apos;ary (Ciomas - Serang)
                  <br />
                  <strong style={{ color: "var(--gold2)" }}>
                    Qori&apos;ah Duet
                  </strong>{" "}
                  — Uspaliatu Solihah &amp; Uswila Azkia (Sukajadi - Cibaliung)
                  <br />
                  <strong style={{ color: "var(--gold2)" }}>Qori Cilik</strong>{" "}
                  — Ananda Abang Rizieq Shihab
                  <br />
                  <strong style={{ color: "var(--gold2)" }}>Penceramah</strong>{" "}
                  — DR. Drs. KH. E. Supriatna Mubarok, M.Sc., M.M., M.Pd.
                </p>
              </div>
              <div className="card">
                <h3>Lokasi</h3>
                <p>
                  Komplek Pondok Pesantren Hidayatul Hikmah, Kp. Sukajami
                  Pasanggrahan, Ds. Sukatani, Kec. Cisoka, Kab. Tangerang,
                  Banten.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="block" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="kicker">Kegiatan Rutin</div>
          <h2>
            Agenda <span className="gold-text">Lainnya</span>
          </h2>
          <p className="sub">
            Kegiatan rutin mingguan dan bulanan yang terbuka untuk masyarakat.
          </p>
          <div className="prog-grid" style={{ gridTemplateColumns: "repeat(3,1fr)" }}>
            {LAINNYA.map((a) => (
              <div className="prog" key={a.t}>
                <div className="ic">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#d4af37"
                    strokeWidth="1.8"
                  >
                    <rect x="3" y="5" width="18" height="16" rx="3" />
                    <path d="M8 3v4M16 3v4M3 10h18" />
                  </svg>
                </div>
                <h3>{a.t}</h3>
                <p style={{ color: "var(--gold2)", marginBottom: 10 }}>{a.d}</p>
                <p>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
