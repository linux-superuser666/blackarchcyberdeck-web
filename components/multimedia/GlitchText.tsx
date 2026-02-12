import React from "react";

interface GlitchTextProps {
  text?: string;
  layers?: number;
  fontSize?: number | string; // 🔥 tambah ini
  className?: string;
}

const GlitchText = ({
  text = "Cyberdeck blackarch",
  layers = 9,
  fontSize = 20,
  className = "",
}: GlitchTextProps) => {
  const lines = Array.from({ length: layers }, () => text);

  const computedFontSize =
    typeof fontSize === "number" ? `${fontSize}px` : fontSize;

  return (
    <div
      className={`glitch uppercase font-semibold ${className}`}
      style={{ fontSize: computedFontSize }}
    >
      {lines.map((line, index) => (
        <div key={index} className="line">
          {line}
        </div>
      ))}
    </div>
  );
};

export default GlitchText;
