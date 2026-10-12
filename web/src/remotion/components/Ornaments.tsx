import React from "react";
import { useCurrentFrame, useVideoConfig, spring } from "remotion";
import { COLORS } from "./FontLoader";

/** Divider emas dengan animasi melebar */
export const GoldDivider: React.FC<{ delay?: number; width?: number }> = ({
  delay = 0,
  width = 240,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = spring({
    frame: Math.max(0, frame - delay),
    fps,
    config: { damping: 200, stiffness: 90, mass: 0.9 },
  });
  return (
    <div
      style={{
        width: width * s,
        height: 3,
        margin: "26px auto",
        background: `linear-gradient(90deg, transparent, ${COLORS.gold} 25%, ${COLORS.goldLight} 50%, ${COLORS.gold} 75%, transparent)`,
        borderRadius: 2,
        opacity: s,
      }}
    />
  );
};

/** Bingkai ornamen sudut — garis emas tipis di 4 sudut frame */
export const CornerFrame: React.FC<{ inset?: number; delay?: number }> = ({
  inset = 44,
  delay = 0,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = spring({
    frame: Math.max(0, frame - delay),
    fps,
    config: { damping: 200, stiffness: 80, mass: 1 },
  });
  const len = 120;
  const common: React.CSSProperties = {
    position: "absolute",
    width: len * s,
    height: len * s,
    opacity: 0.55 * s,
    borderColor: COLORS.gold,
    borderStyle: "solid",
    borderWidth: 0,
  };
  return (
    <>
      <div style={{ ...common, top: inset, left: inset, borderTopWidth: 2, borderLeftWidth: 2 }} />
      <div style={{ ...common, top: inset, right: inset, borderTopWidth: 2, borderRightWidth: 2 }} />
      <div style={{ ...common, bottom: inset, left: inset, borderBottomWidth: 2, borderLeftWidth: 2 }} />
      <div style={{ ...common, bottom: inset, right: inset, borderBottomWidth: 2, borderRightWidth: 2 }} />
    </>
  );
};
