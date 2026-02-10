import React from "react";

const GlitchText = ({
  text = "Cyberdeck blackarch",
  layers = 9,
  className = "",
}) => {
  const lines = Array.from({ length: layers }, () => text);

  return (
    <div className={`glitch text-xl uppercase font-semibold ${className}`}>
      {lines.map((line, index) => (
        <div key={index} className="line">
          {line}
        </div>
      ))}
    </div>
  );
};

export default GlitchText;
