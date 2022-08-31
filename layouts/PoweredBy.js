import Link from "next/link";
import React from "react";
import { FaPlay } from "react-icons/fa";

function PoweredBy() {
  return (
    <div>
      <div className="container-2 flex justify-between items-center">
        <div className="flex items-center space-x-16">
          <h1 className="text-lg text-white font-medium uppercase">
            Powered By
          </h1>
          <div className="flex items-center space-x-12">
            <img
              src="images/unity-img.svg"
              className="flex transition-all duration-[.2s] hover:invert-[1] invert-[.2] w-[6rem]"
              alt=""
            />
            <img
              src="images/nexus.svg"
              className="flex transition-all duration-[.2s] hover:invert-[1] invert-[.2] w-[5.8rem] mt-3"
              alt=""
            />
            <img
              src="images/oculus-logo.svg"
              className="flex transition-all duration-[.2s] hover:invert-[0] invert-[.8] w-[7.6rem] mt-1"
              alt=""
            />
            <img
              src="images/blockchain-icon.svg"
              className="flex transition-all duration-[.2s] hover:invert-[1] invert-[.2] w-[5.2rem]"
              alt=""
            />
          </div>
        </div>

        <div>
          <Link href="/">
            <a className="flex items-center space-x-4 border-[1px] rounded-[10px] py-[5px] px-[18px] group hover:bg-white transition-all duration-[.3s]">
              <span className="font-medium text-white text-[15px] group-hover:text-black transition-all duration-[.3s]">
                <span className="text-white group-hover:text-black transition-all duration-[.3s] font-bold">
                  TOUR
                </span>{" "}
                UTHERVERSE
              </span>
              <FaPlay className=" text-[.7rem] group-hover:fill-black transition-all duration-[.3s]" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PoweredBy;
