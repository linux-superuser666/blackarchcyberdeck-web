import React from "react";

interface DocsBtnDropProps {
  text?: string;
  open?: boolean;
  active?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  className?: string;
}

const DocsBtnDrop: React.FC<DocsBtnDropProps> = ({
  text = "User Guide",
  open = false,
  active = false,
  onClick,
  className = "",
}) => {
  return (
    <div
      onClick={onClick}
      className={`bg-redx/30 h-5 w-52 p-px cursor-pointer ${className}`}
      style={{
        clipPath: "polygon(0% 0%, 100% 0, 100% 75%, 97% 100%, 0% 100%)",
      }}
    >
      <div
        className={`size-full flex items-center pl-1 pr-3 transition-colors ${
          active ? "bg-black/70" : "bg-black"
        }`}
        style={{
          clipPath: "polygon(0% 0%, 100% 0, 100% 75%, 97% 100%, 0% 100%)",
        }}
      >
        <div
          className={`w-full text-[10px] uppercase tracking-wide font-semibold transition-colors ${
            active ? "text-cyanx/80" : "text-redx"
          }`}
        >
          {text}
        </div>

        <div
          className={`${open ? "bg-greyx/70 " : "bg-redx/50"} h-2 w-3 p-px`}
          style={{
            clipPath:
              "polygon(0 0, 20% 0, 30% 14%, 70% 14%, 80% 0, 100% 0, 50% 100%)",
          }}
        >
          <div
            className={`size-full ${active ? "bg-black/70" : "bg-black/40"}`}
            style={{
              clipPath:
                "polygon(0 0, 12% 0, 22% 18%, 70% 18%, 88% 0, 100% 0, 50% 100%)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default DocsBtnDrop;
