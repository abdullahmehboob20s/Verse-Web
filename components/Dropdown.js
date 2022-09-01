import Link from "next/link";
import React from "react";
import { FaCaretDown } from "react-icons/fa";

function Dropdown({ title, links }) {
  return (
    <div className="relative">
      <button className="py-[2px] px-[20px] font-medium rounded-[3px] transition-all duration-[.3s] hover:bg-purple-gradient flex items-center space-x-2 relative">
        <span>{title}</span> <FaCaretDown className="text-base text-white" />
      </button>

      {/* <div className="absolute top-[150%] border-[1px] border-purple py-2 bg-black left-0 w-48 z-30 rounded-lg space-y-1">
        {links?.map((item, index) => {
          <Link href={item.link}>
            <a className="px-[20px] font-medium w-full block text-left hover:bg-[#7e20fc63] transition-all duration-[.2s]">
              {item.title}
            </a>
          </Link>;
        })}
      </div> */}
    </div>
  );
}

export default Dropdown;
