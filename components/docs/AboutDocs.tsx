import React from "react";
import TitleDoc from "../common/TitleDoc";

const AboutDocs = () => {
  return (
    <div
      className="flex w-full flex-col overflow-x-hidden overflow-y-auto radio-list px-4 gap-4"
      style={{ height: "320px" }}
    >
      <TitleDoc text="AboutDocs Content" />
      <div>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem veniam
        ex iure natus nulla nesciunt nisi, non in! Fugiat, incidunt nostrum.
        Cupiditate veritatis animi totam impedit nemo similique error quas
        ducimus eaque ea doloribus ex, dicta praesentium? Qui molestiae quasi
        saepe quis aperiam libero eos fugit at voluptatem vel? Incidunt aliquid
        laborum numquam sit accusamus est officiis illo assumenda voluptatum
        magnam ad officia minus eum pariatur.
      </div>
    </div>
  );
};

export default AboutDocs;
