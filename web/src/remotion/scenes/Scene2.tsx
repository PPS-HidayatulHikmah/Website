import React from "react";
import { COLORS, cinzel, inter } from "../components/FontLoader";
import { Reveal, SceneShell, textShadow } from "../components/KineticText";
import { GoldDivider } from "../components/Ornaments";
import type { SceneProps } from "./sceneTypes";
import { fz } from "./sceneTypes";

/** Scene 2 — Judul acara (4,5–9,5 dtk) */
export const Scene2: React.FC<SceneProps> = ({ data, variant, height }) => (
  <SceneShell height={height}>
    <Reveal delay={6}>
      <div
        style={{
          fontFamily: cinzel,
          fontWeight: 800,
          fontSize: fz(variant, 120),
          letterSpacing: 16,
          color: COLORS.gold,
          ...textShadow,
          textShadow: `${textShadow.textShadow}, 0 0 70px rgba(212,175,55,0.35)`,
        }}
      >
        {data.titleLine1}
      </div>
    </Reveal>
    <Reveal delay={20}>
      <div
        style={{
          fontFamily: cinzel,
          fontWeight: 700,
          fontSize: fz(variant, 84),
          letterSpacing: 10,
          color: COLORS.white,
          ...textShadow,
          marginTop: 6,
        }}
      >
        {data.titleLine2}
      </div>
    </Reveal>
    <Reveal delay={32}>
      <GoldDivider delay={32} width={variant === "square" ? 320 : 440} />
    </Reveal>
    {data.imams.map((imam, i) => (
      <Reveal key={imam.tarekat} delay={44 + i * 20} y={30}>
        <div style={{ marginBottom: i < data.imams.length - 1 ? 26 : 0 }}>
          <div
            style={{
              fontFamily: inter,
              fontSize: fz(variant, 40),
              color: COLORS.muted,
              ...textShadow,
            }}
          >
            {imam.name}
          </div>
          <div
            style={{
              fontFamily: cinzel,
              fontWeight: 700,
              fontSize: fz(variant, 52),
              letterSpacing: 3,
              color: COLORS.goldLight,
              ...textShadow,
              marginTop: 6,
            }}
          >
            {imam.tarekat}
          </div>
        </div>
      </Reveal>
    ))}
    <Reveal delay={110}>
      <div
        style={{
          fontFamily: inter,
          fontSize: fz(variant, 36),
          letterSpacing: 2,
          color: COLORS.muted,
          ...textShadow,
          marginTop: 34,
          maxWidth: 900,
          lineHeight: 1.5,
        }}
      >
        {data.commemoration}
      </div>
    </Reveal>
  </SceneShell>
);
