import React, { memo } from "react";

const Tooltip = memo((props) => {
  return (
    <div className="group relative">
      <div className="text-xs pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-[110%] whitespace-nowrap rounded bg-darkGray border-1px border-purple px-4 py-2 text-white opacity-0 transition-all duration-[.3s] before:absolute before:left-1/2 before:top-full before:-translate-x-1/2 before:border-[6px] before:border-transparent before:border-t-purple before:content-[''] group-hover:opacity-100 z-50">
        {props.text}
      </div>

      {props.children}
    </div>
  );
});

Tooltip.displayName = "Tooltip";

export default Tooltip;
