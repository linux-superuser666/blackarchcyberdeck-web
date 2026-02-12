import React from "react";

type ImageTypeProps = {
  textSize?: string;
  textColor?: string;
};

const ImageType = ({
  textSize = "text-[4px]",
  textColor = "text-redx",
}: ImageTypeProps) => {
  return (
    <div
      className={`flex flex-col leading-none uppercase font-bold ${textSize} ${textColor}`}
    >
      <div>image name: blackarch small</div>
      <div>image type: kernel isolated image</div>
      <div>iccxs compressed</div>
      <div>load address: 00000011265</div>
    </div>
  );
};

export default ImageType;
