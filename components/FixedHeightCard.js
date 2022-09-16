import React from "react";

function FixedHeightCard({
  height = "max-h-[150px]",
  children,
  title,
  bg = "bg-light-purple-to-dark",
  TitleComponent,
}) {
  return (
    <div
      className={`rounded-2xl lg:rounded-3xl py-8 xl:py-12 px-8 lg:px-12 ${bg}`}
    >
      {TitleComponent ? (
        <TitleComponent />
      ) : title ? (
        <h1 className="fs-20px font-semibold text-white mb-4 md:mb-8">
          {title}
        </h1>
      ) : null}

      <div className={`${height} overflow-y-auto pr-5 pb-2 scrollbar-blue`}>
        {children}
      </div>
    </div>
  );
}

export default FixedHeightCard;
