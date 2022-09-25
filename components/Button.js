import React from "react";

function Button({
  children,
  className,
  style,
  type = "button",
  border = "border-2 border-purple",
}) {
  return (
    <button
      type={type}
      className={`px-5 md:px-6 lg:px-8 py-2 md:py-3 lg:py-4 ${border} rounded-md cursor-pointer ${className}`}
      style={style}
    >
      {children}
    </button>
  );
}

export default Button;
