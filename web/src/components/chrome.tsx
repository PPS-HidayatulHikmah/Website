"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/", label: "Beranda" },
  { href: "/tentang", label: "Tentang" },
  { href: "/acara", label: "Acara" },
  { href: "/blog", label: "Blog" },
  { href: "/alumni", label: "Alumni" },
  { href: "/kontak", label: "Kontak" },
];

const BOTTOM_LINKS = [
  {
    href: "/",
    label: "Beranda",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 11l9-8 9 8v9a2 2 0 0 1-2 2h-4v-7h-6v7H5a2 2 0 0 1-2-2v-9z" />
      </svg>
    ),
  },
  {
    href: "/acara",
    label: "Acara",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="5" width="18" height="16" rx="3" />
        <path d="M8 3v4M16 3v4M3 10h18" />
      </svg>
    ),
  },
  {
    href: "/blog",
    label: "Blog",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2V5z" />
        <path d="M4 19a2 2 0 0 1 2-2h13" />
      </svg>
    ),
  },
  {
    href: "/alumni",
    label: "Alumni",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="9" cy="8" r="3.5" />
        <path d="M2.5 20c0-3.5 3-5.5 6.5-5.5s6.5 2 6.5 5.5" />
        <circle cx="17" cy="9" r="2.5" />
        <path d="M16 14.7c2.8.3 5.5 2 5.5 5.3" />
      </svg>
    ),
  },
  {
    href: "/kontak",
    label: "Kontak",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M5 4h4l2 5-3 2a13 13 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A17 17 0 0 1 3 6a2 2 0 0 1 2-2z" />
      </svg>
    ),
  },
];

function BrandMark({ size = 44 }: { size?: number }) {
  return (
    <span className="brand-mark" style={{ width: size, height: size }}>
      <svg
        width={size * 0.55}
        height={size * 0.55}
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M20 14.5A8.5 8.5 0 0 1 9.5 4 8.5 8.5 0 1 0 20 14.5Z"
          fill="#1a1206"
        />
        <path
          d="M17 4l.9 2.1L20 7l-2.1.9L17 10l-.9-2.1L14 7l2.1-.9L17 4z"
          fill="#1a1206"
        />
      </svg>
    </span>
  );
}

export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <Link className="brand" href="/">
      <BrandMark size={compact ? 38 : 44} />
      <span className="brand-name">
        Hidayatul Hikmah<small>PONPES SALAFIYAH</small>
      </span>
    </Link>
  );
}

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export function AnnouncementBar() {
  return (
    <div className="announce">
      📢 <b>Haul Agung 3 Thoriqoh</b> — Ahad, 25 Oktober 2026 • 07.30 WIB •
      Komplek Ponpes Hidayatul Hikmah
    </div>
  );
}

export function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="nav">
      <div className="wrap nav-inner">
        <Brand />
        <div className="nav-links">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={isActive(pathname, l.href) ? "on" : ""}
            >
              {l.label}
            </Link>
          ))}
        </div>
        <Link className="btn" href="/kontak">
          Hubungi Kami
        </Link>
      </div>
    </nav>
  );
}

export function MobileTopbar() {
  return (
    <div className="mtop">
      <Brand compact />
      <Link
        className="btn"
        style={{ padding: "9px 18px", fontSize: 13 }}
        href="/kontak"
      >
        Hubungi
      </Link>
    </div>
  );
}

export function BottomNav() {
  const pathname = usePathname();
  return (
    <nav className="bnav" aria-label="Navigasi utama">
      <div className="bnav-in">
        {BOTTOM_LINKS.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className={isActive(pathname, l.href) ? "on" : ""}
          >
            {l.icon}
            {l.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

const SOCIALS = [
  {
    label: "Instagram",
    href: "https://instagram.com/pphh_hidhik",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#d4af37"
        strokeWidth="2"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="1.2" fill="#d4af37" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@pphh_hidhik",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#d4af37"
        strokeWidth="2"
      >
        <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
        <path d="M10.5 9.5v5l4.5-2.5z" fill="#d4af37" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://tiktok.com/@pphh_hidhik",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#d4af37"
        strokeWidth="2"
      >
        <path d="M9 17a4 4 0 1 0 4 4V4c.6 2.5 2.4 4.3 5 4.7" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="f-grid">
          <div>
            <div className="brand" style={{ marginBottom: 18 }}>
              <BrandMark />
              <span className="brand-name">
                Hidayatul Hikmah<small>PONPES SALAFIYAH</small>
              </span>
            </div>
            <p>
              Pondok Pesantren Salafiyah Hidayatul Hikmah — mencetak generasi
              Qur&apos;ani sejak 1983 di bawah asuhan Buya KH. Mukhtar Kamal.
            </p>
            <div className="soc">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noreferrer"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4>Navigasi</h4>
            <ul>
              {LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Program</h4>
            <ul>
              <li>
                <Link href="/tentang">Tahfidzul Qur&apos;an</Link>
              </li>
              <li>
                <Link href="/tentang">Kitab Kuning</Link>
              </li>
              <li>
                <Link href="/tentang">Madrasah Diniyah</Link>
              </li>
              <li>
                <Link href="/tentang">Thoriqoh</Link>
              </li>
              <li>
                <Link href="/kontak">Pendaftaran Santri</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Kontak Kantor</h4>
            <ul className="f-contact">
              <li>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#34d399"
                  strokeWidth="2"
                >
                  <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
                <span>
                  Kp. Sukajami Pasanggrahan, Ds. Sukatani, Kec. Cisoka, Kab.
                  Tangerang, Banten
                </span>
              </li>
              <li>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#34d399"
                  strokeWidth="2"
                >
                  <path d="M5 4h4l2 5-3 2a13 13 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A17 17 0 0 1 3 6a2 2 0 0 1 2-2z" />
                </svg>
                <span>Kantor: 0857-8045-0721</span>
              </li>
              <li>
                <span style={{ marginLeft: 26 }}>
                  Ro&apos;is Amm&apos;: 0858-6075-8215
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="f-bottom">
          <span>
            © 2026 Ponpes Salafiyah Hidayatul Hikmah. All rights reserved.
          </span>
          <span>@pphh_hidhik • Instagram • YouTube • TikTok</span>
        </div>
      </div>
    </footer>
  );
}
