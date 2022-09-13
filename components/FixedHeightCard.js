import React from "react";

function FixedHeightCard({ height = "max-h-[150px]", children }) {
  return (
    <div className="bg-light-purple-to-dark rounded-3xl py-12 px-12">
      <h1 className="fs-20px font-semibold text-white mb-8">
        Expanding the Value of the Internet
      </h1>

      <div className={`${height} overflow-y-auto pr-5 pb-2 scrollbar-blue`}>
        {children}
      </div>
    </div>
  );
}

export default FixedHeightCard;
