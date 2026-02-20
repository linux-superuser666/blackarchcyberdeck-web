import React from "react";

const leftCommands = [
  "sudo su",
  "pacman -S quickshell",
  "pacman -S hyprland",
  "pacman -S rofi",
  "pacman -S kitty",
];

const rightCommands = [
  "git clone https://github.com/linux-superuser666/BlackArchCyberpunk2077.git",
];

const Cyberware = () => {
  return (
    <div className="select-none grid gap-1 font-nerdfonts grid-cols-[1fr_2fr] z-40 h-full w-full text-[9px] font-medium  relative">
      <div className="border p-2 border-redx/50 flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <p className="text-redx">
            [mrnngstr666@BlackArch] <span> - </span>[~]
          </p>
          <p>
            <span className="text-redx"> &gt;&gt;&gt; </span>
            <span className="text-redx">sudo su</span>
          </p>
          <p className="text-redx">[sudo] password for mrnngstr666:</p>
        </div>
        {leftCommands.slice(1).map((cmd, index) => (
          <div key={index} className="flex flex-col gap-1">
            <p className="text-orangex">
              [root@BlackArch] <span> - </span> [/home/mrnngstr666]
            </p>
            <p className="text-redx">
              <span className="text-orangex"> &gt;&gt;&gt; </span>
              {cmd}
            </p>
          </div>
        ))}
      </div>
      <div className="border p-2 border-redx/50 flex flex-col gap-3">
        {rightCommands.map((cmd, index) => (
          <div key={index} className="flex flex-col gap-1">
            <p className="text-redx">
              [mrnngstr666@BlackArch] <span> - </span>[~]
            </p>
            <p className="text-redx">
              <span className="text-redx"> &gt;&gt;&gt; </span>
              {cmd}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cyberware;
