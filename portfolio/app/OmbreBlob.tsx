import React from "react";

/**
 * Ombre ellipse blob matching Adora's Figma design.
 * Linear gradient: lavender tones, rotated ~151°
 * Always position: absolute; parent must be position: relative + overflow: hidden.
 */
interface BlobProps {
  size?: number;        // diameter in px (default 488)
  opacity?: number;     // 0–1 (default 0.72)
  blur?: number;        // px (default 55)
  style?: React.CSSProperties;
}

export default function OmbreBlob({ size = 488, opacity = 0.72, blur = 55, style = {} }: BlobProps) {
  return (
    <div
      style={{
        position: "absolute",
        width: size,
        height: size,
        borderRadius: "50%",
        background: "linear-gradient(151deg, #eacdc7 0%, #f0e3d3 55%, #e5e6d8 100%)",
        opacity,
        filter: `blur(${blur}px)`,
        pointerEvents: "none",
        zIndex: 0,
        ...style,
      }}
    />
  );
}

