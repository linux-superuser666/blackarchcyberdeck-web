import React from "react";

type TitlePanelOrbitProps = {
  leftText: string;
  rightText: string;
};

const TitlePanelOrbit = ({ leftText, rightText }: TitlePanelOrbitProps) => {
  return (
    <div className="flex w-full font-orbitron uppercase text-redx font-bold tracking-widest text-[4px] justify-between flex-row">
      <div>{leftText}</div>
      <div>{rightText}</div>
    </div>
  );
};

export default TitlePanelOrbit;
