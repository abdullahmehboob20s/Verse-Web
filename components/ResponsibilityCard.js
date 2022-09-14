import React from "react";

function ResponsibilityCard({ title, desc, img }) {
  return (
    <div className="bg-[#0d0e12ba] py-10 pt-0 px-8 rounded-2xl">
      <img
        src={img}
        className="mb-12 mx-auto w-20 h-20 rounded-full -mt-10"
        alt=""
      />

      <h1 className="fs-28px text-center text-white font-bold leading-[1.2] mb-8">
        {title}
      </h1>

      <p className="fs-16px text-white text-center leading-[1.4]">{desc}</p>
    </div>
  );
}

export default ResponsibilityCard;
