import React from "react";
import { COLORS, cinzel, inter } from "../components/FontLoader";
import { Reveal, SceneShell, textShadow } from "../components/KineticText";
import {
  InstagramIcon,
  YoutubeIcon,
  TiktokIcon,
  MapsIcon,
} from "../components/Icons";
import type { SceneProps } from "./sceneTypes";
import { fz } from "./sceneTypes";

/**
 * Scene 5 — Sosial media (20,5–25 dtk).
 * Surat undangan TIDAK menyebut jadwal live streaming,
 * jadi tidak ada tulisan "LIVE" / jam siaran.
 */
export const Scene5: React.FC<SceneProps> = ({ data, variant, height }) => {
  const socials = [
    { icon: <InstagramIcon size={fz(variant, 58)} />, label: "Instagram" },
    { icon: <YoutubeIcon size={fz(variant, 58)} />, label: "YouTube" },
    { icon: <TiktokIcon size={fz(variant, 58)} />, label: "TikTok" },
  ];
  return (
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
          IKUTI KAMI
        </div>
      </Reveal>
      {socials.map((s, i) => (
        <Reveal key={s.label} delay={18 + i * 14} y={28}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 24,
              marginBottom: 24,
            }}
          >
            {s.icon}
            <div
              style={{
                fontFamily: inter,
                fontWeight: 700,
                fontSize: fz(variant, 56),
                color: COLORS.goldLight,
                ...textShadow,
              }}
            >
              {data.socialHandle}
            </div>
          </div>
        </Reveal>
      ))}
      <Reveal delay={64}>
        <div
          style={{
            fontFamily: inter,
            fontSize: fz(variant, 38),
            color: COLORS.muted,
            ...textShadow,
            marginTop: 26,
            maxWidth: 880,
            lineHeight: 1.55,
            textAlign: "center",
          }}
        >
          {data.socialNote} {data.socialHandle}
        </div>
      </Reveal>
      {data.liveStreamNote.trim() !== "" && (
        <Reveal delay={78}>
          <div
            style={{
              fontFamily: inter,
              fontWeight: 600,
              fontSize: fz(variant, 38),
              color: COLORS.goldLight,
              ...textShadow,
              marginTop: 16,
              maxWidth: 880,
              textAlign: "center",
              lineHeight: 1.5,
            }}
          >
            {data.liveStreamNote}
          </div>
        </Reveal>
      )}
      {/* Tombol Maps (placeholder — bukan QR palsu) */}
      <Reveal delay={88}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginTop: 30,
            padding: "20px 44px",
            borderRadius: 999,
            border: `2px solid ${COLORS.green}`,
            background: "rgba(31,157,85,0.12)",
          }}
        >
          <MapsIcon size={fz(variant, 44)} />
          <div
            style={{
              fontFamily: inter,
              fontWeight: 600,
              fontSize: fz(variant, 40),
              color: COLORS.white,
              ...textShadow,
            }}
          >
            Google Maps · {data.mapsLabel}
          </div>
        </div>
      </Reveal>
      <Reveal delay={100}>
        <div
          style={{
            fontFamily: inter,
            fontSize: fz(variant, 34),
            color: COLORS.muted,
            ...textShadow,
            marginTop: 26,
            lineHeight: 1.7,
            textAlign: "center",
          }}
        >
          Informasi:{" "}
          {data.contacts.map((c, i) => (
            <span key={c.number}>
              {c.number} ({c.label}){i < data.contacts.length - 1 ? "  •  " : ""}
            </span>
          ))}
        </div>
      </Reveal>
    </SceneShell>
  );
};
