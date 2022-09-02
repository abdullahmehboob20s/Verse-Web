import React from "react";

function LearnMoreButton({ title, weight = "font-medium", onClick }) {
  return (
    <button
      onClick={onClick}
      className={`text-xs xl:text-base text-white border-[1px] border-lightBlue rounded-[5px] py-2 xl:py-[10px] px-6 xl:px-10 hover:bg-purple-gradient uppercase ${weight}`}
    >
      {title}
    </button>
  );
}

export default LearnMoreButton;
