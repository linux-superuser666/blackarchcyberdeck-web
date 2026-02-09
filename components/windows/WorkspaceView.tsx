"use client";
import { useEffect, useState } from "react";

type Props = {
  active: string;
  views: Record<string, JSX.Element>;
};

const WorkspaceView = ({ active, views }: Props) => {
  const [current, setCurrent] = useState(active);
  const [prev, setPrev] = useState<string | null>(null);

  useEffect(() => {
    if (active !== current) {
      setPrev(current);
      setCurrent(active);
    }
  }, [active]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* PREVIOUS (slide out) */}
      {prev && (
        <div className="absolute inset-0 animate-slide-out">{views[prev]}</div>
      )}

      {/* CURRENT (slide in) */}
      <div className="absolute inset-0 animate-slide-in">{views[current]}</div>
    </div>
  );
};

export default WorkspaceView;
