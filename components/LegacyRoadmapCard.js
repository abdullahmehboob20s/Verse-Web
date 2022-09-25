import useMediaQuery from "hooks/useMediaQuery";
import React from "react";
import BulletPoint from "./BulletPoint";

function LegacyRoadmapCard({ children, title, reverse = false }) {
  const isBellow768px = useMediaQuery("(max-width : 768px)");

  return (
    <div className="grid md:grid-cols-2 gap-5 md:gap-20 items-center">
      {!reverse ? (
        <>
          <div className="bg-darkGray py-4 px-6 rounded-md">{children}</div>
          <div className="row-start-1 row-end-2 md:row-start-auto md:row-end-auto">
            <BulletPoint
              title={title}
              textClassName="fs-20px text-white font-normal"
              bulletClassname="rotate-180"
            />
          </div>
        </>
      ) : (
        <>
          <div className="flex items-center justify-start md:justify-end">
            <BulletPoint
              title={title}
              textClassName="fs-20px text-white font-normal"
              bulletClassname="rotate-180 md:rotate-0"
              reverse={isBellow768px ? false : true}
            />
          </div>
          <div className="bg-darkGray py-4 px-6 rounded-md">{children}</div>
        </>
      )}
    </div>
  );
}

export default LegacyRoadmapCard;
