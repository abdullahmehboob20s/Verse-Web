import React from "react";

function FooterBottom() {
  return (
    <>
      <div className="mb-14">
        <p className="text-center text-xs text-white opacity-[.6] mb-6 font-light">
          **The information presented on this web page and throughout this web
          site is currently a work in progress. We make no assurances that it is
          error free, and there may be oversights while we build and proof the
          materials. This website may contain forward looking statements, which
          statements may not be relied on in any manner as to any matter
          pertaining to the Utherverse, its creators or any related persons or
          companies. For additional information please see our Privacy Policy
          and Terms and Conditions.
        </p>
        <p className="text-center font-light text-xs xl:text-base text-white">
          © 2022 Utherverse.io. All Rights Reserved.
        </p>
      </div>

      <div className="flex flex-col xs:flex-row items-center space-y-3 xs:space-y-0 xs:space-x-2 justify-center">
        <button className="footer-info-btn">Personal Data Policy</button>
        <button className="footer-info-btn">Cookie Policy</button>
        <button className="footer-info-btn">Terms and Conditions</button>
      </div>
    </>
  );
}

export default FooterBottom;
