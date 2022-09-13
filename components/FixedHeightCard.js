import React from "react";

function FixedHeightCard({
  height = "max-h-[150px]",
  children,
  title,
  bg = "bg-light-purple-to-dark",
}) {
  return (
    <div className={`rounded-3xl py-12 px-12 ${bg}`}>
      {title ? (
        <h1 className="fs-20px font-semibold text-white mb-8">{title}</h1>
      ) : null}

      <div className={`${height} overflow-y-auto pr-5 pb-2 scrollbar-blue`}>
        {children}
      </div>
    </div>
  );
}

export default FixedHeightCard;
