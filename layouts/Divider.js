import Link from "next/link";
import React from "react";

function Divider({ img, link = "/", showArrow = false }) {
  return (
    <div className="flex items-center justify-center relative space-x-2 my-36">
      <div className="h-[1px] w-full bg-purple z-[-1]"></div>
      <Link href={link}>
        <a className="block min-w-[101px] w-[101px]">
          <img src={img} className="w-full" alt="" />
        </a>
      </Link>
      <div className="h-[1px] w-full bg-purple z-[-1]"></div>

      {showArrow ? (
        <img
          src="images/side-icon-right.svg"
          className="absolute top-[50%] right-0 translate-y-[-50%] bg-black"
          alt=""
        />
      ) : null}
    </div>
  );
}

export default Divider;
