import React from "react";

interface DocsBtnProps {
  text?: string;
  active?: boolean;
  onClick?: () => void;
}

const DocsBtn: React.FC<DocsBtnProps> = ({
  text = "User Guide",
  active = false,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="bg-redx/30 h-5 w-52 p-px cursor-pointer transition-colors"
      style={{
        clipPath: "polygon(0% 0%, 100% 0, 100% 80%, 97% 100%, 0% 100%)",
      }}
    >
      <div
        className={`size-full flex items-center px-1 transition-colors ${
          active ? "bg-black/70" : "bg-black"
        }`}
        style={{
          clipPath: "polygon(0% 0%, 100% 0, 100% 80%, 97% 100%, 0% 100%)",
        }}
      >
        <div className="w-full text-[12px] text-redx font-semibold">{text}</div>
      </div>
    </div>
  );
};

export default DocsBtn;
