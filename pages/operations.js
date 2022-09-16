import ContactUs from "components/ContactUs";
import FixedHeightCard from "components/FixedHeightCard";
import ResponsibilityCard from "components/ResponsibilityCard";
import TitleWithBar from "components/TitleWithBar";
import TwoColumnsSection from "components/TwoColumnsSection";
import Footer from "layouts/Footer";
import Navbar from "layouts/Navbar";
import Head from "next/head";
import React from "react";

const Title = ({ img, title }) => {
  return (
    <div className="flex items-center space-x-4">
      <img src={img} className="block w-7" alt="" />
      <h1 className="fs-20px font-semibold text-white">{title}</h1>
    </div>
  );
};

function Responsibility() {
  return (
    <div>
      <Head>
        <title>Utherverse - Build Your Metaverse</title>
      </Head>

      <div className="mb-20 lg:mb-16">
        <Navbar />
      </div>

      <div>
        <TitleWithBar title="OPERATIONS" subtitle="OPERATIONS" />
      </div>

      <div className="py-20 lg:py-100px relative">
        <div className="mb-20 lg:mb-100px">
          <TwoColumnsSection
            img="images/responsibilty-img-1.png"
            imgHeight="h-full"
          >
            <div className="lg:py-50px">
              <h4 className="fs-24px text-white font-semibold mb-4">
                Utherverse operates under the guiding principle that the
                development of our network and its tools must be purpose driven.
                The best way to know what will be needed by a live user-base is
                to operate a live system throughout the development process.
              </h4>

              <p className="fs-16px text-white font-light">
                In keeping with that principle, we have provided users with two
                generations of virtual world software, and will soon begin beta
                testing the third-generation of software. The knowledge and
                understanding gained in the 17 years of operating history are
                priceless, and they have led to the development of the new
                Virtual World Web and Aeon™ browser system that are many years
                ahead of any potential competitors. Married with aggressive IP
                development and protection practices, those gains have been
                locked in for the benefit of Utherverse.
              </p>
            </div>
          </TwoColumnsSection>
        </div>

        <TwoColumnsSection
          imgHeight="h-full"
          reverse={true}
          alignTextRightInReverse={false}
        >
          <div className="lg:py-50px">
            <h4 className="fs-24px text-white font-semibold mb-4">
              The Primary Software and IP development Unit is Utherverse
              Digital, Inc., a Canadian corporation with its main office in
              Vancouver.
            </h4>

            <p className="fs-16px text-white font-light">
              In keeping with that principle, we have provided users with two
              generations of virtual world software, and will soon begin beta
              testing the third-generation of software. The knowledge and
              understanding gained in the 17 years of operating history are
              priceless, and they have led to the development of the new Virtual
              World Web and Aeon™ browser system that are many years ahead of
              any potential competitors. Married with aggressive IP development
              and protection practices, those gains have been locked in for the
              benefit of Utherverse.
            </p>
          </div>
        </TwoColumnsSection>

        <img
          src="images/operation-bg.png"
          className="absolute top-0 left-0 w-full h-full -z-50 object-cover"
          alt=""
        />
      </div>

      <div className="mb-12 lg:mb-100px">
        <div className="container-2">
          <ContactUs showImageBanner={false} />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Responsibility;
