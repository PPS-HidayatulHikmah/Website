"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Alumni = {
  nama: string;
  angkatan: string;
  daerah: string;
  profesi: string;
};

// Data contoh — nanti bisa diganti dari sumber data resmi pondok
const DATA: Alumni[] = [
  { nama: "H. Ahmad Fauzi", angkatan: "2005", daerah: "Jakarta", profesi: "Wiraswasta" },
  { nama: "Siti Maryam", angkatan: "2012", daerah: "Serang", profesi: "Guru" },
  { nama: "KH. Abdul Rohim", angkatan: "1998", daerah: "Tangerang", profesi: "Pengasuh Majelis Taklim" },
  { nama: "Ust. Mahmud Hidayat", angkatan: "2003", daerah: "Bogor", profesi: "Dai / Mubaligh" },
  { nama: "Hj. Nurhalimah", angkatan: "2008", daerah: "Tangerang", profesi: "Guru Madrasah" },
  { nama: "Drs. H. Samsudin", angkatan: "1995", daerah: "Jakarta", profesi: "PNS" },
  { nama: "Ustzh. Aisyah Putri", angkatan: "2015", daerah: "Lebak", profesi: "Pengajar Tahfidz" },
  { nama: "H. Burhanuddin", angkatan: "2001", daerah: "Tangerang", profesi: "Pedagang" },
  { nama: "Muhammad Ridwan", angkatan: "2018", daerah: "Serang", profesi: "Mahasiswa" },
  { nama: "Hj. Fatimah Zahra", angkatan: "2010", daerah: "Tangerang", profesi: "Ibu Rumah Tangga / Aktivis" },
  { nama: "Ust. Khoirul Anam", angkatan: "2007", daerah: "Pandeglang", profesi: "Imam Masjid" },
  { nama: "Siti Aminah", angkatan: "2016", daerah: "Tangerang", profesi: "Perawat" },
  { nama: "H. Abdul Malik", angkatan: "1992", daerah: "Jakarta", profesi: "Wiraswasta" },
  { nama: "Dewi Lestari", angkatan: "2019", daerah: "Bogor", profesi: "Mahasiswi" },
];

export default function AlumniPage() {
  const [q, setQ] = useState("");
  const [angkatan, setAngkatan] = useState("semua");

  const angkatans = useMemo(
    () => ["semua", ...Array.from(new Set(DATA.map((d) => d.angkatan))).sort()],
    []
  );

  const hasil = useMemo(() => {
    const query = q.trim().toLowerCase();
    return DATA.filter((d) => {
      const cocokQ =
        !query ||
        d.nama.toLowerCase().includes(query) ||
        d.daerah.toLowerCase().includes(query) ||
        d.profesi.toLowerCase().includes(query);
      const cocokA = angkatan === "semua" || d.angkatan === angkatan;
      return cocokQ && cocokA;
    });
  }, [q, angkatan]);

  return (
    <>
      <div className="page-hero">
        <div className="wrap">
          <div className="crumb">
            <Link href="/">Beranda</Link> / Alumni
          </div>
          <h1>
            Data <span className="gold-text">Alumni</span>
          </h1>
          <p>
            Jaringan alumni Pondok Pesantren Salafiyah Hidayatul Hikmah yang
            tersebar di berbagai daerah.
          </p>
        </div>
      </div>

      <section className="block">
        <div className="wrap">
          <div className="alumni-tools">
            <label className="searchbox">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#94a3b8"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-3.5-3.5" />
              </svg>
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Cari nama, daerah, atau profesi…"
              />
            </label>
            <select
              className="selectbox"
              value={angkatan}
              onChange={(e) => setAngkatan(e.target.value)}
              aria-label="Filter angkatan"
            >
              {angkatans.map((a) => (
                <option key={a} value={a}>
                  {a === "semua" ? "Semua Angkatan" : `Angkatan ${a}`}
                </option>
              ))}
            </select>
          </div>

          <div className="table-scroll">
            <table className="alumni">
              <thead>
                <tr>
                  <th>Nama</th>
                  <th>Angkatan</th>
                  <th>Daerah</th>
                  <th>Profesi</th>
                </tr>
              </thead>
              <tbody>
                {hasil.map((d) => (
                  <tr key={d.nama}>
                    <td>
                      <strong style={{ color: "var(--white)" }}>{d.nama}</strong>
                    </td>
                    <td>
                      <span className="pill">{d.angkatan}</span>
                    </td>
                    <td>{d.daerah}</td>
                    <td>{d.profesi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {hasil.length === 0 && (
              <div className="empty">
                Tidak ada alumni yang cocok dengan pencarian.
              </div>
            )}
          </div>

          <p
            style={{
              color: "var(--muted2)",
              fontSize: 13.5,
              marginTop: 18,
              lineHeight: 1.7,
            }}
          >
            Menampilkan {hasil.length} dari {DATA.length} data. Data di atas
            adalah contoh — hubungi kantor pondok untuk pendataan alumni
            resmi.
          </p>
        </div>
      </section>
    </>
  );
}
