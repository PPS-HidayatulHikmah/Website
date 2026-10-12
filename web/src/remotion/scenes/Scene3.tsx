import React from "react";
import { COLORS, cinzel, inter } from "../components/FontLoader";
import { Reveal, SceneShell, textShadow } from "../components/KineticText";
import { CalendarIcon, ClockIcon, PinIcon } from "../components/Icons";
import type { SceneProps } from "./sceneTypes";
import { fz } from "./sceneTypes";

/** Scene 3 — Waktu dan tempat (9,5–15 dtk) */
export const Scene3: React.FC<SceneProps> = ({ data, variant, height }) => {
  const cardW = variant === "square" ? 800 : 880;
  const card = (delay: number, icon: React.ReactNode, big: string, sub: string) => (
    <Reveal key={big} delay={delay} y={36}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 30,
          width: cardW,
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(212,175,55,0.3)",
          borderRadius: 26,
          padding: "30px 40px",
          marginBottom: 30,
          textAlign: "left",
        }}
      >
        <div style={{ flexShrink: 0 }}>{icon}</div>
        <div>
          <div
            style={{
              fontFamily: inter,
              fontWeight: 700,
              fontSize: fz(variant, 50),
              color: COLORS.white,
              ...textShadow,
              lineHeight: 1.3,
            }}
          >
            {big}
          </div>
          <div
            style={{
              fontFamily: inter,
              fontSize: fz(variant, 38),
              color: COLORS.muted,
              ...textShadow,
              marginTop: 8,
              lineHeight: 1.45,
            }}
          >
            {sub}
          </div>
        </div>
      </div>
    </Reveal>
  );

  return (
    <SceneShell height={height}>
      <Reveal delay={4}>
        <div
          style={{
            fontFamily: cinzel,
            fontWeight: 700,
            fontSize: fz(variant, 60),
            letterSpacing: 8,
            color: COLORS.gold,
            ...textShadow,
            marginBottom: 44,
          }}
        >
          WAKTU & TEMPAT
        </div>
      </Reveal>
      {card(18, <CalendarIcon size={fz(variant, 64)} />, data.dateBig, data.dateSub)}
      {card(40, <ClockIcon size={fz(variant, 64)} />, `${data.timeBig} ${data.timeSub}`, data.dayLabel)}
      {card(
        62,
        <PinIcon size={fz(variant, 64)} />,
        data.venueName,
        data.venueAddress
      )}
    </SceneShell>
  );
};
