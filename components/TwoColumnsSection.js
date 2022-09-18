import React from "react";

function TwoColumnsSection({
  reverse = false,
  children,
  img,
  ImgComponent,
  imgHeight = "h-auto lg:h-[430px] xl:h-530px",
  alignTextRightInReverse = true,
  imgBelowInMobile = false,
  imgAboveInMobile = false,
  imgClassName,
}) {
  return (
    <div className="grid w-[90%] mx-auto lg:w-full grid-cols-1 lg:grid-cols-2 items-center gap-6 sm:gap-8 md:gap-50px">
      {reverse ? (
        <>
          <div
            className={`w-full max-w-[38rem] lg:max-w-[42rem] lg:pl-20 xl:pl-150px ${
              alignTextRightInReverse ? "ml-auto" : ""
            } ${alignTextRightInReverse ? "text-right" : "text-left"} `}
          >
            {children}
          </div>
          <div
            className={`${imgHeight} ${
              imgAboveInMobile
                ? "row-start-1 row-end-2 lg:row-start-auto lg:row-end-auto"
                : ""
            } relative rounded-3xl lg:rounded-none lg:rounded-l-[50px] overflow-hidden`}
          >
            {ImgComponent ? (
              <ImgComponent />
            ) : img ? (
              <img
                src={img}
                className={`w-full h-full object-cover ${imgClassName}`}
                alt=""
              />
            ) : null}
          </div>
        </>
      ) : (
        <>
          <div
            className={`${imgHeight} ${
              imgBelowInMobile
                ? "row-start-2 row-end-3 lg:row-start-auto lg:row-end-auto"
                : ""
            } relative rounded-3xl lg:rounded-none lg:rounded-r-[50px] overflow-hidden`}
          >
            {ImgComponent ? (
              <ImgComponent />
            ) : img ? (
              <img
                src={img}
                className={`w-full h-full object-cover ${imgClassName}`}
                alt=""
              />
            ) : null}
          </div>
          <div className="w-full max-w-[38rem] lg:max-w-[42rem] lg:pr-20 xl:pr-150px">
            {children}
          </div>
        </>
      )}
    </div>
  );
}

export default TwoColumnsSection;
