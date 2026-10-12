import React from "react";
import {
  useCurrentFrame,
  useVideoConfig,
  spring,
  interpolate,
} from "remotion";

/**
 * Kinetic typography: teks muncul per baris dengan fade + naik pelan +
 * blur-to-sharp memakai spring lembut (tanpa bounce berlebihan).
 * Semua digerakkan useCurrentFrame — tanpa CSS transition/animation.
 */

const softSpring = { damping: 200, stiffness: 90, mass: 0.9 };

export const Reveal: React.FC<{
  delay?: number;
  y?: number;
  children: React.ReactNode;
  style?: React.CSSProperties;
}> = ({ delay = 0, y = 42, children, style }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = spring({
    frame: Math.max(0, frame - delay),
    fps,
    config: softSpring,
  });
  const blur = interpolate(s, [0, 1], [10, 0]);
  return (
    <div
      style={{
        opacity: s,
        transform: `translateY(${interpolate(s, [0, 1], [y, 0])}px)`,
        filter: blur > 0.3 ? `blur(${blur.toFixed(1)}px)` : undefined,
        textAlign: "center",
        ...style,
      }}
    >
      {children}
    </div>
  );
};

/** Teks muncul per kata dengan stagger */
export const Words: React.FC<{
  text: string;
  delay?: number;
  stagger?: number;
  style?: React.CSSProperties;
  wordStyle?: React.CSSProperties;
}> = ({ text, delay = 0, stagger = 7, style, wordStyle }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const words = text.split(" ");
  return (
    <div style={{ textAlign: "center", ...style }}>
      {words.map((w, i) => {
        const s = spring({
          frame: Math.max(0, frame - delay - i * stagger),
          fps,
          config: softSpring,
        });
        const blur = interpolate(s, [0, 1], [8, 0]);
        return (
          <span
            key={i}
            style={{
              display: "inline-block",
              opacity: s,
              transform: `translateY(${interpolate(s, [0, 1], [30, 0])}px)`,
              filter: blur > 0.3 ? `blur(${blur.toFixed(1)}px)` : undefined,
              marginRight: i < words.length - 1 ? "0.28em" : 0,
              ...wordStyle,
            }}
          >
            {w}
          </span>
        );
      })}
    </div>
  );
};

/** Pembungkus scene: konten terpusat dengan safe area 150px atas/bawah */
export const SceneShell: React.FC<{
  children: React.ReactNode;
  height: number;
}> = ({ children, height }) => (
  <div
    style={{
      position: "absolute",
      inset: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: `150px 80px`,
      height,
    }}
  >
    {children}
  </div>
);

export const textShadow: React.CSSProperties = {
  textShadow: "0 2px 22px rgba(0,0,0,0.8)",
};
