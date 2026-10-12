import type { Metadata } from "next";
import {
  AnnouncementBar,
  Navbar,
  MobileTopbar,
  BottomNav,
  Footer,
} from "@/components/chrome";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Pondok Pesantren Salafiyah Hidayatul Hikmah",
    template: "%s • Hidayatul Hikmah",
  },
  description:
    "Pondok Pesantren Salafiyah Hidayatul Hikmah, Cisoka, Tangerang — mencetak generasi Qur'ani berakhlak mulia sejak 1983.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>
        <AnnouncementBar />
        <Navbar />
        <MobileTopbar />
        <main>{children}</main>
        <Footer />
        <BottomNav />
      </body>
    </html>
  );
}
