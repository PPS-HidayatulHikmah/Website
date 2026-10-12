// Helper path aset publik untuk dipakai di dalam @remotion/player.
// Di Player, staticFile() dari "remotion" mengembalikan path apa adanya,
// sehingga path relatif ("fonts/x.woff2") akan rusak di route bersarang
// (mis. /acara/fonts/x.woff2). Selalu gunakan path absolut dari public/.
export const publicPath = (p: string): string =>
  p.startsWith("/") ? p : `/${p}`;
