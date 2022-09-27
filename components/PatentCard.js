import React from "react";
import Tooltip from "./Tooltip";

function PatentCard({ index, img }) {
  return (
    <div className="space-y-2">
      <p className="fs-24px text-white font-medium text-center">{index}</p>
      <Tooltip text="my name is abdullah mehboob">
        <img src={img} className="h-[120px] cursor-pointer" alt="" />
      </Tooltip>
    </div>
  );
}

export default PatentCard;
