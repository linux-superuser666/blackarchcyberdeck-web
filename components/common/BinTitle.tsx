import React from "react";

interface BinTitleProps {
  text: string;
  className?: string;
}

const BinTitle: React.FC<BinTitleProps> = ({ text, className = "" }) => {
  return (
    <div
      className={`text-[5px] text-redx/80 uppercase font-orbitron ${className}`}
    >
      {text}
    </div>
  );
};

export default BinTitle;
