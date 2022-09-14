import React from "react";

function EmptyBar({ bg = "bg-purple", size = "py-5", className, children }) {
  return (
    <div className={`${size} ${bg} ${className}`}>
      {children ? children : null}
    </div>
  );
}

export default EmptyBar;
