import React from "react";

function TwoColumnsSection({
  reverse = false,
  children,
  img,
  ImgComponent,
  imgHeight = "h-auto lg:h-[430px] xl:h-530px",
  alignTextRightInReverse = true,
}) {
  return (
    <div className="grid w-[90%] mx-auto lg:w-full grid-cols-1 lg:grid-cols-2 items-center gap-6 sm:gap-8 md:gap-50px">
      {reverse ? (
        <>
          <div
            className={`w-full max-w-[38rem] lg:max-w-[42rem] lg:pl-20 xl:pl-150px ml-auto ${
              alignTextRightInReverse ? "text-right" : "text-left"
            } `}
          >
            {children}
          </div>
          <div
            className={`${imgHeight} relative lg:rounded-l-[50px] overflow-hidden`}
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
            className={`${imgHeight} relative lg:rounded-r-[50px] overflow-hidden`}
          >
            {ImgComponent ? (
              <ImgComponent />
            ) : img ? (
              <img src={img} className="w-full h-full object-cover" alt="" />
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
