import ContactUs from "components/ContactUs";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout({
  children,
  navbarClassName,
  className,
  showContactUs = true,
  showContactUsImageBanner = false,
}) {
  return (
    <div className={className}>
      <div className="relative z-50">
        <div className={navbarClassName}>
          <Navbar />
        </div>
        <main>{children}</main>

        {showContactUs ? (
          <div className="mb-20 lg:mb-100px">
            <div className="container-2">
              <ContactUs showImageBanner={showContactUsImageBanner} />
            </div>
          </div>
        ) : null}

        <Footer />
      </div>
    </div>
  );
}

export default Layout;
