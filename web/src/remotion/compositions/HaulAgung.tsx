import React from "react";
import {
  AbsoluteFill,
  Audio,
  useCurrentFrame,
  interpolate,
} from "remotion";
import { publicPath } from "../publicPath";
import {
  TransitionSeries,
  linearTiming,
} from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { Background } from "../components/Background";
import { FontLoader } from "../components/FontLoader";
import type { EventProps } from "../data/event";
import type { Variant } from "../scenes/sceneTypes";
import { Scene1 } from "../scenes/Scene1";
import { Scene2 } from "../scenes/Scene2";
import { Scene3 } from "../scenes/Scene3";
import { Scene4 } from "../scenes/Scene4";
import { Scene4b } from "../scenes/Scene4b";
import { Scene5 } from "../scenes/Scene5";
import { Scene6 } from "../scenes/Scene6";

/* ------------------------------------------------------------------
 * PERHITUNGAN DURASI (30 fps)
 * Target total: 960 frame (32 detik) — bertambah 1 scene baru.
 * Transisi antar-scene: 6 × 15 frame = 90 frame overlap.
 * Maka jumlah durasi sequence = 960 + 90 = 1050 frame.
 *
 * Durasi tiap sequence (termasuk 15 frame overlap keluar,
 * kecuali scene terakhir):
 *   S1: 150 | S2: 165 | S3: 180 | S4: 165 | S4b: 150 | S5: 150 | S6: 90
 *   Total = 1050 → 1050 − 90 = 960 frame ✓
 * ------------------------------------------------------------------ */
const SEQ = [150, 165, 180, 165, 150, 150, 90];
const TRANSITION = 15;
export const TOTAL_FRAMES = 960;

/** Musik latar opsional: fade in/out 1 detik, volume 0.35 */
const AudioBed: React.FC<{ src: string }> = ({ src }) => {
  const frame = useCurrentFrame();
  const volume = interpolate(
    frame,
    [0, 30, TOTAL_FRAMES - 30, TOTAL_FRAMES],
    [0, 0.35, 0.35, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );
  return <Audio src={publicPath(src)} volume={volume} />;
};

export const HaulAgungTimeline: React.FC<{
  data: EventProps;
  variant: Variant;
  height: number;
}> = ({ data, variant, height }) => {
  const transition = (key: number) => (
    <TransitionSeries.Transition
      key={key}
      presentation={fade()}
      timing={linearTiming({ durationInFrames: TRANSITION })}
    />
  );
  return (
    <AbsoluteFill>
      <FontLoader />
      <Background />
      {data.audioSrc.trim() !== "" && <AudioBed src={data.audioSrc} />}
      <TransitionSeries>
        <TransitionSeries.Sequence durationInFrames={SEQ[0]}>
          <Scene1 data={data} variant={variant} height={height} />
        </TransitionSeries.Sequence>
        {transition(0)}
        <TransitionSeries.Sequence durationInFrames={SEQ[1]}>
          <Scene2 data={data} variant={variant} height={height} />
        </TransitionSeries.Sequence>
        {transition(1)}
        <TransitionSeries.Sequence durationInFrames={SEQ[2]}>
          <Scene3 data={data} variant={variant} height={height} />
        </TransitionSeries.Sequence>
        {transition(2)}
        <TransitionSeries.Sequence durationInFrames={SEQ[3]}>
          <Scene4 data={data} variant={variant} height={height} />
        </TransitionSeries.Sequence>
        {transition(3)}
        <TransitionSeries.Sequence durationInFrames={SEQ[4]}>
          <Scene4b data={data} variant={variant} height={height} />
        </TransitionSeries.Sequence>
        {transition(4)}
        <TransitionSeries.Sequence durationInFrames={SEQ[5]}>
          <Scene5 data={data} variant={variant} height={height} />
        </TransitionSeries.Sequence>
        {transition(5)}
        <TransitionSeries.Sequence durationInFrames={SEQ[6]}>
          <Scene6 data={data} variant={variant} height={height} />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};

/** Varian 9:16 — composition id "HaulAgung" */
export const HaulAgungPortrait: React.FC<EventProps> = (props) => (
  <HaulAgungTimeline data={props} variant="portrait" height={1920} />
);

/** Varian 1:1 — composition id "HaulAgung-Square", scene sama, layout menyesuaikan */
export const HaulAgungSquare: React.FC<EventProps> = (props) => (
  <HaulAgungTimeline data={props} variant="square" height={1080} />
);
