import React from "react";
import { COLORS, cinzel } from "../components/FontLoader";
import { Reveal, SceneShell, textShadow } from "../components/KineticText";
import { SlideCard } from "../components/SlideCard";
import type { SceneProps } from "./sceneTypes";
import { fz } from "./sceneTypes";

/** Scene 4 — Pengisi acara: penampilan Qori */
export const Scene4: React.FC<SceneProps> = ({ data, variant, height }) => (
  <SceneShell height={height}>
    <Reveal delay={4}>
      <div
        style={{
          fontFamily: cinzel,
          fontWeight: 700,
          fontSize: fz(variant, 58),
          letterSpacing: 8,
          color: COLORS.gold,
          ...textShadow,
          marginBottom: 40,
        }}
      >
        PENGISI ACARA
      </div>
    </Reveal>
    {data.qoriActs.map((act, i) => (
      <SlideCard
        key={act.label}
        delay={28 + i * 26}
        from={i % 2 === 0 ? "left" : "right"}
        label={act.label}
        name={act.name}
        sub={act.origin}
        variant={variant}
      />
    ))}
  </SceneShell>
);
