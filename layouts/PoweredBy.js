import OutsideClickDetector from "hooks/OutsideClickDetector";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

function PoweredBy() {
  const [popup, setPopup] = useState(false);
  const videRefWrapper = OutsideClickDetector(() => setPopup(false));
  const vodeoRef = useRef(null);

  useEffect(() => {
    if (popup) {
      vodeoRef.current.play();
    } else {
      vodeoRef.current.pause();
      vodeoRef.current.currentTime = 0;
    }
  }, [popup]);

  return (
    <div>
      <div className="container-2 flex flex-col xl:flex-row justify-between items-center space-y-3 mt-14 lg:mt-0">
        <div className="flex flex-col xl:flex-row items-center xl:space-x-12">
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
          <button
            onClick={() => setPopup((val) => !val)}
            className="flex items-center space-x-4 border-1px rounded-6px xl:rounded-10px py-[5px] px-[18px] group hover:bg-white transition-all duration-.3s"
          >
            <span className="font-medium text-white text-xs xl:text-base group-hover:text-black transition-all duration-.3s">
              <span className="text-white group-hover:text-black transition-all duration-.3s font-bold">
                TOUR
              </span>{" "}
              UTHERVERSE
            </span>
            <FaPlay className="text-[.5rem] xl:text-[.7rem] group-hover:fill-black transition-all duration-.3s" />
          </button>
        </div>
      </div>

      <div
        ref={videRefWrapper}
        className={`overflow-visible fixed top-1/2 left-1/2 -translate-x-1/2 w-[90%] max-w-[46rem] border-2 border-purple rounded-md z-[120] transition-all duration-300 ${
          popup
            ? "-translate-y-1/2 opacity-100 pointer-events-auto"
            : "-translate-y-[60%] pointer-events-none opacity-0"
        }`}
      >
        <video controls ref={vodeoRef} className="rounded-md">
          {popup ? (
            <source
              src="images/tour-utheverse.mp4"
              className="w-full"
              type="video/mp4"
            />
          ) : null}
          Your browser does not support the video tag.
        </video>

        <button
          className="bg-black absolute top-[-.6em] right-[-.8em] border-2 w-[1.6em] h-[1.6em] rounded-full flex  justify-center items-center text-sm lg:text-xl"
          onClick={() => setPopup(false)}
        >
          <IoClose />
        </button>
      </div>

      <div className={`black-screen ${popup ? "show" : null}`}></div>
    </div>
  );
}

export default PoweredBy;
