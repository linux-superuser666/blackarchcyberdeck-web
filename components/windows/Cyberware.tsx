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
    <div className="grid gap-1 grid-cols-[1fr_2fr] z-40 h-full w-full text-[10px] font-semibold tracking-wide">
      {/* LEFT PANEL */}
      <div className="border p-2 border-redx/50 flex flex-col gap-3">
        {/* First command: sudo su */}
        <div className="flex flex-col gap-1">
          <p className="text-redx/70">[mrnngstr666@BlackArch]-[~]</p>
          <p>
            <span className="text-redx/70"> &gt;&gt;&gt; </span>
            <span className="text-redx">sudo su</span>
          </p>

          {/* Password Prompt */}
          <p className="text-yellowx">[sudo] password for mrnngstr666:</p>
        </div>

        {/* Root Commands */}
        {leftCommands.slice(1).map((cmd, index) => (
          <div key={index} className="flex flex-col gap-1">
            <p className="text-orangex">[BlackArch /home/mrnngstr666]#</p>
            <p className="text-redx">{cmd}</p>
          </div>
        ))}
      </div>

      {/* RIGHT PANEL */}
      <div className="border p-2 border-redx/50 flex flex-col gap-3">
        {rightCommands.map((cmd, index) => (
          <div key={index} className="flex flex-col gap-1">
            <p className="text-orangex">[BlackArch /home/mrnngstr666]#</p>
            <p className="text-redx">{cmd}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cyberware;
