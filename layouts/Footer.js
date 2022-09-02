import FooterLinks from "components/Footer/FooterLinks";
import SubscribeForm from "components/SubscribeForm";
import React from "react";

function Footer() {
  return (
    <div className="bg-footer">
      <div className="container-2 pb-20">
        <div className="flex flex-col-reverse lg:flex-row items-center lg:space-x-8 xl:space-x-20 mb-16">
          <SubscribeForm />
          <img
            src="images/logo-secondary.png"
            className="w-44 xl:w-52 mb-6 lg:mb-0"
            alt=""
          />
        </div>

        <FooterLinks />

        <div className="mb-14">
          <p className="text-center text-xs text-white opacity-[.6] mb-6 font-light">
            **The information presented on this web page and throughout this web
            site is currently a work in progress. We make no assurances that it
            is error free, and there may be oversights while we build and proof
            the materials. This website may contain forward looking statements,
            which statements may not be relied on in any manner as to any matter
            pertaining to the Utherverse, its creators or any related persons or
            companies. For additional information please see our Privacy Policy
            and Terms and Conditions.
          </p>
          <p className="text-center font-light text-xs xl:text-base text-white">
            © 2022 Utherverse.io. All Rights Reserved.
          </p>
        </div>

        <div className="flex flex-col xs:flex-row items-center space-y-3 xs:space-y-0 xs:space-x-2 justify-center">
          <button className="py-[0.2rem] xl:py-[0.3rem] px-3 xl:px-4 bg-purple-gradient-2 text-white text-xs font-medium rounded-sm">
            Personal Data Policy
          </button>
          <button className="py-[0.2rem] xl:py-[0.3rem] px-3 xl:px-4 bg-purple-gradient-2 text-white text-xs font-medium rounded-sm">
            Cookie Policy
          </button>
          <button className="py-[0.2rem] xl:py-[0.3rem] px-3 xl:px-4 bg-purple-gradient-2 text-white text-xs font-medium rounded-sm">
            Terms and Conditions
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
