"use client";

import React, { useState, useEffect } from "react";

const BINARY_PATTERNS_1 = ["1001", "0101", "0011", "1100"];
const BINARY_PATTERNS_2 = ["1100", "0010", "1010", "0111"];

const Framex = () => {
  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(0);

  // Update binary pertama
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex1((i) => (i + 1) % BINARY_PATTERNS_1.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Update binary kedua
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex2((i) => (i + 1) % BINARY_PATTERNS_2.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-[15px_1fr_22px] absolute z-20 inset-0 w-full h-full grid-rows-1 gap-0 justify-center text-[5px] items-end">
      <div className="items-start justify-between text-start w-full h-full flex">
        <div className="flex h-full py-20 justify-between flex-col">
          <div>1</div>
          <div>1</div>
          <div>1</div>
        </div>
        <div className="flex h-full justify-center bg-scanner flex-col w-1"></div>
        <div></div>
      </div>

      {/* frame bottom */}
      <div className="text-start w-full h-7"></div>

      {/* frame right */}
      <div className="items-start justify-between text-start w-full h-full flex">
        <div className="flex h-full py-16 justify-between flex-col">
          <div className="flex flex-col gap-4 top-0 relative">
            {/* Binary pertama */}
            <div
              className="text-[6px] relative leading-1.5 text-redx font-medium
              before:content-['-'] before:animate-blink-slow before:-top-4 before:text-sm before:absolute before:text-yellowx"
            >
              {BINARY_PATTERNS_1[index1]} <br />
              {BINARY_PATTERNS_1[(index1 + 1) % BINARY_PATTERNS_1.length]}{" "}
              <br />
              {BINARY_PATTERNS_1[(index1 + 2) % BINARY_PATTERNS_1.length]}{" "}
              <br />
              {BINARY_PATTERNS_1[(index1 + 3) % BINARY_PATTERNS_1.length]}
            </div>

            {/* Binary kedua */}
            <div
              className="text-[6px] relative leading-1.5 text-redx font-medium
              before:content-['-'] before:animate-blink-slow before:-top-4 before:text-sm before:absolute before:text-yellowx"
            >
              {BINARY_PATTERNS_2[index2]} <br />
              {BINARY_PATTERNS_2[(index2 + 1) % BINARY_PATTERNS_2.length]}{" "}
              <br />
              {BINARY_PATTERNS_2[(index2 + 2) % BINARY_PATTERNS_2.length]}{" "}
              <br />
              {BINARY_PATTERNS_2[(index2 + 3) % BINARY_PATTERNS_2.length]}
            </div>

            <div
              className="text-[8px] relative leading-2 text-redx font-medium
              before:content-['-'] before:animate-blink-slow before:-top-4 before:text-sm before:absolute before:text-yellowx"
            ></div>
          </div>
          <div>1</div>
        </div>

        <div className="flex h-full justify-center bg-scanner flex-col w-1"></div>
        <div className="flex h-full justify-center flex-col">3</div>
      </div>
    </div>
  );
};

export default Framex;
