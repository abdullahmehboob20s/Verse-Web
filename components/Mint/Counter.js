import React from "react";

function Counter() {
  return (
    <div className="flex space-x-2 fs-24px">
      <button className="fs-inherit font-bold bg-black-to-gray flex items-center justify-center w-10 h-10 rounded-md">
        -
      </button>
      <input
        type="number"
        className="fs-20px min-w-[2rem] w-full flex-1 bg-purple rounded-md text-center hide-btns "
        id="mint-number"
        value="1"
        disabled=""
      />
      <button className="fs-inherit font-bold bg-black-to-gray flex items-center justify-center w-10 h-10 rounded-md">
        +
      </button>
    </div>
  );
}

export default Counter;
