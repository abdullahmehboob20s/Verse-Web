import Link from "next/link";
import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import OutsideClickDetector from "hooks/OutsideClickDetector";

function Dropdown({ title, links }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const menuRef = OutsideClickDetector(() => setIsDropdownOpen(false));

  return (
    <div ref={menuRef} className="relative">
      <button
        onClick={() => setIsDropdownOpen((val) => !val)}
        className="py-1 lg:py-[2px] px-3 xl:px-[20px] font-medium rounded-[3px] transition-all duration-[.3s] hover:bg-purple-gradient flex items-center space-x-1 xl:space-x-2 text-sm lg:text-xs xl:text-base 2xl:text-xl border-1 border-purple lg:border-none justify-between lg:justify-start w-full lg:w-auto"
      >
        <span>{title}</span>{" "}
        <FaCaretDown
          className={`text-base text-white transition-all duration-[.2s] ${
            isDropdownOpen ? "rotate-[180deg]" : "rotate-0"
          } `}
        />
      </button>

      <div
        className={`absolute top-[150%] left-0 border-1 border-purple py-2 bg-black w-48 z-30 rounded-lg space-y-1 transition-all duration-[.2s] ${
          isDropdownOpen
            ? "pointer-events-auto opacity-100 translate-y-0"
            : "pointer-events-none opacity-0 translate-y-3"
        }`}
      >
        {links.map((item, index) => {
          return (
            <Link key={index} href={item.link}>
              <a className="px-[20px] font-medium w-full block text-left hover:bg-[#7e20fc63] transition-all duration-[.1s] text-sm lg:text-xs xl:text-base 2xl:text-xl">
                {item.title}
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Dropdown;
