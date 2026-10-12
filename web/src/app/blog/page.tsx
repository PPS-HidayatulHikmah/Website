import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Kabar, kegiatan, dan pengumuman Pondok Pesantren Salafiyah Hidayatul Hikmah.",
};

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  thumb: string;
};

export const POSTS: PostMeta[] = [
  {
    slug: "persiapan-haul-2026",
    title: "Persiapan Haul Agung 3 Thoriqoh Tahun 2026",
    date: "8 Oktober 2026",
    category: "KEGIATAN",
    excerpt:
      "Panitia mulai mematangkan persiapan acara tahunan terbesar pondok yang akan digelar akhir Oktober...",
    thumb: "t1",
  },
  {
    slug: "manaqib-istighosah-rutin",
    title: "Jadwal Manaqib & Istighosah Rutin Bulanan",
    date: "2 Oktober 2026",
    category: "KAJIAN",
    excerpt:
      "Kegiatan manaqib bulanan kembali digelar dengan khidmat, dihadiri ratusan jamaah dari berbagai daerah...",
    thumb: "t2",
  },
  {
    slug: "psb-2026",
    title: "Penerimaan Santri Baru Tahun Ajaran 2026/2027",
    date: "28 September 2026",
    category: "PENGUMUMAN",
    excerpt:
      "Pendaftaran santri baru telah dibuka. Simak syarat, jadwal, dan tata cara pendaftarannya di sini...",
    thumb: "t3",
  },
];

export default function BlogPage() {
  return (
    <>
      <div className="page-hero">
        <div className="wrap">
          <div className="crumb">
            <Link href="/">Beranda</Link> / Blog
          </div>
          <h1>
            Kabar <span className="gold-text">Pesantren</span>
          </h1>
          <p>
            Dokumentasi kegiatan, kajian, dan pengumuman dari lingkungan
            Pondok Pesantren Salafiyah Hidayatul Hikmah.
          </p>
        </div>
      </div>

      <section className="block">
        <div className="wrap">
          <div className="blog-grid">
            {POSTS.map((p) => (
              <article className="post" key={p.slug}>
                <div className={`thumb ${p.thumb}`}>
                  <span className="cat">{p.category}</span>
                </div>
                <div className="pbody">
                  <div className="date">{p.date}</div>
                  <h3>{p.title}</h3>
                  <p>{p.excerpt}</p>
                  <Link className="more" href={`/blog/${p.slug}`}>
                    Baca selengkapnya →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
