import React from "react";
import { COLORS } from "./FontLoader";

/** Ikon SVG sederhana — tanpa emoji, tanpa aset internet. */

type IconProps = { size?: number; color?: string };

const base = (size: number): React.CSSProperties => ({
  width: size,
  height: size,
  flexShrink: 0,
});

export const CalendarIcon: React.FC<IconProps> = ({
  size = 64,
  color = COLORS.gold,
}) => (
  <svg viewBox="0 0 24 24" style={base(size)} fill="none" stroke={color} strokeWidth="1.6">
    <rect x="3" y="5" width="18" height="16" rx="2.5" />
    <path d="M3 10h18M8 3v4M16 3v4" strokeLinecap="round" />
    <circle cx="12" cy="15.5" r="1.4" fill={color} stroke="none" />
  </svg>
);

export const ClockIcon: React.FC<IconProps> = ({
  size = 64,
  color = COLORS.gold,
}) => (
  <svg viewBox="0 0 24 24" style={base(size)} fill="none" stroke={color} strokeWidth="1.6">
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3.2 2" strokeLinecap="round" />
  </svg>
);

export const PinIcon: React.FC<IconProps> = ({
  size = 64,
  color = COLORS.gold,
}) => (
  <svg viewBox="0 0 24 24" style={base(size)} fill="none" stroke={color} strokeWidth="1.6">
    <path d="M12 21.5S5 15.6 5 10.3a7 7 0 0 1 14 0C19 15.6 12 21.5 12 21.5Z" />
    <circle cx="12" cy="10.3" r="2.6" />
  </svg>
);

export const InstagramIcon: React.FC<IconProps> = ({
  size = 56,
  color = COLORS.goldLight,
}) => (
  <svg viewBox="0 0 24 24" style={base(size)} fill="none" stroke={color} strokeWidth="1.7">
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="1.3" fill={color} stroke="none" />
  </svg>
);

export const YoutubeIcon: React.FC<IconProps> = ({
  size = 56,
  color = COLORS.goldLight,
}) => (
  <svg viewBox="0 0 24 24" style={base(size)} fill="none" stroke={color} strokeWidth="1.7">
    <rect x="2.8" y="6" width="18.4" height="12.5" rx="3.5" />
    <path d="M10.3 9.7v4.6L14.5 12l-4.2-2.3Z" fill={color} stroke="none" />
  </svg>
);

export const TiktokIcon: React.FC<IconProps> = ({
  size = 56,
  color = COLORS.goldLight,
}) => (
  <svg viewBox="0 0 24 24" style={base(size)} fill={color}>
    <path d="M16.6 3c.4 2.3 1.9 3.8 4.4 4v3.1c-1.6 0-3-.5-4.4-1.4v6.6c0 3.6-2.6 6.2-6.1 6.2-3.4 0-6-2.6-6-6 0-3.3 2.7-6 6.1-6 .3 0 .7 0 1 .1v3.3c-.3-.1-.7-.2-1-.2-1.6 0-2.9 1.3-2.9 2.9 0 1.6 1.3 2.8 2.8 2.8 1.7 0 2.9-1.2 2.9-3V3h3.2Z" />
  </svg>
);

export const MapsIcon: React.FC<IconProps> = ({
  size = 44,
  color = COLORS.green,
}) => (
  <svg viewBox="0 0 24 24" style={base(size)} fill="none" stroke={color} strokeWidth="1.8">
    <path d="M9 4 3.5 6v14L9 18l6 2 5.5-2V4L15 6 9 4Z" strokeLinejoin="round" />
    <path d="M9 4v14M15 6v14" strokeLinecap="round" />
  </svg>
);
