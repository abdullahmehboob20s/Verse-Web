import React, { useEffect, useState } from "react";
import PatentPopup from "./PatentPopup";
import Tooltip from "./Tooltip";

function PatentCard({ index, img, tooltipContent, children }) {
  const [popup, setPopup] = useState(false);

  useEffect(() => {
    if (popup) {
      document.body.style["max-height"] = "100vh";
      document.body.style["overflow-y"] = "hidden";
    } else {
      document.body.style["max-height"] = "auto";
      document.body.style["overflow-y"] = "auto";
    }
  }, [popup]);

  return (
    <div className="">
      <p className="fs-24px text-white font-medium text-center mb-2">{index}</p>

      <div onClick={() => setPopup((val) => !val)}>
        <Tooltip text={tooltipContent}>
          <img
            src={img}
            className="h-[80px] md:h-[100px] xl:h-[120px] cursor-pointer"
            alt=""
          />
        </Tooltip>
      </div>

      <PatentPopup show={popup} setShow={setPopup} img={img}>
        {children}
      </PatentPopup>
    </div>
  );
}

export default PatentCard;
