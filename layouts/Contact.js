import SocialLinks from "components/Contact/SocialLinks";
import React from "react";

function Contact() {
  return (
    <div>
      <div className="container-2">
        <div className="mb-[150px]">
          <SocialLinks />
        </div>

        <img
          src="images/utherverse-group-image.png"
          className="w-[80%] mx-auto mb-[-14%] z-[-2] relative"
          alt=""
        />
        <div className="rounded-[36px] bg-purple py-14 px-14 flex items-center justify-between z-10 relative">
          <div>
            <h1 className="text-white text-4xl font-bold mb-3">
              For business or press Inquiries
            </h1>
            <p className="text-2xl font-light text-white">
              We’re aiming to respond to you within 5 business days!
            </p>
          </div>
          <div>
            <button className="text-2xl text-white font-bold bg-darkPurple rounded-2xl uppercase py-5 px-16 shadow-[0px_0_20px_#00000067]">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
