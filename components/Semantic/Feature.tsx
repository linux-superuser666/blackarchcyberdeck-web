import React from "react";
import Image from "next/image";

const images = [
  {
    src: "https://cdn.jsdelivr.net/gh/linux-superuser666/linux-superuser666@main/img/blackarch-logo.svg",
    alt: "BlackArch",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/linux-superuser666/linux-superuser666@main/img/wayland-logo.svg",
    alt: "wayland",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/linux-superuser666/linux-superuser666@main/img/hyprland-logo.svg",
    alt: "hyprland",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/linux-superuser666/linux-superuser666@main/img/quickshell-logo.svg",
    alt: "quickshell",
  },
];

const Feature = () => {
  return (
    <div className="flex flex-col justify-center items-center text-redx font-medium gap-2">
      <div>Crafting With Passion In</div>

      <div className="flex flex-row gap-3">
        {images.map((item, index) => (
          <Image
            key={index}
            src={item.src}
            alt={item.alt}
            width={100}
            height={40}
            className="object-contain"
          />
        ))}
      </div>
    </div>
  );
};

export default Feature;
