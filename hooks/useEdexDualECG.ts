import { useEffect, useRef } from "react";

export const useEdexDualECG = (
  canvasId: string,
  upTraffic: number,
  downTraffic: number
) => {
  const smoothUp = useRef(0);
  const smoothDown = useRef(0);

  useEffect(() => {
    const canvas = document.getElementById(canvasId) as HTMLCanvasElement;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const w = canvas.width;
    const h = canvas.height;
    const mid = h / 2;

    let x = 0;
    const speed = 1.2;

    const draw = () => {
      // smooth traffic (low-pass)
      smoothUp.current += (upTraffic - smoothUp.current) * 0.06;
      smoothDown.current += (downTraffic - smoothDown.current) * 0.06;

      const upAmp = Math.min(smoothUp.current * 2, h / 3);
      const downAmp = Math.min(smoothDown.current * 2, h / 3);

      // clear current column only (no flicker)
      ctx.clearRect(x, 0, 2, h);

      x += speed;
      if (x >= w) x = 0;

      const t = Date.now() * 0.01;

      // === UP waveform (WHITE) ===
      const upY =
        mid -
        6 -
        (Math.sin(t) * 0.6 + Math.sin(t * 0.5) * 0.4) * upAmp;

      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(x, mid - 6);
      ctx.lineTo(x, upY);
      ctx.stroke();

      // === DOWN waveform (YELLOW) ===
      const downY =
        mid +
        6 +
        (Math.sin(t * 0.9) * 0.6 + Math.sin(t * 0.4) * 0.4) * downAmp;

      ctx.strokeStyle = "#ffd400";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(x, mid + 6);
      ctx.lineTo(x, downY);
      ctx.stroke();
    };

    const id = setInterval(draw, 16); // ~60fps

    return () => {
      clearInterval(id);
      window.removeEventListener("resize", resize);
    };
  }, [canvasId, upTraffic, downTraffic]);
};
