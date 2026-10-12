import { z } from "zod";

/**
 * Seluruh teks & data acara terpusat di sini.
 * Ejaan nama/gelar/tanggal mengikuti surat undangan resmi
 * dan brief — JANGAN diubah tanpa konfirmasi.
 */

export const ImamSchema = z.object({
  name: z.string(),
  tarekat: z.string(),
});

export const ContactSchema = z.object({
  number: z.string(),
  label: z.string(),
});

export const EventPropsSchema = z.object({
  // --- Acara ---
  titleLine1: z.string().default("HAUL"),
  titleLine2: z.string().default("3 THORIQOH AGUNG"),
  imams: z.array(ImamSchema).default([
    { name: "Syaikh Abdul Qodir Al-Jailani", tarekat: "Thoriqoh Qodiriyah" },
    {
      name: "Syaikh Muhammad Baha'udin An-Naqsabandi Al-Ma'rufi",
      tarekat: "Thoriqoh Naqsabandiyah",
    },
    { name: "Syaikh Abi Ali Hasan Sadzili", tarekat: "Thoriqoh Syadziliyah" },
  ]),
  commemoration: z
    .string()
    .default("Haul Almarhum Abah KH. Dulhadi · Haul Akbar ke-27 · Milad Pondok Pesantren ke-43"),
  subtitle: z.string().default("Haul Akbar ke-27 · Milad Pondok ke-43"),

  // --- Pondok ---
  pondokName: z.string().default("PONDOK PESANTREN HIDAYATUL HIKMAH"),
  pondokFull: z
    .string()
    .default("Pondok Pesantren Hidayatul Hikmah (Al-Ma'had Al-Islami As-Salafi Hidayatul Hikmah)"),
  pondokArabic: z.string().default("المعهد الإسلامي السلفي هداية الحكمة"),
  established: z.string().default("Berdiri 1983 · Cisoka, Tangerang"),
  caretaker: z.string().default("Buya KH. Mukhtar Kamal"),

  // --- Waktu & tempat ---
  dayLabel: z.string().default("Ahad pagi"),
  dateBig: z.string().default("25 OKTOBER 2026"),
  dateSub: z.string().default("Ahad · 14 Jumadil Ula 1448 H"),
  timeBig: z.string().default("07.30 WIB"),
  timeSub: z.string().default("s/d selesai"),
  venueName: z.string().default("Komplek Pondok Pesantren Hidayatul Hikmah"),
  venueAddress: z
    .string()
    .default(
      "Kp. Sukajami Pasangrahan, Ds. Sukatani, Kec. Cisoka, Kab. Tangerang, Banten"
    ),
  mapsUrl: z.string().default("https://maps.app.goo.gl/4NV3JTQPSjt6ADwX9"),
  mapsLabel: z.string().default("Cisoka, Tangerang"),

  // --- Rangkaian & pengisi ---
  programItems: z
    .array(z.string())
    .default([
      "Istighosah / Dzikir dan Pembacaan Manaqib",
      "Sambutan",
      "Qori",
      "Tausiyah",
    ]),
  // --- Penampilan Qori ---
  qoriActs: z
    .array(
      z.object({
        label: z.string(),
        name: z.string(),
        origin: z.string(),
      })
    )
    .default([
      {
        label: "QORI INTERNASIONAL",
        name: "Ust. Bongsang As'ary",
        origin: "Ciomas - Serang",
      },
      {
        label: "QORI'AH DUET",
        name: "Uspaliatu Solihah & Uswila Azkia",
        origin: "Sukajadi - Cibaliung",
      },
    ]),

  // --- Special Performance (scene baru) ---
  specialTitle: z.string().default("SPECIAL PERFORMANCE"),
  qoriCilikLabel: z.string().default("QORI CILIK"),
  qoriCilikName: z.string().default("Ananda Abang Rizieq Shihab"),
  qoriCilikSub: z.string().default("Cucu Gubes PPS. Hidayatul Hikmah"),
  penceramahLabel: z.string().default("PENCERAMAH"),
  penceramahName: z.string().default("DR. Drs. KH. E. Supriatna Mubarok"),
  penceramahTitle: z
    .string()
    .default("M.Sc., M.M., M.Pd. (Sukabumi - Jawa Barat)"),

  // --- Sosmed & kontak ---
  socialHandle: z.string().default("@pphh_hidhik"),
  socialNote: z
    .string()
    .default(
      "Ikuti kabar dan dokumentasi acara di YouTube, Instagram, dan TikTok"
    ),
  // Opsional: kalau diisi, tampil sebagai satu baris tambahan di scene 5.
  // Surat undangan TIDAK menyebut jadwal siaran langsung — biarkan kosong
  // kecuali ada info resmi.
  liveStreamNote: z.string().default(""),
  contacts: z.array(ContactSchema).default([
    { number: "0858-6075-8215", label: "Ro'is Amm'" },
    { number: "0821-1317-6432", label: "Wakil Ro'is" },
    { number: "0857-8045-0721", label: "Kantor" },
  ]),

  // --- Penutup ---
  closingInvite: z
    .string()
    .default(
      "Mari hadir dan raih keberkahan. Seluruh muslimin-muslimat dan para alumni diundang."
    ),
  closingSalam: z
    .string()
    .default("Wassalamu'alaikum Warahmatullahi Wabarakatuh"),

  // --- Audio (opsional) ---
  // Taruh file di public/audio/, mis. "audio/nasyid.mp3".
  // Kosong = tanpa suara.
  audioSrc: z.string().default(""),
});

export type EventProps = z.infer<typeof EventPropsSchema>;

export const defaultEventProps: EventProps = EventPropsSchema.parse({});
