import React from "react";

function PatentCard({ index, img }) {
  return (
    <div className="space-y-2">
      <p className="fs-24px text-white font-medium text-center">{index}</p>
      <img src={img} className="h-[120px]" alt="" />
    </div>
  );
}

export default PatentCard;
