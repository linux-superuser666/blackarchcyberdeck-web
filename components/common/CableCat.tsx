import React from "react";

interface CableCatProps {
  width?: number | string;
  height?: number | string;
  radius?: number;
  className?: string;
}

const CableCat: React.FC<CableCatProps> = ({
  width = 50,
  height = 190,
  radius = 16,
  className = "",
}) => {
  return (
    <div
      className={`border-r border-b border-redx/30 ${className}`}
      style={{
        width: typeof width === "number" ? `${width}px` : width,
        height: typeof height === "number" ? `${height}px` : height,
        borderBottomRightRadius: radius,
      }}
    >
      <div />
    </div>
  );
};

export default CableCat;
