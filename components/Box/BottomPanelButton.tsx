import Image from "next/image";

type BottomPanelButtonProps = {
  icon: string;
  label: string;
  iconSize?: number; // px
  onClick?: () => void;
};

const BottomPanelButton = ({
  icon,
  label,
  iconSize = 10,
  onClick,
}: BottomPanelButtonProps) => {
  return (
    <div
      onClick={onClick}
      className="flex text-[8px] text-greyx uppercase tracking-wide font-semibold flex-row items-center gap-1 cursor-pointer"
    >
      <Image
        src={icon}
        alt={label}
        width={iconSize}
        height={iconSize}
        className="object-contain"
      />
      <div>{label}</div>
    </div>
  );
};

export default BottomPanelButton;
