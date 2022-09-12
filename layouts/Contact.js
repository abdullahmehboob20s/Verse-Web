import SocialLinks from "components/Contact/SocialLinks";
import ContactUs from "components/ContactUs";
import React from "react";

function Contact() {
  return (
    <div>
      <div className="container-2">
        <div className="mb-20 md:mb-[150px]">
          <SocialLinks />
        </div>

        <ContactUs />
      </div>
    </div>
  );
}

export default Contact;
