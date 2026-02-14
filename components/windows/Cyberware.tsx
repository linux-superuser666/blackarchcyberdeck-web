import React from "react";

const Cyberware = () => {
  return (
    <div className="grid gap-1 grid-cols-[1fr_2fr] z-40 h-full w-full ">
      <div className=" border text-[10px] p-1 text-redx font-semibold flex border-redx/50 h-full tracking-wide w-full flex-col gap-2">
        <p>
          mrnngstr666
          <span className="text-yellowx">@</span>
          <span className="text-orangex">BlackArch:</span>
          <span className="text-greyx"> Sudo Pacman -S quickshell</span>
        </p>
        <p>
          mrnngstr666
          <span className="text-yellowx">@</span>
          <span className="text-orangex">BlackArch:</span>
          <span className="text-greyx"> Sudo Pacman -S hyprland</span>
        </p>
        <p>
          mrnngstr666
          <span className="text-yellowx">@</span>
          <span className="text-orangex">BlackArch:</span>
          <span className="text-greyx"> Sudo Pacman -S rofi</span>
        </p>
        <p>
          mrnngstr666
          <span className="text-yellowx">@</span>
          <span className="text-orangex">BlackArch:</span>
          <span className="text-greyx"> Sudo Pacman -S kitty</span>
        </p>
      </div>
      <div className=" border text-[10px] p-1 text-redx font-semibold flex border-redx/50 h-full tracking-wide w-full flex-col gap-1">
        <p>
          mrnngstr666
          <span className="text-yellowx">@</span>
          <span className="text-orangex">BlackArch:</span>
          <span className="text-greyx">
            {" "}
            git clone
            https://github.com/linux-superuser666/BlackArchCyberpunk2077.git
          </span>
        </p>
      </div>
    </div>
  );
};

export default Cyberware;
