"use client";

import dynamic from "next/dynamic";
import type React from "react";
import { HaulAgungPortrait, TOTAL_FRAMES } from "@/remotion/compositions/HaulAgung";
import { defaultEventProps } from "@/remotion/data/event";

const Player = dynamic(
  () => import("@remotion/player").then((m) => m.Player),
  { ssr: false, loading: () => <div className="video-frame" style={{ aspectRatio: "9/16", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--muted2)" }}>Memuat video…</div> }
);

// Player mengetik `component` sebagai FC<Record<string, unknown>>;
/// komposisi memakai EventProps yang terstruktur — cast aman karena
// inputProps di bawah selalu defaultEventProps yang valid.
const HaulAgungForPlayer = HaulAgungPortrait as unknown as React.FC<
  Record<string, unknown>
>;

/** Video undangan Haul Agung — diputar langsung dari komposisi Remotion */
export function EventPlayer() {
  return (
    <div className="video-shell">
      <div className="video-frame">
        <Player
          component={HaulAgungForPlayer}
          inputProps={defaultEventProps}
          durationInFrames={TOTAL_FRAMES}
          fps={30}
          compositionWidth={1080}
          compositionHeight={1920}
          style={{ width: "100%", aspectRatio: "9/16" }}
          controls
          acknowledgeRemotionLicense
        />
      </div>
      <div className="video-note">
        Video undangan resmi • dibuat dengan Remotion
      </div>
    </div>
  );
}
