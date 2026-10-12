import React, { useMemo } from "react";
import { useCurrentFrame, random } from "remotion";
import { COLORS } from "./FontLoader";

/**
 * Background: gradient navy gelap + pola geometri Islami (SVG, opacity rendah,
 * bergerak sangat pelan) + partikel cahaya emas deterministik.
 */

const IslamicPattern: React.FC = () => {
  const frame = useCurrentFrame();
  // Gerak sangat pelan: pola bergeser 8px selama 28 detik
  const offset = (frame / 840) * 8;
  return (
    <svg
      width="1080"
      height="1920"
      style={{ position: "absolute", inset: 0, opacity: 0.055 }}
    >
      <defs>
        <pattern
          id="isl-geo"
          width="180"
          height="180"
          patternUnits="userSpaceOnUse"
          patternTransform={`translate(${offset},${offset * 0.6})`}
        >
          <g fill="none" stroke={COLORS.gold} strokeWidth="1.4">
            <rect x="62" y="62" width="56" height="56" />
            <rect
              x="62"
              y="62"
              width="56"
              height="56"
              transform="rotate(45 90 90)"
            />
            <circle cx="90" cy="90" r="5" fill={COLORS.gold} stroke="none" />
            <path d="M90 20 L90 40 M90 140 L90 160 M20 90 L40 90 M140 90 L160 90" />
          </g>
        </pattern>
      </defs>
      <rect width="1080" height="1920" fill="url(#isl-geo)" />
    </svg>
  );
};

type Particle = {
  x: number;
  y: number;
  r: number;
  speed: number;
  phase: number;
  drift: number;
};

const GoldParticles: React.FC<{ count?: number }> = ({ count = 34 }) => {
  const frame = useCurrentFrame();
  const particles = useMemo<Particle[]>(
    () =>
      Array.from({ length: count }, (_, i) => ({
        // random() dari Remotion = deterministik berdasarkan seed string
        x: random(`px-${i}`) * 1080,
        y: random(`py-${i}`) * 1920,
        r: 1.5 + random(`pr-${i}`) * 3,
        speed: 0.25 + random(`ps-${i}`) * 0.6,
        phase: random(`ph-${i}`) * Math.PI * 2,
        drift: (random(`pd-${i}`) - 0.5) * 60,
      })),
    [count]
  );
  return (
    <>
      {particles.map((p, i) => {
        const y = (p.y - frame * p.speed * 1.6 + 1920 * 3) % 1920;
        const x = p.x + Math.sin(frame / 90 + p.phase) * p.drift * 0.3;
        const opacity = 0.12 + 0.3 * Math.abs(Math.sin(frame / 45 + p.phase));
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: x,
              top: y,
              width: p.r * 2,
              height: p.r * 2,
              borderRadius: "50%",
              backgroundColor: COLORS.goldLight,
              opacity,
              filter: "blur(0.8px)",
            }}
          />
        );
      })}
    </>
  );
};

export const Background: React.FC = () => (
  <div
    style={{
      position: "absolute",
      inset: 0,
      background: `linear-gradient(180deg, ${COLORS.bgTop} 0%, ${COLORS.bgBottom} 100%)`,
      overflow: "hidden",
    }}
  >
    {/* cahaya emas lembut di tengah */}
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "38%",
        width: 760,
        height: 760,
        transform: "translate(-50%, -50%)",
        background:
          "radial-gradient(circle, rgba(212,175,55,0.09) 0%, rgba(212,175,55,0) 62%)",
      }}
    />
    <IslamicPattern />
    <GoldParticles />
    {/* vignette */}
    <div
      style={{
        position: "absolute",
        inset: 0,
        background:
          "radial-gradient(ellipse 100% 92% at 50% 50%, transparent 58%, rgba(0,0,0,0.5) 100%)",
      }}
    />
  </div>
);
