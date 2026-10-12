import React from "react";
import { Img } from "remotion";
import { COLORS, amiri, inter } from "../components/FontLoader";
import { Reveal, SceneShell, textShadow } from "../components/KineticText";
import { GoldDivider } from "../components/Ornaments";
import type { SceneProps } from "./sceneTypes";
import { fz } from "./sceneTypes";

/** Scene 6 — Penutup (25–28 dtk) */
export const Scene6: React.FC<SceneProps> = ({ data, variant, height }) => {
  const logoSize = variant === "square" ? 150 : 170;
  return (
    <SceneShell height={height}>
      <Reveal delay={4}>
        <div
          style={{
            fontFamily: inter,
            fontSize: fz(variant, 44),
            color: COLORS.white,
            ...textShadow,
            maxWidth: 900,
            lineHeight: 1.65,
            textAlign: "center",
          }}
        >
          {data.closingInvite}
        </div>
      </Reveal>
      <Reveal delay={18}>
        <GoldDivider delay={18} width={variant === "square" ? 280 : 360} />
      </Reveal>
      <Reveal delay={26}>
        <Img
          src={"/logo-pps-hidhik-1-2048x2048.png"}
          alt="Logo Pondok Pesantren Hidayatul Hikmah"
          style={{
            width: logoSize,
            height: logoSize,
            filter: "drop-shadow(0 0 30px rgba(212,175,55,0.4))",
          }}
        />
      </Reveal>
      <Reveal delay={36}>
        <div
          style={{
            fontFamily: inter,
            fontSize: fz(variant, 38),
            color: COLORS.muted,
            ...textShadow,
            marginTop: 22,
            textAlign: "center",
            lineHeight: 1.6,
          }}
        >
          Pengasuh: {data.caretaker}
        </div>
      </Reveal>
      <Reveal delay={50}>
        <div
          style={{
            fontFamily: amiri,
            fontWeight: 700,
            fontSize: fz(variant, 52),
            color: COLORS.goldLight,
            ...textShadow,
            marginTop: 30,
            direction: "rtl",
            lineHeight: 1.9,
          }}
        >
          وَالسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ
        </div>
      </Reveal>
      <Reveal delay={62}>
        <div
          style={{
            fontFamily: inter,
            fontStyle: "italic",
            fontSize: fz(variant, 36),
            color: COLORS.muted,
            ...textShadow,
            marginTop: 10,
          }}
        >
          {data.closingSalam}
        </div>
      </Reveal>
    </SceneShell>
  );
};
