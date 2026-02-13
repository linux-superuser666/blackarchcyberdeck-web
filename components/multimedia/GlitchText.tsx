import React from "react";

interface GlitchTextProps {
  text?: string;
  fontSize?: number | string;
  className?: string;
}

const GlitchText = ({
  text = "Cyberdeck blackarch",
  fontSize = 20,
  className = "",
}: GlitchTextProps) => {
  const computedFontSize =
    typeof fontSize === "number" ? `${fontSize}px` : fontSize;

  return (
    <div
      className={`glitch relative uppercase font-semibold ${className}`}
      style={{ fontSize: computedFontSize }}
    >
      <div className="line">{text}</div>
      <div className="line">{text}</div>
      <div>{text}</div>
    </div>
  );
};

export default GlitchText;
