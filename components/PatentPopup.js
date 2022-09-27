import OutsideClickDetector from "hooks/OutsideClickDetector";
import React, { useEffect } from "react";
import { IoClose } from "react-icons/io5";

function PatentPopup({ children, img, show, setShow }) {
  const popupRef = OutsideClickDetector(() => setShow(false));

  useEffect(() => {
    if (show) {
      document.body.style["height"] = "100vh";
      document.body.style["overflow-y"] = "hidden";
    } else {
      document.body.style["height"] = "auto";
      document.body.style["overflow-y"] = "auto";
    }
  }, [show]);

  return (
    <>
      <div className={`black-screen ${show ? "show" : ""}`}></div>
      <div
        ref={popupRef}
        className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[20000] space-y-6 lg:space-y-0 lg:space-x-10 sm:pt-[auto] py-8 lg:py-10 px-6 sm:px-10 flex justify-between flex-col lg:flex-row w-[90%] lg:w-[80%] h-[80%] bg-black border-2 border-purple rounded-xl transition-all duration-300 overflow-y-auto overflow-x-hidden lg:overflow-x-visible lg:overflow-y-visible ${
          show
            ? "scale-100 opacity-100 pointer-events-auto"
            : "scale-75 opacity-0 pointer-events-none"
        }`}
      >
        {show && (
          <>
            <div className="flex-1 scrollbar-blue lg:overflow-y-auto lg:pr-10">
              {children}
            </div>
            <img src={img} className="w-full lg:w-auto lg:h-[100%]" alt="" />
          </>
        )}

        <button
          className="bg-black absolute top-[-.6rem] sm:top-0 lg:top-[-.6em] right-3 sm:right-6 lg:right-[-.8em] border-2 w-[1.6em] h-[1.6em] rounded-full flex  justify-center items-center text-sm lg:text-xl"
          onClick={() => setShow(false)}
        >
          <IoClose />
        </button>
      </div>
    </>
  );
}

export default PatentPopup;
