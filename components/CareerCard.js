import OutsideClickDetector from "hooks/OutsideClickDetector";
import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

function CareerCard({ jobTitle, position, salary, children }) {
  const [isAccordionOpen, setIsAccordion] = useState(false);
  const accordionMenuRef = useRef(null);
  const accordionRef = OutsideClickDetector(() => setIsAccordion(false));

  useEffect(() => {
    if (isAccordionOpen) {
      accordionMenuRef.current.style.height =
        accordionMenuRef.current.scrollHeight + "px";
    } else {
      accordionMenuRef.current.style.height = 0;
    }
  }, [isAccordionOpen]);

  return (
    <div
      className={`bg-purple-gradient-2 rounded-xl job-card transition-all duration-300`}
      ref={accordionRef}
    >
      <button
        onClick={() => setIsAccordion((val) => !val)}
        className="flex items-center justify-between w-full py-6 px-10"
      >
        <div>
          <h1 className="fs-32px text-white text-left font-medium mb-4">
            {jobTitle}
          </h1>
          <div className="space-y-1 text-left">
            <p className="fs-16px font-medium">Poistion: {position}</p>
            <p className="fs-16px font-medium">Salary: {salary}</p>
          </div>
        </div>
        <span className="flex">
          <IoIosArrowDown
            className={`text-white text-xl lg:text-2xl transition-all duration-[.3s] ${
              isAccordionOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </span>
      </button>

      <div
        className="h-0 overflow-hidden transition-all duration-[.3s]"
        ref={accordionMenuRef}
      >
        <div className="py-6 px-10">{children}</div>
      </div>
    </div>
  );
}

export default CareerCard;
