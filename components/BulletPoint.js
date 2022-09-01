import React from "react";

function BulletPoint({ title }) {
  return (
    <div className="flex items-start space-x-3">
      <img src="images/bullet.png" className="w-6 block" alt="" />
      <h6 className="text-base text-white font-medium mt-[.02em]">{title}</h6>
    </div>
  );
}

export default BulletPoint;
