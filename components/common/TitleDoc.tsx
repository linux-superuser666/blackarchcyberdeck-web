import React from "react";

interface TitleDocProps {
  text: string;
  colorClass?: string;
  glowColor?: string;
  className?: string;
  uppercase?: boolean;
}

const TitleDoc: React.FC<TitleDocProps> = ({
  text,
  colorClass = "text-redx",
  glowColor = "#f75049",
  className = "",
  uppercase = true,
}) => {
  return (
    <div
      className={`flex font-semibold items-center ${
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

export default TitleDoc;
