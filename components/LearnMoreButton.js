import React from "react";

function LearnMoreButton({ title }) {
  return (
    <button className="text-base text-white border-[1px] border-lightBlue rounded-[5px] py-[10px] px-10 hover:bg-purple-gradient uppercase font-medium">
      {title}
    </button>
  );
}

export default LearnMoreButton;
