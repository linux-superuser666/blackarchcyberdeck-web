"use client";

import { useEffect, useState } from "react";

interface Props {
  onFinish: () => void;
}

export default function LoadingScreen({ onFinish }: Props) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onFinish, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-xl mb-4">Loading...</h1>
      <div className="w-64 h-2 bg-gray-700 rounded">
        <div
          className="h-full bg-red-500 transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="mt-2">{progress}%</p>
    </div>
  );
}
