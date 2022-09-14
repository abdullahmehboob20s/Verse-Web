import React from "react";

function TwoColumnsSection({
  reverse = false,
  children,
  img,
  ImgComponent,
  imgHeight = "h-530px",
  alignTextRightInReverse = true,
}) {
  return (
    <div className="w-full grid grid-cols-2 items-center gap-50px">
      {reverse ? (
        <>
          <div
            className={`w-full max-w-[34rem] ml-auto ${
              alignTextRightInReverse ? "text-right" : "text-left"
            } `}
          >
            {children}
          </div>
          <div
            className={`${imgHeight} relative rounded-l-[50px] overflow-hidden`}
          >
            {ImgComponent ? (
              <ImgComponent />
            ) : img ? (
              <img src={img} className="w-full h-full object-cover" alt="" />
            ) : null}
          </div>
        </>
      ) : (
        <>
          <div
            className={`${imgHeight} relative rounded-r-[50px] overflow-hidden`}
          >
            {ImgComponent ? (
              <ImgComponent />
            ) : img ? (
              <img src={img} className="w-full h-full object-cover" alt="" />
            ) : null}
          </div>
          <div className="w-full max-w-[34rem]">{children}</div>
        </>
      )}
    </div>
  );
}

export default TwoColumnsSection;
