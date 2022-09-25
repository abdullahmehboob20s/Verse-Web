import React from "react";

const Row = ({
  title,
  subtitle,
  colOneClassName,
  colTwoClassName,
  fontSize = "text-xs sm:text-sm lg:text-base xl:text-lg",
}) => {
  return (
    <tr>
      <td
        className={`${fontSize} text-white font-black py-3 sm:py-4 px-4 sm:px-6 ${colOneClassName}`}
      >
        {title}
      </td>
      <td
        className={`${fontSize} text-white font-normal py-3 sm:py-4 px-4 sm:px-6 ${colTwoClassName}`}
      >
        {subtitle}
      </td>
    </tr>
  );
};
export default Row;
