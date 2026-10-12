import React from "react";
import { COLORS, cinzel } from "../components/FontLoader";
import { Reveal, SceneShell, textShadow } from "../components/KineticText";
import { SlideCard } from "../components/SlideCard";
import type { SceneProps } from "./sceneTypes";
import { fz } from "./sceneTypes";

/** Scene 4b — Special Performance: Qori Cilik + Penceramah */
export const Scene4b: React.FC<SceneProps> = ({ data, variant, height }) => (
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
        {data.specialTitle}
      </div>
    </Reveal>
    <SlideCard
      delay={28}
      from="left"
      label={data.qoriCilikLabel}
      name={data.qoriCilikName}
      sub={data.qoriCilikSub}
      variant={variant}
      labelColor={COLORS.goldLight}
    />
    <SlideCard
      delay={54}
      from="right"
      label={data.penceramahLabel}
      name={data.penceramahName}
      sub={data.penceramahTitle}
      variant={variant}
    />
  </SceneShell>
);
