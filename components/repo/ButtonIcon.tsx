import React from "react";

interface ButtonIconProps {
  icon: React.ReactNode;
  size?: "sm" | "md" | "lg";
  border?: boolean;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const sizeVariant = {
  sm: "text-[8px]",
  md: "text-[12px]",
  lg: "text-[16px]",
};

const ButtonIcon: React.FC<ButtonIconProps> = ({
  icon,
  size = "sm",
  border = true,
  className = "",
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`
        size-fit
        p-[5px_6px_3px_4px]
        rounded-sm
        flex items-center justify-center
        font-nerdfonts
        ${sizeVariant[size]}
        ${border ? "border border-greyx/20" : ""}
        ${className}
      `}
    >
      {icon}
    </div>
  );
};

export default ButtonIcon;
