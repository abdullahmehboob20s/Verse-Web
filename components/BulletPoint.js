import React from "react";

function BulletPoint({
  title,
  Bullet,
  pointClassName,
  wrapperClassName,
  alignment = "items-start",
  spacing = "space-x-3",
}) {
  return (
    <div className={`flex ${alignment} ${spacing} ${wrapperClassName}`}>
      {Bullet ? (
        <Bullet />
      ) : (
        <img src="images/bullet.png" className="w-4 sm:w-6 block" alt="" />
      )}
      <h6
        className={`fs-16px text-white font-medium ${
          Bullet ? pointClassName : "mt-[.02em]"
        }`}
      >
        {title}
      </h6>
    </div>
  );
}

export default BulletPoint;
