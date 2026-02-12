"use client";

import React from "react";
import Image from "next/image";

interface GlitchIconProps {
  src: string;
  alt?: string;
  layers?: number;
  width?: number;
  height?: number;
  className?: string;
}

const GlitchIcon = ({
  src,
  alt = "icon",
  layers = 6,
  width = 40,
  height = 40,
  className = "",
}: GlitchIconProps) => {
  const items = Array.from({ length: layers });

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ width, height }}
    >
      {items.map((_, index) => (
        <div
          key={index}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="object-contain select-none pointer-events-none"
            priority
          />
        </div>
      ))}
    </div>
  );
};

export default GlitchIcon;
