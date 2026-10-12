import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { COLORS, cinzel, inter } from "./FontLoader";
import { textShadow } from "./KineticText";
import { fz, type Variant } from "../scenes/sceneTypes";

/** Kartu pengisi acara: masuk dari kiri/kanan dengan blur-to-sharp */
export const SlideCard: React.FC<{
  delay: number;
  from: "left" | "right";
  label: string;
  name: string;
  sub: string;
  variant: Variant;
  labelColor?: string;
}> = ({ delay, from, label, name, sub, variant, labelColor = COLORS.greenLight }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = spring({
    frame: Math.max(0, frame - delay),
    fps,
    config: { damping: 200, stiffness: 85, mass: 1 },
  });
  const dir = from === "left" ? -1 : 1;
  const x = interpolate(s, [0, 1], [dir * 420, 0]);
  const blur = interpolate(s, [0, 1], [10, 0]);
  return (
    <div
      style={{
        opacity: s,
        transform: `translateX(${x}px)`,
        filter: blur > 0.3 ? `blur(${blur.toFixed(1)}px)` : undefined,
        width: variant === "square" ? 800 : 880,
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(212,175,55,0.35)",
        borderRadius: 26,
        padding: "34px 40px",
        marginBottom: 28,
        textAlign: "center",
      }}
    >
      <div
        style={{
          fontFamily: inter,
          fontSize: fz(variant, 36),
          letterSpacing: 7,
          color: labelColor,
          ...textShadow,
          marginBottom: 12,
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontFamily: cinzel,
          fontWeight: 700,
          fontSize: fz(variant, 52),
          color: COLORS.white,
          ...textShadow,
          lineHeight: 1.3,
        }}
      >
        {name}
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
  );
};
