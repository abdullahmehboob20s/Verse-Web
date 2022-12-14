import React from "react";
import BulletPoint from "./BulletPoint";

function VisionCard({ title, img, desc, points }) {
  return (
    <div className="rounded-2xl xl:rounded-3xl bg-[#0d0e12ba] py-8 pt-0 flex flex-col">
      <img
        src={img}
        alt=""
        className="mx-auto mb-6 sm:mb-8 w-16 xl:w-20 h-16 xl:h-20 rounded-full -mt-10"
      />

      <div className="px-8 xl:px-12 mb-10 lg:mb-0 lg:h-[16em] xl:h-[20em]">
        <h1 className="text-center font-bold text-white fs-28px mb-4">
          {title}
        </h1>

        <p className="fs-16px font-medium text-purple text-center">{desc}</p>
      </div>

      <div className="space-y-2 px-8">
        {points.map((point, index) => (
          <BulletPoint key={index} title={point} />
        ))}
      </div>
    </div>
  );
}

export default VisionCard;
