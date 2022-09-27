import React from "react";

function TotalCost() {
  return (
    <div className="flex items-center bg-black-to-gray fs-14px h-10 px-6 rounded-md">
      <img className="w-4 mr-3" src="images/ether.svg" alt="" />
      <input
        type="text"
        id="total-cost"
        value="0"
        disabled=""
        className="w-full bg-transparent fs-inherit font-medium text-center"
      />
      <span className="fs-inherit font-medium">ETH</span>
    </div>
  );
}

export default TotalCost;
