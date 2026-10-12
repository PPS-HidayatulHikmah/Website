import React from "react";
import { publicPath } from "../publicPath";

// Font lokal dari public/fonts — file yang sama persis dengan Google Fonts
// (Cinzel variable, Inter variable, Amiri static), di-vendor karena
// egress proxy sandbox memblokir fetch Node.js ke fonts.gstatic.com.
// Hasil visual identik dengan memuat via @remotion/google-fonts.
const FACES: { family: string; weight: string; file: string; unicode?: string }[] = [
  { family: "Cinzel", weight: "400 900", file: "fonts/cinzel-var-latin.woff2" },
  { family: "Inter", weight: "100 900", file: "fonts/inter-var-latin.woff2" },
  {
    family: "Amiri",
    weight: "400",
    file: "fonts/amiri-400-arabic.woff2",
    unicode: "U+0600-06FF, U+0750-077F, U+08A0-08FF",
  },
  {
    family: "Amiri",
    weight: "400",
    file: "fonts/amiri-400-latin.woff2",
    unicode: "U+0000-00FF",
  },
  {
    family: "Amiri",
    weight: "700",
    file: "fonts/amiri-700-arabic.woff2",
    unicode: "U+0600-06FF, U+0750-077F, U+08A0-08FF",
  },
  {
    family: "Amiri",
    weight: "700",
    file: "fonts/amiri-700-latin.woff2",
    unicode: "U+0000-00FF",
  },
];

export const FontLoader: React.FC = () => {
  const css = FACES.map(
    (f) => `@font-face {
  font-family: '${f.family}';
  font-style: normal;
  font-weight: ${f.weight};
  font-display: swap;
  src: url('${publicPath(f.file)}') format('woff2');${
      f.unicode ? `\n  unicode-range: ${f.unicode};` : ""
    }
}`
  ).join("\n");
  return <style>{css}</style>;
};

export const cinzel = "'Cinzel', serif";
export const amiri = "'Amiri', serif";
export const inter = "'Inter', sans-serif";

export const COLORS = {
  bgTop: "#06101F",
  bgBottom: "#020409",
  gold: "#D4AF37",
  goldLight: "#F1D98A",
  green: "#1F9D55",
  greenLight: "#4ADE80",
  white: "#FFFFFF",
  muted: "#B9C4D6",
};
