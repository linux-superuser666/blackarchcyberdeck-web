import React from "react";

const CoverGridLine = () => {
  const cols = 9;
  const rows = 5;
  const totalCells = cols * rows;

  return (
    <div
      className="
      absolute inset-0 z-10 p-1
      flex flex-wrap gap-2 justify-center items-center
    "
    >
      {Array.from({ length: totalCells }).map((_, i) => (
        <div key={i} className="w-[3px] h-[1px] bg-redx/10"></div>
      ))}
    </div>
  );
};

export default CoverGridLine;
