import React, { useRef, useState } from "react";

const MIN = 0;
const MAX = 100;
const STEP = 1;
const KNOB_WIDTH = 16;

const LevelSlider = () => {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [value, setValue] = useState(50);
  const [dragging, setDragging] = useState(false);

  const percent = ((value - MIN) / (MAX - MIN)) * 100;

  const updateFromClientX = (clientX: number) => {
    if (!trackRef.current) return;

    const rect = trackRef.current.getBoundingClientRect();
    let x = clientX - rect.left;
    x = Math.max(0, Math.min(x, rect.width));
    const newValue = Math.round((x / rect.width) * (MAX - MIN) + MIN);
    setValue(newValue);
  };

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setDragging(true);
    updateFromClientX(e.clientX);
  };

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!dragging) return;
    updateFromClientX(e.clientX);
  };

  const onMouseUp = () => setDragging(false);

  const dec = () => setValue((v) => Math.max(MIN, v - STEP));
  const inc = () => setValue((v) => Math.min(MAX, v + STEP));

  return (
    <div
      className="w-32 h-3 z-[90]
      [clip-path:polygon(0_0,_100%_0,_100%_75%,_96%_100%,_0_100%)]
      bg-redx/30 p-px relative flex items-center justify-center"
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
    >
      <div
        className="size-full
        [clip-path:polygon(0_0,_100%_0,_100%_75%,_96%_100%,_0_100%)]
        bg-black flex flex-row gap-1 items-center justify-between p-px"
      >
        {/* Arrow Left */}
        <div
          onClick={dec}
          className="w-1.5 h-2 bg-greyx/70 cursor-pointer
          [clip-path:polygon(100%_0,_100%_16%,_79%_26%,_78%_71%,_100%_84%,_100%_100%,_0_48%)] p-px"
        >
          <div className="size-full bg-darkbluex [clip-path:polygon(100%_0,_100%_16%,_79%_26%,_78%_71%,_100%_84%,_100%_100%,_0_48%)]" />
        </div>

        {/* Track */}
        <div ref={trackRef} className="relative z-[99] w-full h-full">
          <div className="absolute w-full flex items-center h-full">
            <div className="w-full h-px bg-redx/30" />
          </div>

          {/* Knob */}
          <div
            onMouseDown={onMouseDown}
            style={{
              left: `${percent}%`,
              transform: `translateX(-${
                percent === 100 ? 100 : percent === 0 ? 0 : 50
              }%)`,
            }}
            className="bg-redx/50 w-4 absolute top-0 h-2.5
  [clip-path:polygon(100%_0,_100%_67%,_72%_100%,_0_100%,_0_0)]
  cursor-pointer flex pt-px items-center text-greyx justify-center text-[7px]"
          >
            {value}
          </div>
        </div>

        {/* Arrow Right */}
        <div
          onClick={inc}
          className="w-1.5 h-2 bg-greyx/70 cursor-pointer
          [clip-path:polygon(0_0,_0_16%,_21%_26%,_22%_71%,_0_84%,_0_100%,_100%_48%)] p-px"
        >
          <div className="size-full bg-darkbluex [clip-path:polygon(0_0,_0_16%,_21%_26%,_22%_71%,_0_84%,_0_100%,_100%_48%)]" />
        </div>
      </div>
    </div>
  );
};

export default LevelSlider;
