import React from "react";

function RoadmapProgressCard({ data, reverse }) {
  return (
    <div
      className={`bg-darkGray py-3 px-4 xl:px-5 rounded-xl flex items-center ${
        reverse ? "flex-row" : "flex-row md:flex-row-reverse"
      }`}
    >
      <div
        className={`h-[40px] min-w-[40px] md:h-[50px] md:min-w-[50px] xl:h-[60px] xl:min-w-[60px] rounded-md md:rounded-xl bg-darkGray2 flex items-center justify-center ${
          reverse ? "mr-4 md:mr-6" : "mr-4 md:ml-6"
        }`}
      >
        <img src={`images/${data.icon}`} className="w-1/2 lg:w-[70%]" alt="" />
      </div>
      <p
        className={`text-xs lg:text-sm xl:text-base font-medium text-white ${
          reverse ? "text-left" : "text-left md:text-right"
        }`}
      >
        {data.title}
      </p>
    </div>
  );
}

export default RoadmapProgressCard;
