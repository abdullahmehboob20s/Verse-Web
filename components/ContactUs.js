import React from "react";

function ContactUs({ showImageBanner = true }) {
  return (
    <div>
      {showImageBanner ? (
        <img
          src="images/utherverse-group-image.png"
          className="w-[80%] mx-auto mb-[-14%] z-[-2] relative"
          alt=""
        />
      ) : null}
      <div className="rounded-xl xl:rounded-[36px] bg-purple py-6 sm:py-8 xl:py-14 px-6 md:px-14 flex flex-col md:flex-row items-center justify-between z-10 relative md:space-x-10 space-y-6 md:space-y-0 text-center md:text-left">
        <div className="flex-1">
          <h1 className="text-white text-lg sm:text-xl lg:text-2xl xl:text-4xl font-bold mb-2 xl:mb-3">
            For business or press Inquiries
          </h1>
          <p className="text-sm sm:text-base lg:text-lg xl:text-2xl font-light text-white">
            We’re aiming to respond to you within 5 business days!
          </p>
        </div>
        <div>
          <button className="text-xs md:text-base xl:text-2xl text-white font-bold bg-darkPurple rounded-md md:rounded-xl xl:rounded-2xl uppercase py-3 xl:py-5 px-8 md:px-10 xl:px-16 shadow-[0px_0_20px_#00000067]">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
