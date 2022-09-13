import React from "react";

function TitleWithBar({ title, subtitle }) {
  return (
    <div>
      <h1 className="fs-56px text-white font-bold text-center mb-10">
        {title}
      </h1>

      <div className="bg-purple py-3">
        <div className="container">
          <p className="fs-16px text-white text-center">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}

export default TitleWithBar;
