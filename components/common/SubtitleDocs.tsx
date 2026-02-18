import React from "react";

interface SubtitleDocProps {
  text: string;
  colorClass?: string;
  glowColor?: string;
  className?: string;
  uppercase?: boolean;
}

const SubtitleDoc: React.FC<SubtitleDocProps> = ({
  text,
  colorClass = "text-orangex",
  glowColor = "#f8932e",
  className = "",
  uppercase = true,
}) => {
  return (
    <div
      className={`flex font-semibold text-[10px] items-center ${
        uppercase ? "uppercase" : ""
      } ${colorClass} ${className}`}
      style={{
        textShadow: `0 0 4px ${glowColor}`,
      }}
    >
      {text}
    </div>
  );
};

export default SubtitleDoc;
