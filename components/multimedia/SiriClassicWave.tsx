"use client";

import { useEffect, useRef } from "react";
import SiriWave from "siriwave";

interface SiriClassicWaveProps {
  className?: string;
  color?: string;
}

export default function SiriClassicWave({
  className,
  color = "#f75049",
}: SiriClassicWaveProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const siriRef = useRef<SiriWave | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const element = containerRef.current;

    const initWave = () => {
      const width = element.offsetWidth;
      const height = element.offsetHeight;

      siriRef.current?.dispose();

      siriRef.current = new SiriWave({
        container: element,
        width,
        height,
        style: "ios", // classic
        color,
        speed: 0.2,
        amplitude: 1,
        autostart: true,
      });
    };

    initWave();

    // Auto resize kalau ukuran berubah
    const resizeObserver = new ResizeObserver(() => {
      initWave();
    });

    resizeObserver.observe(element);

    return () => {
      resizeObserver.disconnect();
      siriRef.current?.dispose();
    };
  }, [color]);

  return <div ref={containerRef} className={className} />;
}
