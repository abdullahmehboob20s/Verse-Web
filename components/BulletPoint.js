import React from "react";

function BulletPoint({
  title,
  Bullet,
  pointClassName,
  wrapperClassName,
  alignment = "items-start",
  spacing = "space-x-3",
  reverse = false,
  textClassName = "fs-16px text-white font-medium",
}) {
  return (
    <div
      className={`flex ${
        reverse ? "justify-end" : "justify-start"
      } ${alignment} ${spacing} ${wrapperClassName}`}
    >
      {reverse ? (
        <h6
          className={`${textClassName} text-right ${
            Bullet ? pointClassName : "mt-[.02em]"
          }`}
        >
          {title}
        </h6>
      ) : null}
      {Bullet ? (
        <Bullet />
      ) : (
        <img src="images/bullet.png" className="w-4 sm:w-6 block" alt="" />
      )}
      {reverse ? null : (
        <h6
          className={`${textClassName} text-left ${
            Bullet ? pointClassName : "mt-[.02em]"
          }`}
        >
          {title}
        </h6>
      )}
    </div>
  );
}

export default BulletPoint;
