import React, { useRef, useState } from "react";
import RoadmapProgressCard from "./RoadmapProgressCard";

function RoadmapCard({ reverse = false, question, progress }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const unRef = useRef(null);

  const toggler = () => {
    if (menuRef.current.clientHeight === 0) {
      menuRef.current.style.height = menuRef.current.scrollHeight + "px";
      unRef.current.style.width = "0px";
      setIsOpen(true);
    } else {
      menuRef.current.style.height = 0;
      unRef.current.style.width = "1.24em";
      setIsOpen(false);
    }
  };

  return (
    <div className="grid grid-cols-2 gap-28 items-start">
      <div
        className="transition-all duration-[.3s] h-[0] overflow-hidden"
        ref={menuRef}
      >
        <div className="space-y-6">
          {progress?.map((card, index) => (
            <RoadmapProgressCard data={card} key={index} reverse={reverse} />
          ))}
        </div>
      </div>
      <div
        className={`flex items-center ${
          reverse
            ? "col-start-1 col-end-2 row-start-1 justify-end"
            : "justify-start"
        }`}
      >
        <button
          className={`text-xl text-white font-normal flex items-center space-x-4 transition-all duration-[.3s] ${
            isOpen ? "mt-6" : "mt-0"
          }`}
          onClick={() => toggler()}
        >
          {reverse ? null : (
            <img src="images/side-icon-right.svg" className="w-[1rem]" alt="" />
          )}
          <span>
            Click to{" "}
            <span
              ref={unRef}
              className="transition-all duration-[.3s] overflow-hidden w-[1.24em] inline-flex items-center justify-center"
            >
              un
            </span>
            fold {question}
          </span>
          {reverse ? (
            <img
              src="images/side-icon-right.svg"
              className="w-[1rem] rotate-[180deg]"
              alt=""
            />
          ) : null}
        </button>
      </div>
    </div>
  );
}

export default RoadmapCard;
