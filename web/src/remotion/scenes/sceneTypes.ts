import type { EventProps } from "../data/event";

export type Variant = "portrait" | "square";

export type SceneProps = {
  data: EventProps;
  variant: Variant;
  /** tinggi komposisi (1920 portrait / 1080 square) */
  height: number;
};

/** Skala font untuk varian square */
export const fz = (variant: Variant, n: number) =>
  Math.round(n * (variant === "square" ? 0.78 : 1));
