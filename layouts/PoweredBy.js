import Link from "next/link";
import React from "react";
import { FaPlay } from "react-icons/fa";

function PoweredBy() {
  return (
    <div>
      <div className="container-2 flex flex-col xl:flex-row justify-between items-center space-y-5 mt-14 lg:mt-0">
        <div className="flex flex-col xl:flex-row items-center xl:space-x-16">
          <h1 className="text-sm xl:text-lg text-white font-medium uppercase">
            Powered By
          </h1>
          <div className="flex items-center sm:m-0 flex-wrap sm:space-x-12 justify-center sm:justify-start">
            <img
              src="images/unity-img.svg"
              className="flex transition-all m-4 duration-[.2s] hover:invert-[1] invert-[.2] w-[4rem] sm:w-[5rem] xl:w-[6rem]"
              alt=""
            />
            <img
              src="images/nexus.svg"
              className="flex transition-all m-4 duration-[.2s] hover:invert-[1] invert-[.2] w-[3.8rem] sm:w-[4.8rem] xl:w-[5.8rem] pt-3"
              alt=""
            />
            <img
              src="images/oculus-logo.svg"
              className="flex transition-all m-4 duration-[.2s] hover:invert-[0] invert-[.8] w-[5.4rem] sm:w-[6.4rem] xl:w-[7.6rem] pt-1"
              alt=""
            />
            <img
              src="images/blockchain-icon.svg"
              className="flex transition-all m-4 duration-[.2s] hover:invert-[1] invert-[.2] w-[3.2rem] sm:w-[4.2rem] xl:w-[5.2rem]"
              alt=""
            />
          </div>
        </div>

        <div>
          <Link href="/">
            <a className="flex items-center space-x-4 border-1px rounded-6px xl:rounded-10px py-[5px] px-[18px] group hover:bg-white transition-all duration-.3s">
              <span className="font-medium text-white text-xs xl:text-base group-hover:text-black transition-all duration-.3s">
                <span className="text-white group-hover:text-black transition-all duration-.3s font-bold">
                  TOUR
                </span>{" "}
                UTHERVERSE
              </span>
              <FaPlay className="text-[.5rem] xl:text-[.7rem] group-hover:fill-black transition-all duration-.3s" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PoweredBy;
