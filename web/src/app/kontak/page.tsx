"use client";

import Link from "next/link";
import { useState } from "react";

const CONTACTS = [
  {
    role: "KANTOR PONDOK",
    name: "Sekretariat",
    phone: "0857-8045-0721",
    desc: "Informasi umum, pendaftaran santri, dan administrasi.",
  },
  {
    role: "RO'IS AMM'",
    name: "Pimpinan Harian",
    phone: "0858-6075-8215",
    desc: "Koordinasi kegiatan dan keperluan kepesantrenan.",
  },
  {
    role: "WAKIL RO'IS",
    name: "Wakil Pimpinan",
    phone: "0821-1317-6432",
    desc: "Pendamping pimpinan untuk urusan operasional.",
  },
];

const waLink = (phone: string) =>
  `https://wa.me/${phone.replace(/\D/g, "").replace(/^0/, "62")}`;

export default function KontakPage() {
  const [nama, setNama] = useState("");
  const [pesan, setPesan] = useState("");

  const kirimWA = () => {
    const text = encodeURIComponent(
      `Assalamu'alaikum, saya ${nama || "(nama)"}.\n\n${pesan || "(pesan)"}`
    );
    window.open(`https://wa.me/6285780450721?text=${text}`, "_blank");
  };

  return (
    <>
      <div className="page-hero">
        <div className="wrap">
          <div className="crumb">
            <Link href="/">Beranda</Link> / Kontak
          </div>
          <h1>
            Hubungi <span className="gold-text">Kami</span>
          </h1>
          <p>
            Kantor pondok siap melayani informasi pendaftaran santri, acara,
            dan keperluan lainnya.
          </p>
        </div>
      </div>

      <section className="block">
        <div className="wrap">
          <div className="kontak-grid">
            {CONTACTS.map((c) => (
              <div className="kcard" key={c.role}>
                <div className="ic">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#d4af37"
                    strokeWidth="2"
                  >
                    <path d="M5 4h4l2 5-3 2a13 13 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A17 17 0 0 1 3 6a2 2 0 0 1 2-2z" />
                  </svg>
                </div>
                <div className="role">{c.role}</div>
                <h3>{c.name}</h3>
                <div className="phone">{c.phone}</div>
                <p
                  style={{
                    color: "var(--muted)",
                    fontSize: 14,
                    marginTop: 12,
                    lineHeight: 1.7,
                  }}
                >
                  {c.desc}
                </p>
                <a
                  className="btn btn-ghost"
                  style={{ marginTop: 18, fontSize: 13.5, padding: "10px 20px" }}
                  href={waLink(c.phone)}
                  target="_blank"
                  rel="noreferrer"
                >
                  Chat WhatsApp
                </a>
              </div>
            ))}
          </div>

          <div className="tentang-grid">
            <div className="card">
              <div className="kicker">Alamat</div>
              <h3>Lokasi Pondok</h3>
              <p>
                Komplek Pondok Pesantren Hidayatul Hikmah
                <br />
                Kp. Sukajami Pasanggrahan, Ds. Sukatani
                <br />
                Kec. Cisoka, Kab. Tangerang, Banten
              </p>
              <a
                className="btn"
                style={{ marginTop: 18 }}
                href="https://maps.app.goo.gl/4NV3JTQPSjt6ADwX9"
                target="_blank"
                rel="noreferrer"
              >
                Buka Google Maps →
              </a>
              <div className="kicker" style={{ marginTop: 32 }}>
                Media Sosial
              </div>
              <p>
                Instagram, YouTube, TikTok:{" "}
                <strong style={{ color: "var(--gold2)" }}>@pphh_hidhik</strong>
              </p>
            </div>
            <div className="card form-card">
              <div className="kicker">Formulir Cepat</div>
              <h3>Kirim Pesan via WhatsApp</h3>
              <p style={{ marginBottom: 20 }}>
                Isi nama dan pesan, kami teruskan ke WhatsApp kantor pondok.
              </p>
              <label htmlFor="nama">Nama</label>
              <input
                id="nama"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                placeholder="Nama lengkap"
              />
              <label htmlFor="pesan">Pesan</label>
              <textarea
                id="pesan"
                value={pesan}
                onChange={(e) => setPesan(e.target.value)}
                placeholder="Tulis keperluan Anda…"
              />
              <button className="btn" onClick={kirimWA} type="button">
                Kirim via WhatsApp →
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
