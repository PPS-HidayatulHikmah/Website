import React from "react";
import { Img, useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { COLORS, cinzel, amiri, inter } from "../components/FontLoader";
import { Reveal, Words, SceneShell, textShadow } from "../components/KineticText";
import { CornerFrame } from "../components/Ornaments";
import type { SceneProps } from "./sceneTypes";
import { fz } from "./sceneTypes";

/** Scene 1 — Pembuka: logo + nama pondok (0–4,5 dtk) */
export const Scene1: React.FC<SceneProps> = ({ data, variant, height }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  // Logo: fade-in + scale pelan 0.9 -> 1
  const logoT = spring({
    frame: Math.max(0, frame - 30),
    fps,
    config: { damping: 200, stiffness: 60, mass: 1 },
  });
  const logoScale = interpolate(logoT, [0, 1], [0.9, 1]);
  const halo = interpolate(
    spring({ frame: Math.max(0, frame - 20), fps, config: { damping: 200, stiffness: 60, mass: 1 } }),
    [0, 1],
    [0, 1]
  );
  const logoSize = variant === "square" ? 300 : 360;

  return (
    <SceneShell height={height}>
      <CornerFrame delay={10} />
      <Words
        text={data.pondokArabic}
        delay={8}
        stagger={9}
        style={{ direction: "rtl", marginBottom: 34, maxWidth: 920 }}
        wordStyle={{
          fontFamily: amiri,
          fontSize: fz(variant, 54),
          color: COLORS.goldLight,
          ...textShadow,
        }}
      />
      <div
        style={{
          opacity: logoT,
          transform: `scale(${logoScale})`,
          filter: `drop-shadow(0 0 ${Math.round(50 * halo)}px rgba(212,175,55,${(0.45 * halo).toFixed(2)}))`,
        }}
      >
        <Img
          src={"/logo-pps-hidhik-1-2048x2048.png"}
          alt="Logo Pondok Pesantren Hidayatul Hikmah"
          style={{ width: logoSize, height: logoSize }}
        />
      </div>
      <Reveal delay={62}>
        <div
          style={{
            fontFamily: cinzel,
            fontWeight: 700,
            fontSize: fz(variant, 54),
            letterSpacing: 8,
            color: COLORS.white,
            ...textShadow,
            marginTop: 46,
            lineHeight: 1.35,
            maxWidth: 920,
          }}
        >
          {data.pondokName}
        </div>
      </Reveal>
      <Reveal delay={80}>
        <div
          style={{
            fontFamily: inter,
            fontSize: fz(variant, 40),
            letterSpacing: 4,
            color: COLORS.muted,
            ...textShadow,
            marginTop: 20,
          }}
        >
          {data.established}
        </div>
      </Reveal>
      <Reveal delay={96}>
        <div
          style={{
            fontFamily: inter,
            fontSize: fz(variant, 36),
            color: COLORS.gold,
            ...textShadow,
            marginTop: 14,
            fontStyle: "italic",
          }}
        >
          Pengasuh: {data.caretaker}
        </div>
      </Reveal>
    </SceneShell>
  );
};
