import React from "react";

const Variant1 = ({ title, subtitle }) => {
  return (
    <>
      <div className="mb-6 sm:mb-10">
        <div className="container-2">
          <h1 className="fs-56px text-white font-bold text-center">{title}</h1>
        </div>
      </div>

      <div className="bg-purple py-3">
        <div className="container">
          <p className="fs-16px text-white text-center">{subtitle}</p>
        </div>
      </div>
    </>
  );
};

const Variant2 = ({ title, subtitle }) => {
  return (
    <>
      <div className="mb-3 sm:mb-5">
        <div className="container-2">
          <h1 className="fs-56px text-white font-bold text-center">{title}</h1>
        </div>
      </div>

      <div className="container">
        <p className="fs-16px text-white text-center">{subtitle}</p>
      </div>
    </>
  );
};

function TitleWithBar({ title, subtitle, variant = 1 }) {
  return (
    <div>
      {variant === 1 ? (
        <Variant1 title={title} subtitle={subtitle} />
      ) : (
        <Variant2 title={title} subtitle={subtitle} />
      )}
    </div>
  );
}

export default TitleWithBar;
