"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type BinLogoProps = {
  iconSrc: string;
  alt?: string;
  speed?: number;
};

const BINARY_PATTERNS = ["1011", "1011", "0101", "1101"];

const BinLogo = ({ iconSrc, alt = "icon", speed = 3000 }: BinLogoProps) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % BINARY_PATTERNS.length);
    }, speed);

    return () => clearInterval(interval);
  }, [speed]);

  return (
    <div className="flex flex-col items-center gap-1">
      <div className="text-[3px] font-medium tracking-[1px] text-redx leading-none">
        {BINARY_PATTERNS.map((_, i) => (
          <div key={i}>
            {BINARY_PATTERNS[(index + i) % BINARY_PATTERNS.length]}
          </div>
        ))}
      </div>

      {/* Icon */}
      <Image
        src={iconSrc}
        alt={alt}
        width={10}
        height={10}
        className="object-contain"
      />
    </div>
  );
};

export default BinLogo;
