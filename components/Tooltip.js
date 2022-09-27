import React, { memo } from "react";

const Tooltip = memo((props) => {
  return (
    <div className="group relative">
      <span className="text-sm pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-[110%] whitespace-nowrap rounded bg-purple-gradient-2 px-2 py-1 text-white opacity-0 transition-all duration-[.3s] before:absolute before:left-1/2 before:top-full before:-translate-x-1/2 before:border-4 before:border-transparent before:border-t-purple before:content-[''] group-hover:opacity-100 z-50">
        {props.text}
      </span>

      {props.children}
    </div>
  );
});

Tooltip.displayName = "Tooltip";

export default Tooltip;
