import React from "react";

function TwoColumnsSection({
  reverse = false,
  children,
  img,
  ImgComponent,
  imgHeight = "h-530px",
}) {
  return (
    <div className="w-full grid grid-cols-2 items-center gap-50px">
      {reverse ? (
        <>
          <div className="w-full max-w-[34rem] ml-auto text-right">
            {children}
          </div>
          <div className={`${imgHeight} rounded-l-[50px] overflow-hidden`}>
            {ImgComponent ? (
              <ImgComponent />
            ) : (
              <img src={img} className="w-full h-full object-cover" alt="" />
            )}
          </div>
        </>
      ) : (
        <>
          <div className={`${imgHeight} rounded-r-[50px] overflow-hidden`}>
            {ImgComponent ? (
              <ImgComponent />
            ) : (
              <img src={img} className="w-full h-full object-cover" alt="" />
            )}
          </div>
          <div className="w-full max-w-[34rem]">{children}</div>
        </>
      )}
    </div>
  );
}

export default TwoColumnsSection;