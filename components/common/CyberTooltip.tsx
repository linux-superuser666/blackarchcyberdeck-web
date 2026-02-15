import React from "react";

interface CyberTooltipProps {
  lines: string[];
  className?: string;
  colorClass?: string; // contoh: text-yellowx
  accentClass?: string; // contoh: bg-yellowx / border-yellowx
}

const CyberTooltip: React.FC<CyberTooltipProps> = ({
  lines,
  className = "",
  colorClass = "text-yellowx",
  accentClass = "bg-yellowx",
}) => {
  return (
    <div className={`absolute size-fit flex-col gap-1 ${className}`}>
      <div className="flex flex-col gap-px">
        {/* TEXT SECTION */}
        <div className="flex flex-row gap-2 size-fit pr-4">
          {/* Accent Box */}
          <div
            className={`size-4 ${accentClass} [clip-path:polygon(0_0,_100%_0%,_100%_100%,_35%_100%,_0%_75%)]`}
          ></div>

          {/* Text Content */}
          <div
            className={`${colorClass} font-orbitron text-[8px] uppercase flex flex-col gap-px pr-8`}
          >
            {lines.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
        </div>

        {/* Line + Corner Shape */}
        <div className="flex">
          <div className="w-1"></div>

          <div
            className={`border-t ${colorClass.replace(
              "text",
              "border"
            )} flex w-full`}
          ></div>

          <div className="size-10 relative">
            <div
              className={`absolute inset-0 size-full z-10 ${accentClass} [clip-path:polygon(5%_0,_100%_96%,_100%_100%,_0_0)]`}
            ></div>

            <div
              className={`absolute bottom-0 z-20 right-0 size-3 ${accentClass} p-[2px]`}
            >
              <div className="size-full border-[2px] border-black/80"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CyberTooltip;
