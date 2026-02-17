import React from "react";
import Image from "next/image";

interface DocRequirementProps {
  title: string;
  desc: string;
  command: string;
  label?: string;
  className?: string;
}

const DocRequirement: React.FC<DocRequirementProps> = ({
  title,
  desc,
  command,
  label = "Command :",
  className = "",
}) => {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {/* TITLE */}
      <div className="flex">
        <Image
          src="/icons/package.png"
          alt=""
          width={20}
          height={10}
          className="object-contain"
        />
        <div className="flex-col flex justify-between py-1">
          <div className="text-sm uppercase font-bold text-redx">{title}</div>
          <div className="text-[10px] uppercase font-semibold text-redx">
            {desc}
          </div>
        </div>
      </div>

      {/* LABEL */}
      <div className="text-redx font-medium">{label}</div>

      {/* COMMAND BOX */}
      <div className="w-full border border-redx/30 px-2 py-2 flex items-center gap-2">
        <span className="text-redx">$</span>
        <span className="text-redx/80 font-semibold">{command}</span>
      </div>
    </div>
  );
};

export default DocRequirement;
