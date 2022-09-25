import React from "react";

function VerticalDivider({ spacing = "py-10 lg:py-0 lg:px-14" }) {
  return (
    <div className={`w-full lg:h-full ${spacing}`}>
      <div className="h-[1px] lg:h-full w-full lg:w-[1px] bg-purple-3"></div>
    </div>
  );
}

export default VerticalDivider;
