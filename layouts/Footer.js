import FooterBottom from "components/Footer/FooterBottom";
import FooterLinks from "components/Footer/FooterLinks";
import SubscribeForm from "components/SubscribeForm";
import React from "react";

function Footer() {
  return (
    <footer className="bg-footer">
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

        <FooterBottom />
      </div>
    </footer>
  );
}

export default Footer;
