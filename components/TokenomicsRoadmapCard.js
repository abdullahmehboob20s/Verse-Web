import React from "react";
import FixedHeightCard from "./FixedHeightCard";

function TokenomicsRoadmapCard({
  title,
  children,
  bg,
  height,
  reverse = false,
}) {
  return (
    <div className="flex items-center md:space-x-2">
      {reverse ? (
        <>
          <img
            src="images/V-check-icon-blue.svg"
            className="hidden md:block w-6 lg:w-10 -rotate-90 relative left-[-.7%]"
            alt=""
          />
          <FixedHeightCard bg={bg} title={title} height={height}>
            {children}
          </FixedHeightCard>
        </>
      ) : (
        <>
          <FixedHeightCard bg={bg} title={title} height={height}>
            {children}
          </FixedHeightCard>
          <img
            src="images/V-check-icon-blue.svg"
            className="hidden md:block w-6 lg:w-10 rotate-90 relative right-[-.7%]"
            alt=""
          />
        </>
      )}
    </div>
  );
}

export default TokenomicsRoadmapCard;
