import React from "react";

function RoadmapProgressCard({ data, reverse }) {
  return (
    <div
      className={`bg-darkGray py-3 px-5 rounded-xl flex items-center ${
        reverse ? "flex-row" : "flex-row-reverse"
      }`}
    >
      <div
        className={`h-[60px] min-w-[60px] rounded-xl bg-darkGray2 flex items-center justify-center ${
          reverse ? "mr-6" : "ml-6"
        }`}
      >
        <img src={`images/${data.icon}`} className="w-[70%]" alt="" />
      </div>
      <p
        className={`text-base font-medium text-white ${
          reverse ? "text-left" : "text-right"
        }`}
      >
        {data.title}
      </p>
    </div>
  );
}

export default RoadmapProgressCard;
