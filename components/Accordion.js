import OutsideClickDetector from "hooks/OutsideClickDetector";
import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

function Accordion({ title, children }) {
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
      className="bg-purple rounded sm:rounded-xl lg:rounded-2xl"
      ref={accordionRef}
    >
      <button
        className="py-3 sm:py-4 xl:py-6 px-5 sm:px-8 xl:px-12 flex items-center justify-between w-full space-x-4"
        onClick={() => setIsAccordion((val) => !val)}
      >
        <span className="text-left block fs-24px text-white font-semibold">
          {title}
        </span>
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
        <div className="px-5 sm:px-8 xl:px-12 py-3 sm:py-4 xl:py-6 pt-0">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Accordion;
