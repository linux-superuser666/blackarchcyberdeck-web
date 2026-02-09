"use client";
import { JSX, useEffect, useState } from "react";
type Props = {
  active: string;
  views: Record<string, JSX.Element>;
};
const ANIM_DURATION = 350;
const WorkspaceSlider = ({ active, views }: Props) => {
  const [current, setCurrent] = useState(active);
  const [prev, setPrev] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  useEffect(() => {
    if (active !== current && !isAnimating) {
      setIsAnimating(true);
      setPrev(current);
      setCurrent(active);
      setTimeout(() => {
        setPrev(null);
        setIsAnimating(false);
      }, ANIM_DURATION);
    }
  }, [active, current, isAnimating]);
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* PREVIOUS (slide out) */}
      {prev && (
        <div
          key={`prev-${prev}`}
          className="absolute inset-0 animate-ws-slide-out"
        >
          {views[prev]}
        </div>
      )}
      <div
        key={`current-${current}`}
        className="absolute inset-0 animate-ws-slide-in"
      >
        {views[current]}
      </div>
    </div>
  );
};
export default WorkspaceSlider;
