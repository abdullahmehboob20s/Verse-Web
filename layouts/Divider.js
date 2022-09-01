import Link from "next/link";
import React from "react";

function Divider({ img, link = "/" }) {
  return (
    <div className="flex items-center justify-center relative space-x-2 my-36">
      <div className="h-[1px] w-full bg-purple z-[-1]"></div>
      <Link href={link}>
        <a className="block min-w-[101px]">
          <img src={img} className="w-full" alt="" />
        </a>
      </Link>
      <div className="h-[1px] w-full bg-purple z-[-1]"></div>
    </div>
  );
}

export default Divider;
