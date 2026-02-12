"use client";

import React, { useEffect, useRef } from "react";

interface Props {
  src: string;
  width?: number;
  height?: number;
  intensity?: number;
}

export default function GlitchCanvas({
  src,
  width = 60,
  height = 60,
  intensity = 4,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const interval = setInterval(() => {
      const x = (Math.random() - 0.5) * intensity;
      const y = (Math.random() - 0.5) * intensity;

      el.style.setProperty("--glitch-x", `${x}px`);
      el.style.setProperty("--glitch-y", `${y}px`);

      el.style.setProperty(
        "--glitch-opacity",
        Math.random() > 0.7 ? "0.8" : "1"
      );
    }, 80);

    return () => clearInterval(interval);
  }, [intensity]);

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden glitch-wrapper"
      style={{ width, height }}
    >
      {/* Base */}
      <img
        src={src}
        width={width}
        height={height}
        className="absolute inset-0 object-contain"
        draggable={false}
      />

      {/* Red Channel */}
      <img
        src={src}
        width={width}
        height={height}
        className="absolute inset-0 object-contain mix-blend-screen glitch-red"
        draggable={false}
      />

      {/* Cyan Channel */}
      <img
        src={src}
        width={width}
        height={height}
        className="absolute inset-0 object-contain mix-blend-screen glitch-cyan"
        draggable={false}
      />

      {/* Scanlines */}
      <div className="absolute inset-0 pointer-events-none scanlines" />
    </div>
  );
}
